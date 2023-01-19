import React, { useState } from 'react';
import classNames from 'classnames';

import FormNewsletter from 'src/components/forms/form-newsletter/FormNewsletter';
import ButtonOutline from 'src/components/buttons/button-outline/ButtonOutline';
import RichText from 'src/components/rich-text/RichText';
import Icons from 'src/components/icons/Icons';

import { isEmailValid } from 'src/utils/helpers';

import styles from './FooterForm.module.scss';


export default function FooterForm({ className, data }) {
    // const [isSubmitting, setIsSubmitting] = useState(false);
    // const [isSubmitted, setIsSubmitted] = useState(false);
    // const [hasError, setHasError] = useState(false);
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: ''
    // });

    // function handleChangeInputName(name) {
    //     setFormData((prevState) => ({
    //         ...prevState,
    //         name
    //     }));
    // }

    // function handleChangeInputEmail(email) {
    //     setFormData((prevState) => ({
    //         ...prevState,
    //         email
    //     }));
    // }

    // function handleSubmitForm(e) {
    //     e.preventDefault();

    //     if (isSubmitting || isSubmitted) {
    //         return;
    //     }

    //     setIsSubmitting(true);

    //     const data = new FormData(e.target);

    //     const options = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //         body: new URLSearchParams(data).toString()
    //     };

    //     fetch('/', options)
    //         .then(() => {
    //             setIsSubmitting(false);
    //             setIsSubmitted(true);
    //             setHasError(false);
    //         })
    //         .catch((error) => {
    //             console.error(error);

    //             setIsSubmitting(false);
    //             setHasError(true);
    //         });
    // }

    return (
        <div className={classNames(className, styles.container)}>
            <div className={styles.paragraph}>
                <RichText document={data.paragraph} />
            </div>

            <FormNewsletter submitLabel="submit" />

            {/* <InputRounded
                className={styles.input}
                type="text"
                name="name"
                value={formData.name}
                isLarge={true}
                onChange={handleChangeInputName}
                placeholder={data.placeholder_name}
            />

            <InputRounded
                className={classNames(styles.input, {
                    [styles.isHidden]: formData.name.length === 0
                })}
                type="email"
                name="email"
                value={formData.email}
                isLarge={true}
                onChange={handleChangeInputEmail}
                placeholder={data.placeholder_email}
            /> */}

            {/* {isEmailValid(formData.email) && !isSubmitted && (
                <ButtonOutline
                    className={classNames(styles.button, {
                        [styles.isDisabled]: isSubmitting
                    })}
                    label={data.submit_label}
                />
            )}

            {hasError && (
                <p className={styles.message}>
                    {data.error_message}
                </p>
            )}

            {isSubmitted && (
                <>
                    <p className={styles.message}>
                        {data.success_message}
                    </p>

                    <Icons
                        className={styles.logo}
                        name="logo"
                    />
                </>
            )} */}
        </div>
    );
}