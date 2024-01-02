import {uiState} from "../../stores/model";
import {useSnapshot} from "valtio";
import FadeDiv from "../UI/FadeDiv";
import Markdown from "../UI/Markdown";

const AudioMessage=()=>{
    const {visible,title,content,btnText,handler,hasCancelBtn}=useSnapshot(uiState.audioMessage)
    return <FadeDiv zIndex={40} visible={visible} className="fixed inset-0 pointer-events-auto flex items-center justify-center">
        <div className="max-w-sm w-full h-56 flex flex-col items-center pointer-events-auto bg-black/50 rounded-xl border border-white px-8 py-4 text-white bg-blur">
            <div className="text-2xl tracking-[0.2rem] pb-4 pt-2">{title}</div>
            <div className="text-lg tracking-[0.3rem]">{content.includes("![](")?<Markdown>{content}</Markdown>:content}</div>
            <div className="flex gap-2 absolute bottom-4 right-4">
                {hasCancelBtn&&<div className="px-4 py-2 rounded-md img-btn bg-[#FAF8F6] hover:bg-[#DD9E1C] active:bg-[#FAF8F6] text-black text-lg" onClick={()=>uiState.audioMessage.visible=false}>取消</div>}
                <div className="px-4 py-2 rounded-md img-btn bg-[#FAF8F6] hover:bg-[#DD9E1C] active:bg-[#FAF8F6] text-black text-lg" onClick={handler}>{btnText}</div>
            </div>

        </div>
    </FadeDiv>
}
export default AudioMessage

const MessageQueue = [];
const checkNextMessage = () => {
    if (MessageQueue.length > 0) {
        const nextMessage = MessageQueue.shift();
        showAudioMessage(...nextMessage);
    }
}
export const appendAudioMessage = (title, content, btnText, handler=()=>{}, closeMessage=false, hasCancelBtn=false) => {
    MessageQueue.push([title,content,btnText,handler,closeMessage,hasCancelBtn]);
}
export const showAudioMessage=(title, content, btnText, handler=()=>{}, closeMessage=false, hasCancelBtn=false)=>{
    uiState.audioMessage.title=title
    uiState.audioMessage.content=content
    uiState.audioMessage.btnText=btnText
    uiState.audioMessage.hasCancelBtn=hasCancelBtn
    uiState.audioMessage.handler=()=>{
        handler()
        if(closeMessage){
            uiState.audioMessage.visible=false
        }
        checkNextMessage()
    }
    uiState.audioMessage.visible=true
}

const closePlayer=(closeContent="確定要結束語音導覽嗎？")=>{
    window.onEvent(`pauseSound:${uiState.audioPlayer.soundName};`)
    showAudioMessage(
        `結束語音導覽`,
        closeContent,
        "結束導覽",
        ()=>{
            window.onEvent('audioPlayer:hide')
        },
        true,
        true,
    )
}
export const closeAudioPlayerHandler=()=>closePlayer()
export const closeAudioPlayerChangeScene=()=>closePlayer("確定要結束語音導覽、前往下一張環景嗎？")

export const openAudioPlayerHandler=(callback=()=>{})=>{
    showAudioMessage(
        '您將進入環景導覽',
        '此為自動導覽功能，請跟著我們一同進入這趟旅程！',
        '下一步',
    )
    appendAudioMessage(
        '環景導覽功能介紹',
        `點擊右下的導覽按鈕      ，可關閉導覽模式。![](./home/hideAudioPlayer.png "w-12 absolute top-16 right-[29%]")`,
        '下一步',
    )
    appendAudioMessage(
        '環景導覽功能介紹',
        `下方功能列可自由操控導覽進度以及切換主題段落。
準備好了嗎！讓我們開始導覽！`,
        '開始',
        ()=>{
            callback()
            uiState.audioMessage.visible=false
        },
        true,
    )
}