import React from 'react';
import Head from 'next/head';

import Storyblok, { useStoryblok } from 'src/lib/storyblok';

import ButtonPreview from 'src/components/buttons/button-preview/ButtonPreview';
import DynamicComponent from 'src/components/DynamicComponent';

export default function YachtPage({ story, preview }) {
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
    const { data } = await Storyblok.get('cdn/links/', {
        starts_with: 'yachts/',
    });

    const paths = [];

    Object.keys(data.links).forEach((key) => {
        const hasExcludedSlug = ['yachts/'].some((str) => str === data.links[key].slug);
        const hasExcludedPath = ['sailing/', 'motor/'].some((str) => data.links[key].slug.includes(str));

        if (hasExcludedSlug || hasExcludedPath || data.links[key].is_folder) {
            return;
        }

        const slug = data.links[key].slug;
        const splittedSlug = slug.split('/')[1];

        paths.push({ params: { slug: splittedSlug } });
    });

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params, preview = false }) {
    const { slug } = params;

    const sbParams = {
        version: 'published', // or 'draft'
        resolve_relations: 'shared_component.reference'
    };

    if (preview) {
        sbParams.version = 'draft';
        sbParams.cv = Date.now();
    }

    const { data } = await Storyblok.get(`cdn/stories/yachts/${slug}`, sbParams);

    return {
        props: {
            story: data ? data.story : null,
            preview,
        },
        // revalidate:3600, // revalidate every hour
    };
}
