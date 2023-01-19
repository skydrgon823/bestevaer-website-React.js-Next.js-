import { useState, useEffect } from 'react';

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    const handleResizeWindow = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', handleResizeWindow);
        handleResizeWindow();

        return () => {
            window.removeEventListener('resize', handleResizeWindow);
        };
    }, []);

    return windowSize;
};

export default useWindowSize;
