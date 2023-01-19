import React from 'react';

import DynamicComponent from 'src/components/DynamicComponent';

export default function Page({ blok }) {
    return (
        blok.body ? (
            blok.body.map((blok) => (
                <DynamicComponent
                    blok={blok}
                    key={blok._uid}
                />
            ))
        ) : null
    );
}