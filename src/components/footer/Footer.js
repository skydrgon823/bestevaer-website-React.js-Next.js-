import React from 'react';

import FooterGeneral from 'src/components/footer/footer-general/FooterGeneral';
import FooterLinks from 'src/components/footer/footer-links/FooterLinks';
import FooterForm from 'src/components/footer/footer-form/FooterForm';

import styles from './Footer.module.scss';

export default function Footer({ blok }) {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    {blok.link_columns.map((link_column) => (
                        <FooterLinks
                            className={styles.footerLinks}
                            data={link_column.links}
                            key={link_column._uid}
                        />
                    ))}
                </nav>

                <FooterForm
                    className={styles.footerForm}
                    data={blok.newsletter_signup[0]}
                />

                <FooterGeneral
                    className={styles.footerGeneral}
                    socials={blok.socials}
                    logo={blok.logo}
                    name={blok.name}
                    address={blok.address}
                    postalCode={blok.postal_code}
                    country={blok.country}
                    phoneNumber={blok.phone_number}
                    emailAddress={blok.email_address}
                    links={blok.links}
                />
            </div>
        </footer>
    );
}