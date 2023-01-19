import React from 'react';
import classNames from 'classnames';

import ButtonScrollDown from 'src/components/buttons/button-scroll-down/ButtonScrollDown';
import RichText from 'src/components/rich-text/RichText';
import Icons from 'src/components/icons/Icons';
import Media from 'src/components/media/Media';

import styles from './HeroTitle.module.scss';

export default function HeroTitle({ blok }) {
    return (
        <header className={styles.container}>
            <Icons
                className={styles.logo}
                name="logo"
            />

            <div className={styles.containerImage}>
                <Media
                    className={styles.image}
                    media={blok.image}
                    cover={true}
                />

                <h1 className={styles.heading}>
                    {blok.title}
                </h1>

                <ButtonScrollDown className={styles.buttonScrollDown} />
            </div>

            <div className={styles.description}>
                <RichText document={blok.description} />
            </div>
        </header>
    );
}