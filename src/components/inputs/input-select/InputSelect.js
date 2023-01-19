import React from 'react';
import classNames from 'classnames';

import Icons from 'src/components/icons/Icons';

import styles from './InputSelect.module.scss';

export default function InputSelect({ children, className }) {
    return (
        <div className={classNames(className, styles.container)}>
            {children}

            <Icons className={styles.icon} name="arrow" />
        </div>
    );
}
