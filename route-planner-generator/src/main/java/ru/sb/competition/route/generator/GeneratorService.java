package ru.sb.competition.route.generator;

import org.springframework.stereotype.Service;
import ru.sb.competition.route.model.MapService;
import ru.sb.competition.route.model.ModelConstants;
import ru.sb.competition.route.model.traffic.TrafficJamService;
import ru.sb.competition.route.model.entity.AbstractLocation;
import ru.sb.competition.route.model.entity.BankLocation;
import ru.sb.competition.route.model.entity.ClientLocation;
import ru.sb.competition.route.model.entity.Location;
import ru.sb.competition.route.model.entity.Path;
import ru.sb.competition.route.model.entity.StartLocation;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class GeneratorService {

    private static final Random RANDOM = new Random();

    private final MapService modelService;
    private final TrafficJamService trafficJamService;

    public GeneratorService(
            final MapService modelService,
            final TrafficJamService trafficJamService
    ) {
        this.modelService = modelService;
        this.trafficJamService = trafficJamService;
    }

    public void generate(final GeneratorParams params) {

        final int locationCount = params.getLocationCount();

        final List<AbstractLocation> locations = new ArrayList<>(locationCount);
        final List<Path> paths = new ArrayList<>(locationCount * locationCount);

        final BankLocation bankLocation = new BankLocation(locationCount, 0);
        locations.add(bankLocation);

        StartLocation startLocation;
        do {
            startLocation = new StartLocation(locationCount, 1);
        } while (calcPathsToOthers(startLocation, locations, paths));
        locations.add(startLocation);

        for (int i = 2; i < locationCount; i++) {
            ClientLocation location;
            do {
                location = new ClientLocation(locationCount, i);
            } while (calcPathsToOthers(location, locations, paths));
            locations.add(location);

            final int serviceTime = Math.round(RANDOM.nextFloat() * ModelConstants.SERVICE_TIME_DIFF)
                                    + ModelConstants.MIN_SERVICE_TIME;
            final int sum = Math.round(RANDOM.nextFloat() * ModelConstants.CLIENT_SUM_DIFF)
                            + ModelConstants.CLIENT_MIN_SUM;

            location.setServiceTime(serviceTime);
            location.setSum(sum);
        }

        modelService.initMap(locations, bankLocation, startLocation, paths);
        trafficJamService.initTrafficJams(paths);
    }

    private boolean calcPathsToOthers(
            final AbstractLocation newLocation,
            final List<AbstractLocation> locations,
            final List<Path> paths
    ) {
        final List<Path> newPaths = newLocation.getPaths();

        for (final AbstractLocation oldLocation : locations) {
            final int diffX = newLocation.getX() - oldLocation.getX();
            final int diffY = newLocation.getY() - oldLocation.getY();
            final double lineLength = Math.sqrt(diffX * diffX + diffY * diffY);

            if (lineLength < ModelConstants.MIN_LINE_LENGTH) {
                return false;
            }

            final double pathLength = lineLength * (1 + RANDOM.nextDouble() * ModelConstants.PATH_LENGTH_DIFF);
            final double time = pathLength / ModelConstants.CAR_SPEED;

            final Path path = new Path(newLocation, oldLocation, pathLength, time);
            newPaths.add(path);
        }

        for (final Path path : newPaths) {
            final Location oldLocation = path.getToLocation();
            oldLocation.getPaths().add(path);

            paths.add(path);
        }

        return true;
    }
}
