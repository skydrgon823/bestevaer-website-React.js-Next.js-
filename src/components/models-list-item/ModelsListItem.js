import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import Media from 'src/components/media/Media';

import styles from './ModelsListItem.module.scss';

export default function ModelsListItem({ className, item }) {
    return (
        <Link href={`/fleet/models/${item.slug}`}>
            <a className={classNames(className, styles.link)}>
                <Media
                    className={styles.thumbnail}
                    media={item.content.thumbnail}
                    cover={true}
                    desktop="640x0"
                />

                <div className={styles.name}>
                    {item.content.label}
                </div>

                {item.content.type}
            </a>
        </Link>
    );
}