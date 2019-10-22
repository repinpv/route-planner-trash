package ru.sb.competition.route.model.entity.rest;

public class RestLocation {
    private final int id;
    private final int x;
    private final int y;
    private final int type;
    private final int sum;
    private final int serviceTime;

    public RestLocation(final int id, final int x, final int y, final int type, final int sum, final int serviceTime) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.type = type;
        this.sum = sum;
        this.serviceTime = serviceTime;
    }

    public int getId() {
        return id;
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }

    public int getType() {
        return type;
    }

    public int getSum() {
        return sum;
    }

    public int getServiceTime() {
        return serviceTime;
    }
}
