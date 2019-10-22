package ru.sb.competition.route.generator;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4200"})
@RestController
public class GeneratorRest {

    private final GeneratorService generatorService;

    public GeneratorRest(final GeneratorService generatorService) {
        this.generatorService = generatorService;
    }

    @PostMapping("/rest/generate")
    public void generate(@RequestBody final GeneratorParams params) {
        generatorService.generate(params);
    }
}
