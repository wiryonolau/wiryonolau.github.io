export async function loadPosts(modules, offset = 0, limit = 10) {
    const posts = [];

    const entries = Object.entries(modules)
        .sort(([a], [b]) => a.localeCompare(b)) // optional: stable order
        .slice(offset, offset + limit);

    for (const [path, resolver] of entries) {
        const mod = await resolver();

        const slug = path.split("/").pop().replace(".jsx", "");

        posts.push({
            slug,
            ...mod.meta,
            // Content: mod.default,
        });
    }

    return posts;
}
