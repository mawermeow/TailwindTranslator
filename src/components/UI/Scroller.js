import { motion, useMotionValue, useTransform } from 'framer-motion';
import React, { useRef, useEffect, useState } from 'react';
import { useSnapshot } from "valtio";
import { windowSizeState } from "../../stores/windowSizeState";

const Scroller = ({
                      isActive = true, // 用來確定是否啓用滾動功能
                      isVisible = true, // 用來確定組件本身是否可見
                      existForever=false, // 確定滾動條是否永遠不會自動淡出
                      canDragThumb=true, // 確定是否可以拖動滾動條滑塊來改變內容位置
                      thumbClassName = '-right-4 w-2 bg-gray-200/50 rounded-full', // 定義滾動條滑塊的類名
                      trackClassName='', // 定義滾動條軌道的類名
                      className='', // 定義組件的類名
                      noScrollClassName, // 用於內容高度不需要滾動時，組件所選用的樣式；通常用於使對話框內的文字置中
                      hideDelay = 1000, // 定義滾動條滑塊和軌道的自動隱藏延遲時間，單位為毫秒
                      transition = {duration: 0.3}, // 對象，定義動畫過渡效果
                      scale=1, // 定義Scroller整體的比例
                      scrollCallback, // 用戶滾動時會執行的回調
                      children,
                      autoScroll=false, // 是否開啟自動滾動
                      updateScrollList=[], // 自動滾動偵測列表
                      updatedScrollTo="", // 自動滾到哪 top, bottom, null
                      visibleScrollTo="", // 可見時，是否滾動到 top, bottom, null
                      ...rest
                  }) => {
    const outerRef = useRef()

    const {scrollHeightRatio, isScrollVisible, scrollPosition, shouldScroll,isUserScrolling} = useScroll(outerRef, hideDelay, isVisible,children)

    const thumbHeight = `${scrollHeightRatio * 100}%`
    const thumbTop = useTransform(
        scrollPosition,
        [0, outerRef.current?.scrollHeight - outerRef.current?.clientHeight],
        ['0%', `${100 - parseFloat(thumbHeight)}%`]
    );

    const scrollToTop = (smooth = false) => {
        if (smooth) {
            smoothScrollTo(outerRef.current, 0, 500);
        } else {
            outerRef.current.scrollTo(0, 0);
        }
    }

    const scrollToBottom = (smooth = false) => {
        if (smooth) {
            smoothScrollTo(outerRef.current, outerRef.current.scrollHeight, 500);
        } else {
            outerRef.current.scrollTo(0, outerRef.current.scrollHeight);
        }
    }

    useEffect(() => {
        if (isVisible) {
            if(visibleScrollTo==="top"){
                scrollToTop()
            }else if(visibleScrollTo==="bottom"){
                scrollToBottom()
            }
        }
    }, [isVisible])

    useEffect(() => {
        if(!autoScroll)return
        if(updatedScrollTo==="top"){
            scrollToTop(true)
        }else if(updatedScrollTo==="bottom"){
            scrollToBottom(true)
        }
    }, updateScrollList)

    useEffect(()=>{
        if(scrollCallback && !isUserScrolling){
            scrollCallback()
        }
    },[isUserScrolling])

    const handleMouseDown = (e) => {
        const startY = e.clientY;
        const startScrollTop = outerRef.current.scrollTop;
        const trackHeight = outerRef.current.clientHeight;
        const contentHeight = outerRef.current.scrollHeight;
        const thumbHeightNum = parseFloat(thumbHeight.replace('%', '')) / 100 * trackHeight;

        // 計算每單位拖動對應的滾動距離
        const dragRatio = (contentHeight - trackHeight) / (trackHeight - thumbHeightNum);

        const handleMouseMove = (e) => {
            const distance = e.clientY - startY;
            // 使用 dragRatio 來更新滾動位置
            outerRef.current.scrollTop = startScrollTop + distance * dragRatio;
        };

        const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <div className="relative h-full w-full">
            <motion.div
                className={`absolute inset-0 overflow-x-hidden scroll-none ${isActive ? 'overflow-y-scroll' : 'overflow-y-hidden'} ${noScrollClassName&&!shouldScroll?noScrollClassName:className}`} {...rest}
                ref={outerRef}
            >
                {children}
            </motion.div>
            {isActive&&shouldScroll && <motion.div
                className={`absolute inset-y-0 ${trackClassName}`}
                initial={{opacity:0}}
                animate={existForever||(isScrollVisible && isVisible && trackClassName!=='') ? {opacity: 1} : {opacity: 0}}
                transition={transition}
                style={{scale}}
            />}
            {isActive&&shouldScroll && <motion.div
                className={`absolute ${canDragThumb?'pointer-events-auto':'pointer-events-none'} ${thumbClassName}`}
                onMouseDown={canDragThumb?handleMouseDown:()=>{}}
                initial={{opacity:0}}
                animate={existForever||(isScrollVisible && isVisible) ? {opacity: 1} : {opacity: 0}}
                transition={transition}
                style={{top: thumbTop, height: thumbHeight,scale}}
            />}
        </div>
    )
}

export default Scroller


const useIsScrolling=(debounceTime = 100)=> {
    const [isScrolling, setIsScrolling] = useState(false);
    const timeoutRef = useRef(null); // 使用 ref 来持有 timeout

    const handleScroll = () => {
        if (!isScrolling) {
            setIsScrolling(true);
        }

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setIsScrolling(false);
            timeoutRef.current = null;
        }, debounceTime);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // 保持空的依赖数组

    return [isScrolling,handleScroll];
}

const useScroll = (outerRef, hideDelay, isVisible,children) => {
    const scrollPosition = useMotionValue(0)
    const scrollRatio = useMotionValue(0)
    const [scrollHeightRatio, setScrollHeightRatio] = useState(0)
    const [isScrollVisible, setIsScrollVisible] = useState(false)
    const [shouldScroll, setShouldScroll] = useState(false)
    const timer = useRef()
    const checkIntervalRef = useRef(null)

    const [isUserScrolling, handleUserScroll] = useIsScrolling();

    const {currentHeight}=useSnapshot(windowSizeState)

    const debounce = (func, delay) => {
        clearTimeout(timer.current)
        timer.current = setTimeout(func, delay)
    }

    useEffect(() => {
        const outerElement = outerRef.current

        const updateScroll = () => {
            if (outerElement) {
                const scrollMax = outerElement.scrollHeight - outerElement.clientHeight
                scrollPosition.set(outerElement.scrollTop)
                scrollRatio.set(outerElement.scrollTop / scrollMax)
                setIsScrollVisible(true)
                debounce(() => setIsScrollVisible(false), hideDelay)
                handleUserScroll();  // 新增這一行來檢測滾動事件
            }
        }

        const updateScrollHeightRatio = () => {
            if (outerElement) {
                const outerHeight = outerElement.clientHeight
                const innerHeight = outerElement.scrollHeight
                const ratio = outerHeight / innerHeight
                setScrollHeightRatio(outerHeight / innerHeight)

                if (ratio === 0 && !checkIntervalRef.current) {
                    checkIntervalRef.current = setInterval(updateScrollHeightRatio, 100);
                } else if (ratio !== 0 && checkIntervalRef.current) {
                    clearInterval(checkIntervalRef.current);
                    checkIntervalRef.current = null;
                }
            }
        }
        updateScroll()
        // 延遲 100 豪秒後再偵測內容高度
        const timeout = setTimeout(updateScrollHeightRatio, 100);


        if (outerElement) {
            const outerHeight = outerElement.clientHeight
            const innerHeight = outerElement.scrollHeight
            const shouldScroll = innerHeight > outerHeight
            setShouldScroll(shouldScroll)
        }

        outerElement.addEventListener('scroll', updateScroll)
        window.addEventListener('resize', updateScrollHeightRatio)

        return () => {
            outerElement.removeEventListener('scroll', updateScroll)
            window.removeEventListener('resize', updateScrollHeightRatio)
            clearTimeout(timer.current)
            if (checkIntervalRef.current) {
                clearInterval(checkIntervalRef.current);
            }
        }
    }, [hideDelay, isVisible,currentHeight,children])

    return {scrollHeightRatio, isScrollVisible, scrollPosition, outerRef, shouldScroll,isUserScrolling}
}

const smoothScrollTo = (element, target, duration) => {
    const start = element.scrollTop;
    const change = target - start;
    let startTime = null;

    const animateScroll = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

        element.scrollTop = start + change * easeInOutQuad(progress);

        if (timeElapsed < duration) {
            window.requestAnimationFrame(animateScroll);
        }
    };

    window.requestAnimationFrame(animateScroll);
};