package ru.sb.competition.route.model.entity;

public class BankLocation extends AbstractLocation {
    private int serviceTime;

    public BankLocation(final int locationCount, final int id) {
        super(locationCount, id);
    }

    @Override
    public boolean isBank() {
        return true;
    }

    @Override
    public boolean isStart() {
        return false;
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
        return serviceTime;
    }

    public void setServiceTime(final int serviceTime) {
        this.serviceTime = serviceTime;
    }
}
