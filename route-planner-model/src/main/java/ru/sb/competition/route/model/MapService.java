package ru.sb.competition.route.model;

import org.springframework.stereotype.Service;
import ru.sb.competition.route.model.entity.AbstractLocation;
import ru.sb.competition.route.model.entity.BankLocation;
import ru.sb.competition.route.model.entity.Path;
import ru.sb.competition.route.model.entity.StartLocation;
import ru.sb.competition.route.model.entity.rest.RestLocation;
import ru.sb.competition.route.model.entity.rest.RestPath;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MapService {

    private List<AbstractLocation> locations;
    private BankLocation bankLocation;
    private StartLocation startLocation;
    private  List<Path> paths;

    private List<RestLocation> restLocations;
    private List<RestPath> restPaths;

    public List<AbstractLocation> getLocations() {
        return locations;
    }

    public BankLocation getBankLocation() {
        return bankLocation;
    }

    public StartLocation getStartLocation() {
        return startLocation;
    }

    public List<Path> getPaths() {
        return paths;
    }

    public List<RestLocation> getRestLocations() {
        return restLocations;
    }

    public List<RestPath> getRestPaths() {
        return restPaths;
    }

    public void initMap(
            final List<AbstractLocation> locations,
            final BankLocation bankLocation,
            final StartLocation startLocation,
            final List<Path> paths
    ) {
        this.locations = locations;
        this.bankLocation = bankLocation;
        this.startLocation = startLocation;
        this.paths = paths;

        this.restLocations = locations.stream()
                .map(this::convert)
                .collect(Collectors.toList());
    }

    private RestLocation convert(final AbstractLocation location) {
        final int type = location.isClient() ? 2 : (location.isStart() ? 1 : 0);

        return new RestLocation(
                location.getId(),
                location.getX(),
                location.getY(),
                type,
                location.getSum(),
                location.getServiceTime()
        );
    }
}
