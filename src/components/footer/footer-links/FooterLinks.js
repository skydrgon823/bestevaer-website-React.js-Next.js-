import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import SbLink from 'src/components/sb-link/SbLink';

import styles from './FooterLinks.module.scss';

export default function FooterLinks({ className, data }) {
    return (
        <ul className={classNames(className)}>
            {data.map((link) => (
                <li
                    className={styles.listItem}
                    key={link._uid}
                >
                    <SbLink
                        className={styles.link}
                        label={link.label}
                        href={link.link}
                    />

                    {link.nestable_links.length > 0 && (
                        <ul className={styles.list}>
                            {link.nestable_links.map((nestedLink) => (
                                <li
                                    className={styles.listItemNested}
                                    key={nestedLink._uid}
                                >
                                    <SbLink
                                        className={styles.link}
                                        label={nestedLink.label}
                                        href={nestedLink.link}
                                    />
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
}