package com.springhub.example.service;

import com.springhub.example.dto.UserRequest;
import com.springhub.example.dto.UserResponse;
import com.springhub.example.entity.User;
import com.springhub.example.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

/**
 * 사용자 서비스 클래스
 *
 * 비즈니스 로직을 담당하는 서비스 계층입니다.
 * Spring Boot의 의존성 주입과 트랜잭션 관리 기능을 보여줍니다.
 */
@Service
@Transactional(readOnly = true)
public class UserService {

    private final UserRepository userRepository;

    /**
     * 생성자 주입 방식 (권장)
     * @Autowired 어노테이션 없이도 Spring이 자동으로 의존성을 주입합니다.
     */
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * 모든 활성 사용자 조회
     */
    public List<UserResponse> findAllActiveUsers() {
        return userRepository.findByActiveTrue()
                .stream()
                .map(UserResponse::from)
                .collect(Collectors.toList());
    }

    /**
     * 페이징을 지원하는 사용자 목록 조회
     */
    public Page<UserResponse> findAllActiveUsers(Pageable pageable) {
        return userRepository.findByActiveTrue(pageable)
                .map(UserResponse::from);
    }

    /**
     * ID로 사용자 조회
     */
    public UserResponse findById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("사용자를 찾을 수 없습니다. ID: " + id));
        return UserResponse.from(user);
    }

    /**
     * 이메일로 사용자 조회
     */
    public UserResponse findByEmail(String email) {
        User user = userRepository.findByEmailAndActiveTrue(email)
                .orElseThrow(() -> new UserNotFoundException("사용자를 찾을 수 없습니다. Email: " + email));
        return UserResponse.from(user);
    }

    /**
     * 사용자 생성
     */
    @Transactional
    public UserResponse createUser(UserRequest request) {
        // 비즈니스 로직: 이메일 중복 체크
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new DuplicateEmailException("이미 존재하는 이메일입니다: " + request.getEmail());
        }

        // DTO를 엔티티로 변환
        User user = new User(request.getName(), request.getEmail(), request.getPhoneNumber());

        // 추가 비즈니스 로직이 있다면 여기에 구현
        validateUserData(user);

        User savedUser = userRepository.save(user);
        return UserResponse.from(savedUser);
    }

    /**
     * 사용자 정보 수정
     */
    @Transactional
    public UserResponse updateUser(Long id, UserRequest request) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("사용자를 찾을 수 없습니다. ID: " + id));

        // 이메일 변경 시 중복 체크
        if (!user.getEmail().equals(request.getEmail()) &&
            userRepository.existsByEmail(request.getEmail())) {
            throw new DuplicateEmailException("이미 존재하는 이메일입니다: " + request.getEmail());
        }

        // 엔티티 업데이트
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPhoneNumber(request.getPhoneNumber());

        validateUserData(user);

        User updatedUser = userRepository.save(user);
        return UserResponse.from(updatedUser);
    }

    /**
     * 사용자 비활성화 (소프트 삭제)
     */
    @Transactional
    public void deactivateUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("사용자를 찾을 수 없습니다. ID: " + id));

        user.setActive(false);
        userRepository.save(user);
    }

    /**
     * 사용자 완전 삭제 (하드 삭제)
     */
    @Transactional
    public void deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException("사용자를 찾을 수 없습니다. ID: " + id);
        }
        userRepository.deleteById(id);
    }

    /**
     * 이름으로 사용자 검색
     */
    public List<UserResponse> searchByName(String keyword) {
        return userRepository.findByNameContainingIgnoreCase(keyword)
                .stream()
                .filter(User::getActive)
                .map(UserResponse::from)
                .collect(Collectors.toList());
    }

    /**
     * 이름 또는 이메일로 사용자 검색
     */
    public List<UserResponse> searchUsers(String keyword) {
        return userRepository.searchByNameOrEmail(keyword)
                .stream()
                .filter(User::getActive)
                .map(UserResponse::from)
                .collect(Collectors.toList());
    }

    /**
     * 특정 날짜 이후 가입한 사용자 조회
     */
    public List<UserResponse> findUsersCreatedAfter(LocalDateTime date) {
        return userRepository.findByCreatedAtAfter(date)
                .stream()
                .filter(User::getActive)
                .map(UserResponse::from)
                .collect(Collectors.toList());
    }

    /**
     * 사용자 통계 정보 조회
     */
    public UserStatistics getUserStatistics() {
        long totalUsers = userRepository.count();
        long activeUsers = userRepository.countByActive(true);
        long inactiveUsers = userRepository.countByActive(false);

        return new UserStatistics(totalUsers, activeUsers, inactiveUsers);
    }

    /**
     * 사용자 데이터 검증 메서드
     */
    private void validateUserData(User user) {
        if (user.getName() == null || user.getName().trim().isEmpty()) {
            throw new IllegalArgumentException("사용자 이름이 필요합니다.");
        }

        if (user.getEmail() == null || !user.getEmail().contains("@")) {
            throw new IllegalArgumentException("유효한 이메일 주소가 필요합니다.");
        }

        // 추가 비즈니스 규칙 검증
        if (user.getName().length() < 2) {
            throw new IllegalArgumentException("사용자 이름은 최소 2자 이상이어야 합니다.");
        }
    }

    /**
     * 사용자 통계 정보를 담는 내부 클래스
     */
    public static class UserStatistics {
        private final long totalUsers;
        private final long activeUsers;
        private final long inactiveUsers;

        public UserStatistics(long totalUsers, long activeUsers, long inactiveUsers) {
            this.totalUsers = totalUsers;
            this.activeUsers = activeUsers;
            this.inactiveUsers = inactiveUsers;
        }

        public long getTotalUsers() { return totalUsers; }
        public long getActiveUsers() { return activeUsers; }
        public long getInactiveUsers() { return inactiveUsers; }
    }

    /**
     * 커스텀 예외 클래스들
     */
    public static class UserNotFoundException extends RuntimeException {
        public UserNotFoundException(String message) {
            super(message);
        }
    }

    public static class DuplicateEmailException extends RuntimeException {
        public DuplicateEmailException(String message) {
            super(message);
        }
    }
}