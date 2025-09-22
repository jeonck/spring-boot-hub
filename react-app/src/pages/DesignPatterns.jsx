function DesignPatterns() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">디자인 패턴</h1>
      
      <div className="space-y-8">
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">MVC 아키텍처 패턴</h2>
          <p className="text-gray-600 mb-4">
            Spring Boot에서 사용되는 가장 기본적인 MVC 아키텍처 구조입니다.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded">
              <h3 className="font-semibold text-blue-900 mb-2">Controller 층</h3>
              <p className="text-blue-700 text-sm">사용자 요청 처리 및 응답 반환</p>
            </div>
            <div className="p-4 bg-green-50 border border-green-200 rounded">
              <h3 className="font-semibold text-green-900 mb-2">Service 층</h3>
              <p className="text-green-700 text-sm">비지니스 로직 및 데이터 처리</p>
            </div>
            <div className="p-4 bg-purple-50 border border-purple-200 rounded">
              <h3 className="font-semibold text-purple-900 mb-2">Repository 층</h3>
              <p className="text-purple-700 text-sm">데이터베이스 연동 및 데이터 접근</p>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">의존성 주입 (Dependency Injection)</h2>
          <div className="code-block">
            <pre>{`// Constructor Injection (추천)
@Service
public class UserService {
    
    private final UserRepository userRepository;
    private final EmailService emailService;
    
    public UserService(UserRepository userRepository, EmailService emailService) {
        this.userRepository = userRepository;
        this.emailService = emailService;
    }
    
    // 비지니스 로직...
}

// Field Injection (권장하지 않음)
@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private EmailService emailService;
    
    // 비지니스 로직...
}`}</pre>
          </div>
        </div>
        
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Repository 패턴</h2>
          <div className="code-block">
            <pre>{`// JPA Repository 인터페이스
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    List<User> findByEmail(String email);
    
    List<User> findByNameContaining(String name);
    
    @Query("SELECT u FROM User u WHERE u.active = true")
    List<User> findActiveUsers();
    
    @Query(value = "SELECT * FROM users WHERE created_at > :date", nativeQuery = true)
    List<User> findUsersCreatedAfter(@Param("date") LocalDateTime date);
}

// Custom Repository 구현
@Repository
public class CustomUserRepositoryImpl implements CustomUserRepository {
    
    @PersistenceContext
    private EntityManager entityManager;
    
    @Override
    public List<User> findByCustomCriteria(String criteria) {
        // 커스텀 쿼리 로직
        return entityManager.createQuery("...", User.class).getResultList();
    }
}`}</pre>
          </div>
        </div>
        
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">DTO 패턴</h2>
          <div className="code-block">
            <pre>{`// Request DTO
public class CreateUserRequest {
    
    @NotBlank(message = "이름이 필수입니다")
    private String name;
    
    @Email(message = "유효한 이메일 주소를 입력해주세요")
    private String email;
    
    @Size(min = 8, message = "비밀번호는 8자 이상이어야 합니다")
    private String password;
    
    // getters and setters
}

// Response DTO
public class UserResponse {
    
    private Long id;
    private String name;
    private String email;
    private LocalDateTime createdAt;
    
    // Constructor, getters and setters
    
    public static UserResponse from(User user) {
        return new UserResponse(
            user.getId(),
            user.getName(),
            user.getEmail(),
            user.getCreatedAt()
        );
    }
}`}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesignPatterns