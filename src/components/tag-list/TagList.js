import React from 'react';
import classNames from 'classnames';

import Tag from 'src/components/tag/Tag';

import styles from './TagList.module.scss';

export default function TagList({ className, tags, onClickTag }) {
    return tags.length > 0 && (
        <ul className={classNames(className, styles.list)}>
            {tags.map((tag, index) => (
                <li
                    className={styles.listItem}
                    key={index}
                >
                    <Tag
                        name={tag}
                        onClick={onClickTag}
                    />
                </li>
            ))}
        </ul>
    );
}