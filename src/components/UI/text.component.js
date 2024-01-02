import {uiState} from "../../stores/model";
import {useSnapshot} from "valtio";

export const TextTitle=({children,className="text-[#2B656F] text-2xl border-b border-[#2B656F] pb-3"})=>{
    return <div className={`font-bold font-title-b ${className}`}>{children}</div>
}

export const TextContent=({children,className="text-[#2B656F] text-base"})=>{
    const {lang}=useSnapshot(uiState)
    return <div className={`leading-8 font-bold ${lang==='zh'?'text-justify':''} ${className}`}>{children}</div>
}