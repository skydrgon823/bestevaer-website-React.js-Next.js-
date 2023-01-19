import React from 'react';
import classNames from 'classnames';

import RichText from 'src/components/rich-text/RichText';
import Icons from 'src/components/icons/Icons';
import Media from 'src/components/media/Media';

import styles from './LogoText.module.scss';

export default function LogoText({ blok }) {
    return (
        <section className={styles.container}>
            {/* <Icons
                className={styles.logo}
                name="logo"
            /> */}

            <div className={styles.title}>
                <RichText document={blok.title} />
            </div>

            <div className={styles.containerTextImage}>
                <div className={styles.text}>
                    <RichText document={blok.text} />
                </div>

                <Media className={styles.image} media={blok.image} />
            </div>
        </section>
    );
}
