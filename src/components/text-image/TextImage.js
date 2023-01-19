import React, { useRef } from 'react';
import classNames from 'classnames';

import Media from 'src/components/media/Media';
import RichText from 'src/components/rich-text/RichText';

import useFadeUpAnimation from 'src/hooks/useFadeUpAnimation';

import styles from './TextImage.module.scss';

export default function TextImage({ blok }) {
    const containerCopyRef = useRef(null);
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useFadeUpAnimation(containerRef, [containerCopyRef, imageRef]);

    return (
        <section
            className={classNames(styles.container, {
                [styles.isFlipped]: blok.flip_layout,
            })}
            ref={containerRef}
        >
            <div className={styles.containerCopy} ref={containerCopyRef}>
                <h2 className={styles.heading}>{blok.title}</h2>

                <div className={styles.body}>
                    <RichText document={blok.body} />
                </div>
            </div>

            {blok.image && (
                <Media
                    className={styles.image}
                    media={blok.image}
                    desktop="1440x0"
                    lazy={true}
                    ref={imageRef}
                />
            )}
        </section>
    );
}
