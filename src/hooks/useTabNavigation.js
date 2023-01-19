import { useEffect, useState } from 'react';

export default function useTabNavigation() {
    const [isUsingTab, setIsUsingTab] = useState(false);

    useEffect(() => {
        function handleKeyDown({ key }) {
            if (key === 'Tab' && !isUsingTab) {
                setIsUsingTab(true);
            }
        }

        function handleMouseDown() {
            if (isUsingTab) {
                setIsUsingTab(false);
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('mousedown', handleMouseDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('mousedown', handleMouseDown);
        };
    }, [isUsingTab]);

    return isUsingTab;
}