import Head from 'next/head';

import Storyblok, { useStoryblok } from 'src/lib/storyblok';

import ButtonPreview from 'src/components/buttons/button-preview/ButtonPreview';
import HeroLogo from 'src/components/heroes/hero-logo/HeroLogo';
import DynamicComponent from 'src/components/DynamicComponent';
import ModelsList from 'src/components/models-list/ModelsList';
import LargeText from 'src/components/large-text/LargeText';
import LinksList from 'src/components/links-list/LinksList';

export default function Fleet({ story, models, preview }) {
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

            <HeroLogo blok={data.content.hero[0]} />

            <LargeText blok={{ text: data.content.title }} />

            <ModelsList blok={{
                intro: data.content.intro,
                title: data.content.title_thumbnails,
                quote: data.content.quote,
                items: models,
            }} />

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

export async function getStaticProps(context) {
    const slug = 'fleet';

    const sbParams = {
        version: 'published', // or 'draft'
        resolve_relations: 'shared_component.reference'
    };

    if (context?.preview) {
        sbParams.version = 'draft';
        sbParams.cv = Date.now();
    }

    const { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

    const models = await Storyblok.get('cdn/stories/', {
        starts_with: 'fleet/models'
    });

    return {
        props: {
            story: data ? data.story : null,
            models: models.data.stories,
            preview: context.preview || false,
        },
        // revalidate:3600, // revalidate every hour
    };
}