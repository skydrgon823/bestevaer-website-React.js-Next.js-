export function isEmailValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function resolveLink(link) {
    if (typeof link === 'string') {
        return link;
    }

    if (link.linktype === 'url') {
        return link.url;
    }

    if (link?.cached_url) {
        return link.cached_url === 'home' ? '/' : `/${link.cached_url}`;
    }

    return '/';
}

export function formatDate(date) {
    return new Date(date).toLocaleString('default', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

function ScrollLock() {
    return {
        lock() {
            document.body.style.top = `${-window.pageYOffset}px`;
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
        },
        unlock() {
            const scrollValue = parseInt(document.body.style.top, 10);

            document.body.style.top = null;
            document.body.style.position = null;
            document.body.style.width = null;

            window.scrollTo(0, scrollValue * -1);
        },
    };
}

export const scrollLock = ScrollLock();

export const setCanvas = (canvas, width, height) => {
    const dpr = window.devicePixelRatio || 1;
    const ctx = canvas.getContext('2d');

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    ctx.scale(dpr, dpr);

    return ctx;
};

export function isImage(src) {
    if (!src) {
        return false;
    }


    const srcSplit = src.split('.');
    const lastIndex = srcSplit.length - 1
    const extension = srcSplit[lastIndex];

    srcSplit[lastIndex] = extension.toLowerCase();

    const newSrc = srcSplit.join('.')

    return newSrc.match(/\.(jpeg|jpg|gif|png|svg)$/) !== null;
}
