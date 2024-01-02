import {proxy, useSnapshot} from "valtio";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import useElementSize from "../../hooks/useElementSize";
import {AiFillInfoCircle, AiOutlineInfo} from "react-icons/ai";
import {uiState} from "../../stores/model";

export const typeScale={
    none:0.3,
    default:0.3,
    hide:0,
    search:1,
    krpano:0.3,
    searchCoin:1,
}
export const mouseState=proxy({clientX:0, clientY:0, type:'default',isMouseDown:false,lastType:'default'},)
window.frontEnd.mouseState=mouseState

const handleMouseMove=(event)=> {
    mouseState.clientX = event.clientX
    mouseState.clientY = event.clientY
}
const MouseStyle = () => {
    const { clientX, clientY, type,isMouseDown } = useSnapshot(mouseState);
    const [liveUpdate, setLiveUpdate] = useState(false);

    const [lastType, setLastType] = useState('');
    const [mouseRef, mouseWidth, mouseHeight] = useElementSize([type]);

    useEffect(() => {
        if(type==='none'){
            setLiveUpdate(false)
        }else{
            setLiveUpdate(Object.keys(typeScale).includes(type));
        }
        setLastType(type)
    }, [type]);

    useEffect(() => {
        if (liveUpdate) {
            document.addEventListener('mousemove', handleMouseMove);
        }
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [liveUpdate]);

    useEffect(() => {
        const handleMouseDown = () => mouseState.isMouseDown=true;
        const handleMouseUp = () => mouseState.isMouseDown=false;

        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    const noneProps=lastType==='none'?{transition:{duration:0,delay:0}}:{transition:{type: "tween", ease: "easeOut", duration: 0.3}}

    return (
        <motion.div
            className="fixed pointer-events-none inset-0 z-[2000]"
            animate={liveUpdate ? { opacity: 1 } : { opacity: 0 }}
            {...noneProps}
        >
            <motion.div
                ref={mouseRef}
                className="absolute w-14 aspect-square svg-w-full flex justify-center items-center"
                style={{ top: clientY - mouseHeight / 2, left: clientX - mouseWidth / 2 }}
                animate={{scale:isMouseDown?0.8:1}}
            >
                {type==="default"&&<motion.div className="w-full h-full bg-invert rounded-full opacity-80" initial={{ scale: typeScale[lastType] }} animate={{scale:0.3}}></motion.div>}
                {type==="search"&&<motion.div className="w-full h-full opacity-50" initial={{ scale: typeScale[lastType] }} animate={{scale:1}}><AiFillInfoCircle/></motion.div>}
                {type==="searchCoin"&&<motion.div className="w-full h-full opacity-50 text-white" initial={{ scale: typeScale[lastType] }} animate={{scale:1}}><AiFillInfoCircle/></motion.div>}
                {type==="hide"&&<motion.div className="w-full h-full bg-invert rounded-full opacity-80" initial={{ scale: typeScale[lastType] }} animate={{scale:0}}></motion.div>}
            </motion.div>

        </motion.div>
    );
};
export default MouseStyle;

export const mouseHoverProps={
    onMouseOver:()=>window.frontEnd.mouseState.type = "default",
}

const krMouseOutType='default'

export const killCursor=()=>{
    if(window.krHelper){
        window.krHelper.krObj.cursors.dragging = 'none'
        window.krHelper.krObj.cursors.standard = 'none'
        document.getElementById("krpanoSWFObject").onmouseover=()=>mouseState.type=krMouseOutType
    }
}
killCursor()

export const setUnvisitableHotspotCursor=(el,hotspotStyle,typeName)=>{
    if(el.style===hotspotStyle){
        el.cursor="none"
        el.onhover=()=> window.frontEnd.mouseState.type = typeName
        el.onover=()=> window.frontEnd.mouseState.type = typeName
        el.onout=()=> window.frontEnd.mouseState.type = krMouseOutType
    }
}
export const setVisibleHotspotCursor=(el,hotspotStyle,typeName)=>{
    el.cursor="none"
    const overAction = window.krHelper.krObj.get(`action[onover${hotspotStyle}]`)
    if(overAction && !overAction.mouseStyle){
        overAction.mouseStyle = true
        overAction.content = overAction.content+`jscall(window.frontEnd.mouseState.type = "${typeName}");`
    }
    const outAction = window.krHelper.krObj.get(`action[onout${hotspotStyle}]`)
    if(!outAction.mouseStyle){
        outAction.mouseStyle = true
        outAction.content = outAction.content+`jscall(window.frontEnd.mouseState.type = "${krMouseOutType}");`
    }
}

// 使用範例： eventScene 改變時偵測 hotspot style 進行鼠標設置
// window.krHelper.allHotspot(el=>{
//     setUnvisitableHotspotCursor(el,"PolygoncoinShine","searchCoin")
//     setUnvisitableHotspotCursor(el,"PolygontransparentInfoRange","search")
//     setVisibleHotspotCursor(el,"Icongo","default")
// })