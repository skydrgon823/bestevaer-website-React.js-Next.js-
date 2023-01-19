import { useEffect, useState } from 'react';

// https://codesandbox.io/s/lpn3261j99?file=/src/index.tsx:680-697
export default function useDelayedUnmount(isMounted, delayTime) {
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        let timeoutId = null;

        if (isMounted && !shouldRender) {
            setShouldRender(true);
        } else if (!isMounted && shouldRender) {
            timeoutId = setTimeout(() => setShouldRender(false), delayTime);
        }

        return () => clearTimeout(timeoutId);
    }, [isMounted, delayTime, shouldRender]);

    return shouldRender;
};