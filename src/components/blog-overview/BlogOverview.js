import React from 'react';
import classNames from 'classnames';

import ArticlePreview from 'src/components/article-preview/ArticlePreview';

import styles from './BlogOverview.module.scss';

export default function BlogOverview({ articles, onClickTag }) {
    return (
        <div className={styles.container}>
            {articles.map((article, index) => (
                <ArticlePreview
                    className={styles.articlePreview}
                    layout={getLayout(index + 1)}
                    slug={article.slug}
                    thumbnail={article.content.thumbnail}
                    date={article.first_published_at}
                    title={article.content.title}
                    text={article.content.overview_text}
                    tags={article.tag_list}
                    onClickTag={onClickTag}
                    key={article.uuid}
                />
            ))}
        </div>
    );
}

function getLayout(index) {
    switch (true) {
        case ((index - 2) % 3 === 0):
            return 'layoutTwo';
        case ((index - 4) % 4 === 0):
            return 'layoutThree';
        default:
            return 'layoutOne';
    }
}