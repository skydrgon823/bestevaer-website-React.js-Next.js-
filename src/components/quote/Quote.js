import React, { useRef } from 'react';
import classNames from 'classnames';

import RichText from 'src/components/rich-text/RichText';

import useFadeUpAnimation from 'src/hooks/useFadeUpAnimation';

import styles from './Quote.module.scss';

export default function Quote({ blok }) {
    const containerRef = useRef(null);

    useFadeUpAnimation(containerRef, [containerRef]);

    return (
        <figure className={styles.container} ref={containerRef}>
            <blockquote className={styles.quote}>
                <RichText document={blok.quote} />
            </blockquote>

            <figcaption className={styles.author}>{blok.author}</figcaption>
        </figure>
    );
}
