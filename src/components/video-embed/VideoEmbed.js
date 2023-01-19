import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import styles from './VideoEmbed.module.scss';

export default function VideoEmbed({ className, blok }) {
    const [embedCode, setEmbedCode] = useState(null)
    
    useEffect(() => {
        async function getVideoEmbedJSON() {
            const oembed = blok.type === 'youtube' ? `https://www.youtube.com/oembed?url=${blok.url}&format=json` : `https://vimeo.com/api/oembed.json?url=${blok.url}`
            const resp = await fetch(oembed)
            const data = await resp.json()

            return data
        }

        getVideoEmbedJSON().then(res => setEmbedCode(res.html))
    }, [blok])

    return (
        <div className={classNames(className, styles.embedCode)} dangerouslySetInnerHTML={{ __html: embedCode }} />
    );
}