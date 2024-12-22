# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

## Installl
- npx create-strapi@latest
- docker-compose up
- npm install strapi-provider-cloudflare-r2 --save
- npm install @strapi/provider-upload-cloudinary
- npm install pg --save
- npm install @strapi/plugin-graphql

## Run
- npm run develop
- GET http://localhost:1337/graphql
- GET http://localhost:1337/admin
- GET http://localhost:1337/api/categories

## References 
- [NVM](https://github.com/coreybutler/nvm-windows/releases)
    - nvm list
    - nvm list available
    - nvm install 20.18.1
    - nvm use 20.18.1
- [Frontend Buyme](https://github.com/ameksike/buyme)
- [Strapi](https://docs.strapi.io/dev-docs/quick-start)
    - [Installing from CLI](https://docs.strapi.io/dev-docs/installation/cli)
    - [Installing from Docker](https://docs.strapi.io/dev-docs/installation/docker)
    - [REST API](https://docs.strapi.io/dev-docs/api/rest)
    - [Cloudflare R2](https://market.strapi.io/providers/strapi-provider-cloudflare-r2)
    - [How to Add an External Database to Strapi Cloud - Step by Step Tutorial](https://www.youtube.com/watch?v=g7hzv0uHHMo&list=PL7Q0DQYATmvgIDkszYY4EPvI8FXEbGgip&index=6)
    - [Strapi Gatsby Tutorial #5 - Installing Cloudinary Plugin for Strapi](https://www.youtube.com/watch?v=L15BAmxbbM4&list=PLVoKTq3-H4pjUy7hfCB0Ei1QBSnevxfhI&index=6)
    - [Using Strapi With Supabase Deployed To Render](https://www.youtube.com/watch?v=vndfVnRPcgk)

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
