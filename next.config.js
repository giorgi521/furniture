/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_SANITY_GRAPHQL_URL: process.env.NEXT_PUBLIC_SANITY_GRAPHQL_URL,
  },
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    domains: ['localhost', 'www.thesun.co.uk', 'cdn.sanity.io'],
  },
};

module.exports = nextConfig;
