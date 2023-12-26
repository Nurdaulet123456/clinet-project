import { useRef, useState, TouchEvent } from 'react'

const useScroll = () => {
    const containerRef = useRef<any>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [startTouchX, setStartTouchX] = useState<any>(0);

    const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
        setStartTouchX(event.touches[0].clientX);
    };

    const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
        const touchX = event.touches[0].clientX;
        const touchDelta = touchX - startTouchX;
        const container = containerRef.current;
        container.scrollTo({
            left: scrollPosition - touchDelta,
            behavior: "smooth",
        });
    };

    const handleTouchEnd = () => {
        const container = containerRef.current;
        setScrollPosition(container.scrollLeft);
        setStartTouchX(null);
    };

    return {
        containerRef,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd
    }
}

export default useScroll;
