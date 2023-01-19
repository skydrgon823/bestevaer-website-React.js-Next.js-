import React from 'react';
import classNames from 'classnames';

import SbLink from 'src/components/sb-link/SbLink';

import styles from './LinksList.module.scss';

export default function LinksList({ blok }) {
    return (
        <section className={styles.container}>
            <h2 className={styles.heading}>
                {blok.title}
            </h2>

            <ul className={styles.list}>
                {blok.items && blok.items.map((item) => (
                    <li
                        className={styles.listItem}
                        key={item._uid}
                    >
                        {item.link.cached_url ? (
                            <SbLink
                                className={styles.link}
                                href={item.link}
                            >
                                {item.label}
                            </SbLink>
                        ) : (
                            item.label
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
}