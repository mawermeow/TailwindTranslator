import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import useElementSize from "../../hooks/useElementSize";

const MarqueeText = ({ children, duration = 5, repeatDelay = 5 }) => {
    const [containerRef, containerWidth] = useElementSize();
    const [contentRef, contentWidth] = useElementSize([containerWidth]);
    const controls = useAnimation();

    useEffect(() => {
        if (contentWidth > containerWidth) {
            const totalDuration = 2 * duration + 2 * repeatDelay;

            controls.start({
                x: [
                    0,
                    containerWidth - contentWidth,
                    containerWidth - contentWidth,
                    0,
                    0
                ],
                times: [
                    0,
                    duration / totalDuration,
                    (duration + repeatDelay) / totalDuration,
                    (2 * duration + repeatDelay) / totalDuration,
                    1
                ],
                transition: {
                    duration: totalDuration,
                    repeat: Infinity,
                    ease: "linear",
                },
            });
        } else {
            controls.stop();
        }
    }, [containerWidth, contentWidth, controls, duration, repeatDelay]);

    return (
        <div className="w-full" ref={containerRef}>
            <motion.div
                animate={controls}
                className="inline-block whitespace-nowrap"
                ref={contentRef}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default MarqueeText;
