import React, { useRef } from 'react';
import classNames from 'classnames';

import Icons from 'src/components/icons/Icons';
import Media from 'src/components/media/Media';
import RichText from 'src/components/rich-text/RichText';

import useFadeUpAnimation from 'src/hooks/useFadeUpAnimation';
import useParallaxAnimation from 'src/hooks/useParallaxAnimation';

import styles from './GridLargeHeading.module.scss';

export default function GridLargeHeading({ blok }) {
    const columnRightRef = useRef(null);
    const columnLeftRef = useRef(null);
    const containerRef = useRef(null);

    // useFadeUpAnimation(containerRef, [columnLeftRef, columnRightRef]);

    useParallaxAnimation(containerRef, {
        el: columnLeftRef,
        val: -70,
        start: `top bottom`,
    });

    useParallaxAnimation(containerRef, {
        el: columnRightRef,
        val: -50,
        start: `top bottom`,
    });

    return (
        <section
            className={classNames(styles.container, {
                [styles.hasLogo]: blok.use_logo,
                [styles.hasExtraLargeHeadings]: blok.use_extra_large_headings,
            })}
            ref={containerRef}
        >
            {blok.use_logo && <Icons className={styles.logo} name="logo" />}

            <div className={styles.containerContent}>
                <div className={styles.columnRight} ref={columnRightRef}>
                    <div className={styles.heading}>
                        <RichText document={blok.title} />
                    </div>

                    {blok.image_right && (
                        <Media
                            className={styles.imageRight}
                            media={blok.image_right}
                        />
                    )}
                </div>

                <div className={styles.columnLeft} ref={columnLeftRef}>
                    {blok.image_left && (
                        <Media
                            className={styles.imageLeft}
                            media={blok.image_left}
                        />
                    )}

                    <div className={styles.body}>
                        <RichText document={blok.body} />
                    </div>
                </div>
            </div>
        </section>
    );
}
