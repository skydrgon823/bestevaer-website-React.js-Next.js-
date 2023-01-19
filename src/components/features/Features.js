import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

import RichText from 'src/components/rich-text/RichText';
import Media from 'src/components/media/Media';

import styles from './Features.module.scss';

export default function Features({ blok }) {
    const textRefs = useRef([]);

    const [activeIndex, setActiveIndex] = useState(0);
    const [textHeights, setTextHeights] = useState([]);

    function handleClickButton(index) {
        setActiveIndex(index);
    }

    useEffect(() => {
        setTextHeights(textRefs.current.map((ref) => ref.offsetHeight));
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.heading}>
                <RichText document={blok.title} />
            </div>

            <div className={styles.containerContent}>
                <div className={styles.containerImage}>
                    <Media
                        className={styles.media}
                        media={blok.image}
                        cover={true}
                    />

                    <ol>
                        {blok.items.length > 0 && blok.items.map((item, index) => (
                            <li
                                className={styles.listItemButton}
                                style={{
                                    top: `${item.top_position}%` || 0,
                                    left: `${item.left_position}%` || 0,
                                }}
                                key={item._uid}
                            >
                                <button
                                    className={classNames(styles.button, {
                                        [styles.isActive]: activeIndex === index
                                    })}
                                    onClick={() => handleClickButton(index)}
                                >
                                    {(index < 9 ? '0' : '') + `${index + 1}`}
                                </button>
                            </li>
                        ))}
                    </ol>
                </div>

                <ul
                    className={styles.list}
                    style={{ height: `${textHeights[activeIndex]}px` }}
                >
                    {blok.items.length > 0 && blok.items.map((item, index) => (
                        <li
                            className={classNames(styles.listItem, {
                                [styles.isActive]: activeIndex === index
                            })}
                            ref={(ref) => textRefs.current[index] = ref}
                            key={item._uid}
                        >
                            <RichText document={item.text} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}