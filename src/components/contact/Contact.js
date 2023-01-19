import React, { useRef } from 'react';
import classNames from 'classnames';

import FormContact from 'src/components/forms/form-contact/FormContact';
import RichText from 'src/components/rich-text/RichText';

import styles from './Contact.module.scss';

export default function Contact({ blok }) {
    const containerRef = useRef(null);

    return (
        <section className={styles.container} ref={containerRef}>
            <h2 className={styles.heading}>{blok.title}</h2>

            <div className={styles.containerText}>
                <RichText document={blok.text} />
            </div>

            <FormContact className={styles.form} submitLabel="submit" />
        </section>
    );
}
