import React from 'react';
import classNames from 'classnames';

import styles from './Tag.module.scss';

export default function Tag({ className, name, isActive, onClick }) {
    function handleClick() {
        onClick(name);
    }

    return (
        <button
            className={classNames(className, styles.button, {
                [styles.isActive]: isActive
            })}
            onClick={handleClick}
        >
            {name}
        </button>
    );
}