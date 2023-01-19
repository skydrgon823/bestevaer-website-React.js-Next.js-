import React from 'react';

import RichText from 'src/components/rich-text/RichText';

import styles from './GenericPage.module.scss';

export default function GenericPage({ blok }) {
    return (
        <div className={styles.container}>
            <div className={styles.containerBody}>
                <RichText document={blok.body} />
            </div>
        </div>
    );
}