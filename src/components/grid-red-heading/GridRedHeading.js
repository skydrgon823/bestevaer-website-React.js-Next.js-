import React, { useRef } from 'react';
import classNames from 'classnames';

import RichText from 'src/components/rich-text/RichText';
import Media from 'src/components/media/Media';

import useFadeUpAnimation from 'src/hooks/useFadeUpAnimation';

import styles from './GridRedHeading.module.scss';

export default function GridRedHeading({ blok }) {
    const containerContentRef = useRef(null);
    const containerRef = useRef(null);
    const headingRef = useRef(null);

    useFadeUpAnimation(containerRef, [headingRef]);
    useFadeUpAnimation(containerContentRef, [containerContentRef]);

    function renderLayout(type) {
        switch (type) {
            case 'one':
                return (
                    <div ref={containerContentRef}>
                        <div className={styles.containerOneContent}>
                            {blok.image_one && (
                                <Media
                                    className={styles.imageOne}
                                    media={blok.image_one}
                                    lazy={true}
                                />
                            )}

                            <div className={styles.body}>
                                <RichText document={blok.body_one} />
                            </div>
                        </div>

                        <div className={styles.containerOneContent}>
                            <div className={styles.body}>
                                <RichText document={blok.body_two} />
                            </div>

                            {blok.image_two && (
                                <Media
                                    className={styles.imageTwo}
                                    media={blok.image_two}
                                    lazy={true}
                                />
                            )}
                        </div>
                    </div>
                );

            case 'two':
                return (
                    <div
                        className={styles.containerTwoContent}
                        ref={containerContentRef}
                    >
                        {blok.image_one && (
                            <Media
                                className={styles.imageOne}
                                media={blok.image_one}
                                lazy={true}
                            />
                        )}

                        <div className={styles.containerColumn}>
                            <div className={styles.body}>
                                <RichText document={blok.body_one} />
                            </div>

                            {blok.image_two && (
                                <Media
                                    className={styles.imageTwo}
                                    media={blok.image_two}
                                    lazy={true}
                                />
                            )}
                        </div>
                    </div>
                );

            case 'three':
                return (
                    <div
                        className={styles.containerThreeContent}
                        ref={containerContentRef}
                    >
                        <div className={styles.body}>
                            <RichText document={blok.body_one} />
                        </div>

                        <div className={styles.containerImages}>
                            {blok.image_one && (
                                <Media
                                    className={styles.imageOne}
                                    media={blok.image_one}
                                    lazy={true}
                                />
                            )}

                            {blok.image_two && (
                                <Media
                                    className={styles.imageTwo}
                                    media={blok.image_two}
                                    lazy={true}
                                />
                            )}

                            {blok.image_three && (
                                <Media
                                    className={styles.imageThree}
                                    media={blok.image_three}
                                    lazy={true}
                                />
                            )}
                        </div>
                    </div>
                );

            default:
                return 'This layout has not been defined yet.';
        }
    }

    return (
        <section className={styles.container} ref={containerRef}>
            <div className={styles.heading} ref={headingRef}>
                <RichText document={blok.title} />
            </div>

            {renderLayout(blok.layout)}
        </section>
    );
}
