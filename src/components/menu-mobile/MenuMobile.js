import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Link from 'next/link';

import ButtonBurger from 'src/components/buttons/button-burger/ButtonBurger';
import MenuDrawer from 'src/components/menu-drawer/MenuDrawer';
import SbLink from 'src/components/sb-link/SbLink';
import Icons from 'src/components/icons/Icons';

import { scrollLock, resolveLink } from 'src/utils/helpers';

import styles from './MenuMobile.module.scss';

export default function MenuMobile({ blok }) {
    const [activeDrawer, setActiveDrawer] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    function handleClickButton() {
        setIsOpen((prevState) => !prevState);
    }

    function handleClickButtonDrawer(id) {
        setActiveDrawer(activeDrawer === id ? null : id);
    }

    function handleCloseMenuDrawer() {
        setActiveDrawer(null);
    }

    useEffect(() => {
        (isOpen)
            ? scrollLock.lock()
            : scrollLock.unlock();
    }, [isOpen]);

    return (
        <header className={styles.container}>
            <div className={styles.containerBar}>
                <Link href="/">
                    <a
                        className={styles.logo}
                        aria-label="Go to homepage"
                        onClick={handleClickButton}
                    >
                        <Icons name="logo" />
                    </a>
                </Link>

                <ButtonBurger
                    className={styles.buttonBurger}
                    isActive={isOpen}
                    onClick={handleClickButton}
                />
            </div>

            <nav className={classNames(styles.containerNav, {
                [styles.isOpen]: isOpen
            })}>
                <ul className={styles.list}>
                    {blok.links.map((link) => (
                        <li
                            className={styles.listItem}
                            key={link._uid}
                        >
                            {link.component === 'models_dropdown' ? (
                                <>
                                    <button
                                        className={styles.link}
                                        onClick={() => handleClickButtonDrawer(link._uid)}
                                    >
                                        {link.label}

                                        <Icons
                                            className={styles.icon}
                                            name="arrow"
                                        />
                                    </button>

                                    <MenuDrawer
                                        isOpen={activeDrawer === link._uid}
                                        closeLabel={link.close_label}
                                        links={link.links}
                                        customLink={link.custom_link}
                                        button={link.button}
                                        onClickButton={handleClickButton}
                                        onClose={handleCloseMenuDrawer}
                                    />
                                </>
                            ) : (
                                <SbLink
                                    className={classNames(styles.link, {
                                        [styles.isActive]: router.asPath === resolveLink(link.link)
                                    })}
                                    label={link.label}
                                    href={link.link}
                                    onClick={handleClickButton}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}