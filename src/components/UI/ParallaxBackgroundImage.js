import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import {useSnapshot} from "valtio";
import {windowSizeState} from "../../stores/windowSizeState";

const ParallaxBackgroundImage = ({
                                     src,
                                     className = "w-full h-full",
                                     imgWidth = 1792,
                                     imgHeight = 1024,
                                     parallaxIntensity = 0.5
                                 }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const { currentHeight, currentWidth } = useSnapshot(windowSizeState);

    const aspectRatioWindow = currentWidth / currentHeight;
    const aspectRatioImg = imgWidth / imgHeight;

    const scale = aspectRatioWindow > aspectRatioImg
        ? currentWidth / imgWidth
        : currentHeight / imgHeight;

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
                    scale: 1 / scale
                }}
            />
        </div>
    );
};

export default ParallaxBackgroundImage;


