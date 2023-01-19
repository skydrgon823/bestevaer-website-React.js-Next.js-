import React, { Fragment } from 'react';
import Link from 'next/link';
import { render, MARK_LINK, NODE_HEADING } from 'storyblok-rich-text-react-renderer';

import ButtonSliderArrow from 'src/components/buttons/button-slider-arrow/ButtonSliderArrow';
import ImageSlider from 'src/components/image-slider/ImageSlider';
import VideoEmbed from 'src/components//video-embed/VideoEmbed';

import styles from './RichText.module.scss';

/* eslint-disable react/display-name */
export default function RichText({ document }) {
    return (
        render(document, {
            nodeResolvers: {
                [NODE_HEADING]: (children, props) => {
                    const Tag = `h${props.level}`;

                    return (
                        <Tag>
                            {children ? (
                                children.map((child, index) => (
                                    <Fragment key={index}>
                                        {child}
                                    </Fragment>
                                ))
                            ) : null
                            }
                        </Tag>
                    );
                }
            },
            markResolvers: {
                [MARK_LINK]: (children, props) => {
                    const { href, target, linktype } = props;

                    if (linktype === 'email') {
                        return (
                            <a
                                className={styles.link}
                                href={`mailto:${href}`}
                            >
                                {children}
                            </a>
                        );
                    }

                    if (href.match(/^(https?:)?\/\//)) {
                        return (
                            <a
                                className={styles.link}
                                rel="noreferrer"
                                target={target}
                                href={href}
                            >
                                {children}
                            </a>
                        );
                    }

                    return (
                        <Link href={href}>
                            <a className={styles.link}>
                                {children}
                            </a>
                        </Link>
                    );
                }
            },
            blokResolvers: {
                ['image_slider']: (props) => (
                    <ImageSlider
                        className={styles.imageSlider}
                        items={props.items}
                        settings={{
                            speed: 500,
                            infinite: true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            nextArrow: <ButtonSliderArrow type="nextLight" />,
                            prevArrow: <ButtonSliderArrow type="previousLight" />

                        }}
                    />
                ),
                ['video_embed']: (props) => {
                    return <VideoEmbed className={styles.videoEmbed} blok={props} />
                }
            }
        })
    );
}