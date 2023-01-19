import React from 'react';
import classNames from 'classnames';

import Breadcrumbs from 'src/components/breadcrumbs/Breadcrumbs';
import HeroLogo from 'src/components/heroes/hero-logo/HeroLogo';

import styles from './ModelDetailIntro.module.scss';

export default function ModelDetailIntro({ className, hero, label, type, breadcrumbs }) {
    return (
        <header className={styles.container}>
            <HeroLogo
                className={styles.hero}
                blok={hero}
            />

            <div className={styles.containerText}>
                <Breadcrumbs
                    className={styles.breadcrumbs}
                    items={breadcrumbs}
                />

                <h1 className={styles.heading}>
                    <span className={styles.line}>
                        {type}
                    </span>
                    <span>
                        {label}
                    </span>
                </h1>
            </div>
        </header>
    );
}