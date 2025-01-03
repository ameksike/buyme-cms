/**
 * shipping service
 */
import { Core, factories } from '@strapi/strapi';

export default factories.createCoreService('api::shipping.shipping', ({ strapi }: { strapi: Core.Strapi }) => ({

    async getBalanceByDocId(documentId) {
        try {
            const res = await strapi.db.connection.raw(`
                WITH package_data AS (
                    SELECT 
                        s.id AS shipping_id,
                        COALESCE(SUM(p.charged * p.rate), 0) AS package_total, 
                        COALESCE(SUM(p.weight), 0) AS total_weight,
                        COUNT(*) AS packages_count
                    FROM public.packages AS p
                    INNER JOIN public.packages_shipping_lnk AS ps 
                        ON ps.package_id = p.id AND p.published_at IS NOT NULL
                    INNER JOIN public.shippings AS s 
                        ON s.id = ps.shipping_id AND s.published_at IS NOT NULL
                    GROUP BY s.id
                ),
                transaction_data AS (
                    SELECT 
                        s.id AS shipping_id,
                        COALESCE(SUM(CASE WHEN t.type = 'Credit' THEN t.value * t.rate ELSE 0 END), 0) AS credit_total,
                        COALESCE(SUM(CASE WHEN t.type = 'Debit' THEN t.value * t.rate ELSE 0 END), 0) AS debit_total
                    FROM public.shippings AS s
                    INNER JOIN public.shippings_cmps AS sh 
                        ON sh.entity_id = s.id AND sh.field = 'transactions' AND s.published_at IS NOT NULL
                    INNER JOIN public.components_shared_ops AS t 
                        ON t.id = sh.cmp_id
                    GROUP BY s.id
                )
                SELECT 
                    s.name,
                    s.document_id,
                    COALESCE(pd.package_total, 0) AS package_debit,
                    COALESCE(pd.packages_count, 0) AS packages_count,
                    COALESCE(td.credit_total, 0) AS credit_total,
                    COALESCE(td.debit_total, 0) AS debit_total,
                    COALESCE(pd.total_weight, 0) AS weight_total,
                    COALESCE(td.credit_total, 0) - COALESCE(td.debit_total, 0) - COALESCE(pd.package_total, 0) AS balance
                FROM public.shippings AS s
                LEFT JOIN package_data AS pd ON pd.shipping_id = s.id
                LEFT JOIN transaction_data AS td ON td.shipping_id = s.id
                WHERE s.published_at IS NOT NULL AND s.document_id = ?
                ORDER BY s.name;
            `, [documentId]);
            const data = res.rows[0];
            return data;
        } catch (error) {
            return { error: "Error fetching transcript: " + error, data: null };
        }
    }
}));
