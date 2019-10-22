const initialState = {
    locations: [],
    paths: [],
    locationPercentiles: [],
    pathPercentiles: [],
};

const SET_LOCATIONS = 'SET_LOCATIONS';
const SET_PATHS = 'SET_PATHS';
const SET_LOCATION_PERCENTILES = 'SET_LOCATION_PERCENTILES';
const SET_PATH_PERCENTILES = 'SET_PATH_PERCENTILES';

export function setLocations(locations) {
    return {
        type: SET_LOCATIONS,
        locations: locations
    };
}

export function setPaths(paths) {
    return {
        type: SET_PATHS,
        paths: paths
    };
}

export function setLocationPercentiles(locationPercentiles) {
    return {
        type: SET_LOCATION_PERCENTILES,
        locationPercentiles: locationPercentiles
    };
}

export function setPathPercentiles(pathPercentiles) {
    return {
        type: SET_PATH_PERCENTILES,
        pathPercentiles: pathPercentiles
    };
}

export function mapReducer(state = initialState, action) {

    switch (action.type) {
        case SET_LOCATIONS:
            return {
                ...state,
                locations: action.locations
            };
        case SET_PATHS:
            return {
                ...state,
                paths: action.paths
            };
        case SET_LOCATION_PERCENTILES:
            return {
                ...state,
                locationPercentiles: action.locationPercentiles
            };
        case SET_PATH_PERCENTILES:
            return {
                ...state,
                pathPercentiles: action.pathPercentiles
            };
    }

    return state;
}