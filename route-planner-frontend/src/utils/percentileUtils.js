export function calcPercentileColor(percentileConfig, percentileValues, value) {
    for (let i = 0; i < percentileValues.length; i++) {
        const percentileValue = percentileValues[i];
        if (percentileValue <= value) {
            return percentileConfig[i].color;
        }
    }
}