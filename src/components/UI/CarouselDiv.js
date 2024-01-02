import { useState, useEffect, useRef } from "react";
import useElementSize from "../../hooks/useElementSize";

const CarouselDiv = ({
                         indexCallback=(num)=>{}, // currentIndex 改變時要觸發的回調函數
                         dataList,
                         renderItem=(el,i,isCurrentIndex,clickHandler)=>{},
                         dotColor="bg-transparent",
                         currentDotColor="bg-transparent",
                         switchRatio=0.25, // 拖動距離 佔外框寬度多少比例，能觸發切換
                         contentWidthRatio=1, // 內容部分佔外框寬度的比例
                         gapWidth=16, // 內容間距
                         duration=0.5,
                     }) => {
    const [currentIndex,setCurrentIndex]=useState(0)
    const [containerRef, containerWidth, containerHeight, updateContainerSize] = useElementSize();
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [offsetX, setOffsetX] = useState(0);

    const compensation = (containerWidth * (1 - contentWidthRatio)) / 2

    useEffect(() => {
        if (containerRef.current) {
            updateContainerSize();
        }
    }, [dataList]);

    useEffect(()=>{
        indexCallback(dataList[currentIndex],currentIndex)
    },[currentIndex])

    const handleMouseDown = (e) => {
        setStartX(e.clientX || e.pageX); // 使用e.pageX为触摸事件
        setIsDragging(true);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const currentOffsetX = (e.clientX || e.pageX) - startX;
        setOffsetX(currentOffsetX);

        // Check if it satisfies the switch condition to the right
        if (currentOffsetX > containerWidth * switchRatio * contentWidthRatio && currentIndex > 0) {
            setCurrentIndex(p => p - 1);
            setIsDragging(false); // lose control
            setOffsetX(0);
            return; // Exit the function early after the switch
        }

        // Check if it satisfies the switch condition to the left
        if (currentOffsetX < -containerWidth * switchRatio * contentWidthRatio && currentIndex < dataList.length - 1) {
            setCurrentIndex(p => p + 1);
            setIsDragging(false); // lose control
            setOffsetX(0);
            return; // Exit the function early after the switch
        }
    };


    const handleMouseUp = (e) => {
        setIsDragging(false);
        setOffsetX(0);
    };


    return (
        <div
            className="relative w-full h-full overflow-hidden pointer-events-auto"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={e => handleMouseDown(e.touches[0])}
            onTouchMove={e => handleMouseMove(e.touches[0])}
            onTouchEnd={handleMouseUp}
            onMouseLeave={() => setIsDragging(false)}
        >
            <div
                className="flex gap-4"
                style={{
                    width: (containerWidth * contentWidthRatio + gapWidth) * dataList.length - gapWidth,
                    transform: `translateX(${isDragging ? offsetX + compensation - (currentIndex * (containerWidth * contentWidthRatio + gapWidth)) : compensation - currentIndex * (containerWidth * contentWidthRatio + gapWidth)}px)`,  // Step 2
                    transition: isDragging ? 'none' : `transform ${duration}s`
                }}
            >
                {dataList.map((item, index) => {
                    const clickHandler=()=>setCurrentIndex(index)
                    return <div key={index} className="relative" style={{
                        width: containerWidth*contentWidthRatio,
                        height: containerHeight
                    }}>
                        {renderItem(item, index, currentIndex===index,clickHandler)}
                    </div>
                })}
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3">
                {dataList.map((_, index) => (
                    <div
                        key={index}
                        className={`h-3 w-3 rounded-full ${currentIndex === index ? currentDotColor : dotColor}`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default CarouselDiv;