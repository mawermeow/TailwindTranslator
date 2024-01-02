import { useState, useEffect } from 'react';

/*
  使用方式：
  const scrollValue = useScrollValue(initial, step, min, max, disable);

  關於 useScrollValue：
  這個 React Hook `useScrollValue` 是用來追蹤和控制滾輪事件影響的數值。
  它適合於需要根據滾輪事件來調整數值的情況，比如調整視圖的縮放比例、滾動速度等。

  ## 參數：
  - `initial`（初始值）：設定初始的數值，預設為 0.5。
  - `step`（間距）：每次滾動改變的量，預設為 0.1。
  - `min`（最小值）：數值可以達到的最小值，預設為 0。
  - `max`（最大值）：數值可以達到的最大值，預設為 1。
  - `disable`（禁用開關）：用於控制是否禁用滾輪事件的處理，預設為 `false`。

  ## 返回值：
  - 返回當前的數值 `value`，可以被組件用來顯示或進一步處理。
*/

const useScrollValue = (initial=0.5, step=0.1, min=0, max=1, disable=false) => {
    const [value, setValue] = useState(initial);

    useEffect(() => {
        const handleWheel = (event) => {
            if (!disable) {
                // 根據滾輪事件的 deltaY 計算新值
                const newValue = Math.min(Math.max(value + step * Math.sign(event.deltaY), min), max);
                setValue(newValue);
            }
        };

        // 添加滾輪事件監聽器
        window.addEventListener('wheel', handleWheel);

        // 清除監聽器
        return () => window.removeEventListener('wheel', handleWheel);
    }, [value, step, min, max, disable]);

    return value;
}

export default useScrollValue;
