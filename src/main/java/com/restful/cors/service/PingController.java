package com.restful.cors.service;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class PingController {

    @GetMapping("/ping")
    public String ping(@RequestParam(name = "name") String name) {
        return "hey " + name;
    }

}
