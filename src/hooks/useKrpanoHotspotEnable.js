import {useEffect, useState} from "react";
import {spotDisable, spotEnable} from "../utils/krpano";

const useKrpanoHotspotEnable=()=>{
    const [enable,setEnable]=useState(true)

    useEffect(()=>{
        if(enable){
            // 恢復 spot 功能
            // 如果有第二個 krpano，一樣不恢復甚至要移除滑鼠
            window.frontEnd.mouseState.type = 'default'
            spotEnable()
        }else{
            // 移除 spot 功能，啟用預設滑鼠
            window.frontEnd.mouseState.type = 'default'
            spotDisable()
        }
    },[enable])

    const handleMouseHover = () => {
        setEnable(false)
    }
    const handleMouseOut = () => {
        setEnable(true)
    }

    // useEffect(() => {
    //     let timer;
    //     if (!enable) {
    //         timer = setTimeout(handleMouseOut, 1000); // 1秒後執行 onMouseOut 的邏輯
    //     }
    //     return () => clearTimeout(timer); // 清除計時器
    // }, [enable]);

    const props={
        onMouseMove:handleMouseHover,
        onMouseOver:handleMouseHover,
        onMouseOut:handleMouseOut,
    }
    return props
}
export default useKrpanoHotspotEnable