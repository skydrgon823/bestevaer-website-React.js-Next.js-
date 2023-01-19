import Head from 'next/head';

import Storyblok, { useStoryblok } from 'src/lib/storyblok';

import YachtTypePreviews from 'src/components/yacht-type-previews/YachtTypePreviews';
import ButtonPreview from 'src/components/buttons/button-preview/ButtonPreview';
import YachtTypeIntro from 'src/components/yacht-type-intro/YachtTypeIntro';
import DynamicComponent from 'src/components/DynamicComponent';

export default function MotorYachts({ story, yachts, preview }) {
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

            <YachtTypeIntro
                title={data.content.title}
                image={data.content.image}
                description={data.content.description}
            />

            <YachtTypePreviews
                items={yachts}
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

export async function getStaticProps(context) {
    const sbParams = {
        version: 'published', // or 'draft'
        resolve_relations: 'shared_component.reference'
    };

    if (context?.preview) {
        sbParams.version = 'draft';
        sbParams.cv = Date.now();
    }

    const { data } = await Storyblok.get(`cdn/stories/yachts/motor`, sbParams);

    const yachts = await Storyblok.get('cdn/stories/', {
        starts_with: 'yachts/motor/models/'
    });

    return {
        props: {
            story: data ? data.story : null,
            yachts: yachts.data.stories,
            preview: context.preview || false,
        },
        // revalidate:3600, // revalidate every hour
    };
}