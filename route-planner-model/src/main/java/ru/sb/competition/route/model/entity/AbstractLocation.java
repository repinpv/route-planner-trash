package ru.sb.competition.route.model.entity;

import ru.sb.competition.route.model.ModelConstants;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public abstract class AbstractLocation implements Location{

    private static final Random RANDOM = new Random();

    private final int id;
    private final int x = RANDOM.nextInt(ModelConstants.MAX_X);
    private final int y = RANDOM.nextInt(ModelConstants.MAX_Y);
    private final List<Path> paths;

    protected AbstractLocation(final int locationCount, final int id) {
        this.id = id;
        paths = new ArrayList<>(locationCount);
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

    @Override
    public List<Path> getPaths() {
        return paths;
    }
}
