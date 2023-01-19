import React from 'react';
import classNames from 'classnames';
import SlickSlider from 'react-slick';

import Media from 'src/components/media/Media';
import SbLink from 'src/components/sb-link/SbLink';

import styles from './Slider.module.scss';

export default function Slider({ className, items, settings = {} }) {
    return (
        <SlickSlider
            className={className}
            {...settings}
        >
            {items.map((item) => (
                <div
                    className={styles.containerItem}
                    key={item._uid}
                >
                    <Media
                        className={styles.image}
                        media={item.image}
                        lazy={true}
                    />

                    {item.link && (
                        <SbLink
                            className={styles.link}
                            label={item.label}
                            href={item.link}
                        />
                    )}
                </div>
            ))}
        </SlickSlider>
    );
}