import { useState, useEffect } from 'react';

const useScrollPosition = (ref) => {
    // State and setter for storing scroll position.
    const [position, setPosition] = useState({
        x: undefined,
        y: undefined,
        width: undefined,
        height: undefined,
        top: undefined,
        right: undefined,
        bottom: undefined,
        left: undefined
    });

    useEffect(() => {
        if (!window) {
            return;
        }

        const handleScroll = () => {
            if (ref && ref.current) {
                const element = ref.current.getBoundingClientRect();
                setPosition({
                    x: element.x,
                    y: element.y,
                    width: element.width,
                    height: element.height,
                    top: element.top,
                    right: element.right,
                    bottom: element.bottom,
                    left: element.left
                });
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [ref]); // Empty array ensures that effect is only run on mount and unmount.

    return position;
};

export default useScrollPosition;
