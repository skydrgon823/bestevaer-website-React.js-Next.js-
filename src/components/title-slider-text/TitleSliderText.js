import React from 'react';
import classNames from 'classnames';

import ButtonSliderArrow from 'src/components/buttons/button-slider-arrow/ButtonSliderArrow';
import ImageSlider from 'src/components/image-slider/ImageSlider';
import RichText from 'src/components/rich-text/RichText';

import styles from './TitleSliderText.module.scss';

export default function TitleSliderText({ blok }) {
    return (
        <section className={styles.container}>
            <div className={styles.heading}>
                <RichText document={blok.title} />
            </div>

            <ImageSlider
                className={styles.imageSlider}
                items={blok.slider}
                settings={{
                    speed: 500,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: <ButtonSliderArrow type="nextLight" />,
                    prevArrow: <ButtonSliderArrow type="previousLight" />

                }}
            />

            <div className={styles.text}>
                <RichText document={blok.text} />
            </div>
        </section>
    );
}