/* 團導同步功能使用說明

## App.js & 其他組件 ===============================
    使用 controlled, controller 變數來渲染團導時的頁面狀態。
 - - - - - - - - - - - - - - - - - - - - - - - - -
    const {controlled, controller, beingControlled}=useSnapshot(teamState)
    {controlled && !isController && <div className="fixed inset-0 pointer-events-auto z-[1000]"></div>}
## model.js =======================================
    需要在 uiState 中設置以下參數，供團導同步環景狀態。
 - - - - - - - - - - - - - - - - - - - - - - - - -
    export const uiState = proxy({
        teamEventText:'',
        shouldUpdateTeamVolume:false,
        miniMap:{visible:false,fovX:128.2,fovY:814,dotWidth:7,krpano:{scene:"pano127",hLookAt:"0",fov:"90",vLookAt:"0"}},
    })
## main.js || iframe.html =========================
    在 frontEnd 中的 main.js 中加入以下程式碼，
    它會先判斷要使用的團導版本，然後從相應的伺服器取得資料；
    也可以直接使用團導模板 iframe 完成。
 - - - - - - - - - - - - - - - - - - - - - - - - -
    const urlParams = new URLSearchParams(window.location.search);
    const teamObj={Beta:'log',Live:'classroom'}
    if(urlParams.has("team")){
        const teamText = urlParams.get("team")
        Object.keys(teamObj).forEach(key=>{
            if(teamText.includes(key)){
                window.frontEnd.utils.addScript(`https://${teamObj[key]}.formlisu.com/${teamText.replace('Mini','').slice(8).toLowerCase()}.js`)
                window.hasKrpano = true
                window.teamConfig={
                    firstKrName : 'meow',
                }
            }
        })
    }
## this ==========================================
    若不是使用 frontEndCRA 構建專案，
    需要在這份檔案的最下方加入本 react 專案的 root div id。
- - - - - - - - - - - - - - - - - - - - - - - - -
    teamEvent({rootId})
 =================================================
*/
import {proxy, subscribe} from "valtio";
import {uiState} from "./model";
import {projectFile} from "../utils/path";

const getWindowFunc=(funcName, ...args)=> {
    const func = window[funcName] || (window.top?.window[funcName]);
    if (func) {
        func(...args);
    }
}

const updateKrpanoVolByTeam=()=>{
    if(window.krHelper){
        window.krHelper.allHotspot(el=>{
            const style= el.style
            if(typeof style==='string' && style.includes('RectVideo')){
                if(teamState.mutedVolume){
                    el.backUpVol = el.volume
                    el.volume = 0.1
                    el.onvideoplay=()=>{el.volume = 0.1}
                }else{
                    if(el.backUpVol){
                        el.volume = el.backUpVol
                    }
                }
            }
        })
    }
}

const krActionTail=(el)=>{
    function extractFunctionNames(str) {
        const regex = /(\w+)(?:\(|;|$)/g;
        let matches;
        const result = [];

        while ((matches = regex.exec(str)) !== null) {
            result.push(matches[1]);
        }

        return result;
    }
    if(typeof el.onclick === 'string' && !el.meowClick){
        const actionList = extractFunctionNames(el.onclick)
        let teamNotUse = false
        let isFrontEndEventAction = false

        // 檢查是不是 frontEndEventAction 和 openurl
        actionList.forEach((ele,i)=>{
            const taAction = window.krHelper.krObj.get(`action[${ele}]`)
            if(taAction && taAction.content.includes('frontEndEventAction')){
                isFrontEndEventAction = true
            }
            if(taAction && taAction.content.includes('openurl')){
                teamNotUse = true
            }
        })

        el.meowClick = el.onclick.replace(';','____')

        el.onclick=()=>{
            if(window.teamState.controlled && (teamNotUse || !window.teamState.controller)){
                getWindowFunc('appendBubble','error','請先關閉同步功能後再嘗試')
            }else{
                if(isFrontEndEventAction){
                    window.krHelper.krObj.call(el.meowClick.replace('____',';'))
                }else{
                    window.onEvent(`team-krAction:${el.meowClick}`)
                }
            }
        }
    }
}
const krHotspotEnable=(el)=>{
    if(window.teamState.controlled && !window.teamState.controller){
        if(el.DATA.enabled){
            el.meowEnable = true
            el.DATA.enabled = false
        }
    }else{
        if(el.meowEnable){
            el.DATA.enabled = true
            el.meowEnable = false
        }
    }
}
const resetKrpanoAction=()=>{
    if(!window.krHelper)return
    // window.krHelper.allHotspot(krActionTail)
    // window.krHelper.allLayer(krActionTail)
    // window.krHelper.allHotspot(krHotspotEnable)
    // window.krHelper.allLayer(krHotspotEnable)
}

// 有些不是靠 uiState 控制的狀態，可以透過設置這個額外的 teamEventText 來傳遞本來無法傳遞的 onEvent 命令
// 在事件中加上 team- 即可，再透過偵測 teamEventText 的內容來觸發真正的 onEvent
const teamEvent=(projectName=projectFile,)=>{
    window.frontEnd.eventSubscribe((eventModule, eventTitle, eventScene) => {
        if(typeof eventModule==='string' && eventModule.includes('team-')){
            window.frontEnd.uiState.teamEventText = `${eventModule.replace('team-','')}:${eventTitle}`
        }
        if(eventScene){
            updateKrpanoVolByTeam()
            resetKrpanoAction()
        }
    })
    subscribe(uiState,()=>{

        // 團導 uiState 同步(貓咪)
        if(teamState.controlled && teamState.controller){
            getWindowFunc('teamControl',{uiState,projectName})
        }

        // 團導 uiState 同步(米腸版)
        if(window.event_interface){
            window.event_interface.sendToRemote('uiState',{
                uiState,
            })
        }

        // 團導 team-event 辨識符轉換成一般 onEvent
        if(uiState.teamEventText!==''){
            window.onEvent(uiState.teamEventText)
            uiState.teamEventText = '' // 要在發送出去後才能清空！
        }

        // 每當 uiState 改變，就讓團導介面知道，這是接下來老師標記點(hotspot)要編輯的環景
        if(window.hasKrpano && window.frontEnd?.teamState){
            window.frontEnd.teamState.lastLoadedKrName = projectName
        }else if(window.hasKrpano && window.top?.window?.frontEnd?.teamState){
            window.top.window.frontEnd.teamState.lastLoadedKrName = projectName
        }

        // 需要控制網頁元素音量時調用
        if(teamState.mutedVolume && uiState.shouldUpdateTeamVolume){
            getWindowFunc('updateVol',0.2)
            uiState.shouldUpdateTeamVolume = false
        }
    })

    subscribe(teamState,()=>{
        // 團導 return-user-ui
        if(teamState.shareUiToUser){
            const {userId,type}=teamState.shareUiToUser
            getWindowFunc('returnUserUi',{uiState,projectName,viewerUserId:userId,type})

            teamState.shareUiToUser = null
        }
        updateKrpanoVolByTeam()
        resetKrpanoAction()
    })
}

export const teamState=proxy({
    controlled:window.top?.backEnd?.controlState?.page?.pageIsBeingControlled, // 表示正在被控制中
    controller:window.top?.backEnd?.controlState?.nav?.isKrpanoSyncOpen, // 表示是控制的人
    mutedVolume:false, // 表示團導使用者希望你的專案小聲點
    shareUiToUser:null, // 表示要需和別人分享 krpano 位置
    userName:'', // 使用者登入團導時的命名
    role:'', // 使用者登入團導時的角色
    get isStudent(){return this.role==='student'},
    get beingControlled(){return this.controlled && !this.controller},
})
window.teamState = teamState // 由團導模組更新此資料



// 需填入 ReactRoot 的 id，以通知團導在這裡的 krpano 操控標記點
teamEvent(projectFile)