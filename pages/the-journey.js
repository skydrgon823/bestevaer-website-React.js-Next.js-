import Head from 'next/head';
import { useRouter } from 'next/router';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

import Storyblok, { useStoryblok, StoryblokPublic } from 'src/lib/storyblok';

import ButtonPreview from 'src/components/buttons/button-preview/ButtonPreview';
import BlogOverview from 'src/components/blog-overview/BlogOverview';
import DynamicComponent from 'src/components/DynamicComponent';
import BlogIntro from 'src/components/blog-intro/BlogIntro';
import Filters from 'src/components/filters/Filters';
import Spinner from 'src/components/spinner/Spinner';

import { NAV_MAX_HEIGHT } from 'src/constants/layout';

export default function TheJourney({ story, blog, preview }) {
    const isInitialMount = useRef(true);

    const [articles, setArticles] = useState(blog.articles);
    const [isFetching, setIsFetching] = useState(false);
    const [filter, setFilter] = useState(null);

    const data = useStoryblok(story, preview);
    const router = useRouter();

    function handleClickTag(name) {
        setFilter(name);
    }

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            async function fetchArticles(filter) {
                setIsFetching(true);

                const { data } = await StoryblokPublic.get('cdn/stories/', {
                    starts_with: 'articles',
                    with_tag: filter || ''
                });

                gsap.to(window, {
                    scrollTo: NAV_MAX_HEIGHT + 1,
                    // scrollTo: {
                    //     y: "#filters",
                    //     offsetY: 100
                    // },
                    ease: 'power3.inOut',
                    duration: 1,
                    onComplete: () => {
                        setArticles(data.stories);
                        setIsFetching(false);
                    }
                });
            }

            fetchArticles(filter);
        }
    }, [filter]);

    useEffect(() => {
        if (router.query.filter) {
            setFilter(router.query.filter);
        }
    }, [router]);

    return (
        <article>
            <Head>
                <title>{data.content?.seo?.title || 'Bestevaer'}</title>
                <meta name="description" content={data.content?.seo?.description} />
            </Head>

            {preview && (
                <ButtonPreview slug={data.slug} />
            )}

            {isFetching && (
                <Spinner />
            )}

            <BlogIntro
                title={data.content.title}
                intro={data.content.intro}
                article={articles[0]}
                onClickTag={handleClickTag}
            />

            <Filters
                activeFilter={filter}
                tags={blog.tags}
                onClickTag={handleClickTag}
            />

            <BlogOverview
                articles={getRemaingArticles(articles)}
                onClickTag={handleClickTag}
            />

            <DynamicComponent blok={data.content} />
        </article>
    );
}

function getRemaingArticles(articles) {
    return articles.filter((article, index) => index > 0);
}

export async function getStaticProps(context) {
    const slug = 'the-journey';

    const sbParams = {
        version: 'published', // or 'draft'
        resolve_relations: 'shared_component.reference'
    };

    if (context?.preview) {
        sbParams.version = 'draft';
        sbParams.cv = Date.now();
    }

    const { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

    const articles = await Storyblok.get('cdn/stories/', {
        starts_with: 'articles'
    });

    const tags = await Storyblok.get('cdn/tags/', {
        starts_with: 'articles'
    });

    return {
        props: {
            story: data ? data.story : null,
            blog: {
                articles: articles.data.stories,
                tags: tags.data.tags
            },
            preview: context.preview || false,
        },
        // revalidate:3600, // revalidate every hour
    };
}