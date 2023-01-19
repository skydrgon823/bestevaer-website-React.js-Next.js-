import { useEffect, useState } from 'react';

export default function useScrollPosition() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setScrollY(window.pageYOffset);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);

    return scrollY;
}