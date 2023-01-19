import ButtonBrochure from 'src/components/buttons/button-brochure/ButtonBrochure';
import NewsletterSignup from 'src/components/newsletter-signup/NewsletterSignup';
import TopLinks from 'src/components/top-links/TopLinks';

const Components = {
    'newsletter_signup': NewsletterSignup,
    'button_brochure': ButtonBrochure,
    'top_links': TopLinks,
};

export default function SharedComponent({ blok }) {
    if (!blok.reference.content) {
        return (
            <p>
                The reference has not been created yet. Please add a reference and hit save.
            </p>
        );
    }

    const data = blok.reference.content.blocks[0];

    if (typeof Components[data.component] !== 'undefined') {
        const Component = Components[data.component];

        return (
            <Component blok={data} />
        );
    }

    return (
        <p>
            The component <strong>{data.component}</strong> has not been created yet.
        </p>
    );
}