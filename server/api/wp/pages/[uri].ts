export default defineEventHandler( async (event) => {
    const uri = getRouterParam(event, 'uri');

    try {
        const posts: any = await $fetch(`${process.env.WP_HOST}/wp-json/wp/v2/pages?slug=${uri}&_fields=slug,content,excerpt,title`);
        const post = posts[0];

        const jsonData = {
            slug: post.slug,
            title: post.title.rendered,
            content: post.content.rendered,
            excerpt: post.excerpt.rendered,
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