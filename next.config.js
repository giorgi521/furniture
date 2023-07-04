/** @type {import('next').NextConfig} */
const nextConfig = {
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
