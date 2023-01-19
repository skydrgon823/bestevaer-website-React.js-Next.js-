import React from 'react';
import classNames from 'classnames';

import ModelsListItem from 'src/components/models-list-item/ModelsListItem';
import RichText from 'src/components/rich-text/RichText';

import styles from './ModelsList.module.scss';

export default function ModelsList({ blok }) {
    return (
        <section className={styles.container}>
            {blok.intro && (
                <div className={styles.intro}>
                    <RichText document={blok.intro} />
                </div>
            )}

            <h2 className={styles.heading}>
                {blok.title}
            </h2>

            <ul className={styles.list}>
                {blok.items && blok.items.map((item) => (
                    <li
                        className={styles.listItem}
                        key={item.uuid}
                    >
                        <ModelsListItem item={item} />
                    </li>
                ))}

                <li className={styles.listItemQuote}>
                    <RichText document={blok.quote} />
                </li>
            </ul>
        </section>
    );
}