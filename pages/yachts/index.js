import Head from 'next/head';

import Storyblok, { useStoryblok } from 'src/lib/storyblok';

import ButtonPreview from 'src/components/buttons/button-preview/ButtonPreview';
import DynamicComponent from 'src/components/DynamicComponent';

export default function Yachts({ story, preview }) {
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

export async function getStaticProps(context) {
    const slug = 'yachts';

    const sbParams = {
        version: 'published', // or 'draft'
        resolve_relations: 'shared_component.reference'
    };

    if (context?.preview) {
        sbParams.version = 'draft';
        sbParams.cv = Date.now();
    }

    const { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

    return {
        props: {
            story: data ? data.story : null,
            preview: context.preview || false,
        },
        // revalidate:3600, // revalidate every hour
    };
}