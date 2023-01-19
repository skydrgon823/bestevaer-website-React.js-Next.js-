import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import ButtonSocial from 'src/components/buttons/button-social/ButtonSocial';
import SbLink from 'src/components/sb-link/SbLink';
import Media from 'src/components/media/Media';

import styles from './FooterGeneral.module.scss';

export default function FooterGeneral({ className, logo, socials, name, address, postalCode, country, phoneNumber, emailAddress, links }) {
    return (
        <div className={classNames(className, styles.container)}>
            <a href="https://www.kmy.nl/" target="_blank" rel="noreferrer">
                <Media
                    className={styles.logo}
                    media={logo}
                    lazy={true}
                />
            </a>

            <ul className={styles.listSocials}>
                {socials.map((social) => (
                    <li
                        className={styles.listItemSocials}
                        key={social._uid}
                    >
                        <ButtonSocial
                            className={styles.social}
                            name={social.name}
                            href={social.link.url}
                            target="_blank"
                        />
                    </li>
                ))}
            </ul>

            <div className={styles.containerContact}>
                <span className={styles.copy}>
                    {name}
                </span>

                <span className={styles.copy}>
                    {address}
                </span>

                <span className={styles.copy}>
                    {postalCode}
                </span>

                <span className={styles.copy}>
                    {country}
                </span>

                <a
                    className={styles.copy}
                    href={`tel:${phoneNumber}`}
                    rel="noreferrer"
                >
                    {phoneNumber}
                </a>

                <a
                    className={classNames(styles.link, styles.copy)}
                    href={`mailto:${emailAddress}`}
                    rel="noreferrer"
                >
                    {emailAddress}
                </a>

                {links.map((link) => (
                    <SbLink
                        className={classNames(styles.link, styles.copy)}
                        label={link.label}
                        href={link.link}
                        key={link._uid}
                    />
                ))}
            </div>
        </div>
    );
}