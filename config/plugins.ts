const {
    FILE_PROVIDER = "cloudinary",
    CLOUDINARY_NAME,
    CLOUDINARY_KEY,
    CLOUDINARY_SECRET,
    CF_PUBLIC_ACCESS_URL,
    CF_ACCESS_KEY_ID,
    CF_ACCESS_SECRET,
    CF_ENDPOINT,
    CF_BUCKET
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

const upload = (cloud[FILE_PROVIDER] || cloud.cloudflare);

console.log({
    name: "provider",
    required: FILE_PROVIDER,
    loaded: upload?.config?.provider
});

export default () => ({
    upload,
    "ksvirt": {
        enabled: true,
        resolve: "./src/plugins/ksvirt",
    }
});
