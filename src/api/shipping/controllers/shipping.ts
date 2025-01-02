/**
 * shipping controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::shipping.shipping', ({ strapi }) => ({
    /**
     * Get the balance summary of shipping
     * @example {
     *      "name": "CU-09-01",
     *      "document_id": "mg5kjhe5s2g5dcfj1mvj3nrc",
     *      "package_debit": 14.7,
     *      "packages_count": "2",
     *      "credit_total": 0,
     *      "debit_total": 650,
     *      "balance": -664.7
     * }
     */
    async getBalanceByDoc(ctx) {
        try {
            const result = await strapi.service('api::shipping.shipping').getBalanceByDocId(ctx.params.id);
            const sanitizedResult = await this.sanitizeOutput(result, ctx);
            ctx.body = sanitizedResult;
        } catch (err) {
            console.log(err)
            ctx.body = err;
        }
    }
}));

