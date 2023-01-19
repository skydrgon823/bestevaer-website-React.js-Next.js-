import React from 'react';
import { useRouter } from 'next/router';

import RichText from 'src/components/rich-text/RichText';
import SbLink from 'src/components/sb-link/SbLink';
import ButtonCircle from '../buttons/button-circle/ButtonCircle';

import { resolveLink } from 'src/utils/helpers';

import styles from './TopLinks.module.scss';

export default function TopLinks({ blok }) {
    const router = useRouter();

    return (
        <section className={styles.container}>
            <div className={styles.heading}>
                <RichText document={blok.title} />
            </div>

            <div className={styles.containerLinksCircle}>
                <ul className={styles.listLinksCircle}>
                    {blok.circle_links.map(
                        (circle_link) =>
                            router.asPath !==
                                resolveLink(circle_link.link).replace(
                                    /\/$/,
                                    ''
                                ) && (
                                <li
                                    className={styles.listItemLinksCircle}
                                    key={circle_link._uid}
                                >
                                    <ButtonCircle
                                        label={circle_link.label}
                                        href={circle_link.link}
                                    />
                                </li>
                            )
                    )}
                </ul>

                <ButtonCircle
                    className={styles.linkCircle}
                    label={blok.large_circle_link[0]?.label}
                    href={blok.large_circle_link[0]?.link}
                />
            </div>

            <ul className={styles.listLinksRectangular}>
                {blok.rectangular_links.map(
                    (rectangular_link) =>
                        router.asPath !==
                            resolveLink(rectangular_link.link).replace(
                                /\/$/,
                                ''
                            ) && (
                            <li
                                className={styles.listItemLinksRectangular}
                                key={rectangular_link._uid}
                            >
                                <SbLink
                                    className={styles.linkRectangle}
                                    label={rectangular_link.label}
                                    href={rectangular_link.link}
                                />
                            </li>
                        )
                )}
            </ul>
        </section>
    );
}
