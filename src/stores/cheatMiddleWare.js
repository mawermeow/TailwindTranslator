import {getParam, getParams} from "../utils/urlParam";

const cheatObj={

}

const cheatParams=async ()=>{
    await window.delay(100)
    const cheat = getParam('cheat')
    if(cheat){
        window.onEvent(`cheat:${cheat}`)
    }
}

export const cheatEvent=()=>{
    cheatParams()

    window.frontEnd.eventSubscribe((eventModule, eventTitle, eventScene) => {
        if(eventModule==='cheat'){
            eventTitle.split('.').forEach(async (el)=>{
                if(el.includes('-')){
                    await window.delay(10)
                    window.onEvent(el.split('.').join(';').replaceAll('-',':').replaceAll('team:','team-'))
                }else if(el in cheatObj){
                    await cheatObj[el]()
                }
            })
        }
    })
}