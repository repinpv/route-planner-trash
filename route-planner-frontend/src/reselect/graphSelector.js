import { createSelector } from 'reselect';
import {
    filteredLocationsSelector,
    filteredPathsSelector,
    locationPercentilesSelector,
    pathPercentilesSelector
} from './mapSelectors';
import { calcPercentileColor } from '../utils/percentileUtils';
import { LocationPercentiles } from '../const/LocationPercentiles';
import { PathPercentiles } from '../const/PathPercentiles';


export const nodesSelector = createSelector(
        [filteredLocationsSelector, locationPercentilesSelector],
        (locations, locationPercentiles) => locations.map(location => {
            return {
                id: location.id,
                x: location.x,
                y: location.y,
                color: calcPercentileColor(
                        LocationPercentiles,
                        locationPercentiles,
                        location.value
                ),
                label: location.value,
                title: location.value
            }
        })
);

export const linksSelector = createSelector(
        [filteredPathsSelector, pathPercentilesSelector],
        (paths, pathPercentiles) => paths.map(path => {
            return {
                source: path.fromLocationId,
                target: path.toLocationId,
                color: calcPercentileColor(
                        PathPercentiles,
                        pathPercentiles,
                        path.time
                ),
                title: path.time
            };
        })
);
