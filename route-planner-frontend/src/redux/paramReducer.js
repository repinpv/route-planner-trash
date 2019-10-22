const initialState = {
    locationCount: 100
};

const SET_LOCATION_COUNT = 'SET_LOCATION_COUNT';

export function setLocationCount(e, count) {
    return {
        type: SET_LOCATION_COUNT,
        count: count
    };
}

export function paramReducer(state = initialState, action) {

    switch (action.type) {
        case SET_LOCATION_COUNT:
            return {
                ...state,
                locationCount: action.count
            };
    }

    return state;
}