/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
            },
        ],
    },
    env: {
        SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
        SANITY_DATASET: process.env.SANITY_DATASET,
        SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
    },
};


module.exports = nextConfig
