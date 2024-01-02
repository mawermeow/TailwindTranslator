import {useEffect, useState} from "react";

/*
  使用方式：
  const [translate, updateTranslate] = useTranslate(elementRef);

  關於 useTranslate：
  這個 React Hook `useTranslate` 是用於追蹤和更新一個 DOM 元素的平移（translate）值。
  它適合用於需要從 DOM 元素的樣式中提取並追蹤平移值的情況，例如動畫、布局調整等。
  使用者可以透過這個 Hook 獲得元素的當前平移狀態，並在需要時更新它。

  ## 參數：
  - `divRef`：這是一個參考（React Ref）對象，指向需要追蹤平移值的 DOM 元素。

  ## 返回值：
  這個 Hook 返回一個數組，包含以下元素：
  - `translate`：一個物件，包含元素當前的 x 與 y 軸平移值。
  - `updateTranslate`：一個函數，可以用來手動更新 `translate` 狀態。
*/


const useTranslate=(divRef)=>{
    const [translate,setTranslate]=useState({x:0,y:0})

    const updateTranslate = () => {
        if (divRef.current) {
            const computedStyle = window.getComputedStyle(divRef.current);
            const transformValues = computedStyle.transform.match(/matrix.*\((.+)\)/);
            if (transformValues && transformValues.length > 1) {
                const values = transformValues[1].split(', ');
                const [a, b, c, d, tx, ty] = values.map(Number);
                setTranslate({x:tx,y:ty})
            }
        }
    }

    useEffect(() => {
        updateTranslate();
    }, [divRef]);

    return [translate, updateTranslate];
}

export default useTranslate;
