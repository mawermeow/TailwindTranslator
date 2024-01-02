import { useEffect, useRef } from 'react';

/*
  使用方式：
  useRepeater(shouldStop, repeatedCallback);

  關於 useRepeater：
  這個 React Hook `useRepeater` 是用於定期執行指定的回調函數。
  它可以根據條件控制是否持續執行回調，適合用於需要定期檢查或更新數據的場景。

  ## 參數：
  - `shouldStop`：布爾值，指示是否停止重複執行。當為 `true` 時停止執行，為 `false` 時開始或繼續執行。
  - `repeatedCallback`：函數，定期執行的回調函數。
  - `endCallback`：函數，條件滿足後執行的回調函數。

  ## 使用示例：
    const doSomething = () => {
      // 要重複執行的操作
    };

    useRepeater(stop, doSomething);

    return (
      <div>
        <button onClick={() => setStop(!stop)}>切換{stop ? '開始' : '停止'}</button>
      </div>
    );
*/

const useRepeater = (shouldStop, repeatedCallback,endCallback) => {
    const intervalRef = useRef(null);

    useEffect(() => {
        if (!shouldStop) {
            intervalRef.current = setInterval(repeatedCallback, 100);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
                if(typeof endCallback==='function'){
                    endCallback()
                }
            }
        }

        // Cleanup on unmount or when shouldStop changes.
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [shouldStop, repeatedCallback]);
}

export default useRepeater;