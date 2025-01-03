const dataUnit = {
    "default": "Pounds (lb)",
    "Ounces (oz)": 0.0625,
    "Pounds (lb)": 1,
    "Grams (g)": 0.00220462,
    "Kilograms (kg)": 2.20462
}

dataUnit["oz"] = dataUnit["Ounces (oz)"];
dataUnit["lb"] = dataUnit["Pounds (lb)"];
dataUnit["g"] = dataUnit["Grams (g)"];
dataUnit["kg"] = dataUnit["Kilograms (kg)"];
dataUnit["Ounces"] = dataUnit["Ounces (oz)"];
dataUnit["Ounces"] = dataUnit["Ounces (oz)"];
dataUnit["Pounds"] = dataUnit["Pounds (lb)"];
dataUnit["Grams"] = dataUnit["Grams (g)"];
dataUnit["Kilograms"] = dataUnit["Kilograms (kg)"];

export const units = dataUnit;

export function convert(unit: string, base: string = units[units["default"]]) {
    try {
        return units[base] * units[unit] || 1;
    }
    catch (_) {
        return 1;
    }
}

export default { units, convert };