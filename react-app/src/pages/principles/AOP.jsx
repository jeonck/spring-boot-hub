import { Link } from 'react-router-dom'
import MermaidDiagram from '../../components/MermaidDiagram'

function AOP() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link to="/principles" className="hover:text-blue-600">핵심 원리</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">AOP</span>
        </div>
      </nav>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">🎯 관점 지향 프로그래밍 (AOP)</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Spring AOP를 통한 횡단 관심사 분리와 관점 지향 프로그래밍의 핵심 개념을 학습하세요.
        </p>
      </div>

      <div className="space-y-8">
        {/* 목차 */}
        <div id="table-of-contents" className="card bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">📋 목차</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <a href="#definition" className="block text-blue-600 hover:text-blue-800">1. 정의</a>
              <a href="#working-principle" className="block text-blue-600 hover:text-blue-800">2. 동작 원리</a>
              <a href="#benefits" className="block text-blue-600 hover:text-blue-800">3. 이점</a>
            </div>
            <div className="space-y-2">
              <a href="#implementation" className="block text-blue-600 hover:text-blue-800">4. 구현 예시</a>
              <a href="#best-practices" className="block text-blue-600 hover:text-blue-800">5. 모범 사례</a>
              <a href="#references" className="block text-blue-600 hover:text-blue-800">6. 추가 참고 자료</a>
            </div>
          </div>
        </div>

        {/* 정의 */}
        <div id="definition" className="card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">📖 정의</h2>
            <a href="#table-of-contents" className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
              ↑ 목차로 가기
            </a>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-gray-700">
              <strong>AOP(Aspect-Oriented Programming)</strong>는 횡단 관심사(Cross-cutting Concerns)를 분리하여
              코드의 모듈성을 높이는 프로그래밍 패러다임입니다. Spring AOP는 런타임에 프록시 기반으로 동작하며,
              핵심 비즈니스 로직과 부가 기능(로깅, 트랜잭션, 보안 등)을 분리하여 코드의 가독성과 유지보수성을 향상시킵니다.
            </p>
            <div className="mt-4 bg-white rounded-lg p-3 border">
              <p className="text-sm text-gray-600">
                <strong>핵심 개념:</strong><br/>
                • <strong>Aspect</strong>: 횡단 관심사를 모듈화한 것<br/>
                • <strong>Join Point</strong>: 프로그램 실행 중 특정 지점 (메서드 호출, 객체 생성 등)<br/>
                • <strong>Pointcut</strong>: Join Point를 선택하는 표현식<br/>
                • <strong>Advice</strong>: 특정 Join Point에서 실행되는 코드
              </p>
            </div>
          </div>
        </div>

        {/* 동작 원리 */}
        <div id="working-principle" className="card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibent text-gray-900">🎨 동작 원리</h2>
            <a href="#table-of-contents" className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
              ↑ 목차로 가기
            </a>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Spring AOP 프록시 동작 과정</h3>
            <MermaidDiagram
              chart={`
                graph TD
                    A["클라이언트 요청"] --> B["Spring Container"]
                    B --> C{"AOP 적용 대상<br/>메서드 호출?"}

                    C -->|Yes| D["프록시 객체 생성<br/>(JDK Dynamic Proxy<br/>or CGLIB)"]
                    C -->|No| E["실제 객체 직접 호출"]

                    D --> F["Before Advice<br/>실행"]
                    F --> G["실제 메서드<br/>실행"]
                    G --> H{"예외 발생?"}

                    H -->|No| I["After Returning<br/>Advice 실행"]
                    H -->|Yes| J["After Throwing<br/>Advice 실행"]

                    I --> K["After Advice<br/>실행"]
                    J --> K
                    K --> L["Around Advice<br/>후처리"]

                    L --> M["결과 반환"]
                    E --> M

                    classDef client fill:#e3f2fd,stroke:#1976d2,stroke-width:2px
                    classDef proxy fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
                    classDef advice fill:#e8f5e8,stroke:#388e3c,stroke-width:2px
                    classDef result fill:#fff3e0,stroke:#f57c00,stroke-width:2px

                    class A,B client
                    class D,C proxy
                    class F,G,I,J,K,L advice
                    class M,E result
              `}
              className="mb-6"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">주요 AOP 개념</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-3">🎯 Advice 종류</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• <strong>@Before</strong> - 메서드 실행 전</li>
                  <li>• <strong>@After</strong> - 메서드 실행 후 (항상)</li>
                  <li>• <strong>@AfterReturning</strong> - 정상 반환 후</li>
                  <li>• <strong>@AfterThrowing</strong> - 예외 발생 시</li>
                  <li>• <strong>@Around</strong> - 메서드 실행 전후</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-3">📍 Pointcut 표현식</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• <code>execution()</code> - 메서드 실행</li>
                  <li>• <code>within()</code> - 특정 타입 내부</li>
                  <li>• <code>args()</code> - 특정 인수 타입</li>
                  <li>• <code>@annotation()</code> - 특정 어노테이션</li>
                  <li>• <code>bean()</code> - 특정 빈 이름</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 이점 */}
        <div id="benefits" className="card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">✨ 이점</h2>
            <a href="#table-of-contents" className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
              ↑ 목차로 가기
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-3">🔧 코드 품질 향상</h4>
              <ul className="text-sm text-green-800 space-y-2">
                <li>• <strong>관심사 분리</strong> - 핵심 로직과 부가 기능 분리</li>
                <li>• <strong>코드 중복 제거</strong> - 공통 관심사의 중앙 집중화</li>
                <li>• <strong>가독성 향상</strong> - 비즈니스 로직에 집중 가능</li>
                <li>• <strong>재사용성</strong> - Aspect의 다양한 클래스 적용</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-3">🛠️ 유지보수성</h4>
              <ul className="text-sm text-blue-800 space-y-2">
                <li>• <strong>단일 책임 원칙</strong> - 각 클래스의 명확한 역할</li>
                <li>• <strong>개방 폐쇄 원칙</strong> - 기존 코드 변경 없이 기능 추가</li>
                <li>• <strong>느슨한 결합</strong> - 핵심 로직과 부가 기능의 독립성</li>
                <li>• <strong>테스트 용이성</strong> - 각 관심사별 독립적 테스트</li>
              </ul>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-900 mb-3">⚡ 개발 효율성</h4>
              <ul className="text-sm text-purple-800 space-y-2">
                <li>• <strong>선언적 프로그래밍</strong> - 어노테이션 기반 간단한 적용</li>
                <li>• <strong>반복 코드 최소화</strong> - 횡단 관심사의 자동화</li>
                <li>• <strong>동적 적용</strong> - 런타임에 유연한 기능 적용</li>
                <li>• <strong>비침투적</strong> - 기존 코드 수정 없이 기능 추가</li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-900 mb-3">🏢 엔터프라이즈 기능</h4>
              <ul className="text-sm text-orange-800 space-y-2">
                <li>• <strong>트랜잭션 관리</strong> - @Transactional 자동 처리</li>
                <li>• <strong>보안 검증</strong> - 권한 체크 자동화</li>
                <li>• <strong>로깅 및 모니터링</strong> - 실행 시간, 파라미터 추적</li>
                <li>• <strong>캐싱</strong> - @Cacheable 투명한 캐시 처리</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 구현 예시 */}
        <div id="implementation" className="card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">💻 구현 예시</h2>
            <a href="#table-of-contents" className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
              ↑ 목차로 가기
            </a>
          </div>

          {/* 기본 로깅 Aspect */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">📝 로깅 Aspect 구현</h3>
            <div className="code-block">
              <pre>{`// 1. AOP 의존성 추가 (Maven)
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-aop</artifactId>
</dependency>

// 2. Aspect 클래스 정의
@Aspect
@Component
@Slf4j
public class LoggingAspect {

    // 모든 서비스 클래스의 public 메서드에 적용
    @Pointcut("execution(* com.example.service..*(..))")
    public void serviceLayer() {}

    // 메서드 실행 전 로깅
    @Before("serviceLayer()")
    public void logMethodEntry(JoinPoint joinPoint) {
        String methodName = joinPoint.getSignature().getName();
        String className = joinPoint.getTarget().getClass().getSimpleName();
        Object[] args = joinPoint.getArgs();

        log.info("→ {}#{} 시작 - 파라미터: {}",
                className, methodName, Arrays.toString(args));
    }

    // 메서드 정상 완료 후 로깅
    @AfterReturning(pointcut = "serviceLayer()", returning = "result")
    public void logMethodExit(JoinPoint joinPoint, Object result) {
        String methodName = joinPoint.getSignature().getName();
        String className = joinPoint.getTarget().getClass().getSimpleName();

        log.info("← {}#{} 완료 - 반환값: {}",
                className, methodName, result);
    }

    // 예외 발생 시 로깅
    @AfterThrowing(pointcut = "serviceLayer()", throwing = "exception")
    public void logMethodException(JoinPoint joinPoint, Exception exception) {
        String methodName = joinPoint.getSignature().getName();
        String className = joinPoint.getTarget().getClass().getSimpleName();

        log.error("✗ {}#{} 예외 발생: {}",
                className, methodName, exception.getMessage());
    }
}

// 3. 메인 애플리케이션에서 AOP 활성화
@SpringBootApplication
@EnableAspectJAutoProxy  // AOP 활성화 (Spring Boot에서는 자동)
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

// 4. 테스트 대상 서비스
@Service
public class UserService {

    public User createUser(String name, String email) {
        // 비즈니스 로직에 집중 - 로깅은 AOP가 자동 처리
        User user = new User(name, email);

        // 유효성 검증
        if (name == null || name.trim().isEmpty()) {
            throw new IllegalArgumentException("이름은 필수입니다");
        }

        return userRepository.save(user);
    }
}

// 실행 결과 로그:
// INFO → UserService#createUser 시작 - 파라미터: [John Doe, john@example.com]
// INFO ← UserService#createUser 완료 - 반환값: User{id=1, name=John Doe}

// 예외 시 로그:
// INFO → UserService#createUser 시작 - 파라미터: [null, john@example.com]
// ERROR ✗ UserService#createUser 예외 발생: 이름은 필수입니다`}</pre>
            </div>
          </div>

          {/* 실행 시간 측정 Aspect */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">⏱️ 실행 시간 측정 Aspect</h3>
            <div className="code-block">
              <pre>{`// 1. 커스텀 어노테이션 정의
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface TimeLog {
    String value() default "";  // 설명
}

// 2. 시간 측정 Aspect
@Aspect
@Component
@Slf4j
public class PerformanceAspect {

    @Around("@annotation(timeLog)")
    public Object measureExecutionTime(ProceedingJoinPoint joinPoint, TimeLog timeLog)
            throws Throwable {

        long startTime = System.currentTimeMillis();
        String methodName = joinPoint.getSignature().getName();
        String description = timeLog.value().isEmpty() ? methodName : timeLog.value();

        try {
            Object result = joinPoint.proceed();  // 실제 메서드 실행

            long executionTime = System.currentTimeMillis() - startTime;
            log.info("⏱️ [{}] 실행시간: {}ms", description, executionTime);

            // 성능 임계치 검사
            if (executionTime > 1000) {
                log.warn("🐌 [{}] 성능 주의: {}ms (1초 초과)", description, executionTime);
            }

            return result;

        } catch (Exception e) {
            long executionTime = System.currentTimeMillis() - startTime;
            log.error("❌ [{}] 실행시간: {}ms (예외 발생: {})",
                     description, executionTime, e.getMessage());
            throw e;
        }
    }
}

// 3. 사용 예시
@Service
public class DataService {

    @TimeLog("대용량 데이터 처리")
    public List<Data> processLargeDataset(List<RawData> rawData) {
        // 시간이 오래 걸리는 작업
        return rawData.stream()
                     .map(this::transformData)
                     .collect(Collectors.toList());
    }

    @TimeLog
    public Data findDataById(Long id) {
        return dataRepository.findById(id).orElse(null);
    }
}

// 실행 결과:
// INFO ⏱️ [대용량 데이터 처리] 실행시간: 1250ms
// WARN 🐌 [대용량 데이터 처리] 성능 주의: 1250ms (1초 초과)
// INFO ⏱️ [findDataById] 실행시간: 45ms`}</pre>
            </div>
          </div>

          {/* 트랜잭션과 보안 예시 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">🔒 보안 및 트랜잭션 Aspect</h3>
            <div className="code-block">
              <pre>{`// 1. 보안 검증 어노테이션
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface RequireAuth {
    String role() default "USER";
}

// 2. 보안 Aspect
@Aspect
@Component
@Slf4j
public class SecurityAspect {

    @Autowired
    private AuthenticationService authService;

    @Before("@annotation(requireAuth)")
    public void checkAuthentication(JoinPoint joinPoint, RequireAuth requireAuth) {
        String requiredRole = requireAuth.role();
        String currentUser = authService.getCurrentUser();

        if (currentUser == null) {
            log.warn("🚫 인증되지 않은 사용자의 접근 시도: {}",
                    joinPoint.getSignature().getName());
            throw new UnauthorizedException("로그인이 필요합니다");
        }

        if (!authService.hasRole(currentUser, requiredRole)) {
            log.warn("🚫 권한 없음: {} (필요 권한: {})", currentUser, requiredRole);
            throw new ForbiddenException("권한이 부족합니다");
        }

        log.info("✅ 인증 성공: {} (권한: {})", currentUser, requiredRole);
    }
}

// 3. 캐시 Aspect (Spring Cache와 유사)
@Aspect
@Component
public class CacheAspect {

    private final Map<String, Object> cache = new ConcurrentHashMap<>();

    @Around("execution(* com.example.service..find*(..))")
    public Object cacheResult(ProceedingJoinPoint joinPoint) throws Throwable {
        // 캐시 키 생성
        String cacheKey = generateCacheKey(joinPoint);

        // 캐시에서 조회
        if (cache.containsKey(cacheKey)) {
            log.info("💾 캐시 히트: {}", cacheKey);
            return cache.get(cacheKey);
        }

        // 캐시 미스 - 실제 메서드 실행
        Object result = joinPoint.proceed();

        // 결과를 캐시에 저장
        cache.put(cacheKey, result);
        log.info("📝 캐시 저장: {}", cacheKey);

        return result;
    }

    private String generateCacheKey(ProceedingJoinPoint joinPoint) {
        return joinPoint.getSignature().getName() + "_" +
               Arrays.toString(joinPoint.getArgs());
    }
}

// 4. 실제 사용 예시
@Service
@Transactional  // Spring의 트랜잭션 AOP
public class OrderService {

    @RequireAuth(role = "ADMIN")
    public void cancelAllOrders() {
        // 관리자만 실행 가능한 위험한 작업
        orderRepository.deleteAll();
    }

    @RequireAuth(role = "USER")
    @TimeLog("주문 생성")
    public Order createOrder(OrderRequest request) {
        // 일반 사용자도 가능한 주문 생성
        // 트랜잭션, 인증, 시간측정이 모두 자동 적용됨
        Order order = new Order(request);
        return orderRepository.save(order);
    }
}

// 실행 결과:
// INFO ✅ 인증 성공: john@example.com (권한: USER)
// INFO ⏱️ [주문 생성] 실행시간: 234ms
// INFO 트랜잭션 커밋 완료`}</pre>
            </div>
          </div>
        </div>

        {/* 모범 사례 */}
        <div id="best-practices" className="card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">🏆 모범 사례</h2>
            <a href="#table-of-contents" className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
              ↑ 목차로 가기
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">✅ 권장사항</h4>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-3">
                <div>
                  <h5 className="font-medium text-green-900">🎯 Pointcut 설계</h5>
                  <ul className="text-sm text-green-800 space-y-1 mt-1">
                    <li>• 명확하고 구체적인 Pointcut 표현식 사용</li>
                    <li>• 공통 Pointcut을 별도 클래스로 분리</li>
                    <li>• 성능을 고려한 효율적인 표현식 작성</li>
                    <li>• within() 보다는 execution() 선호</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-green-900">📝 Aspect 구현</h5>
                  <ul className="text-sm text-green-800 space-y-1 mt-1">
                    <li>• 단일 책임 원칙에 따른 Aspect 분리</li>
                    <li>• @Order로 Aspect 실행 순서 명시</li>
                    <li>• 예외 처리 및 로깅 포함</li>
                    <li>• 성능에 민감한 부분 주의</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-green-900">🏗️ 아키텍처</h5>
                  <ul className="text-sm text-green-800 space-y-1 mt-1">
                    <li>• 횡단 관심사만 AOP로 구현</li>
                    <li>• 비즈니스 로직은 AOP 사용 금지</li>
                    <li>• 테스트 가능한 구조 설계</li>
                    <li>• 문서화 및 주석 충실</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">❌ 주의사항</h4>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 space-y-3">
                <div>
                  <h5 className="font-medium text-red-900">⚠️ 성능 이슈</h5>
                  <ul className="text-sm text-red-800 space-y-1 mt-1">
                    <li>• 과도한 Pointcut 사용으로 인한 성능 저하</li>
                    <li>• 복잡한 Around Advice의 오버헤드</li>
                    <li>• 프록시 생성 비용 고려</li>
                    <li>• 빈번한 메서드 호출에 AOP 적용 주의</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-red-900">🐛 디버깅 어려움</h5>
                  <ul className="text-sm text-red-800 space-y-1 mt-1">
                    <li>• 런타임 위빙으로 인한 디버깅 복잡성</li>
                    <li>• 스택 트레이스의 프록시 정보 혼재</li>
                    <li>• IDE의 디버깅 도구 제한</li>
                    <li>• 예상치 못한 Aspect 적용</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-red-900">🔄 설계 문제</h5>
                  <ul className="text-sm text-red-800 space-y-1 mt-1">
                    <li>• self-invocation 문제 (같은 클래스 내 메서드 호출)</li>
                    <li>• final 메서드/클래스는 프록시 불가</li>
                    <li>• 의존성 순환 참조 가능성</li>
                    <li>• 과도한 AOP 사용으로 인한 복잡성 증가</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 실제 사용 팁 */}
          <div className="mt-6">
            <h4 className="font-semibold text-gray-800 mb-3">💡 실제 사용 팁</h4>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="code-block">
                <pre>{`// 1. Pointcut 재사용을 위한 공통 클래스
@Component
public class CommonPointcuts {

    @Pointcut("execution(* com.example.service..*(..))")
    public void serviceLayer() {}

    @Pointcut("execution(* com.example.repository..*(..))")
    public void repositoryLayer() {}

    @Pointcut("@annotation(org.springframework.web.bind.annotation.GetMapping)")
    public void getMapping() {}
}

// 2. 다른 Aspect에서 재사용
@Aspect
@Component
public class AuditAspect {

    @AfterReturning("CommonPointcuts.serviceLayer()")
    public void auditServiceCall(JoinPoint joinPoint) {
        // 감사 로그 기록
    }
}

// 3. Aspect 실행 순서 제어
@Aspect
@Component
@Order(1)  // 먼저 실행
public class SecurityAspect { }

@Aspect
@Component
@Order(2)  // 나중에 실행
public class LoggingAspect { }

// 4. 조건부 Aspect 적용
@ConditionalOnProperty(name = "app.aop.logging.enabled", havingValue = "true")
@Aspect
@Component
public class ConditionalLoggingAspect { }

// 5. 프로파일별 Aspect
@Profile("!production")  // 운영 환경 제외
@Aspect
@Component
public class DebugAspect { }`}</pre>
              </div>
            </div>
          </div>
        </div>

        {/* 추가 참고 자료 */}
        <div id="references" className="card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">📚 추가 참고 자료</h2>
            <a href="#table-of-contents" className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
              ↑ 목차로 가기
            </a>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">📖 공식 문서</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <a href="https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#aop" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Spring AOP 공식 가이드</a></li>
                  <li>• <a href="https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#aop-pointcuts" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Pointcut 표현식 문서</a></li>
                  <li>• <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-aop" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Spring Boot AOP 설정</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">🛠️ 개발 도구</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Spring Boot Actuator - <code>/beans</code> 엔드포인트로 프록시 확인</li>
                  <li>• AspectJ Weaver - 컴파일타임 위빙</li>
                  <li>• <code>@EnableAspectJAutoProxy(exposeProxy = true)</code> - Self-invocation 해결</li>
                  <li>• IDE 플러그인: Spring AOP 시각화 도구</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">🎓 심화 학습</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• AspectJ vs Spring AOP 차이점</li>
                  <li>• 컴파일타임 vs 런타임 위빙</li>
                  <li>• JDK Dynamic Proxy vs CGLIB</li>
                  <li>• 마이크로서비스에서의 AOP 활용</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">🔍 디버깅 도구</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <code>logging.level.org.springframework.aop=DEBUG</code></li>
                  <li>• <code>@EnableAspectJAutoProxy(proxyTargetClass = true)</code></li>
                  <li>• Spring Boot DevTools AOP 지원</li>
                  <li>• JConsole을 통한 프록시 객체 모니터링</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AOP