package ru.sb.competition.route.model.traffic;

import java.util.List;

public class TrafficSequence {
    private final List<TrafficEntry> entries;
    private int currentIndex;

    public TrafficSequence(final List<TrafficEntry> entries) {
        this.entries = entries;
    }

    public double getFactor(final int time) {
        TrafficEntry currentEntry = entries.get(currentIndex);
        while (currentEntry.getUntil() < time) {
            currentIndex++;
            currentEntry = entries.get(currentIndex);
        }

        return currentEntry.getFactor();
    }
}
