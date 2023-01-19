import React from 'react';
import classNames from 'classnames';

import styles from './InputRounded.module.scss';

export default function InputRounded({ children, className, type, name, placeholder, value, isLarge, onChange }) {
    function handleChange({ target }) {
        if (onChange) {
            onChange(target.value);
        }
    }

    return (
        <div className={classNames(className, styles.input, {
            [styles.isLarge]: isLarge
        })}>
            {children}
        </div>

        // <input
        //     className={classNames(className, styles.input, {
        //         [styles.isLarge]: isLarge
        //     })}
        //     type={type}
        //     name={name}
        //     placeholder={placeholder}
        //     value={value}
        //     onChange={handleChange}
        // />
    );
}