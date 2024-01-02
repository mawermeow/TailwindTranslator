import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import useElementSize from '../../hooks/useElementSize';
import {isMobile} from "react-device-detect";

const CarouselCube = ({
                          currentIndex,
                          setCurrentIndex,
                          disableAnimate,
                          dataList,
                          renderItem = (el, i, isCurrentFace) => {},
                          rotateSpeed = 0.5, // 旋轉速度
                          perspectiveValue=5000, // 增加 perspective 值以減少視覺變化
                      }) => {
    const [rotateY, setRotateY] = useState(0);
    const controls = useAnimation();
    const [containerRef, containerWidth, containerHeight] = useElementSize();

    // 根據容器尺寸計算立方體大小
    const cubeSize = Math.min(containerWidth, containerHeight);

    useEffect(() => {
        const newRotateY = currentIndex * -90+ (isMobile?0.1:0);
        setRotateY(newRotateY);
        controls.start({ rotateY: newRotateY });
    }, [currentIndex, controls]);

    return (
        <div className="flex justify-center items-center relative w-full h-full" ref={containerRef}>
            <motion.div
                className="relative"
                style={{ perspective: `${perspectiveValue}px`, perspectiveOrigin: '50% 50%', width: containerWidth, height: containerHeight }}
            >
                <motion.div
                    animate={controls}
                    className="absolute w-full h-full"
                    style={{
                        transformStyle: 'preserve-3d',
                        transformOrigin: 'center',
                        willChange: 'transform'
                    }}
                    transition={{ duration: disableAnimate ? 0 : rotateSpeed, type: 'tween' }}
                >
                    {dataList.map((item, index) => {
                        const rotateDeg = index * 90;
                        return (
                            <div
                                key={index}
                                className="absolute w-full h-full"
                                style={{
                                    backfaceVisibility: 'visible',
                                    transform: `rotateY(${rotateDeg}deg) translateZ(${cubeSize / 2}px)`
                                }}
                            >
                                {renderItem(item, index, index === currentIndex)}
                            </div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default CarouselCube;
