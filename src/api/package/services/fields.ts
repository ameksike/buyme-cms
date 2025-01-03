import { convert, units } from "./util";

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

        if (!data.cost || isNaN(data.cost)) {
            data.cost = 0;
        }

        data.weight = (data.weight || 1) * convert(data.weightUnit);
        data.weightUnit = units["default"];

        if (!data.charged || isNaN(data.charged)) {
            let percent = data.fee_percent && data.cost ? data.cost * (data.fee_percent / 100) : 0;
            let charged = ((data.fee ?? 0) + (data.tax ?? 0) + percent) * (data.weight || 1);
            data.charged = roundTo(data.cost + charged, decimals);
        }

        return data;
    }
    catch (_) {
        return data;
    }
}