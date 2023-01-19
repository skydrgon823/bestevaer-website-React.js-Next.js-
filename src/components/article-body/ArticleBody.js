import React from 'react';

import DynamicComponent from 'src/components/DynamicComponent';

import styles from './ArticleBody.module.scss';

export default function ArticleBody({ content }) {
    return (
        <div className={styles.container}>
            <DynamicComponent blok={content} />
        </div>
    );
}