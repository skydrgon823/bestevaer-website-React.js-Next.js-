import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import gsap from 'gsap';

import Storyblok, { useStoryblok } from 'src/lib/storyblok';

import ButtonPreview from 'src/components/buttons/button-preview/ButtonPreview';
import YachtModelIntro from 'src/components/yacht-model-intro/YachtModelIntro';
import TitleSliderText from 'src/components/title-slider-text/TitleSliderText';
import Specifications from 'src/components/specifications/Specifications';
import TextTwoImages from 'src/components/text-two-images/TextTwoImages';
import RequestInfo from 'src/components/request-info/RequestInfo';
import DynamicComponent from 'src/components/DynamicComponent';
import Features from 'src/components/features/Features';
import PageNav from 'src/components/page-nav/PageNav';

export default function MotorModel({ story, preview }) {
    const sectionRefs = useRef([]);

    const data = useStoryblok(story, preview);

    function scrollTo(index) {
        gsap.to(window, {
            scrollTo: {
                y: sectionRefs.current[index],
                offsetY: 100
            },
            ease: 'power3.inOut',
            duration: 1
        });
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

            <YachtModelIntro
                blok={{
                    number: data.content.number,
                    type: data.content.type,
                    hero: data.content.hero,
                    specs: data.content.specs,
                    text: data.content.intro,
                }}
            />

            {data.content.page_navigation.length > 0 && (
                <PageNav
                    items={data.content.page_navigation}
                    onClickButton={(index) => scrollTo(index)}
                />
            )}

            <div ref={(ref) => sectionRefs.current[0] = ref}>
                {data.content.exterior.length > 0 && (
                    <TitleSliderText blok={{ ...data.content.exterior[0] }} />
                )}
            </div>

            <div
                style={{ marginTop: '120px' }}
                ref={(ref) => sectionRefs.current[1] = ref}
            >
                {data.content.interior.length > 0 && (
                    <TitleSliderText blok={{ ...data.content.interior[0] }} />
                )}
            </div>

            <div
                style={{ marginTop: '120px' }}
                ref={(ref) => sectionRefs.current[2] = ref}
            >
                {data.content.specifications.length > 0 && (
                    <Specifications blok={{ ...data.content.specifications[0] }} />
                )}
            </div>

            <div
                style={{ marginTop: '132px' }}
                ref={(ref) => sectionRefs.current[3] = ref}
            >
                {data.content.features.length > 0 && (
                    <Features blok={{ ...data.content.features[0] }} />
                )}
            </div>

            <div style={{ marginTop: '110px' }}>
                {data.content.extra_feature_content.length > 0 && (
                    data.content.extra_feature_content.map((content) => (
                        <DynamicComponent blok={content} key={content._uid} />
                    ))
                )}
            </div>

            <div style={{ marginTop: '127px' }}>
                {data.content.request_info.length > 0 && (
                    <RequestInfo blok={{ ...data.content.request_info[0] }} />
                )}
            </div>

            <div style={{ marginTop: '130px' }}>
                {data.content.extra_content?.length > 0 && (
                    data.content.extra_content.map((content) => (
                        <DynamicComponent
                            blok={content}
                            key={content._uid}
                        />
                    ))
                )}
            </div>
        </article>
    );
}

export async function getStaticPaths() {
    const { data } = await Storyblok.get('cdn/links/', {
        starts_with: 'yachts/motor/models/',
    });

    const paths = [];

    Object.keys(data.links).forEach((key) => {
        if (data.links[key].is_folder) {
            return;
        }

        const slug = data.links[key].slug;
        const splittedSlug = slug.split('/')[3];

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

    const { data } = await Storyblok.get(`cdn/stories/yachts/motor/models/${slug}`, sbParams);

    return {
        props: {
            story: data ? data.story : null,
            preview,
        },
        // revalidate:3600, // revalidate every hour
    };
}
