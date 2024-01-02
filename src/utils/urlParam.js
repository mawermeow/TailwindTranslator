// 從網址中獲取參數的方法
import {decodeFromBase64, encodeToBase64} from "./encode";

export const getParams=()=> {
    const urlParams = new URLSearchParams(window.location.search);
    const params = {};

    for (const [key, value] of urlParams) {
        params[key] = value;
    }

    return params;
}

// 檢查網址是否包含指定的參數
export const hasParam=(paramName)=> {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.has(paramName);
}

export const getParam=(paramName,init=null)=>{
    if(hasParam(paramName)){
        return getParams()[paramName]
    }else{
        return init
    }
}

// const params = getParams()
// const hasName = hasParam('name')

export const getEncodeParam=(paramName,init=null)=>{
    if(hasParam(paramName)){
        return decodeFromBase64(getParams()[paramName])
    }else{
        return init
    }
}


export const getRootUrl = (htmlName = '') => {
    if (!htmlName) return window.location.origin + window.location.pathname;

    let currentURL = window.location.origin + window.location.pathname;

    if (currentURL.endsWith('/')) {
        currentURL += htmlName;
    } else if (currentURL.endsWith('index.html')) {
        currentURL = currentURL.replace(/index\.html$/, htmlName);
    } else {
        currentURL = currentURL.replace(/\/[^/]*$/, '/' + htmlName);
    }

    return currentURL;
}



// 將物件轉換為分享用參數
const convertObjToEncodeUrlParams=(obj)=> {
    return Object.keys(obj)
        .map(key => `${key}=${encodeToBase64(obj[key])}`)
        .join('&');
}
const convertObjToUrlParams=(obj)=> {
    return Object.keys(obj)
        .map(key => `${key}=${(obj[key])}`)
        .join('&');
}
export const getLink=(file='share.html',obj)=>{
    return `${getRootUrl('share.html')}?${convertObjToUrlParams(obj)}`
}