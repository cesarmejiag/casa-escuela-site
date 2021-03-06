/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en", "es"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en",
    localeDetection: false,
  },
};

module.exports = nextConfig;
