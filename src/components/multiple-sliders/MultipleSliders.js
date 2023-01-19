import React from 'react';

import ButtonSliderArrow from 'src/components/buttons/button-slider-arrow/ButtonSliderArrow';
import SbLink from 'src/components/sb-link/SbLink';
import Slider from 'src/components/slider/Slider';

import styles from './MultipleSliders.module.scss';

export default function MultipleSliders({ blok }) {
    return (
        <section className={styles.container}>
            <h2 className={styles.heading}>
                {blok.title}
            </h2>

            {blok.sliders.map((slider) => (
                <div
                    className={styles.containerSlider}
                    key={slider._uid}
                >
                    <SbLink
                        className={styles.link}
                        label={slider.label}
                        href={slider.link}
                    />

                    <Slider
                        className={styles.slider}
                        items={slider.items}
                        settings={{
                            speed: 500,
                            infinite: true,
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            nextArrow: <ButtonSliderArrow type="next" />,
                            prevArrow: <ButtonSliderArrow type="previous" />

                        }}
                        key={slider._uid}
                    />
                </div>
            ))}
        </section>
    );
}