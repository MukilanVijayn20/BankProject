package com.bank.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/loan-app/**") // Specify the path to allow CORS for
                .allowedOrigins("http://localhost:4200") // Specify the allowed origin
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Specify the allowed HTTP methods
                .allowCredentials(true)
                .maxAge(3600); // Specify the maximum age of the CORS preflight request
    }
}	