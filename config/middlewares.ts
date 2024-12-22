const {
  CF_PUBLIC_ACCESS_URL,
} = process.env;

export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            CF_PUBLIC_ACCESS_URL ? CF_PUBLIC_ACCESS_URL.replace(/^https?:\/\//, "") : "",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            CF_PUBLIC_ACCESS_URL ? CF_PUBLIC_ACCESS_URL.replace(/^https?:\/\//, "") : "",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
