import React from 'react';
import classNames from 'classnames';

import styles from './PageNav.module.scss';

export default function PageNav({ items, onClickButton }) {
    return (
        <ul className={styles.list}>
            {items.map((item, index) => (
                <li
                    className={styles.listItem}
                    key={item._uid}
                >
                    <button
                        className={styles.button}
                        onClick={() => onClickButton(index)}
                    >
                        {item.label}
                    </button>
                </li>
            ))}
        </ul>
    );
}