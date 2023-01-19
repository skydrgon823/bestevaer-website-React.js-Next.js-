import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import RichText from 'src/components/rich-text/RichText';
import TagList from 'src/components/tag-list/TagList';
import Media from 'src/components/media/Media';

import { formatDate } from 'src/utils/helpers';

import styles from './ArticlePreview.module.scss';

export default function ArticlePreview({ className, layout, slug, thumbnail, date, title, text, tags, onClickTag }) {
    return (
        <article className={classNames(className, styles[layout])}>
            <Link href={`/articles/${slug}`}>
                <a className={styles.linkThumbnail}>
                    <Media
                        className={styles.thumbnail}
                        media={thumbnail}
                    />
                </a>
            </Link>

            <div className={styles.containerCopy}>
                <div>
                    <time
                        className={styles.time}
                        dateTime={date}
                    >
                        {formatDate(date)}
                    </time>

                    <Link href={`/articles/${slug}`}>
                        <a>
                            <h2 className={styles.heading}>
                                {title}
                            </h2>
                        </a>
                    </Link>
                </div>

                <div className={styles.containerText}>
                    <div className={styles.text}>
                        <RichText document={text} />
                    </div>

                    <Link href={`/articles/${slug}`}>
                        <a
                            className={styles.link}
                            aria-label="Open the article"
                        >
                            Read more
                        </a>
                    </Link>

                    <TagList
                        tags={tags}
                        onClickTag={onClickTag}
                    />
                </div>
            </div>
        </article>
    );
}