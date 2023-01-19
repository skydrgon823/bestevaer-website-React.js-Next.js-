import React, { useRef, useEffect } from 'react';
import classNames from 'classnames';
import gsap from 'gsap';

import { setCanvas } from 'src/utils/helpers';

import styles from './TimelineProgress.module.scss';

const DISTANCE_YEARS = 45;

export default function TimelineProgress({ items, activeIndex, onChangeIndex }) {
    const distancesRef = useRef(getDistanceMultiplierFromPreviousIndex(items));
    const yearsRangeRef = useRef(getYearsRange(items));
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            ctxRef.current = setCanvas(
                canvasRef.current,
                canvasRef.current.offsetWidth,
                canvasRef.current.offsetHeight
            );

            drawTimeline(ctxRef.current, yearsRangeRef.current);
        }
    }, []);

    useEffect(() => {
        gsap.to(containerRef.current, {
            scrollTo: {
                x: distancesRef.current[activeIndex] * DISTANCE_YEARS
            },
            ease: 'power2.inOut',
            duration: 0.5
        });
    }, [activeIndex]);

    return (
        <div
            className={styles.container}
            ref={containerRef}
        >
            <div
                className={styles.containerScroll}
                style={{ width: `${yearsRangeRef.current * DISTANCE_YEARS}px` }}
            >
                <canvas
                    className={styles.canvas}
                    ref={canvasRef}
                >
                </canvas>

                <ul className={styles.list}>
                    {items?.length > 0 && items.map((item, index) => (
                        <li
                            className={styles.listItem}
                            style={{
                                left: `${distancesRef.current[index] * DISTANCE_YEARS}px`
                            }}
                            key={item._uid}
                        >
                            <button
                                className={classNames(styles.button, {
                                    [styles.isActive]: activeIndex === index
                                })}
                                onClick={() => onChangeIndex(index)}
                            >
                                <span className={styles.dot} />

                                <span className={styles.year}>
                                    {item.year}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function getDistanceMultiplierFromPreviousIndex(items) {
    if (!items || items.length === 0) {
        return [];
    }

    return items.map((item, index) => {
        if (index === 0) {
            return 0;
        }

        return Math.abs(item.year - items[0].year);
    });
}

function drawTimeline(ctx, yearsRange) {
    const rect = ctx.canvas.getBoundingClientRect();

    // horizontal line
    ctx.beginPath();
    ctx.moveTo(0, rect.height / 2);
    ctx.lineTo(rect.width, rect.height / 2);
    ctx.stroke();

    // vertical lines
    for (let i = 1; i < yearsRange; i++) {
        ctx.beginPath();
        ctx.moveTo(i * DISTANCE_YEARS, 0);
        ctx.lineTo(i * DISTANCE_YEARS, rect.height);
        ctx.stroke();
    }
}

function getYearsRange(items) {
    if (!items) {
        return 0;
    }

    const orderedYears = items.map((item) => parseInt(item.year)).sort((a, b) => b - a);
    const yearsRange = orderedYears[0] - orderedYears[items.length - 1] + 1;

    return yearsRange;
}