package ru.sb.competition.route.model.entity;

public class Path {

    private final Location fromLocation;
    private final Location toLocation;
    private final double length;
    private final double time;
    private double trafficFactor;

    public Path(
            final Location fromLocation,
            final Location toLocation,
            final double length,
            final double time
    ) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.length = length;
        this.time = time;
    }

    public Location getFromLocation() {
        return fromLocation;
    }

    public Location getToLocation() {
        return toLocation;
    }

    public double getLength() {
        return length;
    }

    public double getTime() {
        return time;
    }

    public double getTrafficFactor() {
        return trafficFactor;
    }

    public void setTrafficFactor(final double trafficFactor) {
        this.trafficFactor = trafficFactor;
    }
}
