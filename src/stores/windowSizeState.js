import {proxy} from "valtio";

const windowSizeState = proxy({
    currentWidth: window.innerWidth,
    currentHeight: window.innerHeight,
    get xl(){return this.currentWidth>1280},
    get lg(){return this.currentWidth>1024},
    get md(){return this.currentWidth>768},
    get sm(){return this.currentWidth>640},
    get isWidthBased() { return this.currentWidth > this.currentHeight },
})
const getScale = (min=null, max = null, ref = windowSizeState.currentWidth) => {
    if (min !== null && ref < min) {
        const diff = min - ref;
        return 1 - diff / min;
    }
    if (max !== null && ref > max) {
        return ref / max;
    }
    return 1;
}

const handleResize = () => {
    windowSizeState.currentWidth = window.innerWidth
    windowSizeState.currentHeight = window.innerHeight
}
let windowSizeTimeout = setTimeout(()=>{},1000)
window.addEventListener('resize', () => {
    clearTimeout(windowSizeTimeout)
    windowSizeTimeout = setTimeout(handleResize, 50)
})
// 轉向偵測，這邊不用設置 debounce
window.addEventListener("orientationchange", handleResize);

export {windowSizeState, getScale}