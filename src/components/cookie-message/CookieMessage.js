import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import ButtonOutline from 'src/components/buttons/button-outline/ButtonOutline';

import { getCookie, setCookie } from 'src/utils/cookies';
import { COOKIE_ACCEPTED } from 'src/constants/cookies';

import styles from './CookieMessage.module.scss';

export default function CookieMessage({ blok }) {
    const [isAccepted, setIsAccepted] = useState(true);

    function handleClickButtonAccept() {
        setCookie(COOKIE_ACCEPTED, true, 365);
        setIsAccepted(true);
    }

    useEffect(() => {
        setIsAccepted(!!getCookie(COOKIE_ACCEPTED));
    }, []);

    return !isAccepted ? (
        <div className={styles.container}>
            <div className={styles.text}>
                {blok.text}
            </div>

            <div className={styles.containerButtons}>
                <ButtonOutline
                    className={styles.buttonInfo}
                    href={blok.button_info[0].link}
                    label={blok.button_info[0].label}
                    target="_blank"
                />

                <ButtonOutline
                    className={styles.buttonAccept}
                    label={blok.label_accept}
                    onClick={handleClickButtonAccept}
                />
            </div>
        </div>
    ) : null;
}