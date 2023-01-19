import React from 'react';
import classNames from 'classnames';

import styles from './ButtonBrochure.module.scss';

export default function ButtonBrochure({ blok }) {
    return (
        <a
            className={styles.link}
            href={blok.link.url}
            download
            rel="noreferrer"
            target="_blank"
        >
            {blok.label}
        </a>
    );
}
// export default function ButtonBrochure({ className, href, label }) {
//     return (
//         <a
//             className={classNames(className, styles.link)}
//             href={href}
//             download
//             rel="noreferrer"
//             target="_blank"
//         >
//             {label}
//         </a>
//     );
// }