import React, {useRef} from 'react';
import {motion} from 'framer-motion';
import useScrollValue from "../../hooks/useScrollValue";
import useElementSize from "../../hooks/useElementSize";
import useTranslate from "../../hooks/useTranslate";
import useDraggableMotion from "../../hooks/useDraggableMotion";

/*
  使用方式：
  <ScaleDragDiv maxScale={2}>
      在此處置入要縮放和拖動的元素
  </ScaleDragDiv>

  關於 ScaleDragDiv：
  這個 React 組件 `ScaleDragDiv` 是用於創建一個可縮放且可拖動的容器。它利用了 framer-motion 庫來實現平滑的動畫效果，適用於需要動態交互的UI元素。

## 属性：
  - `children`：React 節點，這是要放置在可縮放和可拖動容器內的元素或組件。
  - `maxScale`（可選）：數字，定義元素在縮放時的最大比例。預設值為 2。
  - `transition`（可選）：對象，定義動畫過渡的屬性。例如，`{ duration: 0 }` 表示動畫過渡的持續時間為 0 秒，沒有任何過渡效果。

## 功能：
  - 組件提供了基於滾動和拖拽交互的縮放功能。當用戶滾動鼠標或者使用觸摸手勢時，組件內的元素將會根據設定的比例進行縮放。
  - 當元素放大後，用戶可以通過拖拽來移動元素，查看不同的部分。拖拽的邊界是動態計算的，以確保元素不會超出可視範圍。

## 內部邏輯：
  - 組件使用了自定義的 React Hooks (`useScrollValue`, `useElementSize`, `useTranslate`, 和 `useDraggableMotion`) 來實現其功能。
  - `useScrollValue` 負責根據滾動條的位置計算縮放比例。
  - `useElementSize` 用於監測容器的尺寸變化。
  - `useTranslate` 和 `useDraggableMotion` 結合使用，實現了元素的拖拽動畫和邊界限制的計算。

  此組件是一個高度可定制和靈活的工具，適用於創建動態和互動性強的網頁界面。
*/


const ScaleDragDiv = ({children, maxScale = 2, transition = {duration: 0}}) => {
    const scrollValue = useScrollValue(1, 0.01, 1, maxScale, false);

    const [containerRef, containerWidth, containerHeight] = useElementSize();

    const scalableElementRef = useRef(null);
    const [translate, updateTranslate] = useTranslate(scalableElementRef);

    const movableItemRef = useRef(null);

    const getConstraints = () => {
        const scale = scrollValue;
        const scaledWidth = containerWidth * scale;
        const scaledHeight = containerHeight * scale;
        const offsetX = (scaledWidth - containerWidth) / 2;
        const offsetY = (scaledHeight - containerHeight) / 2;

        return {
            left: -offsetX - translate.x,
            right: offsetX - translate.x,
            top: -offsetY - translate.y,
            bottom: offsetY - translate.y,
        };
    };

    const controls = useDraggableMotion(movableItemRef, () => {
        updateTranslate()
        return getConstraints()
    }, [scrollValue]);

    return (
        <div ref={containerRef} className="fixed inset-0 flex items-center justify-center">
            <motion.div
                ref={scalableElementRef}
                className="overflow-visible"
                style={{scale: scrollValue}}
            >
                <motion.div
                    ref={movableItemRef}
                    animate={controls}
                    drag={scrollValue > 1}
                    dragConstraints={getConstraints()}
                    className="relative"
                    transition={transition}
                >
                    {children}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ScaleDragDiv;
