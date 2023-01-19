import React from 'react';
import classNames from 'classnames';

import Icons from 'src/components/icons/Icons';

import styles from './ButtonSocial.module.scss';

export default function ButtonSocial({ className, name, href, target }) {
    return (
        <a
            className={classNames(className, styles.link)}
            href={href}
            target={target || null}
            rel={target ? 'noreferrer' : null}
            aria-label={`Open link to ${name}`}
        >
            <Icons
                className={styles.icon}
                name={name}
            />
        </a>
    );
}