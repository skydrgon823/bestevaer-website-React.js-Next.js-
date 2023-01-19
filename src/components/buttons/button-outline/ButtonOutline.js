import React from 'react';
import classNames from 'classnames';

import SbLink from 'src/components/sb-link/SbLink';

import styles from './ButtonOutline.module.scss';

export default function ButtonOutline({ className, label, href, onClick }) {
    return href ? (
        <SbLink
            className={classNames(className, styles.button)}
            label={label}
            href={href}
            onClick={onClick}
        />
    ) : (
        <button
            className={classNames(className, styles.button)}
            onClick={onClick}
        >
            {label}
        </button>
    );
}