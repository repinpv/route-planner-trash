package ru.sb.competition.route.model.entity;

public class ClientLocation extends AbstractLocation {

    private int serviceTime;
    private int sum;

    public ClientLocation(final int locationCount, final int id) {
        super(locationCount, id);
    }

    @Override
    public int getServiceTime() {
        return serviceTime;
    }

    public void setServiceTime(final int serviceTime) {
        this.serviceTime = serviceTime;
    }

    @Override
    public int getSum() {
        return sum;
    }

    public void setSum(final int sum) {
        this.sum = sum;
    }

    @Override
    public boolean isBank() {
        return false;
    }

    @Override
    public boolean isStart() {
        return false;
    }

    @Override
    public boolean isClient() {
        return true;
    }
}
