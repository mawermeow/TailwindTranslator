import React, {useState, useRef, useEffect} from 'react';
import { motion } from 'framer-motion';
import useElementSize from "../../hooks/useElementSize";

const Slider = ({ min = 0, max = 100, step = 0.1, value = 0, onChange,
                    trackClass="bg-blue-500 h-2 rounded-full",
                    trackBgClass="bg-gray-200 h-2 rounded-full",
                    thumbClass="w-4 h-4 bg-blue-700",
                    updateWithStyle=false,
                }) => {
    const [currentValue, setCurrentValue] = useState(value);

    const [trackRef, trackWidth] = useElementSize();
    const [thumbRef, thumbWidth] = useElementSize();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentValue(value);
        }, 100); // 100毫秒後更新value

        return () => clearTimeout(timeout);
    }, [value]);

    const handleStart = (e) => {
        e.preventDefault();  // Prevent default to handle both touch and mouse events

        // For touch events, get the first touch item
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;

        handleMove(clientX);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);
    };

    const handleMove = (clientX) => {
        const rect = trackRef.current.getBoundingClientRect();
        let newValue = ((clientX - rect.left) / rect.width) * (max - min) + min;

        // Round to the nearest step
        newValue = Math.round(newValue / step) * step;

        // Ensure newValue is within [min, max] range
        newValue = Math.min(max, Math.max(min, newValue));

        setCurrentValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    const handleMouseMove = (e) => handleMove(e.clientX);

    const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

    const handleMouseUp = () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
    };

    const handleTouchEnd = () => {
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
    };

    const thumbPosition = (((currentValue - min) / (max - min)) * (trackWidth - thumbWidth));

    const trackProps = updateWithStyle?{
        style:{ width: thumbPosition + thumbWidth }
    }:{
        animate:{ width: thumbPosition + thumbWidth }
    }

    const thumbProps=updateWithStyle?{
        style:{ x: thumbPosition }
    }:{
        animate:{ x: thumbPosition }
    }

    return (
        <div
            className={`relative w-full cursor-pointer flex items-center justify-start pointer-events-auto ${trackBgClass}`}
            ref={trackRef}
            onMouseDown={handleStart}
            onTouchStart={handleStart}
        >
            <motion.div
                initial={{ width: '0%' }}
                {...trackProps}
                className={`absolute top-0 left-0 ${trackClass}`}
                transition={{duration:0.2}}
            />
            <motion.div
                initial={{ x: 0 }}
                {...thumbProps}
                className={`absolute rounded-full shadow-md ${thumbClass}`}
                ref={thumbRef}
                transition={{duration:0.2}}
            />
        </div>
    );
};

export default Slider;
