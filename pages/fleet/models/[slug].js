import React from 'react';
import Head from 'next/head';

import Storyblok, { useStoryblok } from 'src/lib/storyblok';

import ModelDetailIntro from 'src/components/model-detail-intro/ModelDetailIntro';
import ButtonPreview from 'src/components/buttons/button-preview/ButtonPreview';
import DynamicComponent from 'src/components/DynamicComponent';
import TopLinks from 'src/components/top-links/TopLinks';
import ButtonBrochure from 'src/components/buttons/button-brochure/ButtonBrochure';
import ModelSlider from 'src/components/model-slider/ModelSlider';

export default function Model({ story, relatedModels, preview, topLinks, buttonBrochure }) {
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

            <ModelDetailIntro
                hero={data.content.hero[0]}
                label={data.content.label}
                type={data.content.type}
                breadcrumbs={[
                    {
                        label: 'Back',
                        href: '/fleet'
                    },
                    {
                        label: 'Bestevaer',
                        href: '/'
                    },
                    {
                        label: 'Fleet',
                        href: '/fleet'
                    },
                    {
                        label: `${data.content.type} ${data.content.label}`,
                        href: null
                    }
                ]}
            />

            <DynamicComponent blok={data.content} />

            <ModelSlider
                title="Related Projects"
                items={relatedModels}
            />

            <TopLinks blok={topLinks} />

            <ButtonBrochure blok={buttonBrochure} />
        </article>
    );
}

export async function getStaticPaths() {
    const { data } = await Storyblok.get('cdn/links/', {
        starts_with: 'fleet/models/',
    });

    const paths = [];

    Object.keys(data.links).forEach((key) => {
        if (data.links[key].is_folder) {
            return;
        }

        const slug = data.links[key].slug;
        const splittedSlug = slug.split('/')[2];

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

    const { data } = await Storyblok.get(`cdn/stories/fleet/models/${slug}`, sbParams);

    const relatedModels = await Storyblok.get('cdn/stories/', {
        starts_with: 'fleet/models/',
        with_tag: data.story.tag_list.join(),
        excluding_slugs: data.story.full_slug,
    });

    const topLinks = await Storyblok.get('cdn/stories/shared/top-links');
    const buttonBrochure = await Storyblok.get('cdn/stories/shared/button-brochure');

    return {
        props: {
            story: data ? data.story : null,
            relatedModels: relatedModels.data.stories,
            topLinks: topLinks?.data?.story?.content?.blocks[0],
            buttonBrochure: buttonBrochure?.data?.story?.content?.blocks[0],
            preview,
        },
        // revalidate:3600, // revalidate every hour
    };
}
