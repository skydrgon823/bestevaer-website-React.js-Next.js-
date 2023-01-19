import React from 'react';
import classNames from 'classnames';

import ButtonScrollDown from 'src/components/buttons/button-scroll-down/ButtonScrollDown';
import RichText from 'src/components/rich-text/RichText';
import Icons from 'src/components/icons/Icons';
import Media from 'src/components/media/Media';

import styles from './TitleImageLogo.module.scss';

export default function TitleImageLogo({ blok }) {
    return (
        <section className={styles.container}>
            <div className={styles.containerImage}>
                <Media
                    className={styles.image}
                    media={blok.image}
                    cover={true}
                />

                <Icons className={styles.logo} name="logo" />
            </div>

            <div className={styles.containerContent}>
                <div className={styles.title}>
                    <RichText document={blok.title} />
                </div>
            </div>

            <ButtonScrollDown className={styles.button} />
        </section>
    );
}
