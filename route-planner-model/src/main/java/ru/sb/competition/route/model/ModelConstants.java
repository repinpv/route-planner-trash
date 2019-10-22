package ru.sb.competition.route.model;

public interface ModelConstants {
    int MAX_X = 10000; // м
    int MAX_Y = 10000; // м
    double MIN_LINE_LENGTH = 100; // м
    double PATH_LENGTH_DIFF = 2; // путь может быть длинее прямой линии от 1 до 3 раз
    int MIN_SERVICE_TIME = 180; // сек
    int SERVICE_TIME_DIFF = 540; // сек
    int CLIENT_MIN_SUM = 10; // рубль
    int CLIENT_SUM_DIFF = 990; // рубль
    double CAR_SPEED = 60. * 1000. / 3600.; // скорость по свободной дороге, м/с
    int WORK_TIME = 8*3600; // сек

    int TRAFFIC_JAM_RANDOM_GROUP_COUNT = 100; // количество уникальных последовательностей пробок
    int TRAFFIC_JAM_MIN_INTERVAL = 120; // сек
    int TRAFFIC_JAM_INTERVAL_DIFF = 480; // сек
    int TRAFFIC_JAM_FACTOR_DIFF = 9; // сек
}
