import React from 'react';
import classNames from 'classnames';

import RichText from 'src/components/rich-text/RichText';
import Media from 'src/components/media/Media';

import styles from './TitleTextImage.module.scss';

export default function TitleTextImage({ blok }) {
    return (
        <section className={styles.container}>
            <div className={styles.heading}>
                <RichText document={blok.title} />
            </div>

            <div className={classNames(styles.containerContent, {
                [styles.isReversed]: blok.layout === 'image_left'
            })}>
                <div className={styles.text}>
                    <RichText document={blok.text} />
                </div>

                <Media
                    className={styles.image}
                    media={blok.image}
                />
            </div>
        </section>
    );
}