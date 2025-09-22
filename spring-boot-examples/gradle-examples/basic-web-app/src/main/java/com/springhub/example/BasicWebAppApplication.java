package com.springhub.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Spring Boot Hub - 기본 웹 애플리케이션 예제
 *
 * 이 클래스는 Spring Boot 애플리케이션의 진입점입니다.
 * @SpringBootApplication 어노테이션은 다음을 자동으로 설정합니다:
 * - @Configuration: 설정 클래스로 인식
 * - @EnableAutoConfiguration: 자동 구성 활성화
 * - @ComponentScan: 컴포넌트 스캔 활성화
 */
@SpringBootApplication
public class BasicWebAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(BasicWebAppApplication.class, args);
    }
}