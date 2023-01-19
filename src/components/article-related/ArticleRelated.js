import React from 'react';
import classNames from 'classnames';

import ArticlePreview from 'src/components/article-preview/ArticlePreview';

import styles from './ArticleRelated.module.scss';

export default function ArticleRelated({ className, articles, onClickTag }) {
    return (
        <section className={classNames(className, styles.container)}>
            <h3 className={styles.heading}>Related articles</h3>

            <div className={styles.containerArticles}>
                {articles.length > 0 &&
                    articles
                        .slice(0, 2)
                        .map((article, index) => (
                            <ArticlePreview
                                layout={
                                    index === 1 ? 'layoutThree' : 'layoutOne'
                                }
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
        </section>
    );
}
