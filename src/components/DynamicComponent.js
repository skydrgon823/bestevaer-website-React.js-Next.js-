import SbEditable from 'storyblok-react';

import TitleTextButtonImage from 'src/components/title-text-button-image/TitleTextButtonImage';
import RequestInformation from 'src/components/request-information/RequestInformation';
import TextImageCentered from 'src/components/text-image-centered/TextImageCentered';
import GridLargeHeading from 'src/components/grid-large-heading/GridLargeHeading';
import TextButtonImage from 'src/components/text-button-image/TextButtonImage';
import TitleSliderText from 'src/components/title-slider-text/TitleSliderText';
import MultipleSliders from 'src/components/multiple-sliders/MultipleSliders';
import TitleImageLogo from 'src/components/title-image-logo/TitleImageLogo';
import GridRedHeading from 'src/components/grid-red-heading/GridRedHeading';
import WideSliderText from 'src/components/wide-slider-text/WideSliderText';
import TitleTextImage from 'src/components/title-text-image/TitleTextImage';
import TextThumbnails from 'src/components/text-thumbnails/TextThumbnails';
import Specifications from 'src/components/specifications/Specifications';
import TextTwoImages from 'src/components/text-two-images/TextTwoImages';
import WideImageText from 'src/components/wide-image-text/WideImageText';
import TwoImagesText from 'src/components/two-images-text/TwoImagesText';
import RoundedBlocks from 'src/components/rounded-blocks/RoundedBlocks';
import ImageCaption from 'src/components/image-caption/ImageCaption';
import RoundedLinks from 'src/components/rounded-links/RoundedLinks';
import HeroTitle from 'src/components/heroes/hero-title/HeroTitle';
import ImagesQuote from 'src/components/images-quote/ImagesQuote';
import GenericPage from 'src/components/generic-page/GenericPage';
import ModelDetail from 'src/components/model-detail/ModelDetail';
import RequestInfo from 'src/components/request-info/RequestInfo';
import HeroLogo from 'src/components/heroes/hero-logo/HeroLogo';
import QuoteImage from 'src/components/quote-image/QuoteImage';
import ModelsList from 'src/components/models-list/ModelsList';
import VideoEmbed from 'src/components/video-embed/VideoEmbed';
import SharedComponent from 'src/components/SharedComponent';
import FleetList from 'src/components/fleet-list/FleetList';
import TextImage from 'src/components/text-image/TextImage';
import YachtType from 'src/components/yacht-type/YachtType';
import LargeText from 'src/components/large-text/LargeText';
import LinksList from 'src/components/links-list/LinksList';
import Accordion from 'src/components/accordion/Accordion';
import LogoText from 'src/components/logo-text/LogoText';
import Timeline from 'src/components/timeline/Timeline';
import Article from 'src/components/article/Article';
import Contact from 'src/components/contact/Contact';
import Banner from 'src/components/banner/Banner';
import Visit from 'src/components/visit/Visit';
import Quote from 'src/components/quote/Quote';
import Fleet from 'src/components/fleet/Fleet';
import Blog from 'src/components/blog/Blog';
import Page from 'src/components/page/Page';

const Components = {
    'title_text_button_image': TitleTextButtonImage,
    'request_information': RequestInformation,
    'text_image_centered': TextImageCentered,
    'grid_large_heading': GridLargeHeading,
    'text_button_image': TextButtonImage,
    'title_slider_text': TitleSliderText,
    'shared_component': SharedComponent,
    'multiple_sliders': MultipleSliders,
    'title_image_logo': TitleImageLogo,
    'grid_red_heading': GridRedHeading,
    'wide_slider_text': WideSliderText,
    'title_text_image': TitleTextImage,
    'text_thumbnails': TextThumbnails,
    'wide_image_text': WideImageText,
    'text_two_images': TextTwoImages,
    'two_images_text': TwoImagesText,
    'specifications': Specifications,
    'rounded_blocks': RoundedBlocks,
    'rounded_links': RoundedLinks,
    'image_caption': ImageCaption,
    'images_quote': ImagesQuote,
    'request_info': RequestInfo,
    'generic_page': GenericPage,
    'model_detail': ModelDetail,
    'quote_image': QuoteImage,
    'models_list': ModelsList,
    'video_embed': VideoEmbed,
    'fleet_list': FleetList,
    'hero_title': HeroTitle,
    'links_list': LinksList,
    'large_text': LargeText,
    'yacht_type': YachtType,
    'text_image': TextImage,
    'accordion': Accordion,
    'logo_text': LogoText,
    'hero_logo': HeroLogo,
    'timeline': Timeline,
    'article': Article,
    'contact': Contact,
    'banner': Banner,
    'visit': Visit,
    'quote': Quote,
    'fleet': Fleet,
    'blog': Blog,
    'page': Page,
};

export default function DynamicComponent({ blok }) {
    if (typeof Components[blok.component] !== 'undefined') {
        const Component = Components[blok.component];

        return (
            <SbEditable content={blok}>
                <Component blok={blok} />
            </SbEditable>
        );
    }

    return (
        <p>
            The component <strong>{blok.component}</strong> has not been created yet.
        </p>
    );
}