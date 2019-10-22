package ru.sb.competition.route.model;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.sb.competition.route.model.entity.rest.RestLocation;
import ru.sb.competition.route.model.entity.rest.RestPath;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4200"})
@RestController
@RequestMapping("/rest/model")
public class ModelRest {

    private final MapService modelService;

    public ModelRest(final MapService modelService) {
        this.modelService = modelService;
    }

    @GetMapping("/getLocations")
    public List<RestLocation> getLocations() {
        return modelService.getRestLocations();
    }

    @GetMapping("/getPaths")
    public List<RestPath> getPaths() {
        return modelService.getRestPaths();
    }
}
