import React from 'react';
import classNames from 'classnames';

import ButtonOutline from 'src/components/buttons/button-outline/ButtonOutline';
import RichText from 'src/components/rich-text/RichText';

import styles from './Banner.module.scss';

export default function Banner({ blok }) {
    return (
        <section className={styles.container}>
            <div className={styles.containerContent}>
                <div className={styles.copy}>
                    <RichText document={blok.copy} />
                </div>

                {blok.button.length > 0 && (
                    <ButtonOutline
                        className={styles.button}
                        href={blok.button[0].link}
                        label={blok.button[0].label}
                    />
                )}
            </div>
        </section>
    );
}