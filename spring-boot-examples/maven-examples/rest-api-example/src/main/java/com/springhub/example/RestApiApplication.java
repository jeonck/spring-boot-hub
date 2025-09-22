package com.springhub.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Spring Boot Hub - Maven REST API 예제
 *
 * Maven을 사용한 Spring Boot REST API 애플리케이션입니다.
 * 제품 관리 시스템을 통해 Spring Boot의 핵심 기능들을 보여줍니다.
 */
@SpringBootApplication
public class RestApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(RestApiApplication.class, args);
    }
}