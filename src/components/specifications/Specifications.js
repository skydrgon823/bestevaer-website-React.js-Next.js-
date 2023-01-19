import React from 'react';
import classNames from 'classnames';

import styles from './Specifications.module.scss';

export default function Specifications({ blok }) {
    return (
        <section
            className={classNames(styles.container, {
                [styles.isGrey]: blok.link_label && blok.link_pdf,
            })}
        >
            <div className={styles.containerContent}>
                <h2 className={styles.heading}>{blok.title}</h2>

                <ul className={styles.list}>
                    {blok.list.length > 0 &&
                        blok.list.map((item) => (
                            <li className={styles.listItem} key={item._uid}>
                                <span className={styles.label}>
                                    <span>{item.label}</span>
                                </span>

                                {item.data}
                            </li>
                        ))}
                </ul>

                {blok.link_label && blok.link_pdf.filename && (
                    <a
                        className={styles.link}
                        href={blok.link_pdf.filename}
                        download
                        rel="noreferrer"
                        target="_blank"
                    >
                        {blok.link_label}
                    </a>
                )}
            </div>
        </section>
    );
}
