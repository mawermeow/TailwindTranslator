import {getSheet} from "../utils/getSheet";
import {getJson} from "../utils/getJson";

// export const googleSheet = await getSheet(process.env.REACT_APP_GOOGLE_SHEET)
export const googleSheet = await getJson('./website_data.json')

export const getSheetDataById=(module, id)=>{
    return googleSheet[`${module}`].find(el=>el.eventId.toString()===id.toString())
}

// AudioPlayer
export const AUDIO_PLAYER_PLAYLIST={}
export const getSoundSubtitle=(soundName)=>googleSheet.sound.filter(el=>el.soundName===soundName).map(el=>({...el,start:parseFloat(el.start)||0,end:parseFloat(el.end),callback:()=>console.log(el.text)}))
// googleSheet.sound.forEach((el)=> {
//     if(!AUDIO_PLAYER_PLAYLIST[el.soundName]){
//         AUDIO_PLAYER_PLAYLIST[el.soundName] = { src: `./media/audio/${el.soundName}.${el.type}`, loop: false, multiInstance:false,errorCallback:(audio)=>{if(window.teamState.controlled&&isMobile&&audio&&audio.muted){audio.muted=true;audio.play();}}}
//     }
// })
export const getSoundTitle=(soundName)=>googleSheet.sound.find(el=>el.soundName===soundName).title
export const getSoundTitleList=(learnId)=>Object.keys(AUDIO_PLAYER_PLAYLIST).filter(el=>el.includes(learnId)).map(el=>({soundName:el,title:getSoundTitle(el)}))