import { createSelector } from 'reselect';
import { locationFilterSelector, pathFilterSelector } from './graphParamSelectors';

export const locationsSelector = (state) => state.mapState.locations;

export const pathsSelector = (state) => state.mapState.paths;

export const locationPercentilesSelector = (state) => state.mapState.locationPercentiles;

export const pathPercentilesSelector = (state) => state.mapState.pathPercentiles;

export const filteredLocationsSelector = createSelector(
        [locationsSelector, locationFilterSelector],
        (locations, locationFilter) => locations
                .filter(location => location.value >= locationFilter)
);

export const filteredLocationIdsSelector = createSelector(
        [filteredLocationsSelector],
        (filteredLocations) => filteredLocations.map(location => location.id)
);

export const filteredPathsSelector = createSelector(
        [pathsSelector, pathFilterSelector, filteredLocationIdsSelector],
        (paths, pathFilter, filteredLocationIds) => paths
                .filter(path => path.time >= pathFilter
                        && filteredLocationIds.find(id => path.fromLocationId === id)
                        && filteredLocationIds.find(id => path.toLocationId === id)
                )
);
