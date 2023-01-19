import React from 'react';
import classNames from 'classnames';

import RichText from 'src/components/rich-text/RichText';
import Media from 'src/components/media/Media';

import styles from './TextTwoImages.module.scss';

export default function TextTwoImages({ blok }) {
    return (
        <section className={styles.container}>
            <div className={styles.text}>
                <RichText document={blok.text} />
            </div>

            <figure className={styles.figure}>
                {blok.image_one && (
                    <Media
                        className={styles.image}
                        media={blok.image_one}
                    />
                )}

                <figcaption className={styles.caption}>
                    {blok.image_one_caption}
                </figcaption>
            </figure>

            <figure className={styles.figure}>
                {blok.image_two && (
                    <Media
                        className={styles.image}
                        media={blok.image_two}
                    />
                )}

                <figcaption className={styles.caption}>
                    {blok.image_two_caption}
                </figcaption>
            </figure>
        </section>
    );
}