/**
 * transaction controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::transaction.transaction', ({ strapi }) => ({
    async getBalanceByUser(ctx) {
        try {
            const result = await strapi.service('api::transaction.transaction').getBalanceByUser(ctx.params.id);
            const sanitizedResult = await this.sanitizeOutput(result, ctx);
            ctx.body = sanitizedResult;
        } catch (err) {
            console.log(err)
            ctx.body = err;
        }
    },
    async getBalanceByDoc(ctx) {
        try {
            const result = await strapi.service('api::transaction.transaction').getBalanceByDocId(ctx.params.id);
            const sanitizedResult = await this.sanitizeOutput(result, ctx);
            ctx.body = sanitizedResult;
        } catch (err) {
            console.log(err)
            ctx.body = err;
        }
    }
}));
