import React from 'react';
import classNames from 'classnames';

import ButtonOutline from 'src/components/buttons/button-outline/ButtonOutline';
import RichText from 'src/components/rich-text/RichText';
import Media from 'src/components/media/Media';

import styles from './TitleTextButtonImage.module.scss';

export default function TitleTextButtonImage({ blok }) {
    return (
        <section className={styles.container}>
            <div className={styles.heading}>
                <RichText document={blok.title} />
            </div>

            <div className={styles.containerContent}>
                <div className={styles.containerText}>
                    <div className={styles.text}>
                        <RichText document={blok.text} />
                    </div>

                    {blok.button.length > 0 && (
                        <ButtonOutline
                            className={styles.button}
                            href={blok.button[0].link}
                            label={blok.button[0].label}
                        />
                    )}
                </div>

                <Media
                    className={styles.image}
                    media={blok.image}
                />
            </div>
        </section>
    );
}