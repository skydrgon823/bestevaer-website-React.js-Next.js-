import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import Icons from 'src/components/icons/Icons';

import styles from './Breadcrumbs.module.scss';

export default function Breadcrumbs({ className, items }) {
    return (
        <ul className={classNames(className, styles.list)}>
            {items.map((item, index) => (
                <li
                    className={styles.listItem}
                    key={index}
                >
                    {index === 0 && (
                        <Icons
                            className={styles.icon}
                            name="arrow-stem"
                        />
                    )}

                    {item.href ? (
                        <Link href={item.href}>
                            <a className={styles.link}>
                                {item.label}
                            </a>
                        </Link>
                    ) : (
                        <span>
                            {item.label}
                        </span>
                    )}

                    {index > 0 && index < items.length - 1 && (
                        <span className={styles.divider}>
                            /
                        </span>
                    )}
                </li>
            ))}
        </ul>
    );
}