import React from 'react';
import classNames from 'classnames';

import styles from './InputCheckbox.module.scss';

export default function InputCheckbox({ children, className }) {
    return (
        <div className={classNames(className, styles.container)}>
            {children}

            <div className={styles.checkbox} />
        </div>
    );
}