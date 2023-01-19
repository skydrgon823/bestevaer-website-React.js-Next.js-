import React from 'react';
import classNames from 'classnames';

import styles from './ButtonPreview.module.scss';

export default function ButtonPreview({ slug }) {
    return (
        <a
            className={styles.button}
            href={`/api/exit-preview?slug=${slug}`}
        >
            Exit Preview Mode
        </a>
    );
}