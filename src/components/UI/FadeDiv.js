import { AnimatePresence, motion } from "framer-motion"
import { useState, useEffect } from 'react'

const FadeDiv = ({
                     visible,
                     children,
                     transition = { duration: 0.3 },
                     showAtFirst = false,
                     wouldRemove = true,
                     translateX = 0,
                     translateY = 0,
                     zIndex = 'auto',  // default zIndex as 'auto'
                     className,
                     ...rest
                 }) => {
    const [currentZIndex, setCurrentZIndex] = useState(zIndex)

    useEffect(() => {
        if (!visible && !wouldRemove) {
            const timeoutId = setTimeout(() => {
                setCurrentZIndex(-100)
            }, transition.duration * 1000)
            return () => clearTimeout(timeoutId)
        } else {
            setCurrentZIndex(zIndex)
        }
    }, [visible, wouldRemove, transition.duration, zIndex])

    const initialSettings = {
        opacity: showAtFirst ? 1 : 0,
        translateX,
        translateY,
        zIndex: currentZIndex,
    }

    const animateSettings = {
        opacity: 1,
        translateX: 0,
        translateY: 0,
        zIndex: currentZIndex,
    }

    const exitSettings = wouldRemove ? {
        opacity: [1, 0],
        zIndex: [currentZIndex, currentZIndex],
        translateX,
        translateY,
    } : {
        opacity: 0,
        zIndex: [currentZIndex, currentZIndex],
        translateX,
        translateY,
    }

    if (wouldRemove) {
        return (
            <AnimatePresence>
                {visible && (
                    <motion.div
                        initial={initialSettings}
                        animate={animateSettings}
                        exit={exitSettings}
                        transition={{ ...transition, when: "afterChildren" }}
                        className={className}
                        {...rest}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        )
    }

    return (
        <motion.div
            initial={initialSettings}
            animate={visible ? animateSettings : exitSettings}
            transition={transition}
            className={`${visible?'':'fade-div-hide'} ${className}`}
            {...rest}
        >
            {children}
        </motion.div>
    )
}

export default FadeDiv
