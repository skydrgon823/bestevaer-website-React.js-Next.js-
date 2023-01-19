import React from 'react';
import Script from 'next/script';
import classNames from 'classnames';

import ButtonOutline from 'src/components/buttons/button-outline/ButtonOutline';
import InputCheckbox from 'src/components/inputs/input-checkbox/InputCheckbox';
import InputSelect from 'src/components/inputs/input-select/InputSelect';

import { isEmailValid } from 'src/utils/helpers';

import styles from './FormNewsletter.module.scss';
import InputRounded from 'src/components/inputs/input-rounded/InputRounded';

export default function FormNewsletter({ className, title, submitLabel }) {
    // Form created in CreateSend, updated to work with React.
    // TODO: check a solution that uses a post with AJAX.

    return (
        <section className={className}>
            <h3 className={styles.heading}>
                {title}
            </h3>

            <form
                className={classNames(styles.form, 'js-cm-form')}
                id="subForm"
                action="https://www.createsend.com/t/subscribeerror?description="
                method="post" data-id="5B5E7037DA78A748374AD499497E309E1449FEAF8E9DE9C3DF7004816D3D231D5796CCC26036ADE7E41BCCE051B631034A7B9B803DB027F6F141AA0E4884F98A"
            >
                <div>
                    <InputRounded className={styles.input}>
                        <input
                            aria-label="Name"
                            placeholder="FULL NAME (REQUIRED)"
                            id="fieldName"
                            maxLength="200"
                            name="cm-name"
                            required={true}
                        />
                    </InputRounded>

                    <InputRounded className={styles.input}>
                        <input
                            className="js-cm-email-input qa-input-email"
                            autoComplete="Email"
                            aria-label="Email"
                            placeholder="EMAIL (REQUIRED)"
                            id="fieldEmail"
                            maxLength="200"
                            name="cm-bykykhd-bykykhd"
                            required={true}
                            type="email"
                        />
                    </InputRounded>

                    <InputSelect className={styles.inputSelect}>
                        <select
                            aria-label="Your preferred language"
                            id="fieldditighh"
                            name="cm-fo-ditighh"
                            required={true}
                            defaultValue=""
                        >
                            <option value="" disabled hidden>Preferred language (REQUIRED)</option>
                            <option value="20996533">Eng</option>
                            <option value="20996532">Deu</option>
                            <option value="20996534">Nl</option>
                        </select>
                    </InputSelect>

                    <InputCheckbox className={styles.inputCheckbox}>
                        <input
                            aria-required={true}
                            id="cm-privacy-consent"
                            name="cm-privacy-consent"
                            required={true}
                            type="checkbox"
                        />

                        <label htmlFor="cm-privacy-consent">
                            I agree to be emailed (required)
                        </label>
                    </InputCheckbox>

                    <input
                        id="cm-privacy-consent-hidden"
                        name="cm-privacy-consent-hidden"
                        type="hidden"
                        value={true}
                    />
                </div>

                <ButtonOutline
                    className={styles.button}
                    label={submitLabel}
                    type="submit"
                />
            </form>

            <Script src="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"></Script>
        </section>
    );
}
