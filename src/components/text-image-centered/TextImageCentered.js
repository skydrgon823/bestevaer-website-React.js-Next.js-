import React, { useRef } from 'react';

import RichText from 'src/components/rich-text/RichText';
import Media from 'src/components/media/Media';

import useFadeUpAnimation from 'src/hooks/useFadeUpAnimation';

import styles from './TextImageCentered.module.scss';

export default function TextImageCentered({ blok }) {
    const containerCopyRef = useRef(null);
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useFadeUpAnimation(containerRef, [containerCopyRef, imageRef]);

    return (
        <section className={styles.container} ref={containerRef}>
            <div className={styles.containerCopy} ref={containerCopyRef}>
                <h1 className={styles.heading}>{blok.title}</h1>

                <div className={styles.containerBody}>
                    <RichText document={blok.body} />
                </div>
            </div>

            <Media
                className={styles.image}
                media={blok.image}
                desktop="1024x0"
                lazy={true}
                ref={imageRef}
            />
        </section>
    );
}
