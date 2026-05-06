export async function loadPosts(modules) {
    const posts = [];

    for (const path in modules) {
        const mod = await modules[path]();

        const slug = path.split("/").pop().replace(".jsx", "");

        posts.push({
            slug,
            ...mod.meta,
            Content: mod.default,
        });
    }

    return posts;
}
