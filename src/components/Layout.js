import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import CookieMessage from 'src/components/cookie-message/CookieMessage';
import MenuMobile from 'src/components/menu-mobile/MenuMobile';
import Transition from 'src/components/Transition';
import Footer from 'src/components/footer/Footer';
import Menu from 'src/components/menu/Menu';

import useTabNavigation from 'src/hooks/useTabNavigation';
import useWindowSize from 'src/hooks/useWindowSize';

import { PORTAL_ID_MENU_OVERLAY } from 'src/constants/portals';
import { MQ_WIDE } from 'src/constants/devices';

export default function Layout({ children, cookieMessage, menu, footer }) {
    const [isMobile, setIsMobile] = useState(false);

    const isUsingTab = useTabNavigation();
    const windowSize = useWindowSize();
    const router = useRouter();

    useEffect(() => {
        isUsingTab
            ? document.body.classList.add('is-using-tab')
            : document.body.classList.remove('is-using-tab');
    }, [isUsingTab]);

    useEffect(() => {
        setIsMobile(windowSize.width < MQ_WIDE);
    }, [windowSize]);

    useEffect(() => {
        if (
            router.asPath === '/contact' ||
            router.asPath === '/request-information'
        ) {
            document.body.style.backgroundColor = '#FF0000';
        } else {
            document.body.style.backgroundColor = null;
        }
    }, [router]);

    return (
        <div className="app">
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <meta name="application-name" content="Bestevaer" />
                <meta name="theme-color" content="#ffffff" />

                {/* TODO: set up head stuff like title, seo and social sharing (tw, fb etc. and image) */}
                {/* https://github.com/joshbuchea/HEAD */}

                <link rel="icon" href="/favicon.svg" />

                <meta name="facebook-domain-verification" content="tjnmitg85wv4vl7ka6y2r5v6p08tz2" />

                <link
                    rel="preload"
                    href="/static/fonts/AkkuratLLWeb-Regular.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/static/fonts/AkkuratLLWeb-Bold.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/static/fonts/AkkuratMonoLLWeb-Regular.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="/static/fonts/AkkuratMonoLLWeb-Regular.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
            </Head>

            <CookieMessage blok={cookieMessage} />

            {isMobile && <MenuMobile blok={menu} />}

            <Menu blok={menu} isHidden={isMobile} />

            <Transition location={router.asPath}>
                <main>{children}</main>
            </Transition>

            <Footer blok={footer} />

            <div id={PORTAL_ID_MENU_OVERLAY} />
        </div>
    );
}
