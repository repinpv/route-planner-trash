package ru.sb.competition.route.model.traffic;

public class TrafficEntry {
    private final int until;
    private final double factor;

    public TrafficEntry(final int until, final double factor) {
        this.until = until;
        this.factor = factor;
    }

    public int getUntil() {
        return until;
    }

    public double getFactor() {
        return factor;
    }
}
