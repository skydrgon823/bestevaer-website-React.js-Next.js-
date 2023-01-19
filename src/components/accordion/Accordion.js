import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import gsap from 'gsap';

import RichText from 'src/components/rich-text/RichText';
import Icons from 'src/components/icons/Icons';

import styles from './Accordion.module.scss';

export default function Accordion({ blok }) {
    const contentRef = useRef([]);
    const heightsRef = useRef([]);

    const [activeItem, setActiveItem] = useState(null);
    const [height, setHeight] = useState(0);

    function handleClickButton(id) {
        setActiveItem(activeItem === id ? null : id);
    }

    useEffect(() => {
        heightsRef.current.forEach((item, index) => {
            if (item.id === activeItem) {
                gsap.to(contentRef.current[index], {
                    height: `${item.height}px`,
                    ease: 'power4.inOut',
                    duration: 0.5
                });

                gsap.to(item.el, {
                    autoAlpha: 1,
                    ease: 'linear',
                    duration: 0.2,
                    delay: 0.4
                });
            } else {
                gsap.to(item.el, {
                    autoAlpha: 0,
                    ease: 'linear',
                    duration: 0.2
                });

                gsap.to(contentRef.current[index], {
                    height: '0px',
                    ease: 'power4.inOut',
                    duration: 0.5,
                    delay: 0.1
                });
            }
        });
    }, [activeItem]);

    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {blok.items.map((item, index) => (
                    <li
                        className={styles.listItem}
                        key={item._uid}
                    >
                        <button
                            className={styles.button}
                            onClick={() => handleClickButton(item._uid)}
                        >
                            {item.title}

                            <Icons
                                className={classNames(styles.icon, {
                                    [styles.isActive]: activeItem === item._uid
                                })}
                                name="arrow"
                            />
                        </button>

                        <div
                            className={styles.containerContent}
                            ref={(ref) => contentRef.current[index] = ref}
                        >
                            <div
                                className={styles.containerBody}
                                ref={(ref) => heightsRef.current[index] = {
                                    id: item._uid,
                                    el: ref,
                                    height: ref?.offsetHeight
                                }}
                            >
                                <RichText document={item.body} />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}