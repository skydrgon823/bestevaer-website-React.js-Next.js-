import React from 'react';

import RichText from 'src/components/rich-text/RichText';

export default function Article({ blok }) {
    return (
        blok.body ? (
            <RichText document={blok.body} />
        ) : null
    );
}