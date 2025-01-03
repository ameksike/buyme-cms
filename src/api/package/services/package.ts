/**
 * package service
 */

import { factories } from '@strapi/strapi';
import { fill } from './fields';

export default factories.createCoreService('api::package.package', ({ strapi }) => ({
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
