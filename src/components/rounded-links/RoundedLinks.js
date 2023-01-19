import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { resolveLink } from 'src/utils/helpers';

import styles from './RoundedLinks.module.scss';

export default function RoundedLinks({ blok }) {
    return (
        <nav className={styles.container}>
            <ul className={styles.list}>
                {blok.items.length > 0 && blok.items.map((item) => (
                    <li
                        className={styles.listItem}
                        key={item._uid}
                    >
                        <Link href={resolveLink(item.link)}>
                            <a className={styles.link}>
                                {item.label}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}