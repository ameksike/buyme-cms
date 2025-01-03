/**
 * order service
 * check: 
 *          https://docs.strapi.io/dev-docs/backend-customization/services
 *          https://docs.strapi.io/dev-docs/backend-customization/services#extending-core-services
 */

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