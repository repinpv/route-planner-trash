package ru.sb.competition.route.model.entity;

public class StartLocation extends AbstractLocation {

    public StartLocation(final int locationCount, final int id) {
        super(locationCount, id);
    }

    @Override
    public boolean isBank() {
        return false;
    }

    @Override
    public boolean isStart() {
        return true;
    }

    @Override
    public boolean isClient() {
        return false;
    }

    @Override
    public int getSum() {
        return 0;
    }

    @Override
    public int getServiceTime() {
        return 0;
    }
}
