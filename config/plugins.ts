const {
    CLOUDINARY_NAME,
    CLOUDINARY_KEY,
    CLOUDINARY_SECRET,
    CF_PUBLIC_ACCESS_URL,
    CF_ACCESS_KEY_ID,
    CF_ACCESS_SECRET,
    CF_ENDPOINT,
    CF_BUCKET,
    PLUGIN_UPLOAD = "cloudinary",
    PLUGIN_STPDASHBOAD = "config/charts.json",
    PLUGIN_REMOTE = false,
    PLUGIN_VIRVAL = false
} = process.env;

const cloud = {
    cloudinary: {
        config: {
            provider: "cloudinary",
            providerOptions: {
                cloud_name: CLOUDINARY_NAME,
                api_key: CLOUDINARY_KEY,
                api_secret: CLOUDINARY_SECRET
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            }
        }
    },
    cloudflare: {
        config: {
            provider: "strapi-provider-cloudflare-r2",
            providerOptions: {
                accessKeyId: CF_ACCESS_KEY_ID,
                secretAccessKey: CF_ACCESS_SECRET,
                endpoint: CF_ENDPOINT,
                params: {
                    Bucket: CF_BUCKET,
                },
                cloudflarePublicAccessUrl: CF_PUBLIC_ACCESS_URL,
                pool: false,
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    }
};

const upload = (cloud[PLUGIN_UPLOAD] || cloud.cloudflare);

console.log({
    name: "provider",
    required: PLUGIN_UPLOAD,
    loaded: upload?.config?.provider
});

const plugins = {};

if (upload) {
    plugins["upload"] = upload;
}

if (PLUGIN_STPDASHBOAD) {
    plugins["strapi-plugin-dashboard"] = {
        enabled: true,
        // resolve: "../strapi-plugin-dashboard",
    };
}

if (PLUGIN_VIRVAL) {
    plugins["virtval"] = {
        enabled: true
    };
}

if (PLUGIN_REMOTE) {
    plugins['remote-select'] = {
        enabled: true,
    };
}

export default () => (plugins);
