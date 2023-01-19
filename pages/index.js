import Head from 'next/head';

import { useStoryblok, createStaticProps } from 'src/lib/storyblok';

import ButtonPreview from 'src/components/buttons/button-preview/ButtonPreview';
import DynamicComponent from 'src/components/DynamicComponent';

export default function Home({ story, preview }) {
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
    const slug = 'home';

    return createStaticProps(slug, context?.preview);

    // const params = {
    //     version: 'published', // or 'draft'
    //     resolve_relations: 'shared_component.reference'
    // };

    // // checks if Next.js is in preview mode
    // if (context.preview) {
    //     params.version = 'draft';
    //     // appends the cache version to get the latest content
    //     params.cv = Date.now();
    // }

    // const { data } = await Storyblok.get(`cdn/stories/${slug}`, params);

    // return {
    //     props: {
    //         story: data ? data.story : false,
    //         preview: context.preview || false
    //     },
    //     // revalidate:3600,
    // };
}