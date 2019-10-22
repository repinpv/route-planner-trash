package ru.sb.competition.route.model.entity;

import java.util.List;

public interface Location {

    boolean isBank();
    boolean isStart();
    boolean isClient();

    int getSum();
    int getServiceTime();
    List<Path> getPaths();
}
