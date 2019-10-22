const initialState = {
    locationFilter: 0,
    locationMinValue: 0,
    locationMaxValue: 0,
    pathFilter: 0,
    pathMinValue: 0,
    pathMaxValue: 0,
};

const INIT_MIN_MAX_VALUES = 'INIT_MIN_MAX_VALUES';
const SET_LOCATION_FILTER = 'SET_LOCATION_FILTER';
const SET_PATH_FILTER = 'SET_PATH_FILTER';

export function initMinMaxValues(locationMinValue, locationMaxValue, pathMinValue, pathMaxValue) {
    return {
        type: INIT_MIN_MAX_VALUES,
        locationMinValue: locationMinValue,
        locationMaxValue: locationMaxValue,
        pathMinValue: pathMinValue,
        pathMaxValue: pathMaxValue,
    };
}

export function setLocationFilter(e, value) {
    return {
        type: SET_LOCATION_FILTER,
        value: value,
    };
}

export function setPathFilter(e, value) {
    return {
        type: SET_PATH_FILTER,
        value: value,
    };
}

export function graphParamReducer(state = initialState, action) {

    switch (action.type) {
        case INIT_MIN_MAX_VALUES:
            return {
                ...state,
                locationFilter: action.locationMinValue,
                locationMinValue: action.locationMinValue,
                locationMaxValue: action.locationMaxValue,
                pathFilter: action.pathMinValue,
                pathMinValue: action.pathMinValue,
                pathMaxValue: action.pathMaxValue,
            };
        case SET_LOCATION_FILTER:
            return {
                ...state,
                locationFilter: action.value
            };
        case SET_PATH_FILTER:
            return {
                ...state,
                pathFilter: action.value
            };
    }

    return state;
}