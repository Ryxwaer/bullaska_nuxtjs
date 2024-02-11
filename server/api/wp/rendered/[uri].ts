import { JSDOM } from 'jsdom';

export default defineEventHandler( async (event) => {
    const uri = getRouterParam(event, 'uri');

    try {
        const pageData: any = await $fetch(`${process.env.WP_HOST}/${uri}`);

        const dom = new JSDOM(pageData);

        // Remove header element
        const header = dom.window.document.querySelector('header');
        if (header) {
            header.remove();
        }
        /*
        // Remove footer element
        const footer = dom.window.document.querySelector('footer');
        if (footer) {
            footer.remove();
        }
        */
        /*/ remove all styles
        const styles = Array.from(dom.window.document.querySelectorAll('style'));
        for (const style of styles) {
            style.remove();
        }

        // remove linked stylesheets
        const lnks = Array.from(dom.window.document.querySelectorAll('link'));
        for (const lnk of lnks) {
            lnk.remove();
        }*/

        // Process and update links
        const links = dom.window.document.querySelectorAll('a');
        links.forEach(link => {
            const url = new URL(link.href);
            let segmented = url.pathname.split('/');
            if (!segmented[-1]) {
                segmented.pop();
            }
            link.href = `/blog/${segmented.pop()}`;
        });

        return dom.serialize();
    } catch (error: any) {
        console.error(error);
        throw createError({
            statusCode: 500,
            statusMessage: error.message,
        })
    }
})