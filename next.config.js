/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  },
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'ka-GE'],
    defaultLocale: 'ka-GE',
  },
  images: {
    domains: ['localhost', 'www.thesun.co.uk'],
  },
}

module.exports = nextConfig
