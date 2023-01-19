import React from 'react';
import Head from 'next/head';

import Storyblok, { useStoryblok, createStaticProps } from 'src/lib/storyblok';

import ButtonPreview from 'src/components/buttons/button-preview/ButtonPreview';
import DynamicComponent from 'src/components/DynamicComponent';

export default function Page({ story, preview }) {
    const data = useStoryblok(story, preview);

    return (
        <article>
            <Head>
                <title>{data.content?.seo?.title || 'Bestevaer'}</title>
                <meta name="description" content={data.content?.seo?.description} />
            </Head>

            {preview && (
                <ButtonPreview slug={data.slug} />
            )}

            <DynamicComponent blok={data.content} />
        </article>
    );
}

export async function getStaticPaths() {
    const { data } = await Storyblok.get('cdn/links/');

    const paths = [];

    Object.keys(data.links).forEach((key) => {
        const hasExcludedSlug = ['home', 'the-journey', 'fleet'].some((str) => str === data.links[key].slug);
        const hasExcludedPath = ['shared/', 'global/'].some((str) => data.links[key].slug.includes(str));

        if (hasExcludedSlug || hasExcludedPath || data.links[key].is_folder) {
            return;
        }

        const { slug } = data.links[key];

        paths.push({ params: { slug } });
    });

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params, preview = false }) {
    const { slug } = params;

    return createStaticProps(slug, preview);
}
