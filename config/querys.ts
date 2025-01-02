/**
 * @description Get the list of orders grouped by months in a given year
 * @param {string} year Year number as string like: 2024 | 2025 | 2026
 * @returns {{ month: string; total_charged: string; total_cost_real: string; total_profits; string }}
 * @example 
 *  [{
 *      "month": "2024-01",
 *      "total_charged": 33.4,
 *      "total_cost_real": 61,
 *      "total_profits": -27.6
 *  },
 *  {
 *      "month": "2024-10",
 *      "total_charged": 37.49,
 *      "total_cost_real": 29.34,
 *      "total_profits": 0
 *  }]
 */
const ordersByYear = `
    WITH monthly_totals AS (
        SELECT
            DATE_TRUNC('month', o.published_at) AS month,
            COALESCE(SUM(o.charged * o.rate), 0) AS total_charged,
            COALESCE(SUM(o.cost_real * o.rate), 0) AS total_cost_real,
            COALESCE(SUM(o.profits * o.rate), 0) AS total_profits
        FROM
            public.orders AS o
        INNER JOIN
            public.orders_user_lnk AS ou
            ON ou.order_id = o.id
        INNER JOIN
            public.up_users AS u
            ON u.id = ou.user_id
        WHERE
            o.published_at IS NOT NULL
            AND EXTRACT(YEAR FROM o.published_at) = :year
        GROUP BY
            DATE_TRUNC('month', o.published_at)
    )
    SELECT
        TO_CHAR(month, 'YYYY-MM') AS month,
        total_charged,
        total_cost_real,
        total_profits
    FROM
        monthly_totals
    ORDER BY
        month;
`

/**
 * @description Get the list of shipping grouped by months in a given year
 * @param {string} year Year number as string like: 2024 | 2025 | 2026
 * @returns {{ month: string; total_charged: string; total_cost_real: string; total_profits; string }}
 * @example 
 *  [{
 *      "month": "2024-01",
 *      "total_balance": 33.4,
 *      "shipping_count": 5
 *  },
 *  {
 *      "month": "2024-10",
 *      "total_balance": 37.49,
 *      "shipping_count": 2
 *  }]
 */
const shippingByYear = `
   WITH package_data AS (
        SELECT 
            s.id AS shipping_id,
            COALESCE(SUM(p.charged * p.rate), 0) AS package_total, 
            COUNT(*) AS packages_count
        FROM public.packages AS p
        INNER JOIN public.packages_shipping_lnk AS ps 
            ON ps.package_id = p.id AND p.published_at IS NOT NULL
        INNER JOIN public.shippings AS s 
            ON s.id = ps.shipping_id AND s.published_at IS NOT NULL
        WHERE EXTRACT(YEAR FROM s.published_at) = :year
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
        WHERE EXTRACT(YEAR FROM s.published_at) = :year
        GROUP BY s.id
    )
    SELECT 
        TO_CHAR(DATE_TRUNC('month', s.published_at), 'YYYY-MM') AS month,
        COUNT(DISTINCT s.id) AS shipping_count,
        COALESCE(SUM(td.credit_total), 0) - COALESCE(SUM(td.debit_total), 0) - COALESCE(SUM(pd.package_total), 0) AS total_balance
    FROM public.shippings AS s
    LEFT JOIN package_data AS pd ON pd.shipping_id = s.id
    LEFT JOIN transaction_data AS td ON td.shipping_id = s.id
    WHERE s.published_at IS NOT NULL AND EXTRACT(YEAR FROM s.published_at) = :year
    GROUP BY DATE_TRUNC('month', s.published_at)
    ORDER BY DATE_TRUNC('month', s.published_at);
`;


export default {
    ordersByYear,
    shippingByYear
}