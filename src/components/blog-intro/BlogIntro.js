import React from 'react';
import classNames from 'classnames';

import ArticlePreview from 'src/components/article-preview/ArticlePreview';
import RichText from 'src/components/rich-text/RichText';
import Icons from 'src/components/icons/Icons';

import styles from './BlogIntro.module.scss';

export default function BlogIntro({ title, intro, article, onClickTag }) {
    return (
        <header className={styles.container}>
            <Icons
                className={styles.logo}
                name="logo"
            />

            <div className={styles.containerContent}>
                <div className={styles.containerCopy}>
                    <h1 className={styles.heading}>
                        {title}
                    </h1>

                    <div className={styles.intro}>
                        <RichText document={intro} />
                    </div>
                </div>

                <ArticlePreview
                    className={styles.articlePreview}
                    layout="layoutFour"
                    slug={article.slug}
                    thumbnail={article.content.thumbnail}
                    date={article.first_published_at}
                    title={article.content.title}
                    text={article.content.overview_text}
                    tags={article.tag_list}
                    onClickTag={onClickTag}
                />
            </div>
        </header>
    );
}