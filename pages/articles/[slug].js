import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Storyblok, { useStoryblok } from 'src/lib/storyblok';

import ButtonPreview from 'src/components/buttons/button-preview/ButtonPreview';
import ArticleRelated from 'src/components/article-related/ArticleRelated';
import ArticleIntro from 'src/components/article-intro/ArticleIntro';
import ArticleOutro from 'src/components/article-outro/ArticleOutro';
import ArticleBody from 'src/components/article-body/ArticleBody';
import DynamicComponent from 'src/components/DynamicComponent';

export default function Article({ story, relatedArticles, preview }) {
    const [currentLocation, setCurrentLocation] = useState('');

    const data = useStoryblok(story, preview);
    const router = useRouter();

    useEffect(() => {
        setCurrentLocation(window.location.href);
    }, []);

    function handleClickTag(name) {
        router.push(`/the-journey?filter=${name}`);
    }

    return (
        <article>
            <Head>
                <title>{data.content?.seo?.title || 'Bestevaer'}</title>
                <meta name="description" content={data.content?.seo?.description} />
            </Head>

            {preview && (
                <ButtonPreview slug={data.slug} />
            )}

            <ArticleIntro
                hero={data.content.hero}
                date={data.first_published_at}
                title={data.content.title}
                text={data.content.intro_paragraph}
            />

            <ArticleBody
                content={data.content}
            />

            <ArticleOutro
                tags={data.tag_list}
                share={{
                    url: currentLocation,
                    text: `${data.content.title}`
                }}
                onClickTag={handleClickTag}
            />

            <ArticleRelated
                articles={relatedArticles}
                onClickTag={handleClickTag}
            />

            {data.content.extra_content?.length > 0 && (
                data.content.extra_content.map((content) => (
                    <DynamicComponent
                        blok={content}
                        key={content._uid}
                    />
                ))
            )}
        </article>
    );
}

export async function getStaticPaths() {
    const { data } = await Storyblok.get('cdn/links/', {
        starts_with: 'articles',
    });

    const paths = [];

    Object.keys(data.links).forEach((key) => {
        if (data.links[key].is_folder) {
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

    const { data } = await Storyblok.get(`cdn/stories/articles/${slug}`, sbParams);

    const relatedArticles = await Storyblok.get('cdn/stories/', {
        starts_with: 'articles',
        with_tag: data.story.tag_list.join(),
        excluding_slugs: data.story.full_slug,
    });

    return {
        props: {
            story: data ? data.story : null,
            relatedArticles: relatedArticles.data.stories,
            preview,
        },
        // revalidate:3600, // revalidate every hour
    };
}
