export const isAllowedHost = function isAllowedHost(allowedHosts = []) {
    if (typeof window === "undefined") return false;

    const hostname = window.location.hostname;

    return allowedHosts.some(
        (host) => hostname === host || hostname.endsWith(`.${host}`),
    );
};

export const loadPosts = async function loadPosts(
    modules,
    offset = 0,
    limit = 10,
) {
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
};

export const capitalized = function captialized(str) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
};
