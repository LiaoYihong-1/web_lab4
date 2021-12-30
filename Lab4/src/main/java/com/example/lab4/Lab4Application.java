package com.example.lab4;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class Lab4Application {
    public static ConfigurableApplicationContext AC;
    public static void main(String[] args) {
        AC=SpringApplication.run(Lab4Application.class, args);
    }

}
