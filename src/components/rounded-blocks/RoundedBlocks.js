import React, { useRef } from 'react';
import classNames from 'classnames';

import RichText from 'src/components/rich-text/RichText';

import useFadeUpAnimation from 'src/hooks/useFadeUpAnimation';

import styles from './RoundedBlocks.module.scss';

export default function RoundedBlocks({ blok }) {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const listRef = useRef(null);

    useFadeUpAnimation(containerRef, [titleRef, listRef]);

    return (
        <section className={styles.container} ref={containerRef}>
            <div className={styles.title} ref={titleRef}>
                <RichText document={blok.title} />
            </div>

            <ul className={styles.list} ref={listRef}>
                {blok.blocks.length > 0 &&
                    blok.blocks.map((block) => (
                        <li className={styles.listItem} key={block._uid}>
                            <RichText document={block.text} />
                        </li>
                    ))}
            </ul>
        </section>
    );
}
