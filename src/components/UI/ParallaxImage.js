import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import {useSnapshot} from "valtio";
import {windowSizeState} from "../../stores/windowSizeState";

const ParallaxImage = ({
                                     src,
                                     className = "w-full h-full",
                                     imgWidth = 1792, // 圖片寬度
                                     imgHeight = 1024, // 圖片高度
                                     parallaxIntensity = 0.5, // 視差程度，0~1
                                 }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const { currentHeight, currentWidth,isWidthBased } = useSnapshot(windowSizeState);

    const aspectRatioWindow = currentWidth / currentHeight;
    const aspectRatioImg = imgWidth / imgHeight;

    const scale = aspectRatioWindow > aspectRatioImg
        ? currentWidth / imgWidth
        : currentHeight / imgHeight;

// 確保圖片至少與視窗同寬或同高
    const adjustedScale = Math.max(scale, 1);

    // 計算 output range，考慮視差強度和縮放比例
    const maxOffsetX = (currentWidth * scale - currentWidth) / 2 * parallaxIntensity;
    const maxOffsetY = (currentHeight * scale - currentHeight) / 2 * parallaxIntensity;

    const moveX = useTransform(x, [-currentWidth / 2, currentWidth / 2], [-maxOffsetX, maxOffsetX]);
    const moveY = useTransform(y, [-currentHeight / 2, currentHeight / 2], [-maxOffsetY, maxOffsetY]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            x.set(e.clientX - currentWidth / 2);
            y.set(e.clientY - currentHeight / 2);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [x, y, currentWidth, currentHeight]);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <motion.img
                className="min-w-full min-h-full object-cover"
                src={src}
                alt=""
                style={{
                    x: moveX,
                    y: moveY,
                    translateZ: 0,
                    scale: adjustedScale*1.2
                }}
            />
        </div>
    );
};

export default ParallaxImage;


