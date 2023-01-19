import React from 'react';

import ButtonSliderArrow from 'src/components/buttons/button-slider-arrow/ButtonSliderArrow';
import ImageSlider from 'src/components/image-slider/ImageSlider';
import RichText from 'src/components/rich-text/RichText';
import SbLink from 'src/components/sb-link/SbLink';

import styles from './WideSliderText.module.scss';

export default function WideSliderText({ blok }) {
    return (
        <section className={styles.container}>
            <div className={styles.containerContent}>
                <ImageSlider
                    className={styles.imageSlider}
                    items={blok.slider[0].items}
                    settings={{
                        speed: 500,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        nextArrow: <ButtonSliderArrow type="nextLight" />,
                        prevArrow: <ButtonSliderArrow type="previousLight" />

                    }}
                />

                <div className={styles.containerCopy}>
                    <h2 className={styles.heading}>
                        {blok.title}
                    </h2>

                    <div className={styles.containerBody}>
                        <RichText document={blok.body} />
                    </div>
                </div>
            </div>
        </section>
    );
}