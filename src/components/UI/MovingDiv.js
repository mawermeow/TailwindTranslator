import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import useElementSize from "../../hooks/useElementSize";

const MovingDiv = ({children, moveSpeed = 5}) => {
    const controls = useAnimation();

    // 隨機初始位置
    const randomX = Math.random() * (window.innerWidth - 100); // 減去100以確保組件不會初始化在太接近邊界的位置
    const randomY = Math.random() * (window.innerHeight - 100);

    const [position, setPosition] = useState({ x: randomX, y: randomY });

    // 隨機初始方向
    const randomDirectionX = Math.random() > 0.5 ? 1 : -1;
    const randomDirectionY = Math.random() > 0.5 ? 1 : -1;

    const [direction, setDirection] = useState({ x: randomDirectionX, y: randomDirectionY });
    const [ref, refWidth, refHeight] = useElementSize([children]);

    useEffect(() => {
        const move = () => {
            let newX = position.x + direction.x * moveSpeed;
            let newY = position.y + direction.y * moveSpeed;

            if (newX <= 0 || newX + refWidth >= window.innerWidth) {
                setDirection(prev => ({ ...prev, x: -prev.x }));
                newX = direction.x === 1 ? window.innerWidth - refWidth : 0;
            }
            if (newY <= 0 || newY + refHeight >= window.innerHeight) {
                setDirection(prev => ({ ...prev, y: -prev.y }));
                newY = direction.y === 1 ? window.innerHeight - refHeight : 0;
            }

            setPosition({ x: newX, y: newY });
            controls.start({ x: newX, y: newY, transition: { duration: 0.05 } });
        }

        const interval = setInterval(move, 50);
        return () => clearInterval(interval);
    }, [controls, position, direction, moveSpeed, refWidth, refHeight]);

    return (
        <div className="fixed inset-0">
            <motion.div
                ref={ref}
                initial={{ x: randomX, y: randomY }}
                animate={controls}
                className="z-30 fixed"
            >{children}</motion.div>
        </div>
    );
}

export default MovingDiv;
