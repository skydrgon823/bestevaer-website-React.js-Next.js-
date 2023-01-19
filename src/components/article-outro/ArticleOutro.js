import React, { useState } from 'react';
import classNames from 'classnames';

import TagList from 'src/components/tag-list/TagList';

import styles from './ArticleOutro.module.scss';

export default function ArticleOutro({ tags, share, onClickTag }) {
    const [showShareButtons, setShowShareButtons] = useState(false);

    function handleClickButton() {
        setShowShareButtons((prevState) => !prevState);
    }

    return (
        <div className={styles.container}>
            <TagList
                tags={tags}
                onClickTag={onClickTag}
            />

            <div className={styles.containerShare}>
                <button
                    className={styles.buttonToggle}
                    onClick={handleClickButton}
                >
                    Share now
                </button>

                <div className={classNames(styles.containerShareButtons, {
                    [styles.isVisible]: showShareButtons
                })}>
                    <a
                        className={styles.buttonShare}
                        href={`https://www.facebook.com/sharer.php?u=${share.url}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Facebook
                    </a>

                    <a
                        className={styles.buttonShare}
                        href={`https://twitter.com/intent/tweet?url=${share.url}&text=${share.text}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Twitter
                    </a>
                </div>
            </div>
        </div>
    );
}