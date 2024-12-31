/**
 * @description Rounds a number to a specified number of decimal places.
 * @param {number} value - The number to round.
 * @param {number} decimals - The number of decimal places.
 * @returns {number} - The rounded number.
 */
export function roundTo(value, decimals) {
    const factor = 10 ** decimals; // 10 elevado a los decimales
    return Math.round(value * factor) / factor;
}

export function fill(data: any, decimals: number = 3) {
    try {
        if (!data) return data;

        if (!data.cost) {
            (data.discount && data.costReal) && (data.cost = data.costReal - data.discount);
            (data.costReal && !data.discount) && (data.cost = data.costReal ?? 0);
            (!data.costReal && !data.discount) && (data.cost = data.charged ?? 0);
            data.cost = roundTo(data.cost, decimals);
        }

        if (!data.costReal) {
            data.costReal = roundTo(data.discount ? data.cost - data.discount : (data.cost ?? 0), decimals);
        }

        if (!data.discount && data.costReal && data.cost) {
            data.discount = roundTo(data.cost - data.costReal, decimals);
        }

        if (!data.charged) {
            let percent = data.fee_percent ? data.cost * (data.fee_percent / 100) : 0;
            let charged = (data.fee ?? 0) + (data.tax ?? 0) + percent;
            data.charged = roundTo(data.cost + charged, decimals);
        }

        if (!data.profits) {
            data.profits = roundTo(data.charged - data.costReal, decimals);
        }
        return data;
    }
    catch (_) {
        return data;
    }
}