import {proxy,subscribe} from "valtio";
import "./controller"

export const uiState = proxy({
    showFrontEnd:true, // 是否顯示所有介面；VR模式會改為不顯示介面。
    lang: 'zh', // 語言
    get isZh(){return this.lang==='zh'},
    teamEventText:'', // 接收團導對專案執行的 onEvent 事件
    shouldUpdateTeamVolume:false, // 接收團導對專案的音量控制設定
    mouse:{clientX:0, clientY:0},
   tip:{visible:false},
})

window.frontEnd.uiState = uiState

// 還沒測試過可以改變krpano內部語言的代碼
subscribe(uiState,()=>{
    if(!window.krHelper)return
    document.getElementById("krpanoSWFObject").call(`set(tour_language, ${uiState.lang})`)
    document.getElementById("krpanoSWFObject").call("events.dispatch(changetourlanguage);")
})