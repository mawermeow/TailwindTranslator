// controllerMiddleware.js
// 在 controller.js 中直接引用執行即可

// 調用後可以響應 goScene 與 goLookAt 模組
import {changeSoundTime, pauseSound, playSound} from "./audioState";
import {enterVR, goLookAt, goScene} from "../utils/krpano";

function shortestAngleOffset(currentAngle, updateAngle) {
    // 取兩個角度之間差的最小絕對值
    let difference = (updateAngle - currentAngle) % 360;

    // 如果差值大於180，則可以逆向旋轉
    if (difference > 180) {
        difference -= 360;
    }

    // 如果差值小於-180，則可以正向旋轉
    if (difference < -180) {
        difference += 360;
    }

    return difference;
}

export const krpanoEvent=()=>{
    window.frontEnd.eventSubscribe((eventModule, eventTitle, eventScene) => {
        if(!window.hasKrpano)return

        switch (eventModule) {
            case "goLookAt":
                goLookAt(eventTitle)
                break
            case "goScene":
                goScene(eventTitle)
                break
            case 'vrMode':
                enterVR()
                break
            case "sceneVideo":
                if(eventTitle==="mute"){
                    window.krHelper.allHotspot(el=>{if(el.name.includes("spotvideo")){
                        el.muted = true
                    }})
                }else{
                    window.krHelper.allHotspot(el=>{if(el.name.includes("spotvideo")){
                        el.muted = false
                    }})
                }
                break
            case 'krAction':
                window.krHelper.krObj.call(eventTitle)
                break
        }
    })
}

export const soundEvent=()=>{
    window.frontEnd.eventSubscribe((eventModule, eventTitle, eventScene) => {
        if(eventModule==='playSound'){
            playSound(eventTitle)
        }else if(eventModule==='pauseSound'){
            pauseSound(eventTitle)
        }else if(eventModule==='changeSoundTime'){
            if(eventTitle.includes('-')){
                const [soundName,time] = eventTitle.split('-')
                changeSoundTime(soundName,time)
            }
        }
    })
}

// 調用後可將 event 自動傳送給 GA
export const gaEvent=()=>{
    function gtag (){
        if(window.dataLayer){
            window.dataLayer.push(arguments)
        }
    }

    window.frontEnd.eventSubscribe((eventModule, eventTitle, eventScene) => {
        if(eventModule&& eventTitle){
            const exceptionModuleList=['playSound','pauseSound','goScene','goLookAt']
            const exceptionTitleList=['hide']

            if(!eventModule.includes('team-') && !exceptionModuleList.includes(eventModule) && !exceptionTitleList.includes(eventTitle)){
                gtag('event',eventModule,{'event_label':eventTitle})
                // console.log("send GA", {module: eventModule, title: eventTitle})
            }
        }
        if(eventScene){
            // console.log("send GA", {scene: eventScene})
            gtag('event','goScene',{'event_label':eventScene})
        }
    })
}

// 調用後可將 event 自動傳送給 FBQ
export const fbEvent=()=>{
    if(window.fbq){
        window.frontEnd.eventSubscribe((eventModule, eventTitle, eventScene) => {
            if(eventModule!==''&& eventTitle!==''){
                window.fbq('track', 'AddToCart', {
                    content_name: eventTitle,
                    content_category: eventModule
                });
            }
        })
    }
}

