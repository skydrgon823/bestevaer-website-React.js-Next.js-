import React from 'react';
import classNames from 'classnames';

import RichText from 'src/components/rich-text/RichText';
import Media from 'src/components/media/Media';

import styles from './ImagesQuote.module.scss';

export default function ImagesQuote({ blok }) {
    return (
        <div className={styles.container}>
            <div className={styles.containerContent}>
                <figure className={styles.containerImageLeft}>
                    <Media
                        className={styles.imageLeft}
                        media={blok.image_left}
                    />

                    <figcaption className={styles.caption}>
                        <RichText document={blok.text_left} />
                    </figcaption>
                </figure>

                <Media
                    className={styles.imageRight}
                    media={blok.image_right}
                />

                <blockquote className={styles.quote}>
                    <RichText document={blok.quote} />
                </blockquote>
            </div>
        </div>
    );
}