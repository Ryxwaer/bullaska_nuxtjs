// server/api/pedigree/dogDetail.ts
import { PedigreeDog } from "~~/models/PedigreeDog";

import { JSDOM } from 'jsdom';

export default defineEventHandler(async (event) => {
    const query = getQuery(event);

    if (!query) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Bad Request',
        });
    }

    // find dog in db by id
    const dog = await PedigreeDog.findOne({ id: query.id });

    if (dog) {
        return dog;
    }

    try {
        const htmlContent: any = await $fetch(`https://pedigreedex.com/pedigree/pedigree/preview?pedigree=${query.id}`, {
            method: 'GET',
            headers: {
                'Accept': 'text/html',
            },
        });

        const dom = new JSDOM(htmlContent);
        const document = dom.window.document;

        const name = document.querySelector('.modal-title')?.textContent || 'Unknown';
        const image = (document.querySelector('.image-profile img') as HTMLImageElement)?.src || 'Unknown';
        const breed = document.querySelector('table tr:nth-child(1) td:nth-child(2)')?.textContent || 'Unknown';
        const gender = document.querySelector('table tr:nth-child(2) td:nth-child(2)')?.textContent || 'Unknown';
        const birth = document.querySelector('table tr:nth-child(3) td:nth-child(2)')?.textContent || 'N/A';
        const country = document.querySelector('table tr:nth-child(4) td:nth-child(2)')?.textContent || 'Unknown';
        const color = document.querySelector('table tr:nth-child(5) td:nth-child(2)')?.textContent || 'Unknown';
        const link = (document.querySelector('.modal-footer a') as HTMLAnchorElement)?.href || 'Unknown';

        const response = await fetch(image);
        const arrayBuffer = await response.arrayBuffer();
        const imageData = Buffer.from(arrayBuffer).toString('base64');
        const imageType = 'image/jpeg';
        const imageSrc = `data:${imageType};base64,${imageData}`;

        const jsonData = {
            id: Number(query.id),
            name,
            image,
            imageSrc,
            breed,
            gender,
            birth,
            country,
            color,
            link,
        };

        console.log('jsonData', jsonData);

        await PedigreeDog.create(jsonData);

        return jsonData;

    } catch (error: any) {
        console.error(error);
        throw createError({
            statusCode: 500,
            statusMessage: error.message,
        });
    }
});
