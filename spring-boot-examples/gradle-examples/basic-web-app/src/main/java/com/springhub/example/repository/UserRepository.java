package com.springhub.example.repository;

import com.springhub.example.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * 사용자 리포지토리 인터페이스
 *
 * Spring Data JPA의 강력한 기능을 보여주는 예제입니다.
 * JpaRepository를 상속받아 기본적인 CRUD 메서드를 자동으로 제공받고,
 * 메서드 명명 규칙을 통해 복잡한 쿼리도 자동 생성할 수 있습니다.
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    /**
     * 이메일로 사용자 찾기
     * Spring Data JPA가 메서드명을 분석하여 자동으로 쿼리를 생성합니다.
     */
    Optional<User> findByEmail(String email);

    /**
     * 이름에 특정 문자열이 포함된 사용자들 찾기 (대소문자 무시)
     */
    List<User> findByNameContainingIgnoreCase(String name);

    /**
     * 활성 상태인 사용자들 찾기
     */
    List<User> findByActiveTrue();

    /**
     * 활성 상태인 사용자들을 페이징으로 조회
     */
    Page<User> findByActiveTrue(Pageable pageable);

    /**
     * 특정 날짜 이후에 생성된 사용자들 찾기
     */
    List<User> findByCreatedAtAfter(LocalDateTime date);

    /**
     * 이메일과 활성 상태로 사용자 찾기
     */
    Optional<User> findByEmailAndActiveTrue(String email);

    /**
     * 전화번호가 있는 사용자들 찾기
     */
    List<User> findByPhoneNumberIsNotNull();

    /**
     * 사용자 수 세기 (활성 상태별)
     */
    long countByActive(Boolean active);

    /**
     * 이름 또는 이메일로 검색 (JPQL 사용)
     */
    @Query("SELECT u FROM User u WHERE u.name LIKE %:keyword% OR u.email LIKE %:keyword%")
    List<User> searchByNameOrEmail(@Param("keyword") String keyword);

    /**
     * 활성 사용자 목록 조회 (JPQL 사용)
     */
    @Query("SELECT u FROM User u WHERE u.active = true ORDER BY u.createdAt DESC")
    List<User> findActiveUsersOrderByCreatedAtDesc();

    /**
     * 네이티브 SQL을 사용한 복잡한 쿼리 예제
     */
    @Query(value = "SELECT * FROM users WHERE created_at BETWEEN :startDate AND :endDate",
           nativeQuery = true)
    List<User> findUsersCreatedBetweenDates(@Param("startDate") LocalDateTime startDate,
                                           @Param("endDate") LocalDateTime endDate);

    /**
     * 이메일 도메인별 사용자 수 조회
     */
    @Query("SELECT SUBSTRING(u.email, LOCATE('@', u.email) + 1), COUNT(u) " +
           "FROM User u " +
           "GROUP BY SUBSTRING(u.email, LOCATE('@', u.email) + 1)")
    List<Object[]> countUsersByEmailDomain();

    /**
     * 사용자 존재 여부 확인 (이메일 기준)
     */
    boolean existsByEmail(String email);

    /**
     * 이메일로 사용자 삭제
     */
    void deleteByEmail(String email);
}