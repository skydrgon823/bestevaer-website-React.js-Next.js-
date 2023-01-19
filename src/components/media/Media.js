import React, { forwardRef } from 'react';
import classNames from 'classnames';

import Image from 'src/components/image/Image';

import { isImage } from 'src/utils/helpers';

import styles from './Media.module.scss';

const Media = forwardRef(({ className, media, lazy, cover, desktop }, ref) => {
    return (
        isImage(media.filename) ? (
            <Image
                className={className}
                desktop={desktop}
                image={media}
                cover={cover}
                lazy={lazy}
                ref={ref}
            />
        ) : (
            <video
                className={classNames(className, {
                    [styles.isCovered]: cover
                })}
                src={media.filename}
                playsInline
                autoPlay
                muted
                loop
                ref={ref}
            />
        )
    );
})

Media.displayName = 'Media';

export default Media;