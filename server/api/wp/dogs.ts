export default defineEventHandler(async () => {

    try {
        const posts: any = await $fetch(`${process.env.WP_HOST}/wp-json/wp/v2/posts?tags=10&_fields=slug,excerpt,_links,title`);
        const jsonData: any[] = [];

        for (const post of posts) {
            const media = post._links['wp:featuredmedia'] ? post._links['wp:featuredmedia'][0].href : null;
            let featuredMedia: string = '/nuxt.png';
            if (media) {
                const fmData: any = await $fetch(media);
                featuredMedia = fmData.guid.rendered;
            }
            jsonData.push({
                slug: post.slug,
                title: post.title.rendered,
                excerpt: post.excerpt.rendered.replaceAll(`${process.env.WP_PUB_ADDRESS}`, `/blog`),
                featuredMedia: featuredMedia,
            });
        }
        console.log(jsonData);
        return jsonData;

    } catch (error: any) {
        console.error(error);
        throw createError({
            statusCode: 500,
            statusMessage: error.message,
        })
    }
})