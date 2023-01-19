import React from 'react';
import classNames from 'classnames';

import RichText from 'src/components/rich-text/RichText';
import Media from 'src/components/media/Media';

import styles from './Visit.module.scss';

export default function Visit({ blok }) {
    return (
        <section className={styles.container}>
            <h2 className={styles.heading}>
                {blok.title}
            </h2>

            <div className={styles.containerContent}>
                <div className={styles.containerText}>
                    <RichText document={blok.text} />
                </div>

                <div className={styles.containerImages}>
                    <Media
                        className={styles.image}
                        media={blok.image_one}
                    />

                    <Media
                        className={styles.image}
                        media={blok.image_two}
                    />

                    <div className={styles.containerTextBottom}>
                        <RichText document={blok.bottom_text} />
                    </div>
                </div>
            </div>
        </section>
    );
}