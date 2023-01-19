import React from 'react';
import classNames from 'classnames';
import gsap from 'gsap';

import ButtonOutline from 'src/components/buttons/button-outline/ButtonOutline';
import RichText from 'src/components/rich-text/RichText';
import SbLink from 'src/components/sb-link/SbLink';
import Media from 'src/components/media/Media';
import Icons from 'src/components/icons/Icons';

import styles from './MenuDrawer.module.scss';

export default function MenuDrawer({ isOpen, closeLabel, links, customLink, button, onClickButton, onClose }) {
    return (
        <div
            className={classNames(styles.container, {
                [styles.isOpen]: isOpen
            })}
        >
            <button
                className={styles.buttonClose}
                onClick={onClose}
            >
                <Icons
                    className={styles.icon}
                    name="arrow"
                />

                {closeLabel}
            </button>

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
    );
}