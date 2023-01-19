import React from 'react';
import classNames from 'classnames';

import styles from './InputTextArea.module.scss';

export default function InputTextArea({ children, className, value, placeholder }) {
    return (
        // <textarea
        //     className={classNames(className, styles.container)}
        //     placeholder={placeholder}
        // >
        //     {value}
        // </textarea>
        <div className={classNames(className, styles.container)}>
            {children}
        </div>
    );
}