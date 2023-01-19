import { useEffect } from 'react';
import gsap from 'gsap';

const useParallaxAnimation = (trigger, options) => {
    useEffect(() => {
        if (!trigger.current) {
            return;
        }

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: trigger.current,
                start: options?.start ? options.start : 'top bottom',
                onEnter: () => {
                    if (!options.disableFade) {
                        gsap.fromTo(
                            options.el.current,
                            { opacity: 0 },
                            { opacity: 1, duration: 1 }
                        );
                    }
                },
                scrub: 1.5,
            },
        });

        tl.fromTo(options.el.current, { y: 0 }, { y: options.val });

        return () => {
            if (tl) {
                tl.kill();
                tl = null;
            }
        };
    }, []);
};

export default useParallaxAnimation;
