package com.springhub.example.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

/**
 * 사용자 생성/수정 요청 DTO
 *
 * 클라이언트에서 서버로 전송되는 데이터를 담는 객체입니다.
 * 검증 어노테이션을 통해 입력 데이터의 유효성을 보장합니다.
 */
public class UserRequest {

    @NotBlank(message = "이름은 필수입니다")
    @Size(min = 2, max = 50, message = "이름은 2-50자 사이여야 합니다")
    private String name;

    @Email(message = "유효한 이메일 주소를 입력해주세요")
    @NotBlank(message = "이메일은 필수입니다")
    private String email;

    @Size(max = 20, message = "전화번호는 20자를 초과할 수 없습니다")
    private String phoneNumber;

    // 기본 생성자
    public UserRequest() {}

    // 전체 생성자
    public UserRequest(String name, String email, String phoneNumber) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    // Getters and Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    @Override
    public String toString() {
        return "UserRequest{" +
                "name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                '}';
    }
}