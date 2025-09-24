function DesignPatterns() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Spring Boot 디자인 패턴</h1>
        <p className="text-lg text-gray-600">
          Spring Boot 개발에서 자주 사용되는 핵심 디자인 패턴과 아키텍처 구조를 실제 코드 예제와 함께 알아보세요.
        </p>
      </div>

      <div className="space-y-8">
        {/* 목차 */}
        <div className="card bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">📋 목차</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <a href="#mvc-pattern" className="block text-blue-600 hover:text-blue-800">1. MVC 아키텍처 패턴</a>
              <a href="#dependency-injection" className="block text-blue-600 hover:text-blue-800">2. 의존성 주입 (DI)</a>
              <a href="#repository-pattern" className="block text-blue-600 hover:text-blue-800">3. Repository 패턴</a>
              <a href="#dto-pattern" className="block text-blue-600 hover:text-blue-800">4. DTO 패턴</a>
              <a href="#builder-pattern" className="block text-blue-600 hover:text-blue-800">5. Builder 패턴</a>
              <a href="#strategy-pattern" className="block text-blue-600 hover:text-blue-800">6. Strategy 패턴</a>
            </div>
            <div className="space-y-2">
              <a href="#factory-pattern" className="block text-blue-600 hover:text-blue-800">7. Factory 패턴</a>
              <a href="#singleton-pattern" className="block text-blue-600 hover:text-blue-800">8. Singleton 패턴</a>
              <a href="#observer-pattern" className="block text-blue-600 hover:text-blue-800">9. Observer 패턴</a>
              <a href="#template-method" className="block text-blue-600 hover:text-blue-800">10. Template Method 패턴</a>
              <a href="#facade-pattern" className="block text-blue-600 hover:text-blue-800">11. Facade 패턴</a>
              <a href="#proxy-pattern" className="block text-blue-600 hover:text-blue-800">12. Proxy 패턴</a>
              <a href="#decorator-pattern" className="block text-blue-600 hover:text-blue-800">13. Decorator 패턴</a>
            </div>
          </div>
        </div>

        {/* MVC 패턴 */}
        <div id="mvc-pattern" className="card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🏗️ MVC 아키텍처 패턴</h2>
          <p className="text-gray-600 mb-6">
            Spring Boot에서 사용되는 가장 기본적인 MVC 아키텍처 구조입니다.
            Model-View-Controller 패턴을 통해 관심사를 분리하고 코드의 유지보수성을 향상시킵니다.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Controller 층</h3>
              <p className="text-blue-700 text-sm mb-2">사용자 요청 처리 및 응답 반환</p>
              <ul className="text-xs text-blue-600 space-y-1">
                <li>• HTTP 요청/응답 처리</li>
                <li>• 입력 데이터 검증</li>
                <li>• Service 층 호출</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Service 층</h3>
              <p className="text-green-700 text-sm mb-2">비즈니스 로직 및 데이터 처리</p>
              <ul className="text-xs text-green-600 space-y-1">
                <li>• 비즈니스 규칙 구현</li>
                <li>• 트랜잭션 관리</li>
                <li>• Repository 층 조합</li>
              </ul>
            </div>
            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">Repository 층</h3>
              <p className="text-purple-700 text-sm mb-2">데이터베이스 연동 및 데이터 접근</p>
              <ul className="text-xs text-purple-600 space-y-1">
                <li>• 데이터 CRUD 연산</li>
                <li>• 쿼리 실행</li>
                <li>• 영속성 관리</li>
              </ul>
            </div>
          </div>

          <div className="code-block">
            <pre>{`// Controller 예제
@RestController
@RequestMapping("/api/users")
@Validated
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<UserResponse>> getAllUsers() {
        List<UserResponse> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @PostMapping
    public ResponseEntity<UserResponse> createUser(
            @Valid @RequestBody CreateUserRequest request) {
        UserResponse user = userService.createUser(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserResponse> getUserById(@PathVariable Long id) {
        UserResponse user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }
}`}</pre>
          </div>
        </div>

        {/* 의존성 주입 패턴 */}
        <div id="dependency-injection" className="card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🔌 의존성 주입 (Dependency Injection)</h2>
          <p className="text-gray-600 mb-6">
            Spring의 핵심 기능인 IoC(Inversion of Control)를 통해 객체 간의 의존성을 외부에서 주입받는 패턴입니다.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">✅ Constructor Injection (권장)</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• 불변성 보장 (final 키워드)</li>
                <li>• 테스트 용이성</li>
                <li>• 순환 참조 방지</li>
                <li>• NPE 방지</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-2">❌ Field Injection (비권장)</h3>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• 테스트 어려움</li>
                <li>• 불변성 보장 불가</li>
                <li>• 순환 참조 감지 어려움</li>
                <li>• IDE 경고 발생</li>
              </ul>
            </div>
          </div>

          <div className="code-block">
            <pre>{`// Constructor Injection (추천 방식)
@Service
@Transactional(readOnly = true)
public class UserService {

    private final UserRepository userRepository;
    private final EmailService emailService;
    private final PasswordEncoder passwordEncoder;

    // Constructor Injection - final 키워드로 불변성 보장
    public UserService(UserRepository userRepository,
                      EmailService emailService,
                      PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.emailService = emailService;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public UserResponse createUser(CreateUserRequest request) {
        // 비즈니스 로직
        User user = User.builder()
            .name(request.getName())
            .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword()))
            .build();

        User savedUser = userRepository.save(user);
        emailService.sendWelcomeEmail(savedUser.getEmail());

        return UserResponse.from(savedUser);
    }
}

// Lombok을 사용한 간소화된 버전
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor  // final 필드에 대한 생성자 자동 생성
public class UserService {

    private final UserRepository userRepository;
    private final EmailService emailService;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public UserResponse createUser(CreateUserRequest request) {
        // 비즈니스 로직 구현
    }
}`}</pre>
          </div>
        </div>

        {/* Repository 패턴 */}
        <div id="repository-pattern" className="card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🗄️ Repository 패턴</h2>
          <p className="text-gray-600 mb-6">
            데이터 접근 로직을 비즈니스 로직에서 분리하여 데이터 소스에 대한 추상화를 제공하는 패턴입니다.
          </p>

          <div className="code-block">
            <pre>{`// 기본 JPA Repository
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // Spring Data JPA 쿼리 메서드
    List<User> findByEmail(String email);
    List<User> findByNameContaining(String name);
    List<User> findByActiveTrue();

    // @Query 어노테이션 사용
    @Query("SELECT u FROM User u WHERE u.createdAt > :date")
    List<User> findRecentUsers(@Param("date") LocalDateTime date);

    // Native Query 사용
    @Query(value = "SELECT * FROM users WHERE email LIKE %:domain%",
           nativeQuery = true)
    List<User> findByEmailDomain(@Param("domain") String domain);

    // 업데이트 쿼리
    @Modifying
    @Query("UPDATE User u SET u.active = false WHERE u.lastLoginAt < :date")
    int deactivateInactiveUsers(@Param("date") LocalDateTime date);

    // Projection 사용
    @Query("SELECT u.name as name, u.email as email FROM User u WHERE u.active = true")
    List<UserProjection> findActiveUserProjections();
}

// Custom Repository 인터페이스
public interface CustomUserRepository {
    List<User> findByComplexCriteria(UserSearchCriteria criteria);
    Page<User> searchUsers(String keyword, Pageable pageable);
}

// Custom Repository 구현체
@Repository
public class CustomUserRepositoryImpl implements CustomUserRepository {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<User> findByComplexCriteria(UserSearchCriteria criteria) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<User> query = cb.createQuery(User.class);
        Root<User> root = query.from(User.class);

        List<Predicate> predicates = new ArrayList<>();

        if (criteria.getName() != null) {
            predicates.add(cb.like(root.get("name"), "%" + criteria.getName() + "%"));
        }

        if (criteria.getEmail() != null) {
            predicates.add(cb.equal(root.get("email"), criteria.getEmail()));
        }

        if (criteria.getActive() != null) {
            predicates.add(cb.equal(root.get("active"), criteria.getActive()));
        }

        query.where(predicates.toArray(new Predicate[0]));

        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public Page<User> searchUsers(String keyword, Pageable pageable) {
        // 동적 쿼리 구현
        String jpql = "SELECT u FROM User u WHERE u.name LIKE :keyword OR u.email LIKE :keyword";

        TypedQuery<User> query = entityManager.createQuery(jpql, User.class);
        query.setParameter("keyword", "%" + keyword + "%");
        query.setFirstResult((int) pageable.getOffset());
        query.setMaxResults(pageable.getPageSize());

        List<User> users = query.getResultList();

        // Count query for pagination
        String countJpql = "SELECT COUNT(u) FROM User u WHERE u.name LIKE :keyword OR u.email LIKE :keyword";
        Long total = entityManager.createQuery(countJpql, Long.class)
                                .setParameter("keyword", "%" + keyword + "%")
                                .getSingleResult();

        return new PageImpl<>(users, pageable, total);
    }
}`}</pre>
          </div>
        </div>

        {/* DTO 패턴 */}
        <div id="dto-pattern" className="card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">📦 DTO (Data Transfer Object) 패턴</h2>
          <p className="text-gray-600 mb-6">
            계층 간 데이터 전송을 위한 객체로, API 요청/응답 데이터를 캡슐화하고 검증을 수행합니다.
          </p>

          <div className="code-block">
            <pre>{`// Request DTO - 클라이언트로부터 받는 데이터
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateUserRequest {

    @NotBlank(message = "이름은 필수입니다")
    @Size(min = 2, max = 50, message = "이름은 2-50자 사이여야 합니다")
    private String name;

    @NotBlank(message = "이메일은 필수입니다")
    @Email(message = "유효한 이메일 주소를 입력해주세요")
    private String email;

    @NotBlank(message = "비밀번호는 필수입니다")
    @Size(min = 8, max = 20, message = "비밀번호는 8-20자 사이여야 합니다")
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]+$",
             message = "비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다")
    private String password;

    @NotBlank(message = "전화번호는 필수입니다")
    @Pattern(regexp = "^\\d{2,3}-\\d{3,4}-\\d{4}$", message = "전화번호 형식이 올바르지 않습니다")
    private String phoneNumber;

    @Min(value = 18, message = "나이는 18세 이상이어야 합니다")
    @Max(value = 100, message = "나이는 100세 이하여야 합니다")
    private Integer age;

    // Entity로 변환하는 메서드
    public User toEntity(PasswordEncoder passwordEncoder) {
        return User.builder()
            .name(this.name)
            .email(this.email)
            .password(passwordEncoder.encode(this.password))
            .phoneNumber(this.phoneNumber)
            .age(this.age)
            .active(true)
            .createdAt(LocalDateTime.now())
            .build();
    }
}

// Response DTO - 클라이언트에게 보내는 데이터
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {

    private Long id;
    private String name;
    private String email;
    private String phoneNumber;
    private Integer age;
    private Boolean active;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    // Entity에서 DTO로 변환하는 정적 메서드
    public static UserResponse from(User user) {
        return UserResponse.builder()
            .id(user.getId())
            .name(user.getName())
            .email(user.getEmail())
            .phoneNumber(user.getPhoneNumber())
            .age(user.getAge())
            .active(user.getActive())
            .createdAt(user.getCreatedAt())
            .updatedAt(user.getUpdatedAt())
            .build();
    }

    // List<Entity>를 List<DTO>로 변환
    public static List<UserResponse> from(List<User> users) {
        return users.stream()
            .map(UserResponse::from)
            .collect(Collectors.toList());
    }
}

// Update DTO
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateUserRequest {

    @Size(min = 2, max = 50, message = "이름은 2-50자 사이여야 합니다")
    private String name;

    @Pattern(regexp = "^\\d{2,3}-\\d{3,4}-\\d{4}$", message = "전화번호 형식이 올바르지 않습니다")
    private String phoneNumber;

    @Min(value = 18, message = "나이는 18세 이상이어야 합니다")
    @Max(value = 100, message = "나이는 100세 이하여야 합니다")
    private Integer age;

    // Entity 업데이트 메서드
    public void updateEntity(User user) {
        if (this.name != null) {
            user.setName(this.name);
        }
        if (this.phoneNumber != null) {
            user.setPhoneNumber(this.phoneNumber);
        }
        if (this.age != null) {
            user.setAge(this.age);
        }
        user.setUpdatedAt(LocalDateTime.now());
    }
}`}</pre>
          </div>
        </div>

        {/* Builder 패턴 */}
        <div id="builder-pattern" className="card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🏗️ Builder 패턴</h2>
          <p className="text-gray-600 mb-6">
            복잡한 객체의 생성 과정을 단계별로 분리하여 가독성과 유연성을 제공하는 패턴입니다.
          </p>

          <div className="code-block">
            <pre>{`// Lombok @Builder 사용
@Entity
@Table(name = "users")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    private String phoneNumber;
    private Integer age;

    @Builder.Default
    private Boolean active = true;

    @Builder.Default
    private LocalDateTime createdAt = LocalDateTime.now();

    private LocalDateTime updatedAt;
}

// Builder 패턴 사용 예제
@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserResponse createUser(CreateUserRequest request) {
        // Builder 패턴으로 객체 생성
        User user = User.builder()
            .name(request.getName())
            .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword()))
            .phoneNumber(request.getPhoneNumber())
            .age(request.getAge())
            .active(true)
            .createdAt(LocalDateTime.now())
            .build();

        User savedUser = userRepository.save(user);
        return UserResponse.from(savedUser);
    }

    public UserResponse updateUser(Long id, UpdateUserRequest request) {
        User user = userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException("사용자를 찾을 수 없습니다"));

        // Builder 패턴으로 업데이트된 객체 생성
        User updatedUser = user.toBuilder()
            .name(request.getName() != null ? request.getName() : user.getName())
            .phoneNumber(request.getPhoneNumber() != null ? request.getPhoneNumber() : user.getPhoneNumber())
            .age(request.getAge() != null ? request.getAge() : user.getAge())
            .updatedAt(LocalDateTime.now())
            .build();

        User savedUser = userRepository.save(updatedUser);
        return UserResponse.from(savedUser);
    }
}

// 커스텀 Builder 구현 예제
public class ApiResponse<T> {

    private final int status;
    private final String message;
    private final T data;
    private final LocalDateTime timestamp;

    private ApiResponse(Builder<T> builder) {
        this.status = builder.status;
        this.message = builder.message;
        this.data = builder.data;
        this.timestamp = builder.timestamp;
    }

    public static <T> Builder<T> builder() {
        return new Builder<>();
    }

    public static class Builder<T> {
        private int status;
        private String message;
        private T data;
        private LocalDateTime timestamp = LocalDateTime.now();

        public Builder<T> status(int status) {
            this.status = status;
            return this;
        }

        public Builder<T> message(String message) {
            this.message = message;
            return this;
        }

        public Builder<T> data(T data) {
            this.data = data;
            return this;
        }

        public Builder<T> timestamp(LocalDateTime timestamp) {
            this.timestamp = timestamp;
            return this;
        }

        public ApiResponse<T> build() {
            return new ApiResponse<>(this);
        }
    }

    // 편의 메서드들
    public static <T> ApiResponse<T> success(T data) {
        return ApiResponse.<T>builder()
            .status(200)
            .message("Success")
            .data(data)
            .build();
    }

    public static <T> ApiResponse<T> error(int status, String message) {
        return ApiResponse.<T>builder()
            .status(status)
            .message(message)
            .build();
    }
}`}</pre>
          </div>
        </div>

        {/* Strategy 패턴 */}
        <div id="strategy-pattern" className="card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🎯 Strategy 패턴</h2>
          <p className="text-gray-600 mb-6">
            알고리즘군을 정의하고, 각각을 캡슐화하여 상호 교환 가능하게 만드는 패턴입니다.
            Spring의 다형성과 의존성 주입을 활용하여 구현할 수 있습니다.
          </p>

          <div className="code-block">
            <pre>{`// 결제 전략 인터페이스
public interface PaymentStrategy {
    PaymentResult process(PaymentRequest request);
    PaymentType getPaymentType();
}

// 신용카드 결제 전략
@Component
public class CreditCardPaymentStrategy implements PaymentStrategy {

    private final CreditCardService creditCardService;

    public CreditCardPaymentStrategy(CreditCardService creditCardService) {
        this.creditCardService = creditCardService;
    }

    @Override
    public PaymentResult process(PaymentRequest request) {
        // 신용카드 결제 로직
        return creditCardService.charge(request);
    }

    @Override
    public PaymentType getPaymentType() {
        return PaymentType.CREDIT_CARD;
    }
}

// 계좌이체 결제 전략
@Component
public class BankTransferPaymentStrategy implements PaymentStrategy {

    private final BankService bankService;

    public BankTransferPaymentStrategy(BankService bankService) {
        this.bankService = bankService;
    }

    @Override
    public PaymentResult process(PaymentRequest request) {
        // 계좌이체 결제 로직
        return bankService.transfer(request);
    }

    @Override
    public PaymentType getPaymentType() {
        return PaymentType.BANK_TRANSFER;
    }
}

// 페이팔 결제 전략
@Component
public class PayPalPaymentStrategy implements PaymentStrategy {

    private final PayPalService payPalService;

    public PayPalPaymentStrategy(PayPalService payPalService) {
        this.payPalService = payPalService;
    }

    @Override
    public PaymentResult process(PaymentRequest request) {
        // PayPal 결제 로직
        return payPalService.pay(request);
    }

    @Override
    public PaymentType getPaymentType() {
        return PaymentType.PAYPAL;
    }
}

// Strategy Context (전략을 사용하는 컨텍스트)
@Service
@RequiredArgsConstructor
public class PaymentService {

    private final List<PaymentStrategy> paymentStrategies;

    public PaymentResult processPayment(PaymentRequest request) {
        PaymentStrategy strategy = getPaymentStrategy(request.getPaymentType());

        if (strategy == null) {
            throw new UnsupportedPaymentTypeException(
                "지원하지 않는 결제 방식입니다: " + request.getPaymentType());
        }

        return strategy.process(request);
    }

    private PaymentStrategy getPaymentStrategy(PaymentType paymentType) {
        return paymentStrategies.stream()
            .filter(strategy -> strategy.getPaymentType() == paymentType)
            .findFirst()
            .orElse(null);
    }

    // 또는 Map을 사용한 최적화된 버전
    @PostConstruct
    public void initStrategies() {
        this.strategyMap = paymentStrategies.stream()
            .collect(Collectors.toMap(
                PaymentStrategy::getPaymentType,
                Function.identity()
            ));
    }

    private Map<PaymentType, PaymentStrategy> strategyMap;

    private PaymentStrategy getPaymentStrategyOptimized(PaymentType paymentType) {
        return strategyMap.get(paymentType);
    }
}

// 알림 전략 패턴 예제
public interface NotificationStrategy {
    void send(String recipient, String message);
    NotificationType getType();
}

@Component
public class EmailNotificationStrategy implements NotificationStrategy {

    private final EmailService emailService;

    @Override
    public void send(String recipient, String message) {
        emailService.sendEmail(recipient, "알림", message);
    }

    @Override
    public NotificationType getType() {
        return NotificationType.EMAIL;
    }
}

@Component
public class SmsNotificationStrategy implements NotificationStrategy {

    private final SmsService smsService;

    @Override
    public void send(String recipient, String message) {
        smsService.sendSms(recipient, message);
    }

    @Override
    public NotificationType getType() {
        return NotificationType.SMS;
    }
}

@Component
public class PushNotificationStrategy implements NotificationStrategy {

    private final PushService pushService;

    @Override
    public void send(String recipient, String message) {
        pushService.sendPush(recipient, message);
    }

    @Override
    public NotificationType getType() {
        return NotificationType.PUSH;
    }
}

@Service
@RequiredArgsConstructor
public class NotificationService {

    private final Map<NotificationType, NotificationStrategy> strategies;

    public NotificationService(List<NotificationStrategy> strategies) {
        this.strategies = strategies.stream()
            .collect(Collectors.toMap(
                NotificationStrategy::getType,
                Function.identity()
            ));
    }

    public void sendNotification(NotificationType type, String recipient, String message) {
        NotificationStrategy strategy = strategies.get(type);

        if (strategy == null) {
            throw new UnsupportedNotificationTypeException(
                "지원하지 않는 알림 유형입니다: " + type);
        }

        strategy.send(recipient, message);
    }

    // 여러 유형으로 동시 발송
    public void sendMultipleNotifications(List<NotificationType> types,
                                        String recipient, String message) {
        types.forEach(type -> sendNotification(type, recipient, message));
    }
}`}</pre>
          </div>
        </div>

        {/* Factory 패턴 */}
        <div id="factory-pattern" className="card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🏭 Factory 패턴</h2>
          <p className="text-gray-600 mb-6">
            객체 생성 로직을 캡슐화하여 클라이언트 코드와 분리하고,
            객체 생성을 위한 인터페이스를 제공하는 패턴입니다.
          </p>

          <div className="code-block">
            <pre>{`// 보고서 생성기 인터페이스
public interface ReportGenerator {
    void generate(ReportData data, OutputStream outputStream);
    ReportType getReportType();
}

// PDF 보고서 생성기
@Component
public class PdfReportGenerator implements ReportGenerator {

    @Override
    public void generate(ReportData data, OutputStream outputStream) {
        // PDF 생성 로직
        try (PDDocument document = new PDDocument()) {
            PDPage page = new PDPage();
            document.addPage(page);

            PDPageContentStream contentStream = new PDPageContentStream(document, page);
            contentStream.beginText();
            contentStream.setFont(PDType1Font.HELVETICA, 12);
            contentStream.newLineAtOffset(25, 750);
            contentStream.showText(data.getTitle());
            contentStream.endText();
            contentStream.close();

            document.save(outputStream);
        } catch (IOException e) {
            throw new ReportGenerationException("PDF 생성 중 오류가 발생했습니다", e);
        }
    }

    @Override
    public ReportType getReportType() {
        return ReportType.PDF;
    }
}

// Excel 보고서 생성기
@Component
public class ExcelReportGenerator implements ReportGenerator {

    @Override
    public void generate(ReportData data, OutputStream outputStream) {
        // Excel 생성 로직
        try (Workbook workbook = new XSSFWorkbook()) {
            Sheet sheet = workbook.createSheet(data.getTitle());

            Row headerRow = sheet.createRow(0);
            headerRow.createCell(0).setCellValue("항목");
            headerRow.createCell(1).setCellValue("값");

            int rowNum = 1;
            for (Map.Entry<String, String> entry : data.getData().entrySet()) {
                Row row = sheet.createRow(rowNum++);
                row.createCell(0).setCellValue(entry.getKey());
                row.createCell(1).setCellValue(entry.getValue());
            }

            workbook.write(outputStream);
        } catch (IOException e) {
            throw new ReportGenerationException("Excel 생성 중 오류가 발생했습니다", e);
        }
    }

    @Override
    public ReportType getReportType() {
        return ReportType.EXCEL;
    }
}

// CSV 보고서 생성기
@Component
public class CsvReportGenerator implements ReportGenerator {

    @Override
    public void generate(ReportData data, OutputStream outputStream) {
        // CSV 생성 로직
        try (PrintWriter writer = new PrintWriter(new OutputStreamWriter(outputStream))) {
            writer.println("항목,값");

            for (Map.Entry<String, String> entry : data.getData().entrySet()) {
                writer.printf("%s,%s%n", entry.getKey(), entry.getValue());
            }
        }
    }

    @Override
    public ReportType getReportType() {
        return ReportType.CSV;
    }
}

// Factory 클래스
@Component
@RequiredArgsConstructor
public class ReportGeneratorFactory {

    private final List<ReportGenerator> generators;
    private Map<ReportType, ReportGenerator> generatorMap;

    @PostConstruct
    public void init() {
        this.generatorMap = generators.stream()
            .collect(Collectors.toMap(
                ReportGenerator::getReportType,
                Function.identity()
            ));
    }

    public ReportGenerator getGenerator(ReportType type) {
        ReportGenerator generator = generatorMap.get(type);

        if (generator == null) {
            throw new UnsupportedReportTypeException(
                "지원하지 않는 보고서 유형입니다: " + type);
        }

        return generator;
    }

    // 사용 가능한 보고서 유형 반환
    public Set<ReportType> getSupportedTypes() {
        return generatorMap.keySet();
    }
}

// Factory를 사용하는 서비스
@Service
@RequiredArgsConstructor
public class ReportService {

    private final ReportGeneratorFactory generatorFactory;
    private final ReportDataService reportDataService;

    public void generateReport(Long dataId, ReportType type, OutputStream outputStream) {
        // 데이터 조회
        ReportData data = reportDataService.getReportData(dataId);

        // Factory를 통해 적절한 생성기 획득
        ReportGenerator generator = generatorFactory.getGenerator(type);

        // 보고서 생성
        generator.generate(data, outputStream);
    }

    public byte[] generateReportAsBytes(Long dataId, ReportType type) {
        try (ByteArrayOutputStream outputStream = new ByteArrayOutputStream()) {
            generateReport(dataId, type, outputStream);
            return outputStream.toByteArray();
        } catch (IOException e) {
            throw new ReportGenerationException("보고서 생성 중 오류가 발생했습니다", e);
        }
    }
}

// 데이터베이스 Connection Factory 예제
@Component
public class DatabaseConnectionFactory {

    @Value("\${app.database.primary.url}")
    private String primaryUrl;

    @Value("\${app.database.secondary.url}")
    private String secondaryUrl;

    @Value("\${app.database.analytics.url}")
    private String analyticsUrl;

    public DataSource createDataSource(DatabaseType type) {
        HikariConfig config = new HikariConfig();

        switch (type) {
            case PRIMARY:
                config.setJdbcUrl(primaryUrl);
                config.setMaximumPoolSize(20);
                break;
            case SECONDARY:
                config.setJdbcUrl(secondaryUrl);
                config.setMaximumPoolSize(10);
                break;
            case ANALYTICS:
                config.setJdbcUrl(analyticsUrl);
                config.setMaximumPoolSize(5);
                config.setReadOnly(true);
                break;
            default:
                throw new IllegalArgumentException("지원하지 않는 데이터베이스 유형: " + type);
        }

        config.setConnectionTimeout(30000);
        config.setIdleTimeout(600000);
        config.setMaxLifetime(1800000);

        return new HikariDataSource(config);
    }
}`}</pre>
          </div>
        </div>

        {/* Singleton 패턴 */}
        <div id="singleton-pattern" className="card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🎯 Singleton 패턴</h2>
          <p className="text-gray-600 mb-6">
            Spring에서는 기본적으로 Bean이 Singleton으로 관리됩니다.
            애플리케이션 전역에서 단 하나의 인스턴스만 존재하도록 보장하는 패턴입니다.
          </p>

          <div className="code-block">
            <pre>{`// Spring Bean은 기본적으로 Singleton
@Component
public class ApplicationConfig {

    private final Map<String, String> configMap;

    public ApplicationConfig() {
        this.configMap = new HashMap<>();
        loadConfiguration();
    }

    private void loadConfiguration() {
        // 설정 파일에서 값을 로드
        configMap.put("app.name", "Spring Boot Hub");
        configMap.put("app.version", "1.0.0");
    }

    public String getConfig(String key) {
        return configMap.get(key);
    }

    public void updateConfig(String key, String value) {
        configMap.put(key, value);
    }
}

// 캐시 매니저 Singleton
@Component
public class CacheManager {

    private final Map<String, Object> cache;
    private final Map<String, LocalDateTime> expireTimeMap;

    public CacheManager() {
        this.cache = new ConcurrentHashMap<>();
        this.expireTimeMap = new ConcurrentHashMap<>();

        // 만료된 캐시를 정리하는 스케줄러 시작
        startCleanupScheduler();
    }

    public void put(String key, Object value, Duration expireAfter) {
        cache.put(key, value);
        expireTimeMap.put(key, LocalDateTime.now().plus(expireAfter));
    }

    public <T> Optional<T> get(String key, Class<T> type) {
        // 만료 체크
        LocalDateTime expireTime = expireTimeMap.get(key);
        if (expireTime != null && LocalDateTime.now().isAfter(expireTime)) {
            remove(key);
            return Optional.empty();
        }

        Object value = cache.get(key);
        if (value != null && type.isInstance(value)) {
            return Optional.of(type.cast(value));
        }

        return Optional.empty();
    }

    public void remove(String key) {
        cache.remove(key);
        expireTimeMap.remove(key);
    }

    public void clear() {
        cache.clear();
        expireTimeMap.clear();
    }

    public Set<String> getKeys() {
        return new HashSet<>(cache.keySet());
    }

    @Scheduled(fixedRate = 60000) // 1분마다 실행
    private void cleanupExpiredEntries() {
        LocalDateTime now = LocalDateTime.now();

        List<String> expiredKeys = expireTimeMap.entrySet().stream()
            .filter(entry -> now.isAfter(entry.getValue()))
            .map(Map.Entry::getKey)
            .collect(Collectors.toList());

        expiredKeys.forEach(this::remove);
    }

    private void startCleanupScheduler() {
        // Spring의 @Scheduled 사용
    }
}

// 로깅 매니저 Singleton
@Component
@Slf4j
public class AuditLogger {

    private final Queue<AuditLog> logQueue;
    private final AtomicLong sequenceNumber;

    public AuditLogger() {
        this.logQueue = new ConcurrentLinkedQueue<>();
        this.sequenceNumber = new AtomicLong(0);
    }

    public void logUserAction(String userId, String action, String details) {
        AuditLog auditLog = AuditLog.builder()
            .id(sequenceNumber.incrementAndGet())
            .userId(userId)
            .action(action)
            .details(details)
            .timestamp(LocalDateTime.now())
            .build();

        logQueue.offer(auditLog);

        log.info("Audit Log: User {} performed {} - {}", userId, action, details);
    }

    public void logSystemEvent(String event, String details) {
        AuditLog auditLog = AuditLog.builder()
            .id(sequenceNumber.incrementAndGet())
            .action("SYSTEM_EVENT")
            .details(event + ": " + details)
            .timestamp(LocalDateTime.now())
            .build();

        logQueue.offer(auditLog);

        log.info("System Event: {} - {}", event, details);
    }

    @Scheduled(fixedRate = 5000) // 5초마다 실행
    public void flushLogs() {
        List<AuditLog> logsToFlush = new ArrayList<>();

        AuditLog log;
        while ((log = logQueue.poll()) != null) {
            logsToFlush.add(log);

            // 배치 크기 제한
            if (logsToFlush.size() >= 100) {
                break;
            }
        }

        if (!logsToFlush.isEmpty()) {
            // 데이터베이스나 외부 시스템에 로그 저장
            persistLogs(logsToFlush);
        }
    }

    private void persistLogs(List<AuditLog> logs) {
        // 실제 구현에서는 Repository를 통해 저장
        log.debug("Persisting {} audit logs", logs.size());
    }
}

// Bean Scope 명시적 지정
@Component
@Scope("singleton") // 기본값이므로 생략 가능
public class GlobalStatistics {

    private final AtomicLong totalRequests;
    private final AtomicLong successfulRequests;
    private final AtomicLong failedRequests;
    private final Map<String, AtomicLong> endpointCounts;

    public GlobalStatistics() {
        this.totalRequests = new AtomicLong(0);
        this.successfulRequests = new AtomicLong(0);
        this.failedRequests = new AtomicLong(0);
        this.endpointCounts = new ConcurrentHashMap<>();
    }

    public void incrementTotalRequests() {
        totalRequests.incrementAndGet();
    }

    public void incrementSuccessfulRequests() {
        successfulRequests.incrementAndGet();
    }

    public void incrementFailedRequests() {
        failedRequests.incrementAndGet();
    }

    public void incrementEndpointCount(String endpoint) {
        endpointCounts.computeIfAbsent(endpoint, k -> new AtomicLong(0))
                     .incrementAndGet();
    }

    public StatisticsSnapshot getSnapshot() {
        Map<String, Long> endpointStats = endpointCounts.entrySet().stream()
            .collect(Collectors.toMap(
                Map.Entry::getKey,
                entry -> entry.getValue().get()
            ));

        return StatisticsSnapshot.builder()
            .totalRequests(totalRequests.get())
            .successfulRequests(successfulRequests.get())
            .failedRequests(failedRequests.get())
            .endpointCounts(endpointStats)
            .snapshotTime(LocalDateTime.now())
            .build();
    }

    public void reset() {
        totalRequests.set(0);
        successfulRequests.set(0);
        failedRequests.set(0);
        endpointCounts.clear();
    }
}

// 다른 Scope 예제들
@Component
@Scope("prototype") // 매번 새로운 인스턴스 생성
public class PrototypeBean {

    private final String id;
    private final LocalDateTime createdAt;

    public PrototypeBean() {
        this.id = UUID.randomUUID().toString();
        this.createdAt = LocalDateTime.now();
    }
}

@Component
@Scope(value = "request", proxyMode = ScopedProxyMode.TARGET_CLASS) // HTTP 요청당 하나
public class RequestScopedBean {

    private final Map<String, Object> requestData;

    public RequestScopedBean() {
        this.requestData = new HashMap<>();
    }

    public void setData(String key, Object value) {
        requestData.put(key, value);
    }

    public Object getData(String key) {
        return requestData.get(key);
    }
}

@Component
@Scope(value = "session", proxyMode = ScopedProxyMode.TARGET_CLASS) // HTTP 세션당 하나
public class SessionScopedBean {

    private String userId;
    private LocalDateTime loginTime;
    private final Map<String, Object> sessionData;

    public SessionScopedBean() {
        this.sessionData = new HashMap<>();
    }

    public void login(String userId) {
        this.userId = userId;
        this.loginTime = LocalDateTime.now();
    }

    public boolean isLoggedIn() {
        return userId != null;
    }
}`}</pre>
          </div>
        </div>

        {/* Observer 패턴 */}
        <div id="observer-pattern" className="card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">👁️ Observer 패턴 (Event-Driven)</h2>
          <p className="text-gray-600 mb-6">
            Spring의 Event 시스템을 활용하여 Observer 패턴을 구현합니다.
            객체 간의 느슨한 결합을 통해 변경 사항을 다른 객체들에게 알릴 수 있습니다.
          </p>

          <div className="code-block">
            <pre>{`// 도메인 이벤트 정의
public class UserRegisteredEvent {

    private final Long userId;
    private final String email;
    private final String name;
    private final LocalDateTime registeredAt;

    public UserRegisteredEvent(Long userId, String email, String name) {
        this.userId = userId;
        this.email = email;
        this.name = name;
        this.registeredAt = LocalDateTime.now();
    }

    // getters...
}

public class OrderCompletedEvent {

    private final Long orderId;
    private final Long userId;
    private final BigDecimal totalAmount;
    private final List<OrderItem> items;
    private final LocalDateTime completedAt;

    public OrderCompletedEvent(Long orderId, Long userId, BigDecimal totalAmount, List<OrderItem> items) {
        this.orderId = orderId;
        this.userId = userId;
        this.totalAmount = totalAmount;
        this.items = items;
        this.completedAt = LocalDateTime.now();
    }

    // getters...
}

// Event Publisher (Subject 역할)
@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final ApplicationEventPublisher eventPublisher;

    @Transactional
    public UserResponse createUser(CreateUserRequest request) {
        // 사용자 생성
        User user = User.builder()
            .name(request.getName())
            .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword()))
            .active(true)
            .createdAt(LocalDateTime.now())
            .build();

        User savedUser = userRepository.save(user);

        // 이벤트 발행
        UserRegisteredEvent event = new UserRegisteredEvent(
            savedUser.getId(),
            savedUser.getEmail(),
            savedUser.getName()
        );
        eventPublisher.publishEvent(event);

        return UserResponse.from(savedUser);
    }
}

// Event Listeners (Observer 역할)
@Component
@Slf4j
@RequiredArgsConstructor
public class EmailEventListener {

    private final EmailService emailService;

    @EventListener
    @Async
    public void handleUserRegistered(UserRegisteredEvent event) {
        log.info("사용자 등록 이메일 발송: {}", event.getEmail());

        try {
            emailService.sendWelcomeEmail(
                event.getEmail(),
                event.getName()
            );
        } catch (Exception e) {
            log.error("환영 이메일 발송 실패: {}", event.getEmail(), e);
        }
    }

    @EventListener
    @Async
    public void handleOrderCompleted(OrderCompletedEvent event) {
        log.info("주문 완료 이메일 발송: 주문 ID {}", event.getOrderId());

        try {
            emailService.sendOrderConfirmationEmail(
                event.getUserId(),
                event.getOrderId(),
                event.getTotalAmount(),
                event.getItems()
            );
        } catch (Exception e) {
            log.error("주문 확인 이메일 발송 실패: 주문 ID {}", event.getOrderId(), e);
        }
    }
}

@Component
@Slf4j
@RequiredArgsConstructor
public class AuditEventListener {

    private final AuditService auditService;

    @EventListener
    public void handleUserRegistered(UserRegisteredEvent event) {
        log.info("사용자 등록 감사 로그: {}", event.getUserId());

        auditService.logUserAction(
            event.getUserId(),
            "USER_REGISTERED",
            "New user registered: " + event.getEmail()
        );
    }

    @EventListener
    public void handleOrderCompleted(OrderCompletedEvent event) {
        log.info("주문 완료 감사 로그: 주문 ID {}", event.getOrderId());

        auditService.logUserAction(
            event.getUserId(),
            "ORDER_COMPLETED",
            String.format("Order %d completed with amount %s",
                         event.getOrderId(),
                         event.getTotalAmount())
        );
    }
}

@Component
@Slf4j
@RequiredArgsConstructor
public class NotificationEventListener {

    private final NotificationService notificationService;
    private final UserRepository userRepository;

    @EventListener
    @Async
    public void handleUserRegistered(UserRegisteredEvent event) {
        log.info("사용자 등록 알림: {}", event.getUserId());

        try {
            // 관리자에게 알림
            notificationService.sendAdminNotification(
                "새로운 사용자가 등록되었습니다: " + event.getEmail()
            );

            // 사용자에게 환영 푸시 알림
            notificationService.sendPushNotification(
                event.getUserId(),
                "환영합니다!",
                "성공적으로 가입되었습니다."
            );
        } catch (Exception e) {
            log.error("등록 알림 발송 실패: {}", event.getUserId(), e);
        }
    }

    @EventListener
    @Async
    public void handleOrderCompleted(OrderCompletedEvent event) {
        log.info("주문 완료 알림: 주문 ID {}", event.getOrderId());

        try {
            User user = userRepository.findById(event.getUserId())
                .orElseThrow(() -> new UserNotFoundException("사용자를 찾을 수 없습니다"));

            notificationService.sendSmsNotification(
                user.getPhoneNumber(),
                String.format("주문이 완료되었습니다. 주문번호: %d", event.getOrderId())
            );
        } catch (Exception e) {
            log.error("주문 완료 알림 발송 실패: 주문 ID {}", event.getOrderId(), e);
        }
    }
}

// 통계 수집 리스너
@Component
@Slf4j
@RequiredArgsConstructor
public class StatisticsEventListener {

    private final GlobalStatistics globalStatistics;
    private final StatisticsRepository statisticsRepository;

    @EventListener
    public void handleUserRegistered(UserRegisteredEvent event) {
        globalStatistics.incrementUserRegistrations();

        // 일별 통계 업데이트
        statisticsRepository.incrementDailyUserRegistrations(
            event.getRegisteredAt().toLocalDate()
        );
    }

    @EventListener
    public void handleOrderCompleted(OrderCompletedEvent event) {
        globalStatistics.incrementOrderCompletions();
        globalStatistics.addRevenue(event.getTotalAmount());

        // 일별 통계 업데이트
        statisticsRepository.updateDailySales(
            event.getCompletedAt().toLocalDate(),
            event.getTotalAmount()
        );
    }
}

// 조건부 이벤트 리스너
@Component
@Slf4j
@RequiredArgsConstructor
public class ConditionalEventListener {

    private final VipService vipService;

    // 조건부 리스너 - SpEL 사용
    @EventListener(condition = "#event.totalAmount.compareTo(new java.math.BigDecimal('100000')) >= 0")
    public void handleHighValueOrder(OrderCompletedEvent event) {
        log.info("고액 주문 처리: 주문 ID {}, 금액 {}", event.getOrderId(), event.getTotalAmount());

        // VIP 혜택 제공
        vipService.processHighValueOrder(event.getUserId(), event.getOrderId());
    }

    // 특정 도메인 이메일만 처리
    @EventListener(condition = "#event.email.endsWith('@company.com')")
    public void handleCompanyUserRegistration(UserRegisteredEvent event) {
        log.info("회사 이메일 사용자 등록: {}", event.getEmail());

        // 특별한 처리 로직
    }
}

// 트랜잭션 이벤트 리스너
@Component
@Slf4j
@RequiredArgsConstructor
public class TransactionalEventListener {

    private final ReportService reportService;

    // 트랜잭션 커밋 후에만 실행
    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)
    public void handleUserRegisteredAfterCommit(UserRegisteredEvent event) {
        log.info("트랜잭션 커밋 후 사용자 등록 처리: {}", event.getUserId());

        // 외부 시스템에 안전하게 알림
        reportService.notifyExternalSystem(event);
    }

    // 트랜잭션 롤백 시에만 실행
    @TransactionalEventListener(phase = TransactionPhase.AFTER_ROLLBACK)
    public void handleUserRegistrationFailure(UserRegisteredEvent event) {
        log.warn("사용자 등록 실패 처리: {}", event.getUserId());

        // 실패 처리 로직
    }
}

// 커스텀 이벤트 발행 서비스
@Service
@RequiredArgsConstructor
public class CustomEventPublisher {

    private final ApplicationEventPublisher eventPublisher;

    public void publishUserRegisteredEvent(User user) {
        UserRegisteredEvent event = new UserRegisteredEvent(
            user.getId(),
            user.getEmail(),
            user.getName()
        );
        eventPublisher.publishEvent(event);
    }

    public void publishOrderCompletedEvent(Order order) {
        OrderCompletedEvent event = new OrderCompletedEvent(
            order.getId(),
            order.getUserId(),
            order.getTotalAmount(),
            order.getOrderItems()
        );
        eventPublisher.publishEvent(event);
    }

    // 비동기 이벤트 발행
    @Async
    public void publishEventAsync(Object event) {
        eventPublisher.publishEvent(event);
    }
}`}</pre>
          </div>
        </div>

        {/* Template Method 패턴 */}
        <div id="template-method" className="card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">📋 Template Method 패턴</h2>
          <p className="text-gray-600 mb-6">
            알고리즘의 구조를 정의하고, 하위 클래스에서 알고리즘의 특정 단계를 재정의할 수 있게 하는 패턴입니다.
          </p>

          <div className="code-block">
            <pre>{`// 추상 템플릿 클래스
public abstract class DataProcessor {

    // Template Method - 알고리즘의 전체 구조 정의
    public final ProcessResult processData(String inputData) {
        try {
            // 1. 데이터 검증
            validateData(inputData);

            // 2. 데이터 전처리
            String preprocessedData = preprocessData(inputData);

            // 3. 핵심 처리 로직 (하위 클래스에서 구현)
            String processedData = doProcessData(preprocessedData);

            // 4. 후처리
            String finalData = postprocessData(processedData);

            // 5. 결과 생성
            ProcessResult result = createResult(finalData);

            // 6. 로깅 (선택적)
            if (shouldLog()) {
                logProcessing(inputData, result);
            }

            return result;

        } catch (Exception e) {
            return handleError(inputData, e);
        }
    }

    // 공통 구현 메서드들
    protected void validateData(String data) {
        if (data == null || data.trim().isEmpty()) {
            throw new IllegalArgumentException("입력 데이터가 비어있습니다");
        }
    }

    protected String preprocessData(String data) {
        return data.trim();
    }

    protected String postprocessData(String data) {
        return data;
    }

    protected ProcessResult createResult(String data) {
        return ProcessResult.builder()
            .data(data)
            .processedAt(LocalDateTime.now())
            .success(true)
            .build();
    }

    protected ProcessResult handleError(String inputData, Exception e) {
        return ProcessResult.builder()
            .originalData(inputData)
            .error(e.getMessage())
            .processedAt(LocalDateTime.now())
            .success(false)
            .build();
    }

    // Hook 메서드들 (선택적으로 오버라이드)
    protected boolean shouldLog() {
        return true;
    }

    protected void logProcessing(String inputData, ProcessResult result) {
        System.out.println(String.format("Processed: %s -> Success: %s",
                                       inputData, result.isSuccess()));
    }

    // 추상 메서드 - 하위 클래스에서 반드시 구현
    protected abstract String doProcessData(String data);
}

// JSON 데이터 프로세서
@Component
public class JsonDataProcessor extends DataProcessor {

    private final ObjectMapper objectMapper;

    public JsonDataProcessor() {
        this.objectMapper = new ObjectMapper();
    }

    @Override
    protected void validateData(String data) {
        super.validateData(data);

        try {
            objectMapper.readTree(data);
        } catch (Exception e) {
            throw new IllegalArgumentException("유효하지 않은 JSON 형식입니다", e);
        }
    }

    @Override
    protected String doProcessData(String data) {
        try {
            JsonNode jsonNode = objectMapper.readTree(data);

            // JSON 데이터 변환 로직
            ObjectNode result = objectMapper.createObjectNode();
            result.put("processed", true);
            result.put("processedAt", LocalDateTime.now().toString());
            result.set("original", jsonNode);

            return objectMapper.writeValueAsString(result);

        } catch (Exception e) {
            throw new RuntimeException("JSON 처리 중 오류가 발생했습니다", e);
        }
    }

    @Override
    protected boolean shouldLog() {
        return true;
    }

    @Override
    protected void logProcessing(String inputData, ProcessResult result) {
        System.out.println(String.format("JSON 처리 완료: 크기 %d bytes -> 성공: %s",
                                       inputData.length(), result.isSuccess()));
    }
}

// XML 데이터 프로세서
@Component
public class XmlDataProcessor extends DataProcessor {

    @Override
    protected void validateData(String data) {
        super.validateData(data);

        try {
            DocumentBuilderFactory.newInstance()
                .newDocumentBuilder()
                .parse(new ByteArrayInputStream(data.getBytes()));
        } catch (Exception e) {
            throw new IllegalArgumentException("유효하지 않은 XML 형식입니다", e);
        }
    }

    @Override
    protected String preprocessData(String data) {
        // XML 특별 전처리
        return super.preprocessData(data)
            .replaceAll("\\r\\n", "\\n")
            .replaceAll("\\r", "\\n");
    }

    @Override
    protected String doProcessData(String data) {
        try {
            // XML 처리 로직
            StringBuilder result = new StringBuilder();
            result.append("<?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>\\n");
            result.append("<processed>\\n");
            result.append("  <timestamp>").append(LocalDateTime.now()).append("</timestamp>\\n");
            result.append("  <original><![CDATA[").append(data).append("]]></original>\\n");
            result.append("</processed>");

            return result.toString();

        } catch (Exception e) {
            throw new RuntimeException("XML 처리 중 오류가 발생했습니다", e);
        }
    }

    @Override
    protected void logProcessing(String inputData, ProcessResult result) {
        System.out.println(String.format("XML 처리 완료: %s -> 성공: %s",
                                       "XML 데이터", result.isSuccess()));
    }
}

// CSV 데이터 프로세서
@Component
public class CsvDataProcessor extends DataProcessor {

    @Override
    protected void validateData(String data) {
        super.validateData(data);

        String[] lines = data.split("\\n");
        if (lines.length < 2) {
            throw new IllegalArgumentException("CSV는 최소 헤더와 1개 데이터 행이 필요합니다");
        }
    }

    @Override
    protected String doProcessData(String data) {
        String[] lines = data.split("\\n");
        StringBuilder result = new StringBuilder();

        // 헤더 추가
        result.append("processed_at,").append(lines[0]).append("\\n");

        // 데이터 행 처리
        for (int i = 1; i < lines.length; i++) {
            result.append(LocalDateTime.now()).append(",").append(lines[i]).append("\\n");
        }

        return result.toString();
    }

    @Override
    protected boolean shouldLog() {
        return false; // CSV는 로그 생략
    }
}

// 데이터 프로세서 팩토리와 함께 사용
@Service
@RequiredArgsConstructor
public class DataProcessingService {

    private final List<DataProcessor> processors;

    public ProcessResult processData(String data, DataType type) {
        DataProcessor processor = getProcessor(type);
        return processor.processData(data);
    }

    private DataProcessor getProcessor(DataType type) {
        return processors.stream()
            .filter(p -> supportsType(p, type))
            .findFirst()
            .orElseThrow(() -> new UnsupportedOperationException(
                "지원하지 않는 데이터 타입입니다: " + type));
    }

    private boolean supportsType(DataProcessor processor, DataType type) {
        switch (type) {
            case JSON:
                return processor instanceof JsonDataProcessor;
            case XML:
                return processor instanceof XmlDataProcessor;
            case CSV:
                return processor instanceof CsvDataProcessor;
            default:
                return false;
        }
    }
}

// 파일 처리를 위한 Template Method 예제
public abstract class FileProcessor {

    public final FileProcessResult processFile(String filePath) {
        try {
            // 1. 파일 검증
            validateFile(filePath);

            // 2. 파일 읽기
            String content = readFile(filePath);

            // 3. 내용 처리 (하위 클래스 구현)
            String processedContent = processContent(content);

            // 4. 백업 생성 (선택적)
            if (shouldCreateBackup()) {
                createBackup(filePath);
            }

            // 5. 결과 파일 쓰기
            String outputPath = getOutputPath(filePath);
            writeFile(outputPath, processedContent);

            // 6. 정리 작업
            cleanup(filePath, outputPath);

            return FileProcessResult.success(outputPath);

        } catch (Exception e) {
            return FileProcessResult.failure(e.getMessage());
        }
    }

    // 공통 구현 메서드들
    protected void validateFile(String filePath) {
        File file = new File(filePath);
        if (!file.exists()) {
            throw new IllegalArgumentException("파일이 존재하지 않습니다: " + filePath);
        }
        if (!file.canRead()) {
            throw new IllegalArgumentException("파일을 읽을 수 없습니다: " + filePath);
        }
    }

    protected String readFile(String filePath) throws IOException {
        return Files.readString(Paths.get(filePath));
    }

    protected void writeFile(String filePath, String content) throws IOException {
        Files.writeString(Paths.get(filePath), content);
    }

    protected void createBackup(String filePath) throws IOException {
        String backupPath = filePath + ".backup." + System.currentTimeMillis();
        Files.copy(Paths.get(filePath), Paths.get(backupPath));
    }

    protected void cleanup(String inputPath, String outputPath) {
        // 기본적으로는 정리 작업 없음
    }

    // Hook 메서드들
    protected boolean shouldCreateBackup() {
        return true;
    }

    protected String getOutputPath(String inputPath) {
        return inputPath.replaceAll("\\\\.[^.]+$", "_processed.txt");
    }

    // 추상 메서드
    protected abstract String processContent(String content);
}

// 텍스트 파일 처리 구현체
@Component
public class TextFileProcessor extends FileProcessor {

    @Override
    protected String processContent(String content) {
        // 텍스트 처리: 대문자 변환 + 줄 번호 추가
        String[] lines = content.split("\\n");
        StringBuilder result = new StringBuilder();

        for (int i = 0; i < lines.length; i++) {
            result.append(String.format("%03d: %s%n", i + 1, lines[i].toUpperCase()));
        }

        return result.toString();
    }

    @Override
    protected String getOutputPath(String inputPath) {
        return inputPath.replaceAll("\\\\.[^.]+$", "_processed.txt");
    }
}

// 로그 파일 처리 구현체
@Component
public class LogFileProcessor extends FileProcessor {

    @Override
    protected String processContent(String content) {
        // 로그 파일 처리: 에러 로그만 추출 + 타임스탬프 추가
        String[] lines = content.split("\\n");
        StringBuilder result = new StringBuilder();

        result.append("=== 에러 로그 추출 결과 ===\\n");
        result.append("생성시간: ").append(LocalDateTime.now()).append("\\n\\n");

        for (String line : lines) {
            if (line.toLowerCase().contains("error") ||
                line.toLowerCase().contains("exception")) {
                result.append(line).append("\\n");
            }
        }

        return result.toString();
    }

    @Override
    protected String getOutputPath(String inputPath) {
        return inputPath.replaceAll("\\\\.[^.]+$", "_errors.log");
    }

    @Override
    protected boolean shouldCreateBackup() {
        return false; // 로그 파일은 백업 생성 안함
    }
}`}</pre>
          </div>
        </div>

        {/* Facade 패턴 */}
        <div id="facade-pattern" className="card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🎭 Facade 패턴</h2>
          <p className="text-gray-600 mb-6">
            복잡한 서브시스템에 대한 단순화된 인터페이스를 제공하여 클라이언트의 사용을 쉽게 만드는 패턴입니다.
          </p>

          <div className="code-block">
            <pre>{`// 복잡한 서브시스템들
@Service
@RequiredArgsConstructor
public class UserValidationService {

    public ValidationResult validateUser(CreateUserRequest request) {
        List<String> errors = new ArrayList<>();

        if (request.getName() == null || request.getName().trim().isEmpty()) {
            errors.add("이름은 필수입니다");
        }

        if (request.getEmail() == null || !isValidEmail(request.getEmail())) {
            errors.add("유효한 이메일이 필요합니다");
        }

        if (request.getPassword() == null || request.getPassword().length() < 8) {
            errors.add("비밀번호는 8자 이상이어야 합니다");
        }

        return ValidationResult.builder()
            .valid(errors.isEmpty())
            .errors(errors)
            .build();
    }

    private boolean isValidEmail(String email) {
        return email.contains("@") && email.contains(".");
    }
}

@Service
@RequiredArgsConstructor
public class UserPersistenceService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public User saveUser(CreateUserRequest request) {
        User user = User.builder()
            .name(request.getName())
            .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword()))
            .active(true)
            .createdAt(LocalDateTime.now())
            .build();

        return userRepository.save(user);
    }

    public boolean emailExists(String email) {
        return userRepository.findByEmail(email).isPresent();
    }
}

@Service
@RequiredArgsConstructor
public class UserNotificationService {

    private final EmailService emailService;
    private final SmsService smsService;

    public void sendWelcomeNotifications(User user) {
        // 환영 이메일 발송
        emailService.sendWelcomeEmail(user.getEmail(), user.getName());

        // 관리자에게 알림
        emailService.sendAdminNotification(
            "새로운 사용자 등록: " + user.getEmail()
        );
    }

    public void sendVerificationCode(String email, String code) {
        emailService.sendVerificationCode(email, code);
    }
}

@Service
@RequiredArgsConstructor
public class UserAuditService {

    private final AuditLogger auditLogger;

    public void logUserRegistration(User user) {
        auditLogger.logUserAction(
            user.getId(),
            "USER_REGISTERED",
            "User registered with email: " + user.getEmail()
        );
    }

    public void logUserLogin(Long userId, String ipAddress) {
        auditLogger.logUserAction(
            userId,
            "USER_LOGIN",
            "User logged in from IP: " + ipAddress
        );
    }
}

// Facade 클래스 - 복잡한 서브시스템을 단순화
@Service
@RequiredArgsConstructor
@Transactional
public class UserManagementFacade {

    private final UserValidationService validationService;
    private final UserPersistenceService persistenceService;
    private final UserNotificationService notificationService;
    private final UserAuditService auditService;

    /**
     * 사용자 등록의 모든 과정을 처리하는 단순화된 인터페이스
     */
    public UserRegistrationResult registerUser(CreateUserRequest request) {
        try {
            // 1. 데이터 검증
            ValidationResult validation = validationService.validateUser(request);
            if (!validation.isValid()) {
                return UserRegistrationResult.failure(validation.getErrors());
            }

            // 2. 중복 이메일 확인
            if (persistenceService.emailExists(request.getEmail())) {
                return UserRegistrationResult.failure(
                    List.of("이미 사용 중인 이메일입니다")
                );
            }

            // 3. 사용자 저장
            User savedUser = persistenceService.saveUser(request);

            // 4. 알림 발송
            notificationService.sendWelcomeNotifications(savedUser);

            // 5. 감사 로그 기록
            auditService.logUserRegistration(savedUser);

            return UserRegistrationResult.success(
                UserResponse.from(savedUser)
            );

        } catch (Exception e) {
            return UserRegistrationResult.failure(
                List.of("사용자 등록 중 오류가 발생했습니다: " + e.getMessage())
            );
        }
    }

    /**
     * 사용자 로그인 처리
     */
    public LoginResult loginUser(LoginRequest request, String ipAddress) {
        try {
            // 로그인 로직 (인증, 토큰 생성 등)
            // ... 로그인 처리 코드 ...

            // 로그인 성공 시 감사 로그 기록
            auditService.logUserLogin(1L, ipAddress); // 실제로는 인증된 사용자 ID

            return LoginResult.success("로그인 성공");

        } catch (Exception e) {
            return LoginResult.failure("로그인 실패: " + e.getMessage());
        }
    }

    /**
     * 이메일 인증 처리
     */
    public VerificationResult sendEmailVerification(String email) {
        try {
            if (!persistenceService.emailExists(email)) {
                return VerificationResult.failure("존재하지 않는 이메일입니다");
            }

            String verificationCode = generateVerificationCode();
            notificationService.sendVerificationCode(email, verificationCode);

            return VerificationResult.success("인증 코드가 발송되었습니다");

        } catch (Exception e) {
            return VerificationResult.failure("인증 코드 발송 실패: " + e.getMessage());
        }
    }

    private String generateVerificationCode() {
        return String.valueOf((int)(Math.random() * 900000) + 100000);
    }
}

// 주문 처리를 위한 복잡한 Facade 예제
@Service
@RequiredArgsConstructor
@Transactional
public class OrderProcessingFacade {

    private final InventoryService inventoryService;
    private final PaymentService paymentService;
    private final ShippingService shippingService;
    private final OrderPersistenceService orderPersistenceService;
    private final OrderNotificationService orderNotificationService;
    private final OrderAuditService orderAuditService;

    /**
     * 주문 처리의 모든 과정을 하나의 메서드로 통합
     */
    public OrderResult processOrder(CreateOrderRequest request) {
        String transactionId = UUID.randomUUID().toString();

        try {
            // 1. 재고 확인 및 예약
            InventoryReservationResult inventoryResult =
                inventoryService.reserveItems(request.getItems());

            if (!inventoryResult.isSuccess()) {
                return OrderResult.failure("재고 부족: " + inventoryResult.getMessage());
            }

            // 2. 주문 생성 및 저장
            Order order = orderPersistenceService.createOrder(request);

            try {
                // 3. 결제 처리
                PaymentResult paymentResult = paymentService.processPayment(
                    order.getId(),
                    request.getPaymentInfo()
                );

                if (!paymentResult.isSuccess()) {
                    // 재고 예약 해제
                    inventoryService.releaseReservation(inventoryResult.getReservationId());
                    return OrderResult.failure("결제 실패: " + paymentResult.getMessage());
                }

                // 4. 배송 준비
                ShippingResult shippingResult = shippingService.scheduleShipping(
                    order.getId(),
                    request.getShippingAddress()
                );

                if (!shippingResult.isSuccess()) {
                    // 결제 취소 및 재고 해제
                    paymentService.refundPayment(paymentResult.getPaymentId());
                    inventoryService.releaseReservation(inventoryResult.getReservationId());
                    return OrderResult.failure("배송 준비 실패: " + shippingResult.getMessage());
                }

                // 5. 주문 상태 업데이트
                orderPersistenceService.updateOrderStatus(
                    order.getId(),
                    OrderStatus.CONFIRMED
                );

                // 6. 알림 발송
                orderNotificationService.sendOrderConfirmation(order);

                // 7. 감사 로그 기록
                orderAuditService.logOrderProcessing(order, transactionId);

                return OrderResult.success(
                    OrderResponse.from(order),
                    paymentResult.getPaymentId(),
                    shippingResult.getTrackingNumber()
                );

            } catch (Exception e) {
                // 오류 발생 시 모든 예약 해제
                inventoryService.releaseReservation(inventoryResult.getReservationId());
                throw e;
            }

        } catch (Exception e) {
            orderAuditService.logOrderFailure(request, transactionId, e.getMessage());
            return OrderResult.failure("주문 처리 중 오류가 발생했습니다: " + e.getMessage());
        }
    }

    /**
     * 주문 취소 처리
     */
    public CancelResult cancelOrder(Long orderId, String reason) {
        try {
            Order order = orderPersistenceService.findOrder(orderId);

            if (order == null) {
                return CancelResult.failure("존재하지 않는 주문입니다");
            }

            if (!canCancelOrder(order.getStatus())) {
                return CancelResult.failure("취소할 수 없는 주문 상태입니다");
            }

            // 결제 환불
            paymentService.refundOrder(orderId);

            // 재고 복구
            inventoryService.restoreInventory(orderId);

            // 배송 취소
            if (order.getStatus() == OrderStatus.SHIPPED) {
                shippingService.cancelShipping(orderId);
            }

            // 주문 상태 업데이트
            orderPersistenceService.updateOrderStatus(orderId, OrderStatus.CANCELLED);

            // 취소 알림
            orderNotificationService.sendCancellationNotification(order, reason);

            // 감사 로그
            orderAuditService.logOrderCancellation(orderId, reason);

            return CancelResult.success("주문이 성공적으로 취소되었습니다");

        } catch (Exception e) {
            return CancelResult.failure("주문 취소 중 오류가 발생했습니다: " + e.getMessage());
        }
    }

    private boolean canCancelOrder(OrderStatus status) {
        return status == OrderStatus.PENDING ||
               status == OrderStatus.CONFIRMED ||
               status == OrderStatus.SHIPPED;
    }
}

// Controller에서 Facade 사용 예제
@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserManagementFacade userFacade;

    @PostMapping("/register")
    public ResponseEntity<ApiResponse<UserResponse>> registerUser(
            @Valid @RequestBody CreateUserRequest request) {

        UserRegistrationResult result = userFacade.registerUser(request);

        if (result.isSuccess()) {
            return ResponseEntity.ok(
                ApiResponse.success(result.getUser())
            );
        } else {
            return ResponseEntity.badRequest().body(
                ApiResponse.error(400, String.join(", ", result.getErrors()))
            );
        }
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<String>> login(
            @Valid @RequestBody LoginRequest request,
            HttpServletRequest httpRequest) {

        String ipAddress = getClientIpAddress(httpRequest);
        LoginResult result = userFacade.loginUser(request, ipAddress);

        if (result.isSuccess()) {
            return ResponseEntity.ok(
                ApiResponse.success(result.getMessage())
            );
        } else {
            return ResponseEntity.badRequest().body(
                ApiResponse.error(400, result.getMessage())
            );
        }
    }

    @PostMapping("/verify-email")
    public ResponseEntity<ApiResponse<String>> verifyEmail(
            @RequestBody VerificationRequest request) {

        VerificationResult result = userFacade.sendEmailVerification(request.getEmail());

        if (result.isSuccess()) {
            return ResponseEntity.ok(
                ApiResponse.success(result.getMessage())
            );
        } else {
            return ResponseEntity.badRequest().body(
                ApiResponse.error(400, result.getMessage())
            );
        }
    }

    private String getClientIpAddress(HttpServletRequest request) {
        String xForwardedFor = request.getHeader("X-Forwarded-For");
        if (xForwardedFor != null && !xForwardedFor.isEmpty()) {
            return xForwardedFor.split(",")[0].trim();
        }
        return request.getRemoteAddr();
    }
}`}</pre>
          </div>
        </div>

        {/* Proxy 패턴 */}
        <div id="proxy-pattern" className="card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🎭 Proxy 패턴</h2>
          <p className="text-gray-600 mb-6">
            실제 객체에 대한 대리자(프록시)를 제공하여 접근을 제어하거나 추가 기능을 제공하는 패턴입니다.
            Spring AOP의 핵심이며, @Transactional, @Aspect 등의 구현 원리입니다.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">🔄 Dynamic Proxy</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• JDK Dynamic Proxy</li>
                <li>• CGLIB Proxy</li>
                <li>• 런타임 프록시 생성</li>
                <li>• 인터페이스 기반/클래스 기반</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">🎯 AOP 적용</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• @Transactional</li>
                <li>• @Cacheable</li>
                <li>• @Async</li>
                <li>• @PreAuthorize</li>
              </ul>
            </div>
            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">⚡ 사용 사례</h3>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 트랜잭션 관리</li>
                <li>• 로깅 및 모니터링</li>
                <li>• 보안 검사</li>
                <li>• 캐싱</li>
              </ul>
            </div>
          </div>

          <div className="code-block">
            <pre>{`// 기본 서비스 인터페이스
public interface UserService {
    User createUser(CreateUserRequest request);
    User getUserById(Long id);
    void deleteUser(Long id);
}

// 실제 구현체
@Service
@Transactional(readOnly = true)
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final EmailService emailService;

    public UserServiceImpl(UserRepository userRepository, EmailService emailService) {
        this.userRepository = userRepository;
        this.emailService = emailService;
    }

    @Override
    @Transactional  // Spring이 프록시로 트랜잭션 관리
    public User createUser(CreateUserRequest request) {
        System.out.println("실제 사용자 생성 로직");

        User user = User.builder()
            .name(request.getName())
            .email(request.getEmail())
            .active(true)
            .createdAt(LocalDateTime.now())
            .build();

        User savedUser = userRepository.save(user);
        emailService.sendWelcomeEmail(savedUser.getEmail());

        return savedUser;
    }

    @Override
    @Cacheable("users")  // Spring이 프록시로 캐싱 처리
    public User getUserById(Long id) {
        System.out.println("실제 사용자 조회 로직");
        return userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException("사용자를 찾을 수 없습니다"));
    }

    @Override
    @Transactional
    @PreAuthorize("hasRole('ADMIN')")  // Spring Security 프록시로 권한 검사
    public void deleteUser(Long id) {
        System.out.println("실제 사용자 삭제 로직");
        userRepository.deleteById(id);
    }
}

// AOP를 통한 커스텀 프록시 구현
@Aspect
@Component
@Slf4j
public class PerformanceMonitoringAspect {

    // 모든 서비스 메서드 실행 전후에 성능 측정
    @Around("execution(* com.springhub.service.*.*(..))")
    public Object measureExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {
        long startTime = System.currentTimeMillis();
        String methodName = joinPoint.getSignature().getName();
        String className = joinPoint.getTarget().getClass().getSimpleName();

        log.info("⏱️ 메서드 실행 시작: {}.{}", className, methodName);

        try {
            // 실제 메서드 실행 (프록시를 통한 위임)
            Object result = joinPoint.proceed();

            long endTime = System.currentTimeMillis();
            long duration = endTime - startTime;

            log.info("✅ 메서드 실행 완료: {}.{} - {}ms", className, methodName, duration);

            // 성능 임계값 체크
            if (duration > 5000) {
                log.warn("🐌 성능 경고: {}.{} 실행 시간이 {}ms로 임계값(5초)을 초과했습니다",
                        className, methodName, duration);
            }

            return result;

        } catch (Exception e) {
            long endTime = System.currentTimeMillis();
            long duration = endTime - startTime;

            log.error("❌ 메서드 실행 실패: {}.{} - {}ms, 오류: {}",
                     className, methodName, duration, e.getMessage());
            throw e;
        }
    }

    // 특정 어노테이션이 있는 메서드에만 로깅 적용
    @Around("@annotation(Loggable)")
    public Object logMethodExecution(ProceedingJoinPoint joinPoint) throws Throwable {
        String methodName = joinPoint.getSignature().getName();
        Object[] args = joinPoint.getArgs();

        log.info("📝 메서드 호출: {} - 매개변수: {}", methodName, Arrays.toString(args));

        Object result = joinPoint.proceed();

        log.info("📤 메서드 반환: {} - 결과: {}", methodName, result);

        return result;
    }
}

// 커스텀 어노테이션
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface Loggable {
}

// 수동 프록시 구현 예제
public class SecurityProxyUserService implements UserService {

    private final UserService target;
    private final SecurityService securityService;

    public SecurityProxyUserService(UserService target, SecurityService securityService) {
        this.target = target;
        this.securityService = securityService;
    }

    @Override
    public User createUser(CreateUserRequest request) {
        // 보안 검사 (프록시의 추가 기능)
        if (!securityService.hasPermission("USER_CREATE")) {
            throw new AccessDeniedException("사용자 생성 권한이 없습니다");
        }

        // 입력 데이터 검증 (프록시의 추가 기능)
        validateUserRequest(request);

        // 감사 로깅 (프록시의 추가 기능)
        auditService.logUserAction("USER_CREATE_ATTEMPT", request.getEmail());

        try {
            // 실제 객체에 위임
            User result = target.createUser(request);

            // 성공 로깅 (프록시의 추가 기능)
            auditService.logUserAction("USER_CREATE_SUCCESS", result.getEmail());

            return result;

        } catch (Exception e) {
            // 실패 로깅 (프록시의 추가 기능)
            auditService.logUserAction("USER_CREATE_FAILURE", request.getEmail());
            throw e;
        }
    }

    @Override
    public User getUserById(Long id) {
        // 접근 로그 (프록시의 추가 기능)
        log.info("사용자 조회 시도: ID {}", id);

        // 캐시 확인 (프록시의 추가 기능)
        User cachedUser = cacheService.getUser(id);
        if (cachedUser != null) {
            log.info("캐시에서 사용자 반환: ID {}", id);
            return cachedUser;
        }

        // 실제 객체에 위임
        User user = target.getUserById(id);

        // 캐시 저장 (프록시의 추가 기능)
        cacheService.putUser(id, user);

        return user;
    }

    @Override
    public void deleteUser(Long id) {
        // 관리자 권한 확인 (프록시의 추가 기능)
        if (!securityService.hasRole("ADMIN")) {
            throw new AccessDeniedException("관리자 권한이 필요합니다");
        }

        // 삭제 전 백업 (프록시의 추가 기능)
        User userToDelete = target.getUserById(id);
        backupService.backupUser(userToDelete);

        // 실제 객체에 위임
        target.deleteUser(id);

        // 캐시 무효화 (프록시의 추가 기능)
        cacheService.evictUser(id);

        // 감사 로깅
        auditService.logUserAction("USER_DELETE", userToDelete.getEmail());
    }

    private void validateUserRequest(CreateUserRequest request) {
        if (request.getEmail().contains("@spam.com")) {
            throw new IllegalArgumentException("차단된 도메인입니다");
        }
    }
}

// 프록시 팩토리 구현
@Component
public class UserServiceProxyFactory {

    private final SecurityService securityService;
    private final CacheService cacheService;
    private final AuditService auditService;
    private final BackupService backupService;

    public UserServiceProxyFactory(SecurityService securityService,
                                  CacheService cacheService,
                                  AuditService auditService,
                                  BackupService backupService) {
        this.securityService = securityService;
        this.cacheService = cacheService;
        this.auditService = auditService;
        this.backupService = backupService;
    }

    public UserService createSecuredUserService(UserService target) {
        return new SecurityProxyUserService(target, securityService);
    }

    public UserService createCachedUserService(UserService target) {
        return new CachingProxyUserService(target, cacheService);
    }

    public UserService createFullyProxiedUserService(UserService target) {
        // 프록시 체인 구성
        UserService securedService = createSecuredUserService(target);
        UserService cachedService = createCachedUserService(securedService);
        return new AuditProxyUserService(cachedService, auditService);
    }
}

// Spring Configuration에서 프록시 설정
@Configuration
@EnableAspectJAutoProxy(proxyTargetClass = true)  // CGLIB 프록시 활성화
public class ProxyConfiguration {

    @Bean
    public UserService userService(UserRepository userRepository,
                                  EmailService emailService,
                                  UserServiceProxyFactory proxyFactory) {

        // 기본 구현체 생성
        UserService basicService = new UserServiceImpl(userRepository, emailService);

        // 프록시 체인 적용
        return proxyFactory.createFullyProxiedUserService(basicService);
    }
}

// 프록시 동작 테스트
@RestController
@RequestMapping("/api/proxy-demo")
public class ProxyDemoController {

    private final UserService userService;
    private final ApplicationContext applicationContext;

    public ProxyDemoController(UserService userService, ApplicationContext applicationContext) {
        this.userService = userService;
        this.applicationContext = applicationContext;
    }

    @GetMapping("/proxy-info")
    public Map<String, Object> getProxyInfo() {
        Map<String, Object> info = new HashMap<>();

        // 프록시 클래스 정보
        Class<?> proxyClass = userService.getClass();
        info.put("isProxy", AopUtils.isAopProxy(userService));
        info.put("isJdkProxy", AopUtils.isJdkDynamicProxy(userService));
        info.put("isCglibProxy", AopUtils.isCglibProxy(userService));
        info.put("proxyClass", proxyClass.getName());
        info.put("targetClass", AopUtils.getTargetClass(userService).getName());

        return info;
    }

    @PostMapping("/test-transaction")
    public ResponseEntity<String> testTransactionProxy(@RequestBody CreateUserRequest request) {
        try {
            // @Transactional 어노테이션으로 인해 Spring이 자동으로 프록시를 통해 트랜잭션 관리
            User user = userService.createUser(request);
            return ResponseEntity.ok("사용자 생성 완료 (프록시를 통한 트랜잭션 적용): " + user.getId());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("프록시 트랜잭션 처리 실패: " + e.getMessage());
        }
    }
}`}</pre>
          </div>
        </div>

        {/* Decorator 패턴 */}
        <div id="decorator-pattern" className="card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🎨 Decorator 패턴</h2>
          <p className="text-gray-600 mb-6">
            객체에 새로운 기능을 동적으로 추가하는 패턴입니다. Spring AOP와 함께 사용하면 더욱 강력합니다.
          </p>

          <div className="code-block">
            <pre>{`// 기본 인터페이스
public interface NotificationSender {
    void send(String recipient, String message);
    String getType();
}

// 기본 구현체
@Component
public class BasicNotificationSender implements NotificationSender {

    @Override
    public void send(String recipient, String message) {
        System.out.println(String.format("Basic notification to %s: %s", recipient, message));
    }

    @Override
    public String getType() {
        return "BASIC";
    }
}

// 데코레이터 기본 클래스
public abstract class NotificationDecorator implements NotificationSender {

    protected final NotificationSender wrapped;

    public NotificationDecorator(NotificationSender wrapped) {
        this.wrapped = wrapped;
    }

    @Override
    public void send(String recipient, String message) {
        wrapped.send(recipient, message);
    }

    @Override
    public String getType() {
        return wrapped.getType();
    }
}

// 로깅 데코레이터
@Component
public class LoggingNotificationDecorator extends NotificationDecorator {

    private static final Logger log = LoggerFactory.getLogger(LoggingNotificationDecorator.class);

    public LoggingNotificationDecorator(NotificationSender wrapped) {
        super(wrapped);
    }

    @Override
    public void send(String recipient, String message) {
        log.info("알림 발송 시작 - 수신자: {}, 메시지: {}", recipient, message);

        long startTime = System.currentTimeMillis();

        try {
            super.send(recipient, message);

            long duration = System.currentTimeMillis() - startTime;
            log.info("알림 발송 완료 - 소요시간: {}ms", duration);

        } catch (Exception e) {
            log.error("알림 발송 실패 - 수신자: {}, 오류: {}", recipient, e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public String getType() {
        return "LOGGED_" + super.getType();
    }
}

// 재시도 데코레이터
@Component
public class RetryNotificationDecorator extends NotificationDecorator {

    private static final Logger log = LoggerFactory.getLogger(RetryNotificationDecorator.class);
    private final int maxRetries;
    private final long retryDelay;

    public RetryNotificationDecorator(NotificationSender wrapped, int maxRetries, long retryDelay) {
        super(wrapped);
        this.maxRetries = maxRetries;
        this.retryDelay = retryDelay;
    }

    public RetryNotificationDecorator(NotificationSender wrapped) {
        this(wrapped, 3, 1000); // 기본값: 3번 재시도, 1초 간격
    }

    @Override
    public void send(String recipient, String message) {
        int attempt = 0;
        Exception lastException = null;

        while (attempt <= maxRetries) {
            try {
                super.send(recipient, message);

                if (attempt > 0) {
                    log.info("알림 발송 성공 - 재시도 {}번째에 성공", attempt);
                }

                return; // 성공 시 종료

            } catch (Exception e) {
                lastException = e;
                attempt++;

                if (attempt <= maxRetries) {
                    log.warn("알림 발송 실패 ({}번째 시도) - {}초 후 재시도: {}",
                           attempt, retryDelay / 1000, e.getMessage());

                    try {
                        Thread.sleep(retryDelay);
                    } catch (InterruptedException ie) {
                        Thread.currentThread().interrupt();
                        throw new RuntimeException("재시도 대기 중 인터럽트 발생", ie);
                    }
                }
            }
        }

        log.error("알림 발송 최종 실패 - 모든 재시도 실패");
        throw new RuntimeException("알림 발송 실패: " + lastException.getMessage(), lastException);
    }

    @Override
    public String getType() {
        return "RETRY_" + super.getType();
    }
}

// 암호화 데코레이터
@Component
public class EncryptionNotificationDecorator extends NotificationDecorator {

    private final EncryptionService encryptionService;

    public EncryptionNotificationDecorator(NotificationSender wrapped,
                                         EncryptionService encryptionService) {
        super(wrapped);
        this.encryptionService = encryptionService;
    }

    @Override
    public void send(String recipient, String message) {
        String encryptedMessage = encryptionService.encrypt(message);
        super.send(recipient, encryptedMessage);
    }

    @Override
    public String getType() {
        return "ENCRYPTED_" + super.getType();
    }
}

// 검증 데코레이터
@Component
public class ValidationNotificationDecorator extends NotificationDecorator {

    public ValidationNotificationDecorator(NotificationSender wrapped) {
        super(wrapped);
    }

    @Override
    public void send(String recipient, String message) {
        validateRecipient(recipient);
        validateMessage(message);

        super.send(recipient, message);
    }

    private void validateRecipient(String recipient) {
        if (recipient == null || recipient.trim().isEmpty()) {
            throw new IllegalArgumentException("수신자는 필수입니다");
        }

        if (!isValidEmail(recipient) && !isValidPhoneNumber(recipient)) {
            throw new IllegalArgumentException("유효하지 않은 수신자 형식입니다");
        }
    }

    private void validateMessage(String message) {
        if (message == null || message.trim().isEmpty()) {
            throw new IllegalArgumentException("메시지 내용은 필수입니다");
        }

        if (message.length() > 1000) {
            throw new IllegalArgumentException("메시지는 1000자 이하여야 합니다");
        }
    }

    private boolean isValidEmail(String email) {
        return email.contains("@") && email.contains(".");
    }

    private boolean isValidPhoneNumber(String phone) {
        return phone.matches("^\\d{2,3}-\\d{3,4}-\\d{4}$");
    }

    @Override
    public String getType() {
        return "VALIDATED_" + super.getType();
    }
}

// 캐싱 데코레이터
@Component
public class CachingNotificationDecorator extends NotificationDecorator {

    private final Map<String, LocalDateTime> recentNotifications;
    private final Duration cacheTime;

    public CachingNotificationDecorator(NotificationSender wrapped, Duration cacheTime) {
        super(wrapped);
        this.recentNotifications = new ConcurrentHashMap<>();
        this.cacheTime = cacheTime;
    }

    public CachingNotificationDecorator(NotificationSender wrapped) {
        this(wrapped, Duration.ofMinutes(5)); // 기본 5분 캐싱
    }

    @Override
    public void send(String recipient, String message) {
        String cacheKey = createCacheKey(recipient, message);
        LocalDateTime lastSent = recentNotifications.get(cacheKey);

        if (lastSent != null &&
            LocalDateTime.now().isBefore(lastSent.plus(cacheTime))) {

            System.out.println(String.format(
                "중복 알림 방지 - 수신자: %s (마지막 발송: %s)",
                recipient, lastSent));
            return;
        }

        super.send(recipient, message);
        recentNotifications.put(cacheKey, LocalDateTime.now());

        // 오래된 캐시 항목 정리
        cleanupOldCacheEntries();
    }

    private String createCacheKey(String recipient, String message) {
        return recipient + ":" + message.hashCode();
    }

    private void cleanupOldCacheEntries() {
        LocalDateTime cutoff = LocalDateTime.now().minus(cacheTime);

        recentNotifications.entrySet().removeIf(
            entry -> entry.getValue().isBefore(cutoff)
        );
    }

    @Override
    public String getType() {
        return "CACHED_" + super.getType();
    }
}

// 데코레이터 빌더
@Component
public class NotificationDecoratorBuilder {

    private final EncryptionService encryptionService;

    public NotificationDecoratorBuilder(EncryptionService encryptionService) {
        this.encryptionService = encryptionService;
    }

    public NotificationSender buildNotificationSender(NotificationSender base,
                                                     Set<DecoratorType> decoratorTypes) {
        NotificationSender current = base;

        // 데코레이터 적용 순서가 중요함
        if (decoratorTypes.contains(DecoratorType.VALIDATION)) {
            current = new ValidationNotificationDecorator(current);
        }

        if (decoratorTypes.contains(DecoratorType.ENCRYPTION)) {
            current = new EncryptionNotificationDecorator(current, encryptionService);
        }

        if (decoratorTypes.contains(DecoratorType.CACHING)) {
            current = new CachingNotificationDecorator(current);
        }

        if (decoratorTypes.contains(DecoratorType.RETRY)) {
            current = new RetryNotificationDecorator(current);
        }

        if (decoratorTypes.contains(DecoratorType.LOGGING)) {
            current = new LoggingNotificationDecorator(current);
        }

        return current;
    }
}

// 사용 예제 서비스
@Service
@RequiredArgsConstructor
public class NotificationService {

    private final NotificationDecoratorBuilder decoratorBuilder;
    private final BasicNotificationSender basicSender;

    public void sendBasicNotification(String recipient, String message) {
        basicSender.send(recipient, message);
    }

    public void sendSecureNotification(String recipient, String message) {
        Set<DecoratorType> decorators = Set.of(
            DecoratorType.VALIDATION,
            DecoratorType.ENCRYPTION,
            DecoratorType.LOGGING
        );

        NotificationSender sender = decoratorBuilder.buildNotificationSender(
            basicSender, decorators
        );

        sender.send(recipient, message);
    }

    public void sendReliableNotification(String recipient, String message) {
        Set<DecoratorType> decorators = Set.of(
            DecoratorType.VALIDATION,
            DecoratorType.CACHING,
            DecoratorType.RETRY,
            DecoratorType.LOGGING
        );

        NotificationSender sender = decoratorBuilder.buildNotificationSender(
            basicSender, decorators
        );

        sender.send(recipient, message);
    }

    public void sendFullFeaturedNotification(String recipient, String message) {
        Set<DecoratorType> decorators = EnumSet.allOf(DecoratorType.class);

        NotificationSender sender = decoratorBuilder.buildNotificationSender(
            basicSender, decorators
        );

        sender.send(recipient, message);
    }
}

// HTTP 클라이언트 데코레이터 예제
public interface HttpClient {
    String get(String url);
    String post(String url, String body);
}

@Component
public class BasicHttpClient implements HttpClient {

    @Override
    public String get(String url) {
        // 기본 HTTP GET 구현
        return "GET response from " + url;
    }

    @Override
    public String post(String url, String body) {
        // 기본 HTTP POST 구현
        return "POST response from " + url + " with body: " + body;
    }
}

// HTTP 클라이언트 데코레이터
public abstract class HttpClientDecorator implements HttpClient {

    protected final HttpClient wrapped;

    public HttpClientDecorator(HttpClient wrapped) {
        this.wrapped = wrapped;
    }

    @Override
    public String get(String url) {
        return wrapped.get(url);
    }

    @Override
    public String post(String url, String body) {
        return wrapped.post(url, body);
    }
}

// 로깅 HTTP 클라이언트 데코레이터
@Component
public class LoggingHttpClientDecorator extends HttpClientDecorator {

    private static final Logger log = LoggerFactory.getLogger(LoggingHttpClientDecorator.class);

    public LoggingHttpClientDecorator(HttpClient wrapped) {
        super(wrapped);
    }

    @Override
    public String get(String url) {
        log.info("HTTP GET 요청 시작: {}", url);
        long startTime = System.currentTimeMillis();

        try {
            String response = super.get(url);
            long duration = System.currentTimeMillis() - startTime;
            log.info("HTTP GET 완료: {} ({}ms)", url, duration);
            return response;

        } catch (Exception e) {
            log.error("HTTP GET 실패: {} - {}", url, e.getMessage());
            throw e;
        }
    }

    @Override
    public String post(String url, String body) {
        log.info("HTTP POST 요청 시작: {}", url);
        long startTime = System.currentTimeMillis();

        try {
            String response = super.post(url, body);
            long duration = System.currentTimeMillis() - startTime;
            log.info("HTTP POST 완료: {} ({}ms)", url, duration);
            return response;

        } catch (Exception e) {
            log.error("HTTP POST 실패: {} - {}", url, e.getMessage());
            throw e;
        }
    }
}

// 재시도 HTTP 클라이언트 데코레이터
@Component
public class RetryHttpClientDecorator extends HttpClientDecorator {

    private final int maxRetries;
    private final long retryDelay;

    public RetryHttpClientDecorator(HttpClient wrapped, int maxRetries, long retryDelay) {
        super(wrapped);
        this.maxRetries = maxRetries;
        this.retryDelay = retryDelay;
    }

    @Override
    public String get(String url) {
        return executeWithRetry(() -> super.get(url), "GET", url);
    }

    @Override
    public String post(String url, String body) {
        return executeWithRetry(() -> super.post(url, body), "POST", url);
    }

    private String executeWithRetry(Supplier<String> operation, String method, String url) {
        int attempt = 0;
        Exception lastException = null;

        while (attempt <= maxRetries) {
            try {
                return operation.get();

            } catch (Exception e) {
                lastException = e;
                attempt++;

                if (attempt <= maxRetries) {
                    try {
                        Thread.sleep(retryDelay);
                    } catch (InterruptedException ie) {
                        Thread.currentThread().interrupt();
                        throw new RuntimeException("재시도 대기 중 인터럽트", ie);
                    }
                }
            }
        }

        throw new RuntimeException(
            String.format("%s %s 요청 실패 (최대 재시도 횟수 초과)", method, url),
            lastException
        );
    }
}

// 데코레이터 타입 열거형
public enum DecoratorType {
    VALIDATION,
    ENCRYPTION,
    CACHING,
    RETRY,
    LOGGING
}`}</pre>
          </div>
        </div>

        {/* 마무리 섹션 */}
        <div className="card bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🎯 디자인 패턴 선택 가이드</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">🏗️ 구조적 문제 해결</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><strong>MVC 패턴</strong>: 기본 아키텍처 구성</li>
                <li><strong>Repository 패턴</strong>: 데이터 접근 추상화</li>
                <li><strong>DTO 패턴</strong>: 계층 간 데이터 전송</li>
                <li><strong>Facade 패턴</strong>: 복잡한 시스템 단순화</li>
                <li><strong>Proxy 패턴</strong>: AOP 및 트랜잭션 관리</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">⚙️ 행위적 문제 해결</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><strong>Strategy 패턴</strong>: 알고리즘 선택 및 교체</li>
                <li><strong>Observer 패턴</strong>: 이벤트 기반 통신</li>
                <li><strong>Template Method</strong>: 공통 알고리즘 구조</li>
                <li><strong>Decorator 패턴</strong>: 기능의 동적 추가</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">🏭 생성적 문제 해결</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><strong>Factory 패턴</strong>: 객체 생성 로직 캡슐화</li>
                <li><strong>Builder 패턴</strong>: 복잡한 객체 단계별 생성</li>
                <li><strong>Singleton 패턴</strong>: 전역 상태 관리</li>
                <li><strong>DI 패턴</strong>: 의존성 외부 주입</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">💡 Spring Boot 특징</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><strong>Convention over Configuration</strong></li>
                <li><strong>Auto-configuration 활용</strong></li>
                <li><strong>Annotation 기반 설정</strong></li>
                <li><strong>AOP와 패턴 조합</strong></li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
            <p className="text-sm text-gray-600">
              <strong>💡 Tip:</strong>
              실제 프로젝트에서는 여러 패턴을 조합하여 사용하는 것이 일반적입니다.
              각 패턴의 특징을 이해하고 상황에 맞게 적절히 선택하여 사용하세요.
            </p>
          </div>

          {/* 스택오버플로우 관련 이슈들 */}
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">📚 주요 StackOverflow 이슈 해결</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-gray-700 mb-2">🔄 "Spring Boot에서 if-else 대신 Strategy 패턴 사용"</p>
                <p className="text-gray-600 mb-3">→ PaymentStrategy와 NotificationStrategy 예제로 해결</p>

                <p className="font-medium text-gray-700 mb-2">🏭 "DI 환경에서 Factory 패턴이 유용한가?"</p>
                <p className="text-gray-600 mb-3">→ ReportGeneratorFactory와 @Bean 메서드 활용 설명</p>

                <p className="font-medium text-gray-700 mb-2">🎭 "Spring AOP와 Proxy 패턴의 관계"</p>
                <p className="text-gray-600">→ @Transactional, @Aspect 동작 원리 상세 구현</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">👁️ "Spring Event 시스템과 Observer 패턴"</p>
                <p className="text-gray-600 mb-3">→ @EventListener, ApplicationEventPublisher 실전 활용</p>

                <p className="font-medium text-gray-700 mb-2">🏗️ "Spring Boot 프로젝트의 MVC 구조 분석"</p>
                <p className="text-gray-600 mb-3">→ @RestController, @Service, Repository 계층 분리</p>

                <p className="font-medium text-gray-700 mb-2">🔧 "Template Method vs Spring Template 클래스"</p>
                <p className="text-gray-600">→ JdbcTemplate과 커스텀 템플릿 구현 비교</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesignPatterns