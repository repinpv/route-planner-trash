package ru.sb.competition.route.webapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"ru.sb.competition.route"})
public class RoutePlannerWebapp {

    public static void main(final String[] args) {
        SpringApplication.run(RoutePlannerWebapp.class, args);
    }
}
