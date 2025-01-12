package com.example.kwohyuno;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/")
public class MainController {
    private final RestTemplate restTemplate = new RestTemplate();

    @GetMapping("/**")
    public String proxyToReact() {
        String reactServerUrl = "http://localhost:3000";
        return restTemplate.getForObject(reactServerUrl, String.class);
    }
}
