import React from 'react';
import Script from 'next/script';
import classNames from 'classnames';

import ButtonOutline from 'src/components/buttons/button-outline/ButtonOutline';
import InputCheckbox from 'src/components/inputs/input-checkbox/InputCheckbox';
import InputTextArea from 'src/components/inputs/input-textarea/InputTextArea';
import InputRounded from 'src/components/inputs/input-rounded/InputRounded';
import InputSelect from 'src/components/inputs/input-select/InputSelect';

import styles from './FormRequestInformation.module.scss';

export default function FormRequestInformation({ className }) {
    return (
        <form
            className={classNames(className, styles.form, 'js-cm-form')}
            id="subForm"
            action="https://www.createsend.com/t/subscribeerror?description="
            method="post"
            data-id="5B5E7037DA78A748374AD499497E309EECF61B7258EE07EE30392795F45DA7C0C1296899B2D4397D1AFFF112F70724259FE38564C4F36C15473466C91D3F51B7"
        >
            <fieldset className={styles.fieldset}>
                <p className={styles.paragraph}>
                    What information would you like to receive?
                </p>

                <InputCheckbox>
                    <input
                        id="21244024"
                        name="cm-fo-diiltkuu"
                        type="checkbox"
                        value="21244024"
                    />

                    <label htmlFor="21244024">Bestevaer General</label>
                </InputCheckbox>

                <InputCheckbox>
                    <input
                        id="21244025"
                        name="cm-fo-diiltkuu"
                        type="checkbox"
                        value="21244025"
                    />

                    <label htmlFor="21244025">Sailing Yachts</label>
                </InputCheckbox>

                <InputCheckbox>
                    <input
                        id="21244026"
                        name="cm-fo-diiltkuu"
                        type="checkbox"
                        value="21244026"
                    />

                    <label htmlFor="21244026">Motor Yachts</label>
                </InputCheckbox>
            </fieldset>

            <fieldset className={styles.fieldset}>
                <InputRounded className={styles.input}>
                    <input
                        aria-label="Name"
                        id="fieldName"
                        maxLength="200"
                        name="cm-name"
                        placeholder="NAME"
                    />
                </InputRounded>

                <InputRounded className={styles.input}>
                    <input
                        autoComplete="Email"
                        aria-label="Email"
                        className="js-cm-email-input qa-input-email"
                        id="fieldEmail"
                        maxLength="200"
                        name="cm-bjrjjf-bjrjjf"
                        placeholder="EMAIL (REQUIRED)"
                        required={true}
                        type="email"
                    />
                </InputRounded>

                <InputRounded className={styles.input}>
                    <input
                        aria-label="Phone number"
                        id="fielddiiltkhu"
                        maxLength="200"
                        name="cm-f-diiltkhu"
                        placeholder="PHONE NUMBER"
                    />
                </InputRounded>

                <InputSelect className={styles.input}>
                    <select
                        aria-label="Country of residence"
                        id="fielddiiltkkj"
                        name="cm-fo-diiltkkj"
                        required={true}
                    >
                        <option value="" disabled hidden>
                            COUNTRY OF RESIDENCE (REQUIRED)
                        </option>
                        <option value="21243773">Afghanistan</option>
                        <option value="21243774">Albania</option>
                        <option value="21243775">Algeria</option>
                        <option value="21243776">American Samoa</option>
                        <option value="21243777">Andorra</option>
                        <option value="21243778">Angola</option>
                        <option value="21244018">Anguilla</option>
                        <option value="21244019">Antigua &amp; Barbuda</option>
                        <option value="21244020">Argentina</option>
                        <option value="21244021">Armenia</option>
                        <option value="21244022">Aruba</option>
                        <option value="21244023">Australia</option>
                        <option value="21244012">Austria</option>
                        <option value="21244013">Azerbaijan</option>
                        <option value="21244014">Azores</option>
                        <option value="21244015">Bahamas</option>
                        <option value="21244016">Bahrain</option>
                        <option value="21244017">Bangladesh</option>
                        <option value="21244006">Barbados</option>
                        <option value="21244007">Belarus</option>
                        <option value="21244008">Belgium</option>
                        <option value="21244009">Belize</option>
                        <option value="21244010">Benin</option>
                        <option value="21244011">Bermuda</option>
                        <option value="21244000">Bhutan</option>
                        <option value="21244001">Bolivia</option>
                        <option value="21244002">Bonaire</option>
                        <option value="21244003">
                            Bosnia &amp; Herzegovina
                        </option>
                        <option value="21244004">Botswana</option>
                        <option value="21244005">Brazil</option>
                        <option value="21243994">
                            British Indian Ocean Ter
                        </option>
                        <option value="21243995">Brunei</option>
                        <option value="21243996">Bulgaria</option>
                        <option value="21243997">Burkina Faso</option>
                        <option value="21243998">Burundi</option>
                        <option value="21243999">Cambodia</option>
                        <option value="21243988">Cameroon</option>
                        <option value="21243989">Canada</option>
                        <option value="21243990">Canary Islands</option>
                        <option value="21243991">Cape Verde</option>
                        <option value="21243992">Cayman Islands</option>
                        <option value="21243993">
                            Central African Republic
                        </option>
                        <option value="21243982">Chad</option>
                        <option value="21243983">Channel Islands</option>
                        <option value="21243984">Chile</option>
                        <option value="21243985">China</option>
                        <option value="21243986">Christmas Island</option>
                        <option value="21243987">Cocos Island</option>
                        <option value="21243976">Colombia</option>
                        <option value="21243977">Comoros</option>
                        <option value="21243978">Congo</option>
                        <option value="21243979">Congo Democratic Rep</option>
                        <option value="21243980">Cook Islands</option>
                        <option value="21243981">Costa Rica</option>
                        <option value="21243970">Cote D&apos;Ivoire</option>
                        <option value="21243971">Croatia</option>
                        <option value="21243972">Cuba</option>
                        <option value="21243973">Curacao</option>
                        <option value="21243974">Cyprus</option>
                        <option value="21243975">Czech Republic</option>
                        <option value="21243964">Denmark</option>
                        <option value="21243965">Djibouti</option>
                        <option value="21243966">Dominica</option>
                        <option value="21243967">Dominican Republic</option>
                        <option value="21243968">East Timor</option>
                        <option value="21243969">Ecuador</option>
                        <option value="21243958">Egypt</option>
                        <option value="21243959">El Salvador</option>
                        <option value="21243960">Equatorial Guinea</option>
                        <option value="21243961">Eritrea</option>
                        <option value="21243962">Estonia</option>
                        <option value="21243963">Ethiopia</option>
                        <option value="21243952">Falkland Islands</option>
                        <option value="21243953">Faroe Islands</option>
                        <option value="21243954">Fiji</option>
                        <option value="21243955">Finland</option>
                        <option value="21243956">France</option>
                        <option value="21243957">French Guiana</option>
                        <option value="21243946">French Polynesia</option>
                        <option value="21243947">French Southern Ter</option>
                        <option value="21243948">Gabon</option>
                        <option value="21243949">Gambia</option>
                        <option value="21243950">Georgia</option>
                        <option value="21243951">Germany</option>
                        <option value="21243940">Ghana</option>
                        <option value="21243941">Gibraltar</option>
                        <option value="21243942">Great Britain</option>
                        <option value="21243943">Greece</option>
                        <option value="21243944">Greenland</option>
                        <option value="21243945">Grenada</option>
                        <option value="21243934">Guadeloupe</option>
                        <option value="21243935">Guam</option>
                        <option value="21243936">Guatemala</option>
                        <option value="21243937">Guernsey</option>
                        <option value="21243938">Guinea</option>
                        <option value="21243939">Guinea-Bissau</option>
                        <option value="21243928">Guyana</option>
                        <option value="21243929">Haiti</option>
                        <option value="21243930">Honduras</option>
                        <option value="21243931">Hong Kong</option>
                        <option value="21243932">Hungary</option>
                        <option value="21243933">Iceland</option>
                        <option value="21243922">India</option>
                        <option value="21243923">Indonesia</option>
                        <option value="21243924">Iran</option>
                        <option value="21243925">Iraq</option>
                        <option value="21243926">Ireland</option>
                        <option value="21243927">Isle of Man</option>
                        <option value="21243916">Israel</option>
                        <option value="21243917">Italy</option>
                        <option value="21243918">Jamaica</option>
                        <option value="21243919">Japan</option>
                        <option value="21243920">Jersey</option>
                        <option value="21243921">Jordan</option>
                        <option value="21243910">Kazakhstan</option>
                        <option value="21243911">Kenya</option>
                        <option value="21243912">Kiribati</option>
                        <option value="21243913">Korea North</option>
                        <option value="21243914">Korea South</option>
                        <option value="21243915">Kuwait</option>
                        <option value="21243904">Kyrgyzstan</option>
                        <option value="21243905">Laos</option>
                        <option value="21243906">Latvia</option>
                        <option value="21243907">Lebanon</option>
                        <option value="21243908">Lesotho</option>
                        <option value="21243909">Liberia</option>
                        <option value="21243898">Libya</option>
                        <option value="21243899">Liechtenstein</option>
                        <option value="21243900">Lithuania</option>
                        <option value="21243901">Luxembourg</option>
                        <option value="21243902">Macau</option>
                        <option value="21243903">Macedonia</option>
                        <option value="21243892">Madagascar</option>
                        <option value="21243893">Malawi</option>
                        <option value="21243894">Malaysia</option>
                        <option value="21243895">Maldives</option>
                        <option value="21243896">Mali</option>
                        <option value="21243897">Malta</option>
                        <option value="21243886">Marshall Islands</option>
                        <option value="21243887">Martinique</option>
                        <option value="21243888">Mauritania</option>
                        <option value="21243889">Mauritius</option>
                        <option value="21243890">Mayotte</option>
                        <option value="21243891">Mexico</option>
                        <option value="21243880">Midway Islands</option>
                        <option value="21243881">Moldova</option>
                        <option value="21243882">Monaco</option>
                        <option value="21243883">Mongolia</option>
                        <option value="21243884">Montenegro</option>
                        <option value="21243885">Montserrat</option>
                        <option value="21243874">Morocco</option>
                        <option value="21243875">Mozambique</option>
                        <option value="21243876">Myanmar</option>
                        <option value="21243877">Namibia</option>
                        <option value="21243878">Nauru</option>
                        <option value="21243879">Nepal</option>
                        <option value="21243868">Netherland Antilles</option>
                        <option value="21243869">Netherlands</option>
                        <option value="21243870">Nevis</option>
                        <option value="21243871">New Caledonia</option>
                        <option value="21243872">New Zealand</option>
                        <option value="21243873">Nicaragua</option>
                        <option value="21243862">Niger</option>
                        <option value="21243863">Nigeria</option>
                        <option value="21243864">Niue</option>
                        <option value="21243865">Norfolk Island</option>
                        <option value="21243866">Norway</option>
                        <option value="21243867">Oman</option>
                        <option value="21243856">Pakistan</option>
                        <option value="21243857">Palau Island</option>
                        <option value="21243858">Palestine</option>
                        <option value="21243859">Panama</option>
                        <option value="21243860">Papua New Guinea</option>
                        <option value="21243861">Paraguay</option>
                        <option value="21243850">Peru</option>
                        <option value="21243851">Philippines</option>
                        <option value="21243852">Pitcairn Island</option>
                        <option value="21243853">Poland</option>
                        <option value="21243854">Portugal</option>
                        <option value="21243855">Puerto Rico</option>
                        <option value="21243844">Qatar</option>
                        <option value="21243845">Reunion</option>
                        <option value="21243846">Romania</option>
                        <option value="21243847">Russia</option>
                        <option value="21243848">Rwanda</option>
                        <option value="21243849">Saipan</option>
                        <option value="21243838">Samoa</option>
                        <option value="21243839">Samoa American</option>
                        <option value="21243840">San Marino</option>
                        <option value="21243841">
                            Sao Tome &amp; Principe
                        </option>
                        <option value="21243842">Saudi Arabia</option>
                        <option value="21243843">Senegal</option>
                        <option value="21243832">Serbia</option>
                        <option value="21243833">
                            Serbia &amp; Montenegro
                        </option>
                        <option value="21243834">Seychelles</option>
                        <option value="21243835">Sierra Leone</option>
                        <option value="21243836">Singapore</option>
                        <option value="21243837">Slovakia</option>
                        <option value="21243826">Slovenia</option>
                        <option value="21243827">Solomon Islands</option>
                        <option value="21243828">Somalia</option>
                        <option value="21243829">South Africa</option>
                        <option value="21243830">South Sudan</option>
                        <option value="21243831">Spain</option>
                        <option value="21243820">Sri Lanka</option>
                        <option value="21243821">St Barthelemy</option>
                        <option value="21243822">St Eustatius</option>
                        <option value="21243823">St Helena</option>
                        <option value="21243824">St Kitts-Nevis</option>
                        <option value="21243825">St Lucia</option>
                        <option value="21243814">St Maarten</option>
                        <option value="21243815">
                            St Pierre &amp; Miquelon
                        </option>
                        <option value="21243816">
                            St Vincent &amp; Grenadines
                        </option>
                        <option value="21243817">Sudan</option>
                        <option value="21243818">Suriname</option>
                        <option value="21243819">Swaziland</option>
                        <option value="21243808">Sweden</option>
                        <option value="21243809">Switzerland</option>
                        <option value="21243810">Syria</option>
                        <option value="21243811">Tahiti</option>
                        <option value="21243812">Taiwan</option>
                        <option value="21243813">Tajikistan</option>
                        <option value="21243802">Tanzania</option>
                        <option value="21243803">Thailand</option>
                        <option value="21243804">Togo</option>
                        <option value="21243805">Tokelau</option>
                        <option value="21243806">Tonga</option>
                        <option value="21243807">Trinidad &amp; Tobago</option>
                        <option value="21243796">Tunisia</option>
                        <option value="21243797">Turkey</option>
                        <option value="21243798">Turkmenistan</option>
                        <option value="21243799">Turks &amp; Caicos Is</option>
                        <option value="21243800">Tuvalu</option>
                        <option value="21243801">Uganda</option>
                        <option value="21243790">Ukraine</option>
                        <option value="21243791">United Arab Emirates</option>
                        <option value="21243792">United Kingdom</option>
                        <option value="21243793">
                            United States of America
                        </option>
                        <option value="21243794">Uruguay</option>
                        <option value="21243795">Uzbekistan</option>
                        <option value="21243784">Vanuatu</option>
                        <option value="21243785">Vatican City State</option>
                        <option value="21243786">Venezuela</option>
                        <option value="21243787">Vietnam</option>
                        <option value="21243788">Virgin Islands (Brit)</option>
                        <option value="21243789">Virgin Islands (USA)</option>
                        <option value="21243779">Wake Island</option>
                        <option value="21243780">Wallis &amp; Futana Is</option>
                        <option value="21243781">Yemen</option>
                        <option value="21243782">Zambia</option>
                        <option value="21243783">Zimbabwe</option>
                    </select>
                </InputSelect>

                {/* <InputRounded className={styles.input}>
                    <input
                        aria-label="Message"
                        id="fielddiiltull"
                        maxLength="200"
                        placeholder="MESSAGE"
                        name="cm-f-diiltull"
                    />
                </InputRounded> */}

                <InputTextArea className={styles.input}>
                    <textarea
                        aria-label="Message"
                        id="fielddiiltull"
                        placeholder="MESSAGE"
                        name="cm-f-diiltull"
                    ></textarea>
                </InputTextArea>
            </fieldset>

            <ButtonOutline className={styles.button} label="submit request" />

            <Script src="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"></Script>
        </form>
    );
}
