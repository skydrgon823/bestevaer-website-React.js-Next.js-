import React from 'react';
import classNames from 'classnames';

import Tag from 'src/components/tag/Tag';

import styles from './Filters.module.scss';

export default function Filters({ className, tags, activeFilter, onClickTag }) {
    return (
        <div className={classNames(className, styles.container)}>
            <span>
                Filter articles
            </span>

            <ul
                className={styles.list}
                id="filters"
            >
                <li className={styles.listItem}>
                    <Tag
                        name={'all'}
                        isActive={activeFilter === null}
                        onClick={() => onClickTag(null)}
                    />
                </li>

                {tags.map((tag) => (
                    <li
                        className={styles.listItem}
                        key={tag.name}
                    >
                        <Tag
                            name={tag.name}
                            isActive={tag.name === activeFilter}
                            onClick={() => onClickTag(tag.name)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}