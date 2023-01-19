import React, { useRef } from 'react';

import RichText from 'src/components/rich-text/RichText';
import Media from 'src/components/media/Media';

import useFadeUpAnimation from 'src/hooks/useFadeUpAnimation';
import useParallaxAnimation from 'src/hooks/useParallaxAnimation';

import styles from './TwoImagesText.module.scss';

export default function TwoImagesText({ blok }) {
    const columnLeftRef = useRef(null);
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    // useFadeUpAnimation(containerRef, [columnLeftRef, imageRef]);

    useParallaxAnimation(containerRef, {
        el: columnLeftRef,
        val: -40,
        start: `top bottom`,
    });

    useParallaxAnimation(containerRef, {
        el: imageRef,
        val: -80,
        start: `top bottom`,
    });

    return (
        <div className={styles.container} ref={containerRef}>
            <div className={styles.containerColumnLeft} ref={columnLeftRef}>
                <Media
                    className={styles.imageLeft}
                    media={blok.image_left}
                    desktop="750x0"
                    lazy={true}
                />

                <div className={styles.containerBody}>
                    <RichText document={blok.body} />
                </div>
            </div>

            <Media
                className={styles.imageRight}
                media={blok.image_right}
                desktop="1024x0"
                lazy={true}
                ref={imageRef}
            />
        </div>
    );
}
