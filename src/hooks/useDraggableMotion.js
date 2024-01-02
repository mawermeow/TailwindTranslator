import { useEffect, useRef } from "react";
import { useAnimation } from "framer-motion";
import useTranslate from "./useTranslate";

/*
  使用方式：
  const motionControls = useDraggableMotion(elementRef, calculateDragBounds, dependencies);

  關於 useDraggableMotion：
  這個 React Hook `useDraggableMotion` 是用於管理和控制 DOM 元素的拖拽動畫和位置。
  它適合用於實現可拖拽元素的動態定位和動畫效果，特別是在元素大小或布局變化時保持平滑的過渡。

  ## 參數：
  - `elementRef`：參考（React Ref）對象，指向需要控制拖拽的 DOM 元素。
  - `calculateDragBounds`：函數，用於計算元素拖拽時的邊界限制。
  - `dependencies`：依賴項數組，當這些依賴項發生變化時，會重新計算拖拽邊界和位置。

  ## 返回值：
  - 返回 `animationControls`，它是一個控制元素動畫的對象。透過這個對象，可以進行動畫的啟動、停止或其他控制。
*/


const useDraggableMotion = (elementRef, calculateDragBounds, dependencies) => {
    const animationControls = useAnimation();
    const [translation, updateTranslation] = useTranslate(elementRef);
    const prevDependenciesRef = useRef(dependencies);
    const prevTranslationRef = useRef(translation);
    const prevScaleRef = useRef(dependencies[0]); // 假設 scale 是依賴項數組中的第一個元素

    useEffect(updateTranslation, [...dependencies]);

    useEffect(() => {
        const newDragBounds = calculateDragBounds();

        let newX, newY;
        // 如果依賴項發生變化
        if (JSON.stringify(dependencies) !== JSON.stringify(prevDependenciesRef.current)) {
            // 計算 scale 的變化量
            const scaleChange = dependencies[0] / prevScaleRef.current;
            // 根據 scale 的變化量調整 x 和 y
            newX = translation.x * scaleChange;
            newY = translation.y * scaleChange;

            prevDependenciesRef.current = dependencies;
            prevTranslationRef.current = { x: newX, y: newY };
            prevScaleRef.current = dependencies[0];
        } else {
            // 如果依賴項沒有變化，使用當前的 translation 值
            newX = translation.x;
            newY = translation.y;
        }

        // 確保新的 x 和 y 在邊界內
        newX = clampValue(newX, newDragBounds.left, newDragBounds.right);
        newY = clampValue(newY, newDragBounds.top, newDragBounds.bottom);

        animationControls.start({ x: newX, y: newY });
    }, [translation]);

    return animationControls;
}

// clampValue 用於確保值在一定範圍內
function clampValue(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

export default useDraggableMotion;
