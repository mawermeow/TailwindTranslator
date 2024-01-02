import {uiState} from "../stores/model";
import {isMobile} from "react-device-detect";
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const enterVR=()=>{
    if(window.hasKrpano){
        window.accessWebVr = async (curScene, curTime)=>{
            window.unloadPlayer();
            window.loadPlayer(true, curScene, curTime);
            await window.delay(500)
            window.frontEnd.uiState.showFrontEnd=false
        }
        window.accessStdVr=async (curScene, curTime)=>{
            window.unloadPlayer();
            window.loadPlayer(false, curScene, curTime);
            await window.delay(500)
            window.frontEnd.uiState.showFrontEnd=true
        }

        const krObj = window.krHelper.krObj

        const hasVR = krObj.get(`scene[get(xml.scene)].full360`)
        const ableVR = krObj.get(`disableCurrentSceneVrConservation`) !== true
        if(hasVR&&ableVR){
            window.accessWebVr(krObj.get('xml.scene'),krObj.get('videoscenestarttime'))
        }else{
            window.accessWebVr(null)
        }
    }
}

export const mouseScroll=async ()=>{
    if(window.krHelper!==null){
        const krObj = window.krHelper.krObj
        const fov = krObj.get("view.fov");
        if(!uiState.intro.visible)return
        krObj.call(`tween(view.fov, ${fov-20}, 0.8);`)
        await delay(800)
        if(!uiState.intro.visible)return
        krObj.call(`tween(view.fov, ${fov}, 0.8);`)
    }
}

export const screenDrag=async ()=>{
    if(window.krHelper!==null){
        const krObj = window.krHelper.krObj
        const hlookat = krObj.get("view.hlookat");

        if(!uiState.intro.visible)return
        krObj.call(`tween(view.hlookat,${hlookat+15}, 0.5);`)
        await delay(500)
        if(!uiState.intro.visible)return
        krObj.call(`tween(view.hlookat,${hlookat-15}, 0.8);`)
        await delay(800)
        if(!uiState.intro.visible)return
        krObj.call(`tween(view.hlookat,${hlookat}, 0.5);`)
    }
}

// 從 getPoint字串 中抓取場景資訊
export const getSceneByPoint=(pointText)=> {
    const match = pointText.match(/goScene:(pano\d+)/);
    return match ? match[1] : '';
}
export const getLookAtStrByPoint = (pointText, duration = 2) => {
    const lookAtRegex = /goLookAt:([^,]+,[^,]+,[^,]+),/;
    const match = pointText.match(lookAtRegex);
    if (match && match[1]) {
        return match[1] + `,${duration}`;
    }
    return '';
};

// 可直接傳入 getPoint字串，會偵測當前場景來決定是否要追加轉換視角的秒數
export const goPoint = (onPointEvent, duration = 2) => {
    const toGoScene = getSceneByPoint(onPointEvent);
    const currentScene = window.frontEnd.eventState.scene;

    if (window.hasKrpano) {
        if (toGoScene === currentScene) {
            const newEventText = getLookAtStrByPoint(onPointEvent,duration);
            if (newEventText) {
                goLookAt(newEventText);
            }
            return { isSameScene: true, scene: currentScene };
        } else {
            goScene(toGoScene);
            const newEventText = getLookAtStrByPoint(onPointEvent,0);
            if (newEventText) {
                goLookAt(newEventText);
            }
            return { isSameScene: false, scene: toGoScene };
        }
    } else {
        window.frontEnd.eventState.scene = toGoScene;
        return { isSameScene: currentScene === toGoScene, scene: toGoScene };
    }
};



// getPoint 相關函數
export const getPoint = ()=> {
    if(window.krHelper?.krObj){
        return `goScene:${window.krHelper.krObj.get('xml.scene')};goLookAt:${window.krHelper.krObj.get('view.vlookat')},${window.krHelper.krObj.get('view.hlookat')},${window.krHelper.krObj.get('view.fov')},1;`
    }
    return ""
}

export const goLookAt=(eventTitle)=>{
    const input = eventTitle.split(',')
    const vLook = input[0]&&input[0]==='null'?null:parseFloat(input[0])
    const hLook = input[1]&&input[1]==='null'?null:parseFloat(input[1])
    const fov = input[2]&&input[2]==='null'?null:parseFloat(input[2])
    const time = input[3]&&input[3]==='null'?null:parseFloat(input[3])

    const currentHLook = parseFloat(window.krHelper.krObj.get('view.hlookat'))
    window.krHelper.goLookAt(vLook,hLook,fov,time)
}

export const goScene=(eventTitle)=>window.krHelper.goScene(eventTitle)

// 比對 getPointText 與一個
export const compareLookAt=(getPointText, vLookAt, hLookAt)=> {
    let parts = getPointText.split(';');
    for (let i = 0; i < parts.length; i++) {
        let keyValue = parts[i].split(':');
        if (keyValue[0] === "goLookAt" && keyValue[1]) {
            let numbers = keyValue[1].split(',');
            if (numbers.length < 2) {
                return false;
            }

            let normedNumber0 = Math.max(-90, Math.min(90, parseFloat(numbers[0])));
            let normedValue1 = Math.max(-90, Math.min(90, vLookAt));

            let normedNumber1 = ((parseFloat(numbers[1]) + 180) % 360) - 180;
            let normedValue2 = ((hLookAt + 180) % 360) - 180;

            let diff1 = Math.abs(normedNumber0 - normedValue1);

            let diff2 = Math.abs(normedNumber1 - normedValue2);
            diff2 = Math.min(diff2, 360 - diff2);

            return Math.sqrt(diff1 * diff1 + diff2 * diff2);
        }
    }
    return false;
}

export const spotEnable=()=>{
    if(window.krHelper){
        window.krHelper.allHotspot(hotspot=>{
            if(hotspot.meowEnable){
                hotspot.meowEnable = false
                hotspot.DATA.enabled = true
            }
        })
    }
}
export const spotDisable=()=>{
    if(window.krHelper && !isMobile){
        // Android 執行這個後會無法復原，所以乾脆不在移動端使用
        window.krHelper.allHotspot(hotspot=>{
            if(hotspot.DATA.enabled && !hotspot.meowEnable){
                hotspot.meowEnable = true
                hotspot.DATA.enabled = false
            }
        })
    }
}


// 尋找最近的點並點擊 --------------------------------

export const enterClosestHotspot=()=>{
    if(!window.krHelper)return
    const closest = findClosestHotspot(window.krHelper.krObj);
    if (closest) {
        window.krHelper.krObj.call(closest.onclick)
    }
}

export const findClosestHotspot = (krpano) => {
    const currentAth = krpano.get('view.hlookat');
    const currentAtv = krpano.get('view.vlookat');

    let closestHotspot = null;
    let minDistance = Number.MAX_VALUE;

    // 遍歷所有熱點
    for (let i = 0; i < krpano.get('hotspot.count'); i++) {
        const hotspot = krpano.get('hotspot[' + i + ']');

        let distance;
        if (hotspot.name.includes('spotpolygon')) {
            // 假設 getPolygonVertices 是一個您定義的函數，用於獲取 spotpolygon 的頂點資料
            const polygonVertices = getPolygonVertices(hotspot);
            const polygonCenter = calculatePolygonCenter(polygonVertices);
            distance = calculateDistance(currentAth, currentAtv, polygonCenter.ath, polygonCenter.atv);
        } else {
            // 對於普通的點熱點
            distance = calculateDistance(currentAth, currentAtv, hotspot.ath, hotspot.atv);
        }

        if (distance < minDistance) {
            minDistance = distance;
            closestHotspot = hotspot;
        }
    }

    return closestHotspot;
};

function getPolygonVertices(hotspot) {
    // 使用 hotspot.point.getArray() 獲取頂點數據
    const verticesArray = hotspot.point.getArray();

    // 轉換數據格式，如果需要的話
    const vertices = verticesArray.map(vertex => ({
        ath: vertex.ath,
        atv: vertex.atv
    }));

    return vertices;
}


function calculatePolygonCenter(polygonVertices) {
    let sumAth = 0, sumAtv = 0;
    polygonVertices.forEach(vertex => {
        sumAth += vertex.ath;
        sumAtv += vertex.atv;
    });
    return {
        ath: sumAth / polygonVertices.length,
        atv: sumAtv / polygonVertices.length
    };
}

function calculateDistance(ath1, atv1, ath2, atv2) {
    // 使用 shortestAngleOffset 函數來計算角度差的最小值
    const dAth = shortestAngleOffset(ath1, ath2);
    const dAtv = shortestAngleOffset(atv1, atv2);
    return Math.sqrt(dAth * dAth + dAtv * dAtv);
}

function shortestAngleOffset(currentAngle, targetAngle) {
    let difference = (targetAngle - currentAngle) % 360;

    if (difference > 180) {
        difference -= 360;
    } else if (difference < -180) {
        difference += 360;
    }
    return difference;
}