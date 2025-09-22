package com.springhub.example.controller;

import com.springhub.example.dto.UserRequest;
import com.springhub.example.dto.UserResponse;
import com.springhub.example.service.UserService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

/**
 * 사용자 REST API 컨트롤러
 *
 * Spring Boot의 강력한 REST API 기능을 보여주는 예제입니다.
 * RESTful 설계 원칙에 따라 HTTP 메서드와 상태 코드를 적절히 사용합니다.
 */
@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    /**
     * 모든 활성 사용자 조회
     * GET /api/users
     */
    @GetMapping
    public ResponseEntity<List<UserResponse>> getAllUsers() {
        List<UserResponse> users = userService.findAllActiveUsers();
        return ResponseEntity.ok(users);
    }

    /**
     * 페이징을 지원하는 사용자 목록 조회
     * GET /api/users/paged?page=0&size=10&sort=name,asc
     */
    @GetMapping("/paged")
    public ResponseEntity<Page<UserResponse>> getUsersPaged(
            @PageableDefault(size = 10, sort = "createdAt") Pageable pageable) {
        Page<UserResponse> users = userService.findAllActiveUsers(pageable);
        return ResponseEntity.ok(users);
    }

    /**
     * ID로 사용자 조회
     * GET /api/users/{id}
     */
    @GetMapping("/{id}")
    public ResponseEntity<UserResponse> getUserById(@PathVariable Long id) {
        try {
            UserResponse user = userService.findById(id);
            return ResponseEntity.ok(user);
        } catch (UserService.UserNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * 이메일로 사용자 조회
     * GET /api/users/by-email?email=user@example.com
     */
    @GetMapping("/by-email")
    public ResponseEntity<UserResponse> getUserByEmail(@RequestParam String email) {
        try {
            UserResponse user = userService.findByEmail(email);
            return ResponseEntity.ok(user);
        } catch (UserService.UserNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * 새 사용자 생성
     * POST /api/users
     */
    @PostMapping
    public ResponseEntity<UserResponse> createUser(@Valid @RequestBody UserRequest request) {
        try {
            UserResponse user = userService.createUser(request);
            return ResponseEntity.status(HttpStatus.CREATED).body(user);
        } catch (UserService.DuplicateEmailException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    /**
     * 사용자 정보 수정
     * PUT /api/users/{id}
     */
    @PutMapping("/{id}")
    public ResponseEntity<UserResponse> updateUser(
            @PathVariable Long id,
            @Valid @RequestBody UserRequest request) {
        try {
            UserResponse user = userService.updateUser(id, request);
            return ResponseEntity.ok(user);
        } catch (UserService.UserNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (UserService.DuplicateEmailException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    /**
     * 사용자 비활성화 (소프트 삭제)
     * PATCH /api/users/{id}/deactivate
     */
    @PatchMapping("/{id}/deactivate")
    public ResponseEntity<Void> deactivateUser(@PathVariable Long id) {
        try {
            userService.deactivateUser(id);
            return ResponseEntity.noContent().build();
        } catch (UserService.UserNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * 사용자 완전 삭제 (하드 삭제)
     * DELETE /api/users/{id}
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        try {
            userService.deleteUser(id);
            return ResponseEntity.noContent().build();
        } catch (UserService.UserNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * 사용자 검색 (이름으로)
     * GET /api/users/search/by-name?keyword=김
     */
    @GetMapping("/search/by-name")
    public ResponseEntity<List<UserResponse>> searchUsersByName(@RequestParam String keyword) {
        List<UserResponse> users = userService.searchByName(keyword);
        return ResponseEntity.ok(users);
    }

    /**
     * 사용자 검색 (이름 또는 이메일로)
     * GET /api/users/search?keyword=kim
     */
    @GetMapping("/search")
    public ResponseEntity<List<UserResponse>> searchUsers(@RequestParam String keyword) {
        List<UserResponse> users = userService.searchUsers(keyword);
        return ResponseEntity.ok(users);
    }

    /**
     * 특정 날짜 이후 가입한 사용자 조회
     * GET /api/users/created-after?date=2023-01-01T00:00:00
     */
    @GetMapping("/created-after")
    public ResponseEntity<List<UserResponse>> getUsersCreatedAfter(@RequestParam LocalDateTime date) {
        List<UserResponse> users = userService.findUsersCreatedAfter(date);
        return ResponseEntity.ok(users);
    }

    /**
     * 사용자 통계 정보 조회
     * GET /api/users/statistics
     */
    @GetMapping("/statistics")
    public ResponseEntity<UserService.UserStatistics> getUserStatistics() {
        UserService.UserStatistics statistics = userService.getUserStatistics();
        return ResponseEntity.ok(statistics);
    }

    /**
     * 헬스체크 엔드포인트
     * GET /api/users/health
     */
    @GetMapping("/health")
    public ResponseEntity<String> healthCheck() {
        return ResponseEntity.ok("User service is running");
    }
}