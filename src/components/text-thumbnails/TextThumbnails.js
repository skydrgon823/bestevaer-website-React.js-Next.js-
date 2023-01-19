import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import RichText from 'src/components/rich-text/RichText';
import Media from 'src/components/media/Media';

import { resolveLink } from 'src/utils/helpers';

import stylesModelsListItem from '../models-list-item/ModelsListItem.module.scss';
import styles from './TextThumbnails.module.scss';

export default function TextThumbnails({ blok }) {
    return (
        <section className={styles.container}>
            <div className={styles.text}>
                <RichText document={blok.text} />
            </div>

            <ul className={styles.list}>
                {blok.links.length > 0 && blok.links.map((item) => (
                    <li
                        className={styles.listItem}
                        key={item._uid}
                    >
                        <Link href={resolveLink(item.link)}>
                            <a className={stylesModelsListItem.link}>
                                <Media
                                    className={stylesModelsListItem.thumbnail}
                                    media={item.image}
                                    cover={true}
                                    desktop="640x0"
                                />

                                <div className={stylesModelsListItem.name}>
                                    <RichText document={item.label} />
                                </div>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}