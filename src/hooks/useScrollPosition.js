import { useEffect, useState, useCallback } from 'react';

const useScrollPosition = (elementId,deps=[]) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const updateScrollPosition = useCallback((position, smooth = false) => {
        const targetElement = document.getElementById(elementId);
        if (!targetElement) return;

        // 保存原始的 scrollBehavior 設定
        const originalScrollBehavior = targetElement.style.scrollBehavior;

        const maxScroll = targetElement.scrollHeight - targetElement.clientHeight;
        const scrollTop = maxScroll * position;

        if (smooth) {
            // 啟用平滑滾動
            targetElement.style.scrollBehavior = 'smooth';
        } else {
            // 使用原始設定（可能不是平滑滾動）
            targetElement.style.scrollBehavior = originalScrollBehavior;
        }

        targetElement.scrollTop = scrollTop;

        // 恢復原始的 scrollBehavior 設定
        targetElement.style.scrollBehavior = originalScrollBehavior;
    }, [elementId]);



    useEffect(() => {
        const targetElement = document.getElementById(elementId);
        if (!targetElement) return;

        const calculateAndSetScrollPosition = () => {
            const scrollY = targetElement.scrollTop;
            const maxScroll = targetElement.scrollHeight - targetElement.clientHeight;
            const position = scrollY / maxScroll;
            setScrollPosition(position);
        };

        let animationFrameId = null;
        const handleScrollEvent = () => {
            if (animationFrameId === null) {
                animationFrameId = requestAnimationFrame(() => {
                    calculateAndSetScrollPosition();
                    animationFrameId = null;
                });
            }
        };

        targetElement.addEventListener('scroll', handleScrollEvent);
        return () => {
            targetElement.removeEventListener('scroll', handleScrollEvent);
            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [elementId, updateScrollPosition,...deps]);

    return [scrollPosition, updateScrollPosition];
};

export default useScrollPosition;
