package com.springhub.example.dto;

import com.springhub.example.entity.User;

import java.time.LocalDateTime;

/**
 * 사용자 응답 DTO
 *
 * 서버에서 클라이언트로 전송되는 데이터를 담는 객체입니다.
 * 엔티티의 민감한 정보를 숨기고 필요한 정보만 노출합니다.
 */
public class UserResponse {

    private Long id;
    private String name;
    private String email;
    private String phoneNumber;
    private Boolean active;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    // 기본 생성자
    public UserResponse() {}

    // 전체 생성자
    public UserResponse(Long id, String name, String email, String phoneNumber,
                       Boolean active, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.active = active;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    /**
     * User 엔티티를 UserResponse DTO로 변환하는 정적 팩토리 메서드
     * 이런 패턴을 통해 엔티티와 DTO 간의 변환을 깔끔하게 처리할 수 있습니다.
     */
    public static UserResponse from(User user) {
        return new UserResponse(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getPhoneNumber(),
                user.getActive(),
                user.getCreatedAt(),
                user.getUpdatedAt()
        );
    }

    /**
     * 빌더 패턴을 활용한 객체 생성 (선택적)
     */
    public static UserResponseBuilder builder() {
        return new UserResponseBuilder();
    }

    public static class UserResponseBuilder {
        private Long id;
        private String name;
        private String email;
        private String phoneNumber;
        private Boolean active;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;

        public UserResponseBuilder id(Long id) {
            this.id = id;
            return this;
        }

        public UserResponseBuilder name(String name) {
            this.name = name;
            return this;
        }

        public UserResponseBuilder email(String email) {
            this.email = email;
            return this;
        }

        public UserResponseBuilder phoneNumber(String phoneNumber) {
            this.phoneNumber = phoneNumber;
            return this;
        }

        public UserResponseBuilder active(Boolean active) {
            this.active = active;
            return this;
        }

        public UserResponseBuilder createdAt(LocalDateTime createdAt) {
            this.createdAt = createdAt;
            return this;
        }

        public UserResponseBuilder updatedAt(LocalDateTime updatedAt) {
            this.updatedAt = updatedAt;
            return this;
        }

        public UserResponse build() {
            return new UserResponse(id, name, email, phoneNumber, active, createdAt, updatedAt);
        }
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    @Override
    public String toString() {
        return "UserResponse{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", active=" + active +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                '}';
    }
}