import React, { useRef } from 'react';
import classNames from 'classnames';
import gsap from 'gsap';

import Icons from 'src/components/icons/Icons';

import styles from './ButtonScrollDown.module.scss';

export default function ButtonScrollDown({ className }) {
    const ref = useRef(null);

    function handleClick() {
        gsap.to(window, {
            scrollTo: ref.current,
            ease: 'power3.inOut',
            duration: 1
        });
    }

    return (
        <button
            className={classNames(className, styles.button)}
            onClick={handleClick}
            aria-label="Scroll down"
            ref={ref}
        >
            <Icons
                className={styles.icon}
                name="arrow"
            />
        </button>
    );
}