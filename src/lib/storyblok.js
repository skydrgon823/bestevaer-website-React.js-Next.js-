import { useEffect, useState } from 'react';
import StoryblokClient from 'storyblok-js-client';

export const StoryblokPublic = new StoryblokClient({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_KEY,
    cache: {
        clear: 'auto',
        type: 'memory'
    }
});

const Storyblok = new StoryblokClient({
    accessToken: process.env.STORYBLOK_API_KEY_PREVIEW,
    cache: {
        clear: 'auto',
        type: 'memory'
    }
});

export default Storyblok;

export function useStoryblok(originalStory, preview) {
    const [story, setStory] = useState(originalStory);

    // see https://www.storyblok.com/docs/guide/essentials/visual-editor#initializing-the-storyblok-js-bridge
    function initEventListeners() {
        const { StoryblokBridge } = window;

        if (typeof StoryblokBridge !== 'undefined') {
            const storyblokInstance = new StoryblokBridge();

            storyblokInstance.on(['change', 'published'], () => location.reload(true));

            storyblokInstance.on('input', (event) => {
                if (story && event.story.content._uid === story.content._uid) {
                    setStory(event.story);
                }
            });

            storyblokInstance.on('enterEditmode', (event) => {
                // loading the draft version on initial enter of editor
                Storyblok
                    .get(`cdn/stories/${event.storyId}`, {
                        version: 'draft',
                    })
                    .then(({ data }) => {
                        if (data.story) {
                            setStory(data.story);
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            })
        }
    }

    // appends the bridge script tag to our document
    // see https://www.storyblok.com/docs/guide/essentials/visual-editor#installing-the-storyblok-js-bridge
    function addBridge(callback) {
        const existingScript = document.getElementById('storyblokBridge');

        if (!existingScript) {
            const script = document.createElement('script');
            script.src = '//app.storyblok.com/f/storyblok-v2-latest.js';
            script.id = 'storyblokBridge';

            document.body.appendChild(script);

            script.onload = () => callback();
        } else {
            callback();
        }
    }

    useEffect(() => {
        // only load inside preview mode
        if (preview) {
            // first load the bridge, then initialize the event listeners
            addBridge(initEventListeners);
        }
    }, [preview]);

    // return story;

    return preview ? story : originalStory;
}

export async function createStaticProps(slug, preview) {
    const sbParams = {
        version: 'published', // or 'draft'
        resolve_relations: 'shared_component.reference'
    };

    if (preview) {
        sbParams.version = 'draft';
        sbParams.cv = Date.now();
    }

    const { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

    return {
        props: {
            story: data ? data.story : null,
            preview: preview || false,
        },
        // revalidate:3600, // revalidate every hour
    };
}