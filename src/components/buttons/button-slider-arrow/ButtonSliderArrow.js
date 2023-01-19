import React from 'react';
import classNames from 'classnames';

import Icons from 'src/components/icons/Icons';

import styles from './ButtonSliderArrow.module.scss';

export default function ButtonSliderArrow({ cssClass, className, onClick, type }) {
    return (
        <button
            className={classNames(cssClass, className, styles.button, styles[type])}
            aria-label={`Go to ${type} item`}
            onClick={onClick}
        >
            <Icons
                className={styles.icon}
                name="arrow"
            />
        </button>
    );
}