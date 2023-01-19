import React, { useRef } from 'react';
import classNames from 'classnames';

import RichText from 'src/components/rich-text/RichText';
import Media from 'src/components/media/Media';

import useParallaxAnimation from 'src/hooks/useParallaxAnimation';

import styles from './QuoteImage.module.scss';

export default function QuoteImage({ blok }) {
    const containerImageRef = useRef(null);
    const containerRef = useRef(null);
    const quoteRef = useRef(null);

    useParallaxAnimation(containerRef, {
        el: quoteRef,
        val: -50,
        start: `top bottom`,
    });

    useParallaxAnimation(containerRef, {
        el: containerImageRef,
        val: -80,
        start: `top bottom`,
    });

    return (
        <div className={styles.container} ref={containerRef}>
            <blockquote className={styles.quote} ref={quoteRef}>
                <RichText document={blok.quote} />
            </blockquote>

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
