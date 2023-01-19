import React from 'react';
import classNames from 'classnames';

import styles from './ButtonBurger.module.scss';

export default function ButtonBurger({ className, isActive, onClick }) {
    return (
        <button
            className={classNames(className, styles.button, {
                [styles.isActive]: isActive
            })}
            onClick={onClick}
        >
            Menu

            <span className={styles.burger}>
                <span className={styles.line} />
                <span className={styles.line} />
                <span className={styles.line} />
            </span>
        </button>
    );
}