import { useEffect, useRef, useState } from "react"
import { useSnapshot } from "valtio"
import {windowSizeState} from "../stores/windowSizeState";


/*
  使用方式：
  const [elementRef, elementWidth, elementHeight, updateElementSize] = useElementSize(updateDeps, initWidth, initHeight);

  關於 useElementSize：
  這個 React Hook `useElementSize` 用於追蹤並更新 DOM 元素的尺寸（寬度和高度）。
  它特別適用於需要根據窗口大小或其他因素變化動態調整元素尺寸的場景。

  ## 參數：
  - `updateDeps`（更新依賴）：依賴項數組，當這些依賴項變化時，會重新計算元素尺寸。
  - `initWidth`（初始寬度）：設定元素的初始寬度，預設為 0。
  - `initHeight`（初始高度）：設定元素的初始高度，預設為 0。

  ## 返回值：
  - 返回一個數組，包含：
    - `elementRef`：React 參考對象，用於綁定需要測量尺寸的 DOM 元素。
    - `width`：元素的當前寬度。
    - `height`：元素的當前高度。
    - `updateSize`：函數，用於手動觸發尺寸更新。
*/


export const getPosition = (ref) => {
    if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        }
    }
    return { x: 0, y: 0 }
}

const useElementSize = (updateDeps = [],initWidth=0,initHeight=0) => {
    const [size, setSize] = useState({ width: initWidth, height: initHeight})
    const { currentWidth, currentHeight } = useSnapshot(windowSizeState)
    const ref = useRef(null)

    const updateSize = () => {
        if (!ref.current) return

        setSize({
            width: ref.current.offsetWidth,
            height: ref.current.offsetHeight,
        })
    }

    useEffect(() => {
        updateSize()
    }, [ref, currentWidth, currentHeight, ...updateDeps])

    return [ref, size.width, size.height, updateSize]
}

export default useElementSize