import React from 'react';
import classNames from 'classnames';

import ButtonScrollDown from 'src/components/buttons/button-scroll-down/ButtonScrollDown';
import RichText from 'src/components/rich-text/RichText';
import Icons from 'src/components/icons/Icons';
import Media from 'src/components/media/Media';

import styles from './YachtTypeIntro.module.scss';

export default function YachtTypeIntro({ image, title, description }) {
    return (
        <header className={styles.container}>
            <Icons
                className={styles.logo}
                name="logo"
            />

            <div className={styles.containerContent}>
                <Media
                    className={styles.image}
                    media={image}
                />

                <h1 className={styles.heading}>
                    {title}
                </h1>
            </div>

            <ButtonScrollDown className={styles.button} />

            <div className={styles.text}>
                <RichText document={description} />
            </div>
        </header>
    );
}