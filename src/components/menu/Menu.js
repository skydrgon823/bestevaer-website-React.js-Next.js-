import React, { useRef, useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Link from 'next/link';
import gsap from 'gsap';

import MenuOverlay from 'src/components/menu-overlay/MenuOverlay';
import SbLink from 'src/components/sb-link/SbLink';
import Icons from 'src/components/icons/Icons';

import useScrollPosition from 'src/hooks/useScrollPosition';

import { NAV_MAX_HEIGHT, NAV_MIN_HEIGHT, LOGO_MIN_WIDTH, LOGO_MAX_WIDTH } from 'src/constants/layout';
import { PORTAL_ID_MENU_OVERLAY } from 'src/constants/portals';
import { scrollLock, resolveLink } from 'src/utils/helpers';

import styles from './Menu.module.scss';

export default function Menu({ blok, isHidden }) {
    const navRef = useRef(null);
    const logoRef = useRef(null);

    const [shouldRenderPortal, setShouldRenderPortal] = useState(false);
    const [isScrolledLocked, setIsScrolledLocked] = useState(false);
    const [isNavMinimized, setIsNavMinimized] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [navHeight, setNavHeight] = useState(0);
    const [logoWidth, setLogoWidth] = useState(0);

    const router = useRouter();
    const scrollY = useScrollPosition();

    const navCallbackRef = useCallback((node) => {
        if (node !== null) {
            // setNavHeight(node.getBoundingClientRect().height);
            setNavHeight(NAV_MAX_HEIGHT);

            navRef.current = node;
        }
    }, []);

    const logoCallbackRef = useCallback((node) => {
        if (node !== null) {
            // setLogoWidth(node.getBoundingClientRect().width);
            setLogoWidth(LOGO_MAX_WIDTH);

            logoRef.current = node;
        }
    }, []);

    function handleClickButtonDropdown(id) {
        setActiveDropdown(activeDropdown === id ? null : id);
    }

    function handleCloseMenuOverlay() {
        logoRef.current.focus();
        setActiveDropdown(null);
    }

    function handleTransitionedOutMenuOverlay() {
        setShouldRenderPortal(false);
    }

    function handleClickButton() {
        logoRef.current.focus();
        setActiveDropdown(null);
    }

    useEffect(() => {
        if (scrollY > navHeight && !isNavMinimized && !isScrolledLocked) {
            setIsNavMinimized(true);
        }

        if (scrollY <= navHeight && isNavMinimized && !isScrolledLocked) {
            setIsNavMinimized(false);
        }
    }, [isNavMinimized, scrollY, navHeight]);

    useEffect(() => {
        if (activeDropdown) {
            setShouldRenderPortal(true);
            setIsScrolledLocked(true);
            scrollLock.lock();
        } else {
            setIsScrolledLocked(false);
            scrollLock.unlock();
        }
    }, [activeDropdown]);

    useEffect(() => {
        gsap.to(navRef.current, {
            height: isNavMinimized ? NAV_MIN_HEIGHT : navHeight,
            ease: 'expo.inOut',
            duration: 0.6
        });

        gsap.to(logoRef.current, {
            width: isNavMinimized ? LOGO_MIN_WIDTH : logoWidth,
            // height: isNavMinimized ? LOGO_MIN_WIDTH : logoWidth,
            ease: 'expo.inOut',
            duration: 0.6
        });
    }, [isNavMinimized, navHeight, logoWidth]);

    return (
        <header className={classNames(styles.header, {
            [styles.isHidden]: isHidden
        })}>
            <nav
                className={styles.nav}
                ref={navCallbackRef}
            >
                <Link href="/">
                    <a
                        className={styles.logo}
                        aria-label="Go to homepage"
                        ref={logoCallbackRef}
                        onClick={handleClickButton}
                    >
                        <Icons name="logo" />
                    </a>
                </Link>

                <ul className={styles.list}>
                    {blok.links.map((link) => (
                        <li
                            className={styles.listItem}
                            key={link._uid}
                        >
                            {link.component === 'models_dropdown' ? (
                                <>
                                    <button
                                        className={classNames(styles.link, {
                                            [styles.isActive]: activeDropdown === link._uid
                                        })}
                                        onClick={() => handleClickButtonDropdown(link._uid)}
                                    >
                                        {link.label}

                                        <Icons
                                            className={styles.icon}
                                            name="arrow"
                                        />
                                    </button>

                                    {shouldRenderPortal && createPortal(
                                        <MenuOverlay
                                            isOpen={activeDropdown === link._uid}
                                            offset={isNavMinimized ? NAV_MIN_HEIGHT : navHeight}
                                            closeLabel={link.close_label}
                                            typography={link.typography}
                                            links={link.links}
                                            customLink={link.custom_link}
                                            button={link.button}
                                            onClickButton={handleClickButton}
                                            onClose={handleCloseMenuOverlay}
                                            onTransitionedOut={handleTransitionedOutMenuOverlay}
                                        />,
                                        document.getElementById(PORTAL_ID_MENU_OVERLAY)
                                    )}
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