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
            COALESCE(SUM(o.charged),0) AS total_charged,
            COALESCE(SUM(o.cost_real),0) AS total_cost_real,
            COALESCE(SUM(o.profits),0) AS total_profits
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

export default {
    ordersByYear
}


