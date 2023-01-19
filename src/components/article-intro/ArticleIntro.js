import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import RichText from 'src/components/rich-text/RichText';
import Image from 'src/components/image/Image';
import Icons from 'src/components/icons/Icons';

import { formatDate } from 'src/utils/helpers';

import styles from './ArticleIntro.module.scss';
import Media from '../media/Media';

export default function ArticleIntro({ hero, date, title, text }) {
    return (
        <header className={styles.container}>
            <Media className={styles.media} media={hero} />

            <div className={styles.containerCopy}>
                <Link href="/the-journey">
                    <a
                        className={styles.buttonBack}
                    >
                        <Icons
                            className={styles.icon}
                            name="arrow-stem"
                        />

                        Back to articles
                    </a>
                </Link>

                <time
                    className={styles.time}
                    dateTime={date}
                >
                    {formatDate(date)}
                </time>

                <h1 className={styles.heading}>
                    {title}
                </h1>

                <div className={styles.text}>
                    <RichText document={text} />
                </div>
            </div>
        </header>
    );
}