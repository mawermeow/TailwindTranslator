import { useEffect, useState } from 'react';

/*
  使用方式：
  const isVisible = usePageVisibility();

  關於 usePageVisibility：
  這個 React Hook `usePageVisibility` 用於監測網頁的可見狀態。當用戶切換到其他標籤或最小化瀏覽器時，此 Hook 可以感知這些變化。
  它適用於需要根據頁面是否對用戶可見來調整行為或性能的場景，例如暫停動畫、停止加載數據等。

  ## 參數：
  - 無額外參數。

  ## 返回值：
  - 返回一個布林值 `isVisible`，表示當前頁面是否對用戶可見。如果頁面可見，則返回 `true`；否則返回 `false`。
*/


const usePageVisibility = () => {
    const [isVisible, setIsVisible] = useState(document.visibilityState === 'visible');

    useEffect(() => {
        const handleVisibilityChange = () => {
            setIsVisible(document.visibilityState === 'visible');
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return isVisible;
};

export default usePageVisibility;

// example
// const isVisible = usePageVisibility();