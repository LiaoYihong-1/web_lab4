package com.example.lab4.controller;

import org.springframework.web.bind.annotation.RequestMapping;

@org.springframework.stereotype.Controller
public class StartController {

    @RequestMapping("/index.html")
    public String index(){
        return "index";
    }

}
