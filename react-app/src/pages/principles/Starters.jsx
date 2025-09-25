import { Link } from 'react-router-dom'
import MermaidDiagram from '../../components/MermaidDiagram'

function Starters() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link to="/principles" className="hover:text-blue-600">핵심 원리</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">스타터 의존성</span>
        </div>
      </nav>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">📦 스타터 의존성 (Spring Boot Starters)</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Spring Boot Starter의 구조와 의존성 관리 메커니즘을 통해 효율적인 프로젝트 설정 방법을 학습하세요.
        </p>
      </div>

      <div className="space-y-8">
        {/* 목차 */}
        <div id="table-of-contents" className="card bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">📋 목차</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <a href="#definition" className="block text-blue-600 hover:text-blue-800">1. 정의</a>
              <a href="#structure" className="block text-blue-600 hover:text-blue-800">2. 구조 및 동작 원리</a>
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
              <strong>Spring Boot Starters</strong>는 특정 기능을 위해 필요한 의존성들을 미리 패키징한 의존성 패키지입니다.
              개발자가 복잡한 의존성 관리나 버전 호환성을 신경 쓰지 않고도, 단 하나의 starter 의존성만 추가하면
              관련된 모든 라이브러리와 자동 설정이 함께 제공되어 즉시 사용할 수 있는 환경을 구성해줍니다.
            </p>
            <div className="mt-4 bg-white rounded-lg p-3 border">
              <p className="text-sm text-gray-600">
                <strong>핵심 개념:</strong> "Convention over Configuration" + "Opinionated Defaults"<br/>
                스프링 부트가 제공하는 관례적 설정과 합리적 기본값을 통해 복잡한 설정 없이 바로 개발에 집중할 수 있게 해줍니다.
              </p>
            </div>
          </div>
        </div>

        {/* 구조 및 동작 원리 */}
        <div id="structure" className="card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">🎨 구조 및 동작 원리</h2>
            <a href="#table-of-contents" className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
              ↑ 목차로 가기
            </a>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Starter 의존성 해결 과정</h3>
            <MermaidDiagram
              chart={`
                graph TD
                    A["프로젝트에 Starter 추가<br/>(예: spring-boot-starter-web)"] --> B["Maven/Gradle<br/>의존성 해결"]
                    B --> C["Starter POM/BOM<br/>파일 분석"]
                    C --> D["전이 의존성<br/>자동 다운로드"]

                    D --> E["필수 라이브러리 포함"]
                    D --> F["Auto-Configuration<br/>클래스 포함"]
                    D --> G["기본 설정<br/>프로퍼티 포함"]

                    E --> H["Spring MVC"]
                    E --> I["Jackson JSON"]
                    E --> J["Tomcat 내장 서버"]
                    E --> K["Validation"]

                    F --> L["WebMvcAutoConfiguration"]
                    F --> M["JacksonAutoConfiguration"]
                    F --> N["TomcatAutoConfiguration"]

                    G --> O["기본 포트 8080"]
                    G --> P["JSON 직렬화 설정"]
                    G --> Q["정적 리소스 매핑"]

                    H --> R["즉시 사용 가능한<br/>Spring Boot 애플리케이션"]
                    I --> R
                    J --> R
                    L --> R
                    M --> R
                    N --> R
                    O --> R
                    P --> R
                    Q --> R

                    classDef starter fill:#e3f2fd,stroke:#1976d2,stroke-width:2px
                    classDef dependency fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
                    classDef auto fill:#e8f5e8,stroke:#388e3c,stroke-width:2px
                    classDef result fill:#fff3e0,stroke:#f57c00,stroke-width:2px

                    class A,C starter
                    class B,D,E,H,I,J,K dependency
                    class F,L,M,N,G,O,P,Q auto
                    class R result
              `}
              className="mb-6"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">주요 Starter 종류</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-3">🌐 웹 개발</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• <code>spring-boot-starter-web</code> - Spring MVC, REST API</li>
                  <li>• <code>spring-boot-starter-webflux</code> - Reactive Web</li>
                  <li>• <code>spring-boot-starter-thymeleaf</code> - 템플릿 엔진</li>
                  <li>• <code>spring-boot-starter-websocket</code> - WebSocket</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-3">🗄️ 데이터</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• <code>spring-boot-starter-data-jpa</code> - JPA, Hibernate</li>
                  <li>• <code>spring-boot-starter-data-mongodb</code> - MongoDB</li>
                  <li>• <code>spring-boot-starter-data-redis</code> - Redis</li>
                  <li>• <code>spring-boot-starter-jdbc</code> - JDBC</li>
                </ul>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-3">🔒 보안</h4>
                <ul className="text-sm text-purple-800 space-y-1">
                  <li>• <code>spring-boot-starter-security</code> - Spring Security</li>
                  <li>• <code>spring-boot-starter-oauth2-client</code> - OAuth2</li>
                  <li>• <code>spring-boot-starter-oauth2-resource-server</code></li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-900 mb-3">📊 모니터링</h4>
                <ul className="text-sm text-orange-800 space-y-1">
                  <li>• <code>spring-boot-starter-actuator</code> - 모니터링</li>
                  <li>• <code>spring-boot-starter-test</code> - 테스트</li>
                  <li>• <code>spring-boot-starter-validation</code> - 유효성 검사</li>
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
              <h4 className="font-semibold text-green-900 mb-3">🚀 개발 효율성</h4>
              <ul className="text-sm text-green-800 space-y-2">
                <li>• <strong>즉시 시작</strong> - 복잡한 설정 없이 바로 개발 가능</li>
                <li>• <strong>의존성 간소화</strong> - 하나의 starter로 모든 관련 라이브러리 포함</li>
                <li>• <strong>버전 호환성</strong> - 테스트된 의존성 조합으로 안정성 보장</li>
                <li>• <strong>학습 곡선 완화</strong> - 초보자도 쉽게 접근 가능</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-3">🔧 관리 편의성</h4>
              <ul className="text-sm text-blue-800 space-y-2">
                <li>• <strong>중앙집중 관리</strong> - Spring Boot BOM에서 버전 관리</li>
                <li>• <strong>업그레이드 용이</strong> - Spring Boot 버전만 올리면 모든 의존성 업데이트</li>
                <li>• <strong>충돌 방지</strong> - 검증된 의존성 조합으로 버전 충돌 최소화</li>
                <li>• <strong>표준화</strong> - 팀 내 일관된 의존성 사용</li>
              </ul>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-900 mb-3">⚡ 성능 최적화</h4>
              <ul className="text-sm text-purple-800 space-y-2">
                <li>• <strong>최적화된 기본 설정</strong> - 프로덕션 환경에 적합한 기본값</li>
                <li>• <strong>불필요한 의존성 제거</strong> - 필요한 것만 포함</li>
                <li>• <strong>조건부 로딩</strong> - 필요할 때만 Bean 생성</li>
                <li>• <strong>메모리 효율</strong> - 최적화된 라이브러리 조합</li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-900 mb-3">🛡️ 안정성</h4>
              <ul className="text-sm text-orange-800 space-y-2">
                <li>• <strong>검증된 조합</strong> - Spring 팀이 테스트한 의존성</li>
                <li>• <strong>보안 업데이트</strong> - 자동화된 보안 패치</li>
                <li>• <strong>호환성 보장</strong> - 다른 Spring 프로젝트와의 호환성</li>
                <li>• <strong>장기 지원</strong> - LTS 버전을 통한 안정적 지원</li>
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

          {/* 기본 웹 애플리케이션 Starter */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">🌐 웹 애플리케이션 Starter</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-md font-medium text-gray-700 mb-3">Maven (pom.xml)</h4>
                <div className="code-block">
                  <pre>{`<dependencies>
    <!-- 웹 애플리케이션을 위한 모든 의존성이 포함됨 -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <!-- 포함되는 주요 라이브러리들:
         - spring-web, spring-webmvc
         - spring-boot-starter-tomcat (내장 서버)
         - spring-boot-starter-json (Jackson)
         - spring-boot-starter-validation
    -->
</dependencies>`}</pre>
                </div>
              </div>
              <div>
                <h4 className="text-md font-medium text-gray-700 mb-3">Gradle (build.gradle)</h4>
                <div className="code-block">
                  <pre>{`dependencies {
    // 웹 애플리케이션을 위한 모든 의존성이 포함됨
    implementation 'org.springframework.boot:spring-boot-starter-web'

    // 자동으로 포함되는 의존성들:
    // - Spring MVC 및 REST 기능
    // - 내장 Tomcat 서버
    // - Jackson JSON 라이브러리
    // - Validation 기능
}`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* JPA 데이터 접근 Starter */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">🗄️ JPA 데이터 접근 예시</h3>
            <div className="code-block">
              <pre>{`// 1. Starter 의존성 추가 (Maven)
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
</dependency>

// 2. 엔티티 정의
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(unique = true)
    private String email;

    // constructors, getters, setters...
}

// 3. Repository 인터페이스 (구현체 자동 생성됨)
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByNameContaining(String name);
    Optional<User> findByEmail(String email);
}

// 4. Service 클래스
@Service
@Transactional
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(String name, String email) {
        User user = new User(name, email);
        return userRepository.save(user);  // JPA가 자동으로 SQL 생성
    }

    public List<User> searchUsers(String keyword) {
        return userRepository.findByNameContaining(keyword);
    }
}

// 5. application.yml 설정 (최소한의 설정만 필요)
spring:
  datasource:
    url: jdbc:h2:mem:testdb
    driver-class-name: org.h2.Driver
  jpa:
    hibernate:
      ddl-auto: create-drop
    show-sql: true
  h2:
    console:
      enabled: true

# 결과:
# - EntityManager, TransactionManager 자동 설정
# - Repository 구현체 자동 생성
# - H2 콘솔 자동 활성화
# - SQL 쿼리 자동 생성 및 실행`}</pre>
            </div>
          </div>

          {/* 커스텀 Starter 만들기 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">🛠️ 커스텀 Starter 만들기</h3>
            <div className="code-block">
              <pre>{`// 1. 커스텀 Starter 프로젝트 구조
my-custom-starter/
├── pom.xml
└── src/main/
    ├── java/com/mycompany/starter/
    │   ├── MyServiceAutoConfiguration.java
    │   ├── MyService.java
    │   └── MyServiceProperties.java
    └── resources/META-INF/
        └── spring.factories

// 2. Properties 설정 클래스
@ConfigurationProperties(prefix = "myservice")
@Data
public class MyServiceProperties {
    private boolean enabled = true;
    private String apiUrl = "https://api.example.com";
    private int timeout = 5000;
    private String apiKey;
}

// 3. 서비스 클래스
public class MyService {
    private final MyServiceProperties properties;

    public MyService(MyServiceProperties properties) {
        this.properties = properties;
    }

    public String callApi(String endpoint) {
        if (!properties.isEnabled()) {
            return "Service disabled";
        }

        // API 호출 로직
        return "API Response from: " + properties.getApiUrl() + endpoint;
    }
}

// 4. Auto-Configuration 클래스
@Configuration
@ConditionalOnProperty(prefix = "myservice", name = "enabled", havingValue = "true", matchIfMissing = true)
@EnableConfigurationProperties(MyServiceProperties.class)
public class MyServiceAutoConfiguration {

    @Bean
    @ConditionalOnMissingBean
    public MyService myService(MyServiceProperties properties) {
        return new MyService(properties);
    }
}

// 5. spring.factories 파일
org.springframework.boot.autoconfigure.EnableAutoConfiguration=\\
com.mycompany.starter.MyServiceAutoConfiguration

// 6. pom.xml (Starter 프로젝트)
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-autoconfigure</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-configuration-processor</artifactId>
        <optional>true</optional>
    </dependency>
</dependencies>

// 7. 사용하는 애플리케이션에서
<dependency>
    <groupId>com.mycompany</groupId>
    <artifactId>my-custom-starter</artifactId>
    <version>1.0.0</version>
</dependency>

// 8. application.yml
myservice:
  enabled: true
  api-url: https://custom-api.com
  timeout: 10000
  api-key: your-api-key-here`}</pre>
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
                  <h5 className="font-medium text-green-900">📦 Starter 선택 원칙</h5>
                  <ul className="text-sm text-green-800 space-y-1 mt-1">
                    <li>• 공식 Spring Boot Starter 우선 사용</li>
                    <li>• 최소한의 필요한 Starter만 추가</li>
                    <li>• 특정 기능별로 세분화된 Starter 선택</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-green-900">🔧 의존성 관리</h5>
                  <ul className="text-sm text-green-800 space-y-1 mt-1">
                    <li>• Spring Boot BOM 활용한 버전 관리</li>
                    <li>• 불필요한 의존성 명시적 제외</li>
                    <li>• <code>spring-boot-dependencies</code> 버전 정보 확인</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-green-900">🏗️ 커스텀 Starter 개발</h5>
                  <ul className="text-sm text-green-800 space-y-1 mt-1">
                    <li>• 명명 규칙: <code>xxx-spring-boot-starter</code></li>
                    <li>• Auto-Configuration 분리 설계</li>
                    <li>• Properties 클래스로 설정 외부화</li>
                    <li>• 조건부 Bean 등록 활용</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">❌ 주의사항</h4>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 space-y-3">
                <div>
                  <h5 className="font-medium text-red-900">⚠️ 의존성 충돌</h5>
                  <ul className="text-sm text-red-800 space-y-1 mt-1">
                    <li>• 같은 기능의 여러 Starter 동시 사용 금지</li>
                    <li>• 버전 명시적 지정으로 인한 충돌 주의</li>
                    <li>• Transitive dependency 버전 충돌 확인</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-red-900">🔍 성능 고려사항</h5>
                  <ul className="text-sm text-red-800 space-y-1 mt-1">
                    <li>• 사용하지 않는 Starter 추가로 인한 무거운 애플리케이션</li>
                    <li>• 불필요한 Auto-Configuration 로딩 방지</li>
                    <li>• Classpath scanning 범위 최소화</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-red-900">📋 관리 문제</h5>
                  <ul className="text-sm text-red-800 space-y-1 mt-1">
                    <li>• 의존성 트리 복잡성으로 인한 디버깅 어려움</li>
                    <li>• 암묵적 의존성에 의한 예상치 못한 동작</li>
                    <li>• 버전 업그레이드 시 호환성 검증 필수</li>
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
                <pre>{`// 의존성 제외 예시
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <exclusions>
        <!-- 내장 Tomcat 대신 Jetty 사용 시 -->
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
        </exclusion>
    </exclusions>
</dependency>

<!-- Jetty로 교체 -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jetty</artifactId>
</dependency>

// 의존성 트리 확인 명령어
mvn dependency:tree
gradle dependencies

// 특정 Auto-Configuration 비활성화
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}`}</pre>
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
                  <li>• <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.build-systems.starters" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Spring Boot Starters 공식 가이드</a></li>
                  <li>• <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.developing-auto-configuration" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">커스텀 Starter 개발 가이드</a></li>
                  <li>• <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/appendix-dependency-versions.html" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">의존성 버전 관리 문서</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">🛠️ 개발 도구</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <a href="https://start.spring.io/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Spring Initializr</a> - 프로젝트 생성 도구</li>
                  <li>• <code className="bg-gray-200 px-2 py-1 rounded">mvn dependency:tree</code> - Maven 의존성 트리 확인</li>
                  <li>• <code className="bg-gray-200 px-2 py-1 rounded">gradle dependencies</code> - Gradle 의존성 확인</li>
                  <li>• IDE 플러그인 (IntelliJ Spring Boot, VS Code Spring)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">📋 전체 Starter 목록</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.build-systems.starters" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">공식 Starter 전체 목록</a></li>
                  <li>• <a href="https://github.com/spring-projects/spring-boot/tree/main/spring-boot-project/spring-boot-starters" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">GitHub Starters 소스코드</a></li>
                  <li>• Spring Boot Release Notes - 새로운 Starter 정보</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">🎓 학습 자료</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Spring Boot 의존성 관리 모범 사례</li>
                  <li>• Starter vs Library 선택 가이드</li>
                  <li>• 마이크로서비스에서의 Starter 활용법</li>
                  <li>• 엔터프라이즈 환경에서의 커스텀 Starter 구축</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Starters