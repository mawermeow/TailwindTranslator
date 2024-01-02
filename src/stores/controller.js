import {getSheetDataById} from "./data";
import {uiState} from "./model";
import {keydownSetting} from "../utils/keydown";

window.frontEnd.eventSubscribe((eventModule, eventTitle, eventScene) => {
    const moduleList = ['sidebar', 'intro', 'miniMap','audioPlayer','audioMessage'] // 註冊需要控制的模組
    const sheetList = ['videoFrame', 'infoCard', 'infoMenu'] // 註冊需要從 GoogleSheet 取得資料的模組

    if (eventTitle || eventModule) {
        console.log("new event", {module: eventModule, title: eventTitle})

        if ([...moduleList, ...sheetList].includes(eventModule)) {
            if (eventTitle === 'hide') {
                uiState[eventModule].visible = false
            } else if (eventTitle === 'show') {
                uiState[eventModule].visible = true
            } else if (eventTitle === 'toggle') {
                uiState[eventModule].visible = !uiState[eventModule].visible
            }  else if(sheetList.includes(eventModule)){
                const newData = getSheetDataById(eventModule,eventTitle)
                if(newData){
                    uiState[eventModule].data = newData
                    uiState[eventModule].visible = true
                }
            } else {
                console.log(`unhandledEvents: ${eventModule}:${eventTitle}`)
            }
        }
    }
    if (eventScene) {
        console.log("new scene", eventScene)
        uiState.miniMap.krpano.scene = eventScene
    }
})

keydownSetting([],{
    'm':()=> uiState.miniMap.visible = !uiState.miniMap.visible,
    'l':()=> uiState.lang = uiState.lang==='zh'?'en':'zh',
})
