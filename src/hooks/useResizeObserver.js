import { useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

const useResizeObserver = (ref, callback) => {
    useEffect(() => {
        if (!ref.current) {
            return;
        }

        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                callback(entry);
            }
        });

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, []);
};

export default useResizeObserver;
