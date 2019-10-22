package ru.sb.competition.route.model.traffic;

import org.springframework.stereotype.Service;
import ru.sb.competition.route.model.ModelConstants;
import ru.sb.competition.route.model.entity.Path;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class TrafficJamService {

    private static final Random RANDOM = new Random();

    private List<Path> paths;
    private List<TrafficSequence> sequences; // 100

    public void initTrafficJams(final List<Path> paths) {
        this.paths = paths;
        generateSequences();
    }

    public void processTime(final int time) {
        int currentSequenceIndex = 0;
        for (final Path path : paths) {
            if (currentSequenceIndex >= sequences.size()) {
                currentSequenceIndex = 0;
            }

            final TrafficSequence currentSequence = sequences.get(currentSequenceIndex);
            final double factor = currentSequence.getFactor(time);

            path.setTrafficFactor(factor);

            currentSequenceIndex++;
        }
    }

    private void generateSequences() {
        sequences = new ArrayList<>(ModelConstants.TRAFFIC_JAM_RANDOM_GROUP_COUNT);

        for (int i = 0; i < ModelConstants.TRAFFIC_JAM_RANDOM_GROUP_COUNT; i++) {
            final List<TrafficEntry> entries = generateSequence();

            final TrafficSequence trafficSequence = new TrafficSequence(entries);
            sequences.add(trafficSequence);
        }
    }

    private List<TrafficEntry> generateSequence() {
        final List<TrafficEntry> entries = new ArrayList<>();

        int time = 0;
        while (time < ModelConstants.WORK_TIME) {

            time = time + ModelConstants.TRAFFIC_JAM_MIN_INTERVAL
                   + Math.round(RANDOM.nextFloat() * ModelConstants.TRAFFIC_JAM_INTERVAL_DIFF);

            final double trafficFactor = 1 + RANDOM.nextDouble() * ModelConstants.TRAFFIC_JAM_FACTOR_DIFF;

            final TrafficEntry trafficEntry = new TrafficEntry(time, trafficFactor);

            entries.add(trafficEntry);
        }

        return entries;
    }
}
