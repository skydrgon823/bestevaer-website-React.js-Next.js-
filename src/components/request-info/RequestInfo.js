import React from 'react';
import classNames from 'classnames';

import ButtonOutline from 'src/components/buttons/button-outline/ButtonOutline';
import RichText from 'src/components/rich-text/RichText';
import Media from 'src/components/media/Media';

import styles from './RequestInfo.module.scss';

export default function RequestInfo({ blok }) {
    return (
        <section className={styles.container}>
            <div className={styles.text}>
                <RichText document={blok.text} />

                {blok.button.length > 0 && (
                    <ButtonOutline
                        className={styles.button}
                        label={blok.button[0].label}
                        href={blok.button[0].link}
                    />
                )}
            </div>

            <div className={styles.containerContact}>
                <div className={styles.heading}>
                    <RichText document={blok.contact_title} />
                </div>

                <figure className={styles.figure}>
                    {blok.contact_image && (
                        <Media
                            className={styles.image}
                            media={blok.contact_image}
                        />
                    )}

                    <figcaption className={styles.caption}>
                        {blok.contact_name}
                    </figcaption>
                </figure>

                <div className={styles.containerLinks}>
                    <a
                        className={styles.link}
                        href={`tel:${blok.phone}`}
                    >
                        {blok.phone}
                    </a>

                    <a
                        className={styles.link}
                        href={`mailto:${blok.email}`}
                    >
                        {blok.email}
                    </a>
                </div>
            </div>
        </section>
    );
}