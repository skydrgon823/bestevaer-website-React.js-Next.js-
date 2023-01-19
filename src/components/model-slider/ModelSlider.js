import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import SlickSlider from 'react-slick';

import ButtonSliderArrow from 'src/components/buttons/button-slider-arrow/ButtonSliderArrow';
import ModelsListItem from 'src/components/models-list-item/ModelsListItem';

import useWindowSize from 'src/hooks/useWindowSize';

import { MQ_WIDE } from 'src/constants/devices';

import styles from './ModelSlider.module.scss';

export default function ModelSlider({ title, items }) {
    const [slidesNumber, setSlidesNumber] = useState(1);

    const windowSize = useWindowSize();

    useEffect(() => {
        if (windowSize.width < MQ_WIDE) {
            setSlidesNumber(1);
        } else {
            setSlidesNumber(items.length > 2 ? 3 : items.length);
        }
    }, [windowSize]);

    return (
        <section className={styles.container}>
            <h2 className={styles.heading}>
                {title}
            </h2>

            {items.length > 0 && (
                <SlickSlider
                    className={styles.slider}
                    speed={500}
                    infinite={true}
                    slidesToShow={slidesNumber}
                    slidesToScroll={1}
                    nextArrow={<ButtonSliderArrow type="nextLight" />}
                    prevArrow={<ButtonSliderArrow type="previousLight" />}
                >
                    {items.map((item) => (
                        <ModelsListItem
                            className={styles.item}
                            item={item}
                            key={item.uuid}
                        />
                    ))}
                </SlickSlider>
            )}

            {/* {items.length > 0 && (
                <Slider
                    className={styles.slider}
                    items={items}
                    settings={{
                        speed: 500,
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        nextArrow: <ButtonSliderArrow type="next" />,
                        prevArrow: <ButtonSliderArrow type="previous" />

                    }}
                />
            )} */}
        </section>
    );
}