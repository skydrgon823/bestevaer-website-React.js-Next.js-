import React, { useState } from 'react';
import classNames from 'classnames';

import FormNewsletter from 'src/components/forms/form-newsletter/FormNewsletter';
import ButtonOutline from 'src/components/buttons/button-outline/ButtonOutline';
import InputRounded from 'src/components/inputs/input-rounded/InputRounded';
import RichText from 'src/components/rich-text/RichText';

import styles from './NewsletterSignup.module.scss';

export default function NewsletterSignup({ blok }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // TODO: helper validation
    function handleSubmit(e) {
        e.preventDefault();

        if (isSubmitting || isSubmitted) {
            return;
        }

        setIsSubmitting(true);
    }

    return (
        <section className={styles.container}>
            <h2 className={styles.heading}>
                <RichText document={blok.title} />
            </h2>

            <div className={styles.containerContent}>
                <div className={styles.containerCopy}>
                    <RichText document={blok.text} />
                </div>

                <FormNewsletter
                    className={styles.form}
                    title={blok.form_title}
                    submitLabel={blok.submit_label}
                />

                {/* <form
                    className={styles.form}
                    name="newsletter-signup"
                    method="post"
                    data-netlify={true}
                    onSubmit={handleSubmit}
                >
                    <input type="hidden" name="form-name" value="newsletter-signup" />

                    <h3 className={styles.subHeading}>
                        {blok.form_title}
                    </h3>

                    <InputRounded
                        className={styles.input}
                        type="text"
                        name="name"
                        placeholder={blok.placeholder_name}
                    />

                    <InputRounded
                        className={styles.input}
                        type="email"
                        name="email"
                        placeholder={blok.placeholder_email}
                    />

                    <ButtonOutline
                        className={classNames(styles.button, {
                            [styles.isDisabled]: isSubmitting
                        })}
                        label={blok.submit_label}
                    />
                </form> */}
            </div>
        </section>
    );
}