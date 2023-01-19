import React, { useRef } from 'react';
import classNames from 'classnames';

import RichText from 'src/components/rich-text/RichText';
import Icons from 'src/components/icons/Icons';
import Media from 'src/components/media/Media';

import useParallaxAnimation from 'src/hooks/useParallaxAnimation';

import styles from './YachtModelIntro.module.scss';

export default function YachtModelIntro({ blok }) {
    const containerRef = useRef(null);
    const headingRef = useRef(null);
    const imageRef = useRef(null);

    useParallaxAnimation(containerRef, {
        el: headingRef,
        val: -50,
        start: `top-=124 top`,
        disableFade: true,
    });

    useParallaxAnimation(containerRef, {
        el: imageRef,
        val: -20,
        start: `top-=124 top`,
        disableFade: true,
    });

    return (
        <header className={styles.container} ref={containerRef}>
            {/* <Icons
                className={styles.logo}
                name="logo"
            /> */}

            <div className={styles.containerHero}>
                <Media
                    className={styles.hero}
                    media={blok.hero}
                    cover={true}
                    ref={imageRef}
                />

                <h1 className={styles.heading} ref={headingRef}>
                    <span>{blok.number}</span>

                    {blok.type}
                </h1>
            </div>

            <div className={styles.containerContent}>
                <div className={styles.containerTable}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                {blok.specs.length > 0 &&
                                    blok.specs.map((spec) => (
                                        <th key={spec._uid}>{spec.label}</th>
                                    ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {blok.specs.length > 0 &&
                                    blok.specs.map((spec) => (
                                        <td key={spec._uid}>{spec.data}</td>
                                    ))}
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={styles.text}>
                    <RichText document={blok.text} />
                </div>
            </div>
        </header>
    );
}
