import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

import ButtonOutline from 'src/components/buttons/button-outline/ButtonOutline';
import RichText from 'src/components/rich-text/RichText';
import SbLink from 'src/components/sb-link/SbLink';
import Media from 'src/components/media/Media';

import styles from './MenuOverlay.module.scss';

export default function MenuOverlay({ isOpen, offset, closeLabel, typography, links, customLink, button, onClickButton, onClose, onTransitionedOut }) {
    const backgroundRef = useRef(null);
    const containerRef = useRef(null);
    const tlRef = useRef(null);

    function handleClickButtonClose() {
        onClose();
    }

    useEffect(() => {
        tlRef.current = gsap.timeline({
            paused: true,
            onReverseComplete() {
                onTransitionedOut();
            }
        });

        tlRef.current.fromTo(
            containerRef.current,
            { y: '-100%' },
            {
                y: '0%',
                ease: 'power4.inOut',
                duration: 0.7
            }
        );

        tlRef.current.fromTo(
            backgroundRef.current,
            { alpha: 0 },
            {
                alpha: 1,
                ease: 'linear',
                duration: 0.15
            }
        );

        return () => {
            if (tlRef.current) {
                tlRef.current.kill();
                tlRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        (isOpen)
            ? tlRef.current.play()
            : tlRef.current.reverse();
    }, [isOpen]);

    useEffect(() => {
        containerRef.current.focus();
    }, []);

    return (
        <div
            className={styles.container}
            style={{ top: offset && `${offset}px` }}
            tabIndex="0"
            ref={containerRef}
        >
            <button
                className={styles.background}
                aria-label="Close overlay"
                onClick={handleClickButtonClose}
                ref={backgroundRef}
            />

            <div className={styles.containerContent}>
                <button
                    className={styles.buttonClose}
                    onClick={handleClickButtonClose}
                >
                    <span className={styles.iconClose}>
                        <span className={styles.line} />
                        <span className={styles.line} />
                    </span>

                    <span className={styles.labelClose}>
                        {closeLabel}
                    </span>
                </button>

                <div className={styles.typography}>
                    {typography}
                </div>

                <div className={styles.containerLinks}>
                    <ul className={styles.list}>
                        {links.map((link) => (
                            <li
                                className={styles.listItem}
                                key={link._uid}
                            >
                                <SbLink
                                    className={styles.link}
                                    href={link.link}
                                    onClick={onClickButton}
                                >
                                    <Media
                                        className={styles.image}
                                        media={link.image}
                                        lazy={true}
                                    />

                                    <span className={styles.labelLink}>
                                        <RichText document={link.label} />
                                    </span>
                                </SbLink>
                            </li>
                        ))}
                    </ul>

                    <SbLink
                        className={styles.linkCustom}
                        label={customLink[0].label}
                        href={customLink[0].link}
                        onClick={onClickButton}
                    />

                    <ButtonOutline
                        className={styles.buttonOutline}
                        label={button[0].label}
                        href={button[0].link}
                        onClick={onClickButton}
                    />
                </div>
            </div>
        </div>
    );
}