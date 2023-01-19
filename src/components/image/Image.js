import React, { forwardRef, useState } from 'react';
import NextImage from 'next/image';
import classNames from 'classnames';

import { MQ_WIDE } from 'src/constants/devices';

import styles from './Image.module.scss';

const Image = forwardRef(
    (
        { className, image, cover, lazy, desktop = '1920x0', mobile = '750x0' },
        ref
    ) => {
        const [isLoaded, setIsLoaded] = useState(false)

        if (!image?.filename || image.filename.length === 0) {
            return null;
        }

        if (image.filename.split('.').pop() === 'svg') {
            return (
                <div
                    className={classNames(className, styles.containerImage)}
                    ref={ref}
                >
                    <img src={image.filename} alt={image.alt || ''} />
                </div>
            );
        }

        const dimensions = image.filename.split('/')[5].split('x');
        const width = !!dimensions[0] ? dimensions[0] : 0;
        const height = !!dimensions[1] ? dimensions[1] : 0;

        return (
            <div
                className={classNames(className, styles.containerImage)}
                ref={ref}
            >
                <NextImage
                    className={classNames(styles.image, {
                        [styles.isLoaded]: isLoaded
                    })}
                    src={transformImage(image.filename, desktop)}
                    alt={image.alt || ''}
                    width={cover ? null : width}
                    height={cover ? null : height}
                    loading={lazy ? 'lazy' : undefined}
                    layout={cover ? 'fill' : 'responsive'}
                    objectFit={cover ? 'cover' : null}
                    onLoadingComplete={() => setIsLoaded(true)}
                />
            </div>
        );
    }
);

Image.displayName = 'Image';

export default Image;

function transformImage(image, size, format = 'jpeg') {
    const imageService = 'https://img2.storyblok.com/';
    const path = image.replace('https://a.storyblok.com', '');

    return `${imageService + size}/filters:format(${format})${path}`;
}
