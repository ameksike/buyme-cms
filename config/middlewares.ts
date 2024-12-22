const {
  CF_PUBLIC_ACCESS_URL,
} = process.env;

const cloudflareUrl = CF_PUBLIC_ACCESS_URL ? CF_PUBLIC_ACCESS_URL.replace(/^https?:\/\//, "") : "";
const cloudinaryUrl = "res.cloudinary.com";

// 'strapi::security'
const strapiSecurity = {
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
          cloudflareUrl,
          cloudinaryUrl
        ],
        "media-src": [
          "'self'",
          "data:",
          "blob:",
          "market-assets.strapi.io",
          cloudflareUrl,
          cloudinaryUrl
        ],
        upgradeInsecureRequests: null,
      },
    },
  },
}; 

export default [
  'strapi::logger',
  'strapi::errors',
  strapiSecurity,
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
