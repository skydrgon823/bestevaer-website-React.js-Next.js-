import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import ButtonOutline from 'src/components/buttons/button-outline/ButtonOutline';
import RichText from 'src/components/rich-text/RichText';
import Media from 'src/components/media/Media';

import styles from './YachtTypePreviews.module.scss';

export default function YachtTypePreviews({ items }) {
    return (
        <ul className={styles.list}>
            {items.length > 0 && items.map((item) => (
                <li
                    className={styles.listItem}
                    key={item.uuid}
                >
                    <article className={styles.container}>
                        <div className={styles.containerText}>
                            <h3 className={styles.heading}>
                                <span>{item.content.name}</span> {item.content.type} {item.content.number}
                            </h3>

                            <div className={styles.text}>
                                <RichText document={item.content.description} />
                            </div>

                            <ul className={styles.listSpecs}>
                                {item.content.specs.length > 0 && item.content.specs.map((item) => (
                                    <li
                                        className={styles.listItemSpecs}
                                        key={item._uid}
                                    >
                                        <span className={styles.label}>
                                            <span>
                                                {item.label}
                                            </span>
                                        </span>

                                        <span className={styles.data}>
                                            {item.data}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <ButtonOutline
                                className={styles.button}
                                href={`/${item.full_slug}`}
                                label={item.content.button_label}
                            />
                        </div>

                        <Link href={`/${item.full_slug}`}>
                            <a className={styles.thumbnail}>
                                <Media media={item.content.thumbnail} />
                            </a>
                        </Link>
                    </article>
                </li>
            ))}
        </ul>
    );
}