import React from 'react';
import classNames from 'classnames';

import styles from './Spinner.module.scss';

export default function Spinner({ className }) {
    return (
        <div className={classNames(className, styles.container)}>
            <span className={styles.spinner} />
        </div>
    );
}