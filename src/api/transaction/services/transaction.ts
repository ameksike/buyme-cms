/**
 * transaction service
 */

import { Core, factories } from '@strapi/strapi';

export default factories.createCoreService('api::transaction.transaction', ({ strapi }: { strapi: Core.Strapi }) => ({
    async getBalanceByUser(documentId) {
        try {
            const res = await strapi.db.connection.raw(`
                WITH totals AS (
                    SELECT 
                        COALESCE(SUM(CASE WHEN t.type = 'Credit' THEN t.value * t.rate ELSE 0 END), 0) AS credit_total,
                        COALESCE(SUM(CASE WHEN t.type = 'Debit' THEN t.value * t.rate ELSE 0 END), 0) AS debit_total
                    FROM 
                        public.transactions AS t
                    INNER JOIN 
                        public.transactions_user_lnk AS tu ON tu.transaction_id = t.id AND t.published_at IS NOT NULL
                    INNER JOIN 
                        public.up_users AS u ON u.id = tu.user_id
                    WHERE 
                        u.document_id = ?
                )
                SELECT 
                    credit_total AS credit,
                    debit_total AS debit,
                    credit_total - debit_total AS balance
                FROM 
                    totals;
            `, [documentId]);
            const data = res.rows[0];
            return data;
        } catch (error) {
            return { error: "Error fetching transcript: " + error, data: null };
        }
    },
    async getBalanceByDocId(documentId) {
        try {
            const res = await strapi.db.connection.raw(`
                WITH user_id_from_transaction AS (
                    SELECT 
                        u.id AS user_id
                    FROM 
                        public.transactions AS t
                    INNER JOIN 
                        public.transactions_user_lnk AS tu ON tu.transaction_id = t.id
                    INNER JOIN 
                        public.up_users AS u ON u.id = tu.user_id
                    WHERE 
                        t.document_id = ?
                    LIMIT 1
                ),
                user_totals AS (
                    SELECT 
                        COALESCE(SUM(CASE WHEN t.type = 'Credit' THEN t.value * t.rate ELSE 0 END), 0) AS credit_total,
                        COALESCE(SUM(CASE WHEN t.type = 'Debit' THEN t.value * t.rate ELSE 0 END), 0) AS debit_total
                    FROM 
                        public.transactions AS t
                    INNER JOIN 
                        public.transactions_user_lnk AS tu ON tu.transaction_id = t.id
                    INNER JOIN 
                        user_id_from_transaction AS uit ON tu.user_id = uit.user_id
                    WHERE 
                        t.published_at IS NOT NULL
                )
                SELECT 
                    credit_total AS credit,
                    debit_total AS debit,
                    credit_total - debit_total AS balance
                FROM 
                    user_totals;
            `, [documentId]);
            const data = res.rows[0];
            return data;
        } catch (error) {
            return { error: "Error fetching transcript: " + error, data: null };
        }
    }
}));