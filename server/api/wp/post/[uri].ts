export default defineEventHandler( async (event) => {
    const uri = getRouterParam(event, 'uri');

    try {
        const posts: any = await $fetch(`${process.env.WP_HOST}/wp-json/wp/v2/posts?slug=${uri}&_fields=slug,excerpt,_links,title`);
        const post = posts[0];

        const media = post._links['wp:featuredmedia'] ? post._links['wp:featuredmedia'][0].href : null;
        let featuredMedia: string = '/nuxt.png';
        if (media) {
            const fmData: any = await $fetch(media);
            featuredMedia = fmData.guid.rendered;
        }

        const excerptWithoutA = post.excerpt.rendered.replaceAll(/<a.*?\/a>/g, '');

        const jsonData = {
            slug: post.slug,
            title: post.title.rendered,
            excerpt: excerptWithoutA,
            featuredMedia: featuredMedia,
        };

        return jsonData;

    } catch (error: any) {
        console.error(error);
        throw createError({
            statusCode: 500,
            statusMessage: error.message,
        })
    }
})