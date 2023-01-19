import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import ButtonOutline from 'src/components/buttons/button-outline/ButtonOutline';
import RichText from 'src/components/rich-text/RichText';
import Media from 'src/components/media/Media';

import { resolveLink } from 'src/utils/helpers';

import stylesModelsListItem from '../models-list-item/ModelsListItem.module.scss';
import styles from './FleetList.module.scss';

export default function FleetList({ blok }) {
    return (
        <section className={styles.container}>
            <div className={styles.heading}>
                <RichText document={blok.title} />
            </div>

            <ul className={styles.list}>
                {blok.items.length > 0 && blok.items.map((item) => (
                    <li
                        className={styles.listItem}
                        key={item._uid}
                    >
                        <Link href={resolveLink(item.link)}>
                            <a className={stylesModelsListItem.link}>
                                <Media
                                    className={stylesModelsListItem.thumbnail}
                                    media={item.thumbnail}
                                    desktop="640x0"
                                    cover={true}
                                />

                                <div className={stylesModelsListItem.name}>
                                    {item.label}
                                </div>

                                {item.type}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>

            {blok?.button?.length > 0 && (
                <ButtonOutline
                    className={styles.button}
                    href={blok.button[0].link}
                    label={blok.button[0].label}
                />
            )}
        </section>
    );
}