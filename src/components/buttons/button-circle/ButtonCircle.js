import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { resolveLink } from 'src/utils/helpers';

import styles from './ButtonCircle.module.scss';

export default function ButtonCircle({ className, label, href }) {
    return (
        <Link href={resolveLink(href)}>
            <a className={classNames(className, styles.button)}>
                <span className={styles.span}>
                    {label}
                </span>
            </a>
        </Link>
    );
}
