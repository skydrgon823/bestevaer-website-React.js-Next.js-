import { useEffect } from 'react';
import gsap from 'gsap';

const useFadeUpAnimation = (trigger, items) => {
    useEffect(() => {
        if (!trigger.current) {
            return;
        }

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: trigger.current,
                toggleActions: 'play pause resume reset',
                start: 'top bottom+=100',
            },
        });

        const elements = Array.isArray(items) ? items : [items];

        tl.fromTo(
            elements.map((element) => element.current),
            {
                opacity: 0,
                y: '100px',
            },
            {
                opacity: 1,
                y: 0,
                ease: 'power3.out',
                duration: 1.5,
                stagger: 0.15,
            }
        );

        return () => {
            if (tl) {
                tl.kill();
                tl = null;
            }
        };
    }, []);
};

export default useFadeUpAnimation;
