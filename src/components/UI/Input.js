import {useEffect, useState} from "react";

const Input=({value,onChange=()=>{},className="",type="text",...rest})=>{
    const [input,setInput]=useState(value) // 用來更新顯示內容

    useEffect(()=>{
        setInput(value)
    },[value])

    const showValue=(type==="checkbox")?{checked:input}:{value:input}
    return <input type={type} {...showValue} {...rest} className={"pointer-events-auto focus:outline-none "+className}
                  onChange={(e)=>{
                      if(type==="checkbox"){
                          onChange(e.target.checked)
                          setInput(e.target.checked)
                      }else{
                          onChange(e.target.value)
                          setInput(e.target.value)
                      }
                  }}
    />
}

export default Input