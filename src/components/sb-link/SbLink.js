import React from 'react';
import Link from 'next/link';

import { resolveLink } from 'src/utils/helpers';

export default function SbLink({ children, className, href, label, onClick }) {
    return (
        <Link href={resolveLink(href)}>
            <a
                className={className}
                onClick={onClick}
            >
                {children || label}
            </a>
        </Link>
    );
}