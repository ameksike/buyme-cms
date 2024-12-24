/**
 * order service
 * check: 
 *          https://docs.strapi.io/dev-docs/backend-customization/services
 *          https://docs.strapi.io/dev-docs/backend-customization/services#extending-core-services
 */

import { factories } from '@strapi/strapi';

function fill(result) {
    try {
        result.profit = result.charged - result.costReal;
        result.discount = result.cost - result.costReal;
        return result;
    }
    catch (_) {
        return result;
    }
}

export default factories.createCoreService('api::order.order', ({ strapi }) => ({
    async find(...args) {
        const { results, pagination } = await super.find(...args);
        results.forEach(result => fill(result));
        return { results, pagination };
    },
    async findOne(documentId, params) {
        const result = await super.findOne(documentId, params);
        return fill(result);
    },
}));