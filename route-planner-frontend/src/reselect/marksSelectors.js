import { createSelector } from 'reselect';
import { locationPercentilesSelector, pathPercentilesSelector } from './mapSelectors';
import { graphParamSelector } from './graphParamSelectors';
import { FloatUtils } from '../utils/floatUtils';

export const locationMarksSelector = createSelector(
        [graphParamSelector, locationPercentilesSelector],
        (graphParams, locationPercentiles) =>
                calcMarks(graphParams.locationMinValue, graphParams.locationMaxValue, locationPercentiles)
);

export const pathMarksSelector = createSelector(
        [graphParamSelector, pathPercentilesSelector],
        (graphParams, pathPercentiles) =>
                calcMarks(graphParams.pathMinValue, graphParams.pathMaxValue, pathPercentiles)
);

const calcMarks = function (minValue, maxValue, percentiles) {
    let marks = [];
    //         = [
    //     {
    //         value: minValue,
    //         label: minValue
    //     }
    // ];

    const middleMarks = percentiles.map(value => {
        const roundedValue = FloatUtils.floor(value);
        return {
            value: roundedValue,
            label: roundedValue
        }
    });
    marks.push(...middleMarks);

    marks.push(
            {
                value: maxValue,
                label: maxValue
            }
    );

    return marks;
};