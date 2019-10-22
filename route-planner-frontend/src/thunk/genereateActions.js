import axios from 'axios';
import { setLocationPercentiles, setLocations, setPathPercentiles, setPaths } from '../redux/mapReducer';
import { setStage } from '../redux/appReducer';
import { Stage } from '../const/Stage';
import { LocationPercentiles } from '../const/LocationPercentiles';
import { PathPercentiles } from '../const/PathPercentiles';
import { initMinMaxValues } from '../redux/graphParamReducer';
import { calcLocationValue } from '../utils/locationUtils';
import { FloatUtils } from '../utils/floatUtils';

export function generate() {
    return async function (dispatch, getState) {
        const paramState = getState().paramState;

        await axios.post('http://localhost:8080/rest/generate', paramState);

        let locations;
        {
            const response = await axios.get('http://localhost:8080/rest/model/getLocations');
            locations = response.data;
        }

        let paths;
        {
            const response = await axios.get('http://localhost:8080/rest/model/getPaths');
            paths = response.data;
        }

        locations.map(location => {
            const value = calcLocationValue(location);
            location.value = value;
            return location;
        });

        locations.sort(function (left, right) {
            return left.value - right.value;
        });

        const locationPercentiles = LocationPercentiles.map(percentile => {
            const index = Math.floor(locations.length * percentile.percent);
            const location = locations[index];
            return location.value;
        });

        paths.sort(function (left, right) {
            return left.time - right.time;
        });

        const pathPercentiles = PathPercentiles.map(percentile => {
            const index = Math.floor(paths.length * percentile.percent);
            const path = paths[index];
            const value = path.time;
            return value;
        });

        dispatch(setLocations(locations));
        dispatch(setPaths(paths));
        dispatch(setLocationPercentiles(locationPercentiles));
        dispatch(setPathPercentiles(pathPercentiles));

        let locationMinValue = locations[0].value;
        locationMinValue = FloatUtils.floor(locationMinValue);
        let locationMaxValue = locations[locations.length - 1].value;
        locationMaxValue = FloatUtils.ceil(locationMaxValue);
        let pathMinValue = paths[0].time;
        pathMinValue = FloatUtils.floor(pathMinValue);
        let pathMaxValue = paths[paths.length - 1].time;
        pathMaxValue = FloatUtils.ceil(pathMaxValue);

        dispatch(initMinMaxValues(locationMinValue, locationMaxValue, pathMinValue, pathMaxValue));

        dispatch(setStage(Stage.SHOW_LOCATION_MAP));
    }
}