package ru.sb.competition.route.webapp;

import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

    private final ApplicationContext appContext;

    public IndexController(final ApplicationContext appContext) {
        this.appContext = appContext;
    }

    @GetMapping({ "/", "/index" })
    public String index(final Model model) {
        final int count = appContext.getBeanDefinitionCount();
        model.addAttribute("beanCount", count);
        final String[] names = appContext.getBeanDefinitionNames();
        model.addAttribute("beanNames", names);
        return "index";
    }
}
