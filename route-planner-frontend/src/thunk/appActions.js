import {setStage} from "../redux/appReducer";
import {Stage} from "../const/Stage";

export function reset() {
    return function (dispatch) {
        dispatch(setStage(Stage.CHOOSE_GENERATION_PARAMS));
    }
}