import React from 'react';
import classNames from 'classnames';
import SlickSlider from 'react-slick';

import Media from 'src/components/media/Media';

import styles from './ImageSlider.module.scss';

export default function ImageSlider({ className, items, settings = {} }) {
    return (
        <SlickSlider
            className={className}
            {...settings}
        >
            {items.map((item) => (
                <Media
                    className={styles.image}
                    media={item.image}
                    cover={true}
                    lazy={true}
                    key={item._uid}
                />
            ))}
        </SlickSlider>
    );
}