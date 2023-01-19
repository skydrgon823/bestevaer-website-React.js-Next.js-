import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import gsap from 'gsap';

import Icons from 'src/components/icons/Icons';

import useWindowSize from 'src/hooks/useWindowSize';

import { MQ_WIDE } from 'src/constants/devices';

import styles from './Logo.module.scss';

export default function Logo({ className }) {
    const logoRef = useRef(null);

    const windowSize = useWindowSize();

    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: logoRef.current,
                toggleActions: 'play pause resume reverse',
                start: `top ${windowSize.width < MQ_WIDE ? 40 : 124}px`,
            },
        });

        tl.to(logoRef.current, {
            opacity: 0,
            y: '-100px',
            ease: 'power3.inOut',
            duration: 1,
        });

        return () => {
            tl.kill();
            tl = null;
        };
    }, []);

    return (
        <span className={className} ref={logoRef}>
            <Icons name="logo" />
        </span>
    );
}
