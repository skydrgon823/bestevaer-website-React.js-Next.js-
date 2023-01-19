import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function GoogleTagManager({ children }) {
    const router = useRouter();

    useEffect(() => {
        function handlePageView(url) {
            window.dataLayer.push({
                event: 'pageview',
                page: url,
            });
        }

        router.events.on('routeChangeComplete', handlePageView);

        return () => {
            router.events.off('routeChangeComplete', handlePageView);
        }
    }, [router.events]);

    return children;
}