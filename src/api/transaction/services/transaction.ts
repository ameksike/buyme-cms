/**
 * transaction service
 */

import { Core, factories } from '@strapi/strapi';

export default factories.createCoreService('api::transaction.transaction', ({ strapi }: { strapi: Core.Strapi }) => ({
    async getBalanceByUser(documentId) {
        try {
            const res = await strapi.db.connection.raw(`
                WITH tb_packages AS (
                    SELECT COALESCE(SUM(p.charged * p.rate), 0) AS package_total, COUNT(p.id) AS packages_count
                    FROM public.packages AS p
                    INNER JOIN public.packages_user_lnk AS pu ON pu.package_id = p.id
                    INNER JOIN public.up_users AS u ON u.id = pu.user_id
                    WHERE p.published_at IS NOT NULL
                ),
                tb_orders AS (
                    SELECT COALESCE(SUM(o.charged * o.rate), 0) AS order_total, COUNT(o.id) AS orders_count
                    FROM public.orders AS o
                    INNER JOIN public.orders_user_lnk AS ou ON ou.order_id = o.id
                    INNER JOIN public.up_users AS u ON u.id = ou.user_id
                    WHERE o.published_at IS NOT NULL
                ),
                totals AS (
                    SELECT
                        COALESCE(SUM(CASE WHEN t.type = 'Credit' THEN t.value * t.rate ELSE 0 END), 0) AS credit_total,
                        COALESCE(SUM(CASE WHEN t.type = 'Debit' THEN t.value * t.rate ELSE 0 END), 0) AS debit_total
                    FROM public.transactions AS t
                    INNER JOIN public.transactions_user_lnk AS tu ON tu.transaction_id = t.id
                    INNER JOIN public.up_users AS u ON u.id = tu.user_id
                    WHERE t.published_at IS NOT NULL
                )
                SELECT
                    t.credit_total AS credit,
                    t.debit_total AS debit,
                    o.order_total AS orders,
                    o.orders_count,
                    p.packages_count,
                    p.package_total AS packages,
                    t.credit_total - t.debit_total - o.order_total - p.package_total AS balance
                FROM totals AS t
                INNER JOIN tb_orders AS o ON TRUE 
                INNER JOIN tb_packages AS p ON TRUE
                INNER JOIN up_users AS u ON u.document_id = ?;
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
                tb_packages AS (
                    SELECT COALESCE(SUM(p.charged * p.rate), 0) AS package_total, COUNT(p.id) AS packages_count
                    FROM public.packages AS p
                    INNER JOIN public.packages_user_lnk AS pu ON pu.package_id = p.id
                    INNER JOIN public.up_users AS u ON u.id = pu.user_id
                    WHERE p.published_at IS NOT NULL
                ),
                tb_orders AS (
                    SELECT COALESCE(SUM(o.charged * o.rate), 0) AS order_total, COUNT(o.id) AS orders_count
                    FROM public.orders AS o
                    INNER JOIN public.orders_user_lnk AS ou ON ou.order_id = o.id
                    INNER JOIN public.up_users AS u ON u.id = ou.user_id
                    WHERE o.published_at IS NOT NULL
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
                    t.credit_total AS credit,
                    t.debit_total AS debit,
                    o.order_total AS orders,
                    o.orders_count,
                    p.packages_count,
                    p.package_total AS packages,
                    t.credit_total - t.debit_total - o.order_total - p.package_total AS balance
                FROM user_totals AS t
                INNER JOIN tb_orders AS o ON TRUE 
                INNER JOIN tb_packages AS p ON TRUE
            `, [documentId]);
            const data = res.rows[0];
            return data;
        } catch (error) {
            return { error: "Error fetching transcript: " + error, data: null };
        }
    }
}));