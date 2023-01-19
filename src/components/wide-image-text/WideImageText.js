import React, { useRef } from 'react';

import RichText from 'src/components/rich-text/RichText';
import SbLink from 'src/components/sb-link/SbLink';
import Media from 'src/components/media/Media';

import useFadeUpAnimation from 'src/hooks/useFadeUpAnimation';

import styles from './WideImageText.module.scss';

export default function WideImageText({ blok }) {
    const containerContentRef = useRef(null);
    const containerCopyRef = useRef(null);
    const imageRef = useRef(null);

    useFadeUpAnimation(containerContentRef, [imageRef, containerCopyRef]);

    return (
        <section className={styles.container}>
            <div className={styles.containerContent} ref={containerContentRef}>
                <Media
                    className={styles.image}
                    media={blok.image}
                    lazy={true}
                    ref={imageRef}
                />

                <div className={styles.containerCopy} ref={containerCopyRef}>
                    <h2 className={styles.heading}>{blok.title}</h2>

                    <div className={styles.containerBody}>
                        <RichText document={blok.body} />

                        <SbLink
                            className={styles.link}
                            label={blok.label}
                            href={blok.link}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
