import React, { useRef, useEffect } from 'react';
import classNames from 'classnames';
import SlickSlider from 'react-slick';

import ButtonSliderArrow from 'src/components/buttons/button-slider-arrow/ButtonSliderArrow';
import RichText from 'src/components/rich-text/RichText';
import Media from 'src/components/media/Media';

import styles from './TimelineSlider.module.scss';

export default function TimelineSlider({ items, activeIndex, onChangeIndex }) {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.slickGoTo(activeIndex);
        }
    }, [activeIndex]);

    return (
        <div className={styles.container}>
            {items?.length > 0 && (
                <SlickSlider
                    className={styles.slider}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    infinite={false}
                    nextArrow={
                        <ButtonSliderArrow
                            cssClass={classNames(styles.buttonNext, {
                                [styles.isHidden]: activeIndex === items.length - 1
                            })}
                            type="nextLight"
                        />
                    }
                    prevArrow={
                        <ButtonSliderArrow
                            cssClass={classNames(styles.buttonPrev, {
                                [styles.isHidden]: activeIndex === 0
                            })}
                            type="previousLight"
                        />
                    }
                    beforeChange={(prevIndex, nextIndex) => onChangeIndex(nextIndex)}
                    ref={ref}
                >
                    {items.map((item) => (
                        <div key={item._uid}>
                            <div className={styles.containerSlide}>
                                <div className={styles.text}>
                                    <RichText document={item.text} />
                                </div>

                                <Media
                                    className={styles.image}
                                    media={item.image}
                                    cover={true}
                                />
                            </div>
                        </div>
                    ))}
                </SlickSlider>
            )}
        </div >
    );
}