import React from 'react';
import classNames from 'classnames';

import FormRequestInformation from 'src/components/forms/form-request-information/FormRequestInformation';
import RichText from 'src/components/rich-text/RichText';

import styles from './RequestInformation.module.scss';

export default function RequestInformation({ blok }) {
    return (
        <section className={styles.container}>
            <div className={styles.heading}>
                <RichText document={blok.title} />
            </div>

            <div className={styles.text}>
                <RichText document={blok.text} />
            </div>

            <FormRequestInformation className={styles.form} />
        </section>
    );
}
