import React, { useState } from 'react';
import classNames from 'classnames';

import TimelineProgress from 'src/components/timeline/timeline-progress/TimelineProgress';
import TimelineSlider from 'src/components/timeline/timeline-slider/TimelineSlider';

import styles from './Timeline.module.scss';

export default function Timeline({ blok }) {
    const [activeIndex, setActiveIndex] = useState(0);

    function handleChangeIndex(index) {
        setActiveIndex(index);
    }

    return (
        <div className={styles.container}>
            <TimelineProgress
                items={blok.items}
                activeIndex={activeIndex}
                onChangeIndex={handleChangeIndex}
            />

            <TimelineSlider
                items={blok.items}
                activeIndex={activeIndex}
                onChangeIndex={handleChangeIndex}
            />
        </div>
    );
}