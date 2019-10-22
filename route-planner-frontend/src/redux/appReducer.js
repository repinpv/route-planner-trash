import { Stage } from '../const/Stage';

const initialState = {
    stage: Stage.CHOOSE_GENERATION_PARAMS
};

const SET_STAGE = 'SET_STAGE';

export function setStage(stage) {
    return {
        type: SET_STAGE,
        stage: stage
    };
}

export function appReducer(state = initialState, action) {

    switch (action.type) {
        case SET_STAGE:
            return {
                ...state,
                stage: action.stage
            };
    }

    return state;
}