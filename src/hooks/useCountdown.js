import React, { useState, useEffect, useRef } from 'react';

/*
  使用方式：
  const { seconds, startCountdown, pauseCountdown, resetCountdown } = useCountdown(initialValue);

  關於 useCountdown：
  這個 React Hook `useCountdown` 是用於實現一個簡單的倒數計時器功能。
  它允許您啟動、暫停和重置計時器，並提供當前倒數秒數的狀態。

  ## 參數：
  - `initialValue`：數字，設定計時器的初始秒數。

  ## 返回值：
  - 返回一個對象，包含以下屬性和方法：
    - `seconds`：數字，當前倒數的秒數。
    - `startCountdown`：函數，啟動計時器。
    - `pauseCountdown`：函數，暫停計時器。
    - `resetCountdown`：函數，重置計時器到初始秒數。

  ## 使用示例：
    <div>
    <p>剩餘時間：{seconds} 秒</p>
    <button onClick={startCountdown}>開始</button>
    <button onClick={pauseCountdown}>暫停</button>
    <button onClick={resetCountdown}>重置</button>
    </div>

 */

const useCountdown = (initialValue) => {
    const [seconds, setSeconds] = useState(initialValue);
    const [isActive, setIsActive] = useState(false);

    const countdown = useRef();

    useEffect(() => {
        if (isActive && seconds > 0) {
            countdown.current = setTimeout(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
        } else if (seconds <= 0) {
            setIsActive(false);
        }

        return () => {
            clearTimeout(countdown.current);
        };
    }, [isActive, seconds]);

    const startCountdown = () => {
        setIsActive(true);
    };

    const pauseCountdown = () => {
        setIsActive(false);
    };

    const resetCountdown = () => {
        setIsActive(false);
        setSeconds(initialValue);
    };

    return { seconds, startCountdown, pauseCountdown, resetCountdown };
}

export default useCountdown;