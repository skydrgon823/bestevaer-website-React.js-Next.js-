import React from 'react';
import classNames from 'classnames';

import ButtonScrollDown from 'src/components/buttons/button-scroll-down/ButtonScrollDown';
import Media from 'src/components/media/Media';
import Logo from 'src/components/logo/Logo';

import styles from './HeroLogo.module.scss';

export default function HeroLogo({ className, blok }) {
    return (
        <div className={classNames(className, styles.container)}>
            <Media className={styles.media} media={blok.media} cover={true} />

            <Logo className={styles.logo} />

            {blok.show_scroll_down_button && (
                <ButtonScrollDown className={styles.buttonScrollDown} />
            )}
        </div>
    );
}
