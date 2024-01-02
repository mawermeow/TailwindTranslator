import {mouseScroll, screenDrag} from "../utils/krpano";
import {useSnapshot} from "valtio";
import {getTipText, uiState} from "../stores/model";
import FadeDiv from "./UI/FadeDiv";
import {isMobile} from "react-device-detect";
import {useEffect, useState} from "react";
import Img, {MotionImg} from "./UI/Img";
import {motion} from "framer-motion";
import {FiSkipForward} from "react-icons/fi";

// step
// 0 左右
// 1 前後
// 2 等待點擊
const Intro=()=>{
    const {visible,step}=useSnapshot(uiState.intro)

    const controlKrpano=async ()=>{
        if(step===0){
            await screenDrag()
            await window.delay(1000)
            uiState.intro.step = 1
            await mouseScroll()
            await window.delay(1000)
            uiState.intro.step = 2
        }
    }

    // <div id="frontMask" style="z-index: 100; position: fixed; background: rgba(0,0,0,0.6); width:100%;height:100%;top:0;left:0;transition: opacity 0.5s ease-out; transition:opacity 0.5s ease-out;"></div>
    const frontMask = document.getElementById('frontMask')
    const clearFrontMask = () => {
        if (frontMask) {
            frontMask.classList.add('opacity-0'); // 添加类名以触发淡出效果
            setTimeout(() => {
                frontMask.parentNode.removeChild(frontMask);
            }, 500); // 延迟500毫秒后删除元素
        }
    }

    useEffect(()=>{
        if(visible){
            controlKrpano()
        }
    },[visible])

    const skipHandler=()=>{
        uiState.intro.visible = false
    }

    return <FadeDiv
        zIndex={40}
        className={`fixed inset-0 pointer-events-auto bg-[#333333]/40 flex items-center justify-center ${step===2?'img-btn':''}`}
        visible={visible}
        onClick={()=>{
            if(step===2){
                uiState.intro.visible = false
            }
        }}
    >

        <div className="max-w-[400px] w-full flex flex-col relative">
            <MotionImg initial={{opacity:0}} animate={{opacity:step>=0?1:0}} className={`w-full object-contain z-0 absolute`} src={`./media/images/intro/intro01.png`}/>
            <MotionImg initial={{opacity:0}} animate={{opacity:step>=1?1:0}} className={`w-full object-contain z-10 absolute`} src={`./media/images/intro/intro02.png`}/>
            <MotionImg initial={{opacity:0}} animate={{opacity:step>=2?1:0}} className={`w-full object-contain z-20 relative`} src={`./media/images/intro/intro03.png`} onClick={skipHandler}/>
            <div className="w-full flex justify-end h-10 mt-2">
                {/*{step!==2&&<motion.div*/}
                {/*    className="fixed h-6 bottom-4 right-4 text-white img-btn flex items-center justify-center gap-1 drop-shadow-[0_3px_6px_rgba(255,255,255,0.9)]"*/}
                {/*    whileHover={{scale:1.1}}*/}
                {/*    whileTap={{scale:0.9}}*/}
                {/*    onClick={skipHandler}*/}
                {/*>*/}
                {/*    <div className="relative">{getTipText("skipBtn")}</div>*/}
                {/*    <div className="svg-h-full h-6"><FiSkipForward/></div>*/}
                {/*</motion.div>}*/}
                {step!==2&&<div
                    className={`relative border-2 border-white px-4 h-8 group img-btn overflow-hidden active:scale-90 transition-transform flex items-center justify-center`}
                    onClick={skipHandler}
                >
                    <div className="relative z-10 text-white tracking-[0.15em]">{getTipText("skipBtn")}</div>
                    <div className="bottom-0 inset-x-0 absolute h-0 group-hover:h-full bg-[#EDEDED]/50 transition-all"></div>
                </div>}
            </div>
        </div>


    </FadeDiv>
}
export default Intro