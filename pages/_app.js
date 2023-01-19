import React from 'react';
import App from 'next/app';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';

import GoogleTagManager from 'src/components/google-tag-manager/GoogleTagManager';
import Layout from 'src/components/Layout';

import Storyblok from 'src/lib/storyblok';

import 'src/styles/main.scss';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

function NextApp({ Component, pageProps, cookieMessage, menu, footer }) {
    return (
        <GoogleTagManager>
            <Layout
                menu={menu}
                footer={footer}
                cookieMessage={cookieMessage}
            >
                <Component {...pageProps} />
            </Layout>
        </GoogleTagManager>
    );
}

NextApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);

    const cookieMessage = await Storyblok.get('cdn/stories/global/cookie-message');
    const menu = await Storyblok.get('cdn/stories/global/menu');
    const footer = await Storyblok.get('cdn/stories/global/footer');

    return {
        ...appProps,
        cookieMessage: cookieMessage.data.story.content,
        menu: menu.data.story.content,
        footer: footer.data.story.content
    };
};

export default NextApp;