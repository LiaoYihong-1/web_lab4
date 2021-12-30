package com.example.lab4.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
public class LoginController {
    @RequestMapping("/main.html")
    public String main(){
        return "main";
    }
    @RequestMapping("/register.html")
    public String register(){
        return "register";
    }
}
