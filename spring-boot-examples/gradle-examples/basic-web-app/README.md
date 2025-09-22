# Spring Boot 기본 웹 애플리케이션 예제

이 프로젝트는 Spring Boot를 사용한 기본적인 웹 애플리케이션 구현 예제입니다. RESTful API, JPA, 검증, 예외 처리 등 Spring Boot의 핵심 기능들을 보여줍니다.

## 🚀 주요 기능

- **RESTful API**: 사용자 관리를 위한 완전한 CRUD API
- **JPA 데이터 액세스**: Spring Data JPA를 활용한 데이터베이스 연동
- **입력 검증**: Bean Validation을 통한 데이터 유효성 검사
- **DTO 패턴**: 요청/응답 데이터 전송 객체 분리
- **예외 처리**: 커스텀 예외와 적절한 HTTP 상태 코드 반환
- **페이징 & 정렬**: Spring Data의 Pageable 지원
- **검색 기능**: 다양한 조건으로 사용자 검색
- **트랜잭션 관리**: @Transactional을 통한 데이터 일관성 보장

## 📁 프로젝트 구조

```
src/main/java/com/springhub/example/
├── BasicWebAppApplication.java    # 메인 애플리케이션 클래스
├── controller/
│   └── UserController.java        # REST API 컨트롤러
├── service/
│   └── UserService.java          # 비즈니스 로직 서비스
├── repository/
│   └── UserRepository.java       # 데이터 액세스 레이어
├── entity/
│   └── User.java                 # JPA 엔티티
└── dto/
    ├── UserRequest.java          # 요청 DTO
    └── UserResponse.java         # 응답 DTO
```

## 🛠️ 기술 스택

- **Spring Boot 3.1.0**: 메인 프레임워크
- **Spring Data JPA**: 데이터 액세스
- **Spring Web**: REST API
- **Spring Validation**: 입력 검증
- **H2 Database**: 인메모리 데이터베이스
- **Gradle**: 빌드 도구

## 🏃‍♂️ 실행 방법

### 1. 애플리케이션 실행
```bash
./gradlew bootRun
```

### 2. 빌드
```bash
./gradlew build
```

### 3. 테스트 실행
```bash
./gradlew test
```

## 📚 API 엔드포인트

### 사용자 관리 API

| HTTP 메서드 | 엔드포인트 | 설명 |
|------------|------------|------|
| GET | `/api/users` | 모든 활성 사용자 조회 |
| GET | `/api/users/paged` | 페이징된 사용자 목록 조회 |
| GET | `/api/users/{id}` | ID로 사용자 조회 |
| GET | `/api/users/by-email?email={email}` | 이메일로 사용자 조회 |
| POST | `/api/users` | 새 사용자 생성 |
| PUT | `/api/users/{id}` | 사용자 정보 수정 |
| PATCH | `/api/users/{id}/deactivate` | 사용자 비활성화 |
| DELETE | `/api/users/{id}` | 사용자 삭제 |

### 검색 API

| HTTP 메서드 | 엔드포인트 | 설명 |
|------------|------------|------|
| GET | `/api/users/search?keyword={keyword}` | 이름 또는 이메일로 검색 |
| GET | `/api/users/search/by-name?keyword={name}` | 이름으로 검색 |
| GET | `/api/users/created-after?date={date}` | 특정 날짜 이후 가입자 조회 |
| GET | `/api/users/statistics` | 사용자 통계 정보 |

## 💾 데이터베이스

### H2 콘솔 접속
- URL: http://localhost:8080/h2-console
- JDBC URL: `jdbc:h2:mem:testdb`
- Username: `sa`
- Password: (빈 값)

### 사용자 테이블 구조
```sql
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone_number VARCHAR(20),
    active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP
);
```

## 📝 사용 예제

### 사용자 생성
```bash
curl -X POST http://localhost:8080/api/users \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "김철수",
    "email": "kimcs@example.com",
    "phoneNumber": "010-1234-5678"
  }'
```

### 사용자 목록 조회
```bash
curl http://localhost:8080/api/users
```

### 페이징된 사용자 목록 조회
```bash
curl "http://localhost:8080/api/users/paged?page=0&size=5&sort=name,asc"
```

### 사용자 검색
```bash
curl "http://localhost:8080/api/users/search?keyword=김"
```

## 🔧 설정 정보

### 개발 환경 실행
```bash
./gradlew bootRun --args='--spring.profiles.active=dev'
```

### 운영 환경 설정
`application.yml`에서 `prod` 프로파일을 참조하여 PostgreSQL 등의 운영 데이터베이스 설정이 가능합니다.

## 📊 모니터링

Spring Boot Actuator를 통한 애플리케이션 모니터링:

- 헬스체크: http://localhost:8080/api/actuator/health
- 애플리케이션 정보: http://localhost:8080/api/actuator/info
- 메트릭스: http://localhost:8080/api/actuator/metrics

## 🎯 학습 포인트

이 예제를 통해 다음을 학습할 수 있습니다:

1. **레이어드 아키텍처**: Controller → Service → Repository 구조
2. **의존성 주입**: 생성자 주입 패턴
3. **데이터 검증**: Bean Validation 활용
4. **예외 처리**: 커스텀 예외와 HTTP 상태 코드 매핑
5. **DTO 패턴**: 엔티티와 API 모델의 분리
6. **트랜잭션 관리**: 읽기 전용 트랜잭션과 쓰기 트랜잭션 구분
7. **JPA 활용**: 엔티티 매핑, 라이프사이클 콜백, 커스텀 쿼리
8. **RESTful 설계**: HTTP 메서드와 상태 코드의 적절한 사용

## 🚀 다음 단계

- **보안 추가**: Spring Security를 통한 인증/인가
- **캐싱**: Redis를 활용한 데이터 캐싱
- **비동기 처리**: @Async를 통한 비동기 작업
- **이벤트 처리**: Spring Events를 통한 도메인 이벤트
- **API 문서화**: OpenAPI/Swagger를 통한 API 문서 자동화