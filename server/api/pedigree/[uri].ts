import { JSDOM } from 'jsdom';

export default defineEventHandler(async (event) => {
    const uri = getRouterParam(event, 'uri');

    try {
        const htmlContent = await $fetch(`https://pedigreedex.com/pedigree/pedigree/preview?pedigree=${uri}`, {
            method: 'GET',
            headers: {
                'Accept': 'text/html',
            },
        });

        const dom = new JSDOM(htmlContent);
        const document = dom.window.document;

        const name = document.querySelector('.modal-title')?.textContent || '';
        const image = document.querySelector('.image-profile img')?.src || '';
        const breed = document.querySelector('table tr:nth-child(1) td:nth-child(2)')?.textContent || '';
        const gen = document.querySelector('table tr:nth-child(2) td:nth-child(2)')?.textContent || '';
        const birth = document.querySelector('table tr:nth-child(3) td:nth-child(2)')?.textContent || 'N/A';
        const country = document.querySelector('table tr:nth-child(4) td:nth-child(2)')?.textContent || '';
        const color = document.querySelector('table tr:nth-child(5) td:nth-child(2)')?.textContent || '';
        const link = document.querySelector('.modal-footer a')?.href || '';

        const response = await fetch(image);
        const arrayBuffer = await response.arrayBuffer();
        const imageData = Buffer.from(arrayBuffer).toString('base64');
        const imageType = 'image/jpeg';
        const imageSrc = `data:${imageType};base64,${imageData}`;

        const jsonData = {
            name,
            image,
            imageSrc,
            breed,
            gen,
            birth,
            country,
            color,
            link,
        };

        return jsonData;

    } catch (error: any) {
        console.error(error);
        throw createError({
            statusCode: 500,
            statusMessage: error.message,
        });
    }
});
