# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

## Installl
- npx create-strapi@latest
- docker-compose up
- npm install strapi-provider-cloudflare-r2 --save
- npm install @strapi/provider-upload-cloudinary
- npm install pg --save
- npm install @strapi/plugin-graphql
- npm install [strapi-plugin-remote-select](https://www.npmjs.com/package/strapi-plugin-remote-select)
- npm install [strapi-plugin-dashboard](https://github.com/ameksike/strapi-plugin-dashboard)
- npm install [strapi-plugin-virtval](https://www.npmjs.com/package/virtval)

## Run
- npm run develop
- GET [localhost/graphql](http://localhost:1337/graphql)
- GET [localhost/admin](http://localhost:1337/admin)
- GET [localhost/api/categories](http://localhost:1337/api/categories)
- GET [Neon Project Dashboard](https://console.neon.tech/app/projects)
- GET [Render Project Dashboard](https://dashboard.render.com/)

## References 
- [NVM](https://github.com/coreybutler/nvm-windows/releases)
    - nvm list
    - nvm list available
    - nvm install 20.18.1
    - nvm use 20.18.1
- [Frontend Buyme](https://github.com/ameksike/buyme)
    - [Demo](https://buyme-cms.onrender.com)
- [Strapi](https://docs.strapi.io/dev-docs/quick-start)
    - Cloud 
        - [Installing from CLI](https://docs.strapi.io/dev-docs/installation/cli)
        - [Installing from Docker](https://docs.strapi.io/dev-docs/installation/docker)
        
    - File Storage
        - [Cloudflare R2](https://market.strapi.io/providers/strapi-provider-cloudflare-r2)
        - [Strapi Gatsby Tutorial #5 - Installing Cloudinary Plugin for Strapi](https://www.youtube.com/watch?v=L15BAmxbbM4&list=PLVoKTq3-H4pjUy7hfCB0Ei1QBSnevxfhI&index=6)
    - Database
        - [Using Strapi With Supabase Deployed To Render](https://www.youtube.com/watch?v=vndfVnRPcgk)
        - [Data transfer](https://docs.strapi.io/dev-docs/data-management/transfer)
        - [How to Add an External Database to Strapi Cloud - Step by Step Tutorial](https://www.youtube.com/watch?v=g7hzv0uHHMo&list=PL7Q0DQYATmvgIDkszYY4EPvI8FXEbGgip&index=6)
    - Frontend:
        - [How To Build A Menu In Strapi](https://www.youtube.com/watch?v=sp-vqDWG9Y4&list=PL7Q0DQYATmvhlHxHqfKHsr-zFls2mIVTi)
        - [Dynamic Zones](https://www.youtube.com/watch?v=YhEVIGzJD1Y&list=PLh0b_kWrKDf84aIbQ0mcjnfgfgUJrVjPg)
        - [How To Structure Your Landing Page Data in Strapi | Step-by-Step Tutorial](https://www.youtube.com/watch?v=npRO9IeCeN4)
        - [Visually build pages with Strapi content in Plasmic](https://www.youtube.com/watch?v=1SLoVY3hkQ4)
        - [Design System Components](https://design-system.strapi.io/?path=/docs/getting-started-welcome--docs)
        - State
            - [Why Signals Are Better Than React Hooks](https://www.youtube.com/watch?v=SO8lBVWF2Y8) 
    - Server
        - [REST API](https://docs.strapi.io/dev-docs/api/rest)
        - [Query Engine API](https://docs.strapi.io/dev-docs/api/query-engine)
        - [Document Service API](https://docs.strapi.io/dev-docs/api/document-service)
        - [Mastering API Requests: Using Fetch with Strapi's Content API](https://strapi.io/blog/mastering-api-requests-using-fetch-with-strapi-content-api)
    - Plugins
        - [Strapi Marketplace](https://market.strapi.io/submit-plugin)
        - [How to build a Strapi plugin](https://www.youtube.com/watch?v=ZErV3aNdYhY)
        - [Plugin creation](https://docs.strapi.io/dev-docs/plugins/development/create-a-plugin)    
        - [Building Plugins for Strapi v4](https://www.youtube.com/playlist?list=PL7Q0DQYATmvjd5D57P8CN0_xp_HsRd3wn)
        - [How To Build Your First Strapi 5 Plugin](https://strapi.io/blog/how-to-build-your-first-strapi-5-plugin)
        - [How to create a Strapi v4 plugin: Admin customization 5/6](https://strapi.io/blog/how-to-create-a-strapi-v4-plugin-admin-customization-5-6)
        - [Admin Panel API for plugins](https://docs.strapi.io/dev-docs/plugins/admin-panel-api)
        - [SDK Plugin](https://github.com/strapi/sdk-plugin)
        - [How To Create and Publish Your First NPM Package](https://www.youtube.com/watch?v=xNr_OdpPFe4)
        - [Custom fields](https://docs.strapi.io/dev-docs/custom-fields)
        - [Plugin Resources](https://strapi.io/plugin-resources)
        - [Plugin Demo RemoteSelect](https://github.com/dmitriy-nz/strapi-plugin-remote-select/blob/main/admin/src/components/RemoteSelect/RemoteSelect.tsx)
    - Auth
        - [How To Set Up Next Auth 5 in Next.js 15 [ project code included ]](https://www.youtube.com/watch?v=xHQQ5I7E_H8)
        - [Implementación de autenticación con Next.js 15 y Strapi 5 Headless CMS [Código incluido]](https://www.youtube.com/watch?v=PL-IBGTwjxw)

- Others
    - [Create Login and Registration Form in Reactjs and Strapi Step By Step for Beginners](https://www.youtube.com/watch?v=rqVGovgDLc4&list=PLWfXLyKWUGIK8Vh8sVwJol_bDDvRj7tNW)
    - [Crea un Ecommerce desde Cero: Guía Completa con NextJS, React, Tailwind, Shadcn, Strapi y Stripe 🚀](https://www.youtube.com/watch?v=TToPJy1kTAw)
    - [Full Stack Ecommerce Store With Admin Dashboard From Scratch - Next.js, Prisma, Stripe, Tailwind](https://www.youtube.com/watch?v=iqrgggs0Qk0)
    - [Build and Deploy a React Admin Dashboard With Real time Data, Charts, Events, Kanban, CRM, and More](https://www.youtube.com/watch?v=6a3Dz8gwjdg)
    - [Build a Full Stack Next.js App with Google Calendar - TypeScript, Drizzle, ShadCN, Tailwind, Neon](https://www.youtube.com/watch?v=0Oacr8VrnNk)
### Overwriting API

File: `src\api\order\services\order.ts`

```ts
import { factories } from '@strapi/strapi';
import { fill } from './fields';

export default factories.createCoreService('api::order.order', ({ strapi }) => ({
    async find(...args) {
        let { results, pagination } = await super.find(...args);
        results = results.map(result => fill(result));
        return { results, pagination };
    },
    async findOne(documentId, params) {
        const result = await super.findOne(documentId, params);
        return fill(result);
    },
}));
```

File: `src\api\order\services\fields.ts`
```ts
export function fill(result) {
    try {
        result.profit = result.charged - result.costReal;
        result.discount = result.cost - result.costReal;
        return result;
    }
    catch (_) {
        return result;
    }
}
```

### Overwriting Admin

File: `src\api\order\content-types\order\lifecycles.ts`
```ts
import { fill } from "../../services/fields";

export default {
    beforeCreate(event) {
        const { data, where, select, populate } = event.params;
        event.params.data = fill(data);
    },
    afterFindOne(event) {
        const { params, result } = event;
        if (strapi.admin && params.populate) {
            params.populate.push('*');
            event.result = fill(result);
        }
    },
};
```

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
