import React from 'react';
import classNames from 'classnames';

import RichText from 'src/components/rich-text/RichText';

import styles from './LargeText.module.scss';

export default function LargeText({ blok }) {
    return (
        <div className={styles.container}>
            <RichText document={blok.text} />
        </div>
    );
}