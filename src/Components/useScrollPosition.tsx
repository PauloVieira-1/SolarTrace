
import { useState, useEffect } from 'react';

const useScrollPosition = () => {
    const [totalScroll, setTotalScroll] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            setTotalScroll(window.scrollY);
        };

        const trackWheelMovement = (event : WheelEvent) => {
            setTotalScroll(prevScroll => prevScroll + event.deltaY);
        };

        window.addEventListener("scroll", updatePosition);
        window.addEventListener("wheel", trackWheelMovement);

        return () => {
            window.removeEventListener("scroll", updatePosition);
            window.removeEventListener("wheel", trackWheelMovement);
        };
    }, []);

    return totalScroll;
};

export default useScrollPosition;
