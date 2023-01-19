import React, { useRef } from 'react';
import classNames from 'classnames';

import Media from 'src/components/media/Media';

import useParallaxAnimation from 'src/hooks/useParallaxAnimation';

import styles from './ImageCaption.module.scss';

export default function ImageCaption({ blok }) {
    const containerImageRef = useRef(null);
    const containerRef = useRef(null);

    useParallaxAnimation(containerRef, {
        el: containerImageRef,
        val: -70,
        start: `top bottom`,
    });

    return (
        <div className={styles.container} ref={containerRef}>
            <figure className={styles.containerImage} ref={containerImageRef}>
                <Media
                    className={styles.image}
                    media={blok.image}
                    lazy={true}
                />

                <figcaption className={styles.caption}>
                    {blok.caption}
                </figcaption>
            </figure>
        </div>
    );
}
