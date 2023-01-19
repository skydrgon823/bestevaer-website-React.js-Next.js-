import React from 'react';
import Script from 'next/script';
import classNames from 'classnames';

import ButtonOutline from 'src/components/buttons/button-outline/ButtonOutline';
import InputCheckbox from 'src/components/inputs/input-checkbox/InputCheckbox';
import InputRounded from 'src/components/inputs/input-rounded/InputRounded';
import InputSelect from 'src/components/inputs/input-select/InputSelect';

import { isEmailValid } from 'src/utils/helpers';

import styles from './FormContact.module.scss';
import InputTextArea from 'src/components/inputs/input-textarea/InputTextArea';

export default function FormContact({ className, submitLabel }) {
    // Form created in CreateSend, updated to work with React.
    // TODO: check a solution that uses a post with AJAX.

    return (
        <div className={className}>
            <form
                className={classNames(styles.form, 'js-cm-form')}
                id="subForm"
                action="https://www.createsend.com/t/subscribeerror?description="
                method="post"
                data-id="5B5E7037DA78A748374AD499497E309E32202FC94A93159221AA529BFBBA3972DBBFDC8BB785396C8BEA3BB93EF87754BCBEC79BBDAD3E0FA07FA68C249DD181"
            >
                <label className={styles.label} htmlFor="fieldditusx">
                    How can we help you?
                </label>
                <InputSelect className={styles.input}>
                    <select
                        aria-label="How can we help you?"
                        id="fieldditusx"
                        name="cm-fo-ditusx"
                        defaultValue=""
                        required={true}
                    >
                        <option value="" disabled hidden>
                            Select... (REQUIRED)
                        </option>
                        <option value="21185924">
                            I would like to receive a brochure
                        </option>
                        <option value="21185925">
                            I would like to visit the shipyard
                        </option>
                        <option value="21185926">I have a question</option>
                    </select>
                </InputSelect>

                <div className={styles.containerFields}>
                    <InputRounded className={styles.input}>
                        <input
                            aria-label="Name"
                            id="fieldName"
                            maxLength="200"
                            name="cm-name"
                            placeholder="NAME (REQUIRED)"
                            required={true}
                        />
                    </InputRounded>

                    <InputRounded className={styles.input}>
                        <input
                            autoComplete="Email"
                            aria-label="Email"
                            className="js-cm-email-input qa-input-email"
                            id="fieldEmail"
                            maxLength="200"
                            name="cm-bjllldj-bjllldj"
                            required={true}
                            placeholder="EMAIL (REQUIRED)"
                            type="email"
                        />
                    </InputRounded>

                    <InputRounded className={styles.input}>
                        <input
                            aria-label="Street Address"
                            id="fieldditkput"
                            maxLength="200"
                            name="cm-f-ditkput"
                            placeholder="STREET ADDRESS"
                        />
                    </InputRounded>

                    <InputRounded className={styles.input}>
                        <input
                            aria-label="Postal code + City"
                            id="fieldditkpui"
                            maxLength="200"
                            name="cm-f-ditkpui"
                            placeholder="POSTAL CODE + CITY"
                        />
                    </InputRounded>

                    <InputSelect className={styles.input}>
                        <select
                            aria-label="Country"
                            id="fieldditkpud"
                            name="cm-fo-ditkpud"
                            required={true}
                            defaultValue=""
                        >
                            <option value="" disabled hidden>
                                Country (REQUIRED)
                            </option>
                            <option value="21133986">Afghanistan</option>
                            <option value="21133987">Albania</option>
                            <option value="21133988">Algeria</option>
                            <option value="21133989">American Samoa</option>
                            <option value="21133990">Andorra</option>
                            <option value="21133991">Angola</option>
                            <option value="21134231">Anguilla</option>
                            <option value="21134232">
                                Antigua &amp; Barbuda
                            </option>
                            <option value="21134233">Argentina</option>
                            <option value="21134234">Armenia</option>
                            <option value="21134235">Aruba</option>
                            <option value="21134236">Australia</option>
                            <option value="21134225">Austria</option>
                            <option value="21134226">Azerbaijan</option>
                            <option value="21134227">Azores</option>
                            <option value="21134228">Bahamas</option>
                            <option value="21134229">Bahrain</option>
                            <option value="21134230">Bangladesh</option>
                            <option value="21134219">Barbados</option>
                            <option value="21134220">Belarus</option>
                            <option value="21134221">Belgium</option>
                            <option value="21134222">Belize</option>
                            <option value="21134223">Benin</option>
                            <option value="21134224">Bermuda</option>
                            <option value="21134213">Bhutan</option>
                            <option value="21134214">Bolivia</option>
                            <option value="21134215">Bonaire</option>
                            <option value="21134216">
                                Bosnia &amp; Herzegovina
                            </option>
                            <option value="21134217">Botswana</option>
                            <option value="21134218">Brazil</option>
                            <option value="21134207">
                                British Indian Ocean Ter
                            </option>
                            <option value="21134208">Brunei</option>
                            <option value="21134209">Bulgaria</option>
                            <option value="21134210">Burkina Faso</option>
                            <option value="21134211">Burundi</option>
                            <option value="21134212">Cambodia</option>
                            <option value="21134201">Cameroon</option>
                            <option value="21134202">Canada</option>
                            <option value="21134203">Canary Islands</option>
                            <option value="21134204">Cape Verde</option>
                            <option value="21134205">Cayman Islands</option>
                            <option value="21134206">
                                Central African Republic
                            </option>
                            <option value="21134195">Chad</option>
                            <option value="21134196">Channel Islands</option>
                            <option value="21134197">Chile</option>
                            <option value="21134198">China</option>
                            <option value="21134199">Christmas Island</option>
                            <option value="21134200">Cocos Island</option>
                            <option value="21134189">Colombia</option>
                            <option value="21134190">Comoros</option>
                            <option value="21134191">Congo</option>
                            <option value="21134192">
                                Congo Democratic Rep
                            </option>
                            <option value="21134193">Cook Islands</option>
                            <option value="21134194">Costa Rica</option>
                            <option value="21134183">Cote D&apos;Ivoire</option>
                            <option value="21134184">Croatia</option>
                            <option value="21134185">Cuba</option>
                            <option value="21134186">Curacao</option>
                            <option value="21134187">Cyprus</option>
                            <option value="21134188">Czech Republic</option>
                            <option value="21134177">Denmark</option>
                            <option value="21134178">Djibouti</option>
                            <option value="21134179">Dominica</option>
                            <option value="21134180">Dominican Republic</option>
                            <option value="21134181">East Timor</option>
                            <option value="21134182">Ecuador</option>
                            <option value="21134171">Egypt</option>
                            <option value="21134172">El Salvador</option>
                            <option value="21134173">Equatorial Guinea</option>
                            <option value="21134174">Eritrea</option>
                            <option value="21134175">Estonia</option>
                            <option value="21134176">Ethiopia</option>
                            <option value="21134165">Falkland Islands</option>
                            <option value="21134166">Faroe Islands</option>
                            <option value="21134167">Fiji</option>
                            <option value="21134168">Finland</option>
                            <option value="21134169">France</option>
                            <option value="21134170">French Guiana</option>
                            <option value="21134159">French Polynesia</option>
                            <option value="21134160">
                                French Southern Ter
                            </option>
                            <option value="21134161">Gabon</option>
                            <option value="21134162">Gambia</option>
                            <option value="21134163">Georgia</option>
                            <option value="21134164">Germany</option>
                            <option value="21134153">Ghana</option>
                            <option value="21134154">Gibraltar</option>
                            <option value="21134155">Great Britain</option>
                            <option value="21134156">Greece</option>
                            <option value="21134157">Greenland</option>
                            <option value="21134158">Grenada</option>
                            <option value="21134147">Guadeloupe</option>
                            <option value="21134148">Guam</option>
                            <option value="21134149">Guatemala</option>
                            <option value="21134150">Guernsey</option>
                            <option value="21134151">Guinea</option>
                            <option value="21134152">Guinea-Bissau</option>
                            <option value="21134141">Guyana</option>
                            <option value="21134142">Haiti</option>
                            <option value="21134143">Honduras</option>
                            <option value="21134144">Hong Kong</option>
                            <option value="21134145">Hungary</option>
                            <option value="21134146">Iceland</option>
                            <option value="21134135">India</option>
                            <option value="21134136">Indonesia</option>
                            <option value="21134137">Iran</option>
                            <option value="21134138">Iraq</option>
                            <option value="21134139">Ireland</option>
                            <option value="21134140">Isle of Man</option>
                            <option value="21134129">Israel</option>
                            <option value="21134130">Italy</option>
                            <option value="21134131">Jamaica</option>
                            <option value="21134132">Japan</option>
                            <option value="21134133">Jersey</option>
                            <option value="21134134">Jordan</option>
                            <option value="21134123">Kazakhstan</option>
                            <option value="21134124">Kenya</option>
                            <option value="21134125">Kiribati</option>
                            <option value="21134126">Korea North</option>
                            <option value="21134127">Korea South</option>
                            <option value="21134128">Kuwait</option>
                            <option value="21134117">Kyrgyzstan</option>
                            <option value="21134118">Laos</option>
                            <option value="21134119">Latvia</option>
                            <option value="21134120">Lebanon</option>
                            <option value="21134121">Lesotho</option>
                            <option value="21134122">Liberia</option>
                            <option value="21134111">Libya</option>
                            <option value="21134112">Liechtenstein</option>
                            <option value="21134113">Lithuania</option>
                            <option value="21134114">Luxembourg</option>
                            <option value="21134115">Macau</option>
                            <option value="21134116">Macedonia</option>
                            <option value="21134105">Madagascar</option>
                            <option value="21134106">Malawi</option>
                            <option value="21134107">Malaysia</option>
                            <option value="21134108">Maldives</option>
                            <option value="21134109">Mali</option>
                            <option value="21134110">Malta</option>
                            <option value="21134099">Marshall Islands</option>
                            <option value="21134100">Martinique</option>
                            <option value="21134101">Mauritania</option>
                            <option value="21134102">Mauritius</option>
                            <option value="21134103">Mayotte</option>
                            <option value="21134104">Mexico</option>
                            <option value="21134093">Midway Islands</option>
                            <option value="21134094">Moldova</option>
                            <option value="21134095">Monaco</option>
                            <option value="21134096">Mongolia</option>
                            <option value="21134097">Montenegro</option>
                            <option value="21134098">Montserrat</option>
                            <option value="21134087">Morocco</option>
                            <option value="21134088">Mozambique</option>
                            <option value="21134089">Myanmar</option>
                            <option value="21134090">Namibia</option>
                            <option value="21134091">Nauru</option>
                            <option value="21134092">Nepal</option>
                            <option value="21134081">
                                Netherland Antilles
                            </option>
                            <option value="21134082">Netherlands</option>
                            <option value="21134083">Nevis</option>
                            <option value="21134084">New Caledonia</option>
                            <option value="21134085">New Zealand</option>
                            <option value="21134086">Nicaragua</option>
                            <option value="21134075">Niger</option>
                            <option value="21134076">Nigeria</option>
                            <option value="21134077">Niue</option>
                            <option value="21134078">Norfolk Island</option>
                            <option value="21134079">Norway</option>
                            <option value="21134080">Oman</option>
                            <option value="21134069">Pakistan</option>
                            <option value="21134070">Palau Island</option>
                            <option value="21134071">Palestine</option>
                            <option value="21134072">Panama</option>
                            <option value="21134073">Papua New Guinea</option>
                            <option value="21134074">Paraguay</option>
                            <option value="21134063">Peru</option>
                            <option value="21134064">Philippines</option>
                            <option value="21134065">Pitcairn Island</option>
                            <option value="21134066">Poland</option>
                            <option value="21134067">Portugal</option>
                            <option value="21134068">Puerto Rico</option>
                            <option value="21134057">Qatar</option>
                            <option value="21134058">Reunion</option>
                            <option value="21134059">Romania</option>
                            <option value="21134060">Russia</option>
                            <option value="21134061">Rwanda</option>
                            <option value="21134062">Saipan</option>
                            <option value="21134051">Samoa</option>
                            <option value="21134052">Samoa American</option>
                            <option value="21134053">San Marino</option>
                            <option value="21134054">
                                Sao Tome &amp; Principe
                            </option>
                            <option value="21134055">Saudi Arabia</option>
                            <option value="21134056">Senegal</option>
                            <option value="21134045">Serbia</option>
                            <option value="21134046">
                                Serbia &amp; Montenegro
                            </option>
                            <option value="21134047">Seychelles</option>
                            <option value="21134048">Sierra Leone</option>
                            <option value="21134049">Singapore</option>
                            <option value="21134050">Slovakia</option>
                            <option value="21134039">Slovenia</option>
                            <option value="21134040">Solomon Islands</option>
                            <option value="21134041">Somalia</option>
                            <option value="21134042">South Africa</option>
                            <option value="21134043">South Sudan</option>
                            <option value="21134044">Spain</option>
                            <option value="21134033">Sri Lanka</option>
                            <option value="21134034">St Barthelemy</option>
                            <option value="21134035">St Eustatius</option>
                            <option value="21134036">St Helena</option>
                            <option value="21134037">St Kitts-Nevis</option>
                            <option value="21134038">St Lucia</option>
                            <option value="21134027">St Maarten</option>
                            <option value="21134028">
                                St Pierre &amp; Miquelon
                            </option>
                            <option value="21134029">
                                St Vincent &amp; Grenadines
                            </option>
                            <option value="21134030">Sudan</option>
                            <option value="21134031">Suriname</option>
                            <option value="21134032">Swaziland</option>
                            <option value="21134021">Sweden</option>
                            <option value="21134022">Switzerland</option>
                            <option value="21134023">Syria</option>
                            <option value="21134024">Tahiti</option>
                            <option value="21134025">Taiwan</option>
                            <option value="21134026">Tajikistan</option>
                            <option value="21134015">Tanzania</option>
                            <option value="21134016">Thailand</option>
                            <option value="21134017">Togo</option>
                            <option value="21134018">Tokelau</option>
                            <option value="21134019">Tonga</option>
                            <option value="21134020">
                                Trinidad &amp; Tobago
                            </option>
                            <option value="21134009">Tunisia</option>
                            <option value="21134010">Turkey</option>
                            <option value="21134011">Turkmenistan</option>
                            <option value="21134012">
                                Turks &amp; Caicos Is
                            </option>
                            <option value="21134013">Tuvalu</option>
                            <option value="21134014">Uganda</option>
                            <option value="21134003">Ukraine</option>
                            <option value="21134004">
                                United Arab Emirates
                            </option>
                            <option value="21134005">United Kingdom</option>
                            <option value="21134006">
                                United States of America
                            </option>
                            <option value="21134007">Uruguay</option>
                            <option value="21134008">Uzbekistan</option>
                            <option value="21133997">Vanuatu</option>
                            <option value="21133998">Vatican City State</option>
                            <option value="21133999">Venezuela</option>
                            <option value="21134000">Vietnam</option>
                            <option value="21134001">
                                Virgin Islands (Brit)
                            </option>
                            <option value="21134002">
                                Virgin Islands (USA)
                            </option>
                            <option value="21133992">Wake Island</option>
                            <option value="21133993">
                                Wallis &amp; Futana Is
                            </option>
                            <option value="21133994">Yemen</option>
                            <option value="21133995">Zambia</option>
                            <option value="21133996">Zimbabwe</option>
                        </select>
                    </InputSelect>

                    <InputTextArea className={styles.input}>
                        <textarea
                            aria-label="Message"
                            id="fieldditkxlr"
                            maxLength="200"
                            name="cm-f-ditkxlr"
                            placeholder="MESSAGE"
                        ></textarea>
                    </InputTextArea>
                </div>

                <ButtonOutline className={styles.button} label={submitLabel} />
            </form>

            <Script src="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"></Script>
        </div>
    );
}
