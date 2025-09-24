import MermaidDiagram from '../components/MermaidDiagram'

function CorePrinciples() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">⚡ Spring Boot 핵심 원리</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Spring Boot의 핵심 메커니즘과 동작 원리를 깊이 있게 이해하고,
          실제 구현 예시와 모범 사례를 통해 전문성을 높여보세요.
        </p>
      </div>

      <div className="space-y-8">
        {/* 목차 */}
        <div id="table-of-contents" className="card bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">📋 목차</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <a href="#auto-configuration" className="block text-blue-600 hover:text-blue-800">1. 자동 설정 (Auto-Configuration)</a>
              <a href="#ioc-container" className="block text-blue-600 hover:text-blue-800">2. 제어의 역전 (IoC Container)</a>
              <a href="#aop-mechanism" className="block text-blue-600 hover:text-blue-800">3. 관점 지향 프로그래밍 (AOP)</a>
            </div>
            <div className="space-y-2">
              <a href="#starter-dependencies" className="block text-blue-600 hover:text-blue-800">4. 스타터 의존성 (Starter Dependencies)</a>
              <a href="#conditional-configuration" className="block text-blue-600 hover:text-blue-800">5. 조건부 설정 (Conditional Configuration)</a>
              <a href="#actuator-monitoring" className="block text-blue-600 hover:text-blue-800">6. 액추에이터 모니터링 (Actuator)</a>
            </div>
          </div>
        </div>

        {/* 자동 설정 (Auto-Configuration) */}
        <div id="auto-configuration" className="card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">🔧 자동 설정 (Auto-Configuration)</h2>
            <a href="#table-of-contents" className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
              ↑ 목차로 가기
            </a>
          </div>

          {/* 정의 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">📖 정의</h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-gray-700">
                <strong>자동 설정(Auto-Configuration)</strong>은 Spring Boot의 가장 핵심적인 기능으로,
                클래스패스에 있는 JAR 파일들과 정의한 Bean들을 바탕으로 애플리케이션을 자동으로 설정하는 메커니즘입니다.
                개발자가 명시적으로 설정하지 않아도 Spring Boot가 "관례에 의한 설정(Convention over Configuration)"
                원칙에 따라 합리적인 기본값으로 애플리케이션을 구성합니다.
              </p>
            </div>
          </div>

          {/* 동작 원리 다이어그램 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">🎨 동작 원리</h3>
            <MermaidDiagram
              chart={`
                graph TD
                    A["Spring Boot 애플리케이션 시작"] --> B["클래스패스 스캔"]
                    B --> C{"spring.factories<br/>파일 발견?"}
                    C -->|Yes| D["Auto-Configuration<br/>클래스 로딩"]
                    C -->|No| E["기본 설정으로 진행"]

                    D --> F["조건부 어노테이션 평가"]
                    F --> G{"클래스 존재 조건<br/>만족?"}
                    G -->|Yes| H{"Bean 미존재 조건<br/>만족?"}
                    G -->|No| I["해당 설정 스킵"]

                    H -->|Yes| J["Bean 자동 생성<br/>및 등록"]
                    H -->|No| K["사용자 정의<br/>Bean 사용"]

                    J --> L["설정 적용 완료"]
                    K --> L
                    I --> L
                    E --> L

                    L --> M["애플리케이션 컨텍스트<br/>준비 완료"]

                    classDef startEnd fill:#e1f5fe,stroke:#01579b,stroke-width:2px
                    classDef decision fill:#fff3e0,stroke:#ef6c00,stroke-width:2px
                    classDef process fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px

                    class A,M startEnd
                    class C,G,H decision
                    class B,D,F,J,K,L process
              `}
              className="mb-6"
            />
          </div>

          {/* 이점 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">✨ 이점</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-3">🚀 개발 생산성 향상</h4>
                <ul className="text-sm text-green-800 space-y-2">
                  <li>• 반복적인 설정 코드 제거</li>
                  <li>• 빠른 프로토타이핑 가능</li>
                  <li>• 학습 곡선 완화</li>
                  <li>• 표준화된 설정 관리</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-3">🔧 유지보수성</h4>
                <ul className="text-sm text-blue-800 space-y-2">
                  <li>• 일관된 설정 구조</li>
                  <li>• 버전 업그레이드 용이성</li>
                  <li>• 설정 오류 감소</li>
                  <li>• 모범 사례 자동 적용</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 구현 예시 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">💻 구현 예시</h3>

            {/* DataSource 자동 설정 예시 */}
            <div className="mb-6">
              <h4 className="text-md font-medium text-gray-700 mb-3">🗄️ DataSource 자동 설정</h4>
              <div className="code-block">
                <pre>{`// Spring Boot의 DataSource 자동 설정 클래스 (일부)
@Configuration(proxyBeanMethods = false)
@ConditionalOnClass({ DataSource.class, EmbeddedDatabaseType.class })
@ConditionalOnMissingBean(type = "javax.sql.DataSource")
@EnableConfigurationProperties(DataSourceProperties.class)
@Import({ DataSourcePoolMetadataProvidersConfiguration.class,
          DataSourceInitializationConfiguration.class })
public class DataSourceAutoConfiguration {

    @Configuration(proxyBeanMethods = false)
    @Conditional(EmbeddedDatabaseCondition.class)
    @ConditionalOnMissingBean({ DataSource.class, XADataSource.class })
    @Import(EmbeddedDataSourceConfiguration.class)
    protected static class EmbeddedDatabaseConfiguration {
    }

    @Configuration(proxyBeanMethods = false)
    @Conditional(PooledDataSourceCondition.class)
    @ConditionalOnMissingBean({ DataSource.class, XADataSource.class })
    protected static class PooledDataSourceConfiguration {

        @Bean
        @Primary
        DataSource dataSource(DataSourceProperties properties) {
            // HikariCP가 클래스패스에 있으면 HikariDataSource 생성
            return properties.initializeDataSourceBuilder()
                           .type(HikariDataSource.class)
                           .build();
        }
    }
}`}</pre>
              </div>
            </div>

            {/* 사용자 정의 자동 설정 예시 */}
            <div className="mb-6">
              <h4 className="text-md font-medium text-gray-700 mb-3">🛠️ 커스텀 자동 설정 만들기</h4>
              <div className="code-block">
                <pre>{`// 1. 설정 Properties 클래스
@ConfigurationProperties(prefix = "myapp.email")
@Data
public class EmailProperties {
    private String host = "localhost";
    private int port = 587;
    private String username;
    private String password;
    private boolean enabled = true;
}

// 2. 자동 설정 대상 서비스 클래스
public class EmailService {
    private final EmailProperties properties;

    public EmailService(EmailProperties properties) {
        this.properties = properties;
    }

    public void sendEmail(String to, String subject, String body) {
        if (!properties.isEnabled()) {
            System.out.println("Email sending is disabled");
            return;
        }

        // 실제 이메일 전송 로직
        System.out.printf("Sending email to %s via %s:%d%n",
                         to, properties.getHost(), properties.getPort());
    }
}

// 3. 자동 설정 클래스
@Configuration
@ConditionalOnClass(EmailService.class)  // EmailService 클래스가 클래스패스에 있을 때
@ConditionalOnProperty(
    prefix = "myapp.email",
    name = "enabled",
    havingValue = "true",
    matchIfMissing = true     // 속성이 없어도 true로 간주
)
@EnableConfigurationProperties(EmailProperties.class)
public class EmailAutoConfiguration {

    @Bean
    @ConditionalOnMissingBean    // 사용자가 EmailService를 직접 정의하지 않았을 때만
    public EmailService emailService(EmailProperties emailProperties) {
        return new EmailService(emailProperties);
    }
}

// 4. spring.factories 파일에 등록
// META-INF/spring.factories
org.springframework.boot.autoconfigure.EnableAutoConfiguration=\\
com.myapp.autoconfigure.EmailAutoConfiguration

// 5. application.yml에서 설정
myapp:
  email:
    host: smtp.gmail.com
    port: 587
    username: myemail@gmail.com
    password: mypassword
    enabled: true`}</pre>
              </div>
            </div>
          </div>

          {/* 모범 사례 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">🏆 모범 사례</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">✅ 권장사항</h4>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <ul className="text-sm text-green-800 space-y-2">
                    <li>• <strong>@ConditionalOnMissingBean</strong> 활용으로 사용자 설정 우선 적용</li>
                    <li>• <strong>@ConfigurationProperties</strong>로 타입 안전한 설정 관리</li>
                    <li>• 합리적인 기본값 제공</li>
                    <li>• 명확한 조건부 설정 사용</li>
                    <li>• 설정 검증 로직 포함</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">❌ 주의사항</h4>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <ul className="text-sm text-red-800 space-y-2">
                    <li>• 과도한 자동 설정으로 인한 복잡성 증가</li>
                    <li>• 조건부 설정 남용 금지</li>
                    <li>• 순환 의존성 발생 가능성 주의</li>
                    <li>• 디버깅 어려움 고려</li>
                    <li>• 성능 영향 최소화</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 실제 활용 예시 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">🎯 실제 활용 예시</h3>
            <div className="code-block">
              <pre>{`// 자동 설정 동작 확인하기
@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        ConfigurableApplicationContext context =
            SpringApplication.run(MyApplication.class, args);

        // 자동으로 생성된 Bean들 확인
        String[] beanNames = context.getBeanDefinitionNames();
        Arrays.stream(beanNames)
              .filter(name -> name.contains("dataSource") ||
                             name.contains("jpa") ||
                             name.contains("transaction"))
              .forEach(System.out::println);

        // DataSource가 자동으로 설정되었는지 확인
        DataSource dataSource = context.getBean(DataSource.class);
        System.out.println("DataSource: " + dataSource.getClass().getName());
    }
}

// application.yml - 최소한의 설정만으로 동작
spring:
  datasource:
    url: jdbc:h2:mem:testdb    # H2 DataSource 자동 설정
    driver-class-name: org.h2.Driver
  jpa:
    hibernate:
      ddl-auto: create-drop    # JPA 자동 설정
    show-sql: true

# 결과:
# - HikariDataSource 자동 생성
# - JpaTransactionManager 자동 생성
# - EntityManagerFactory 자동 생성
# - 모든 JPA Repository 자동 스캔 및 구현체 생성`}</pre>
            </div>
          </div>

          {/* 추가 참고 자료 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">📚 추가 참고 자료</h3>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">📖 공식 문서</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.auto-configuration" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Spring Boot Auto-Configuration 공식 가이드</a></li>
                    <li>• <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.developing-auto-configuration" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">커스텀 Auto-Configuration 개발 가이드</a></li>
                    <li>• <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/appendix-auto-configuration-classes.html" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Auto-Configuration 클래스 전체 목록</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">🛠️ 디버깅 도구</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <code className="bg-gray-200 px-2 py-1 rounded">--debug</code> 플래그로 자동 설정 리포트 확인</li>
                    <li>• <code className="bg-gray-200 px-2 py-1 rounded">@EnableAutoConfiguration(exclude=...)</code>로 특정 설정 제외</li>
                    <li>• Spring Boot Actuator의 <code className="bg-gray-200 px-2 py-1 rounded">/conditions</code> 엔드포인트 활용</li>
                    <li>• IDE의 Spring Boot 플러그인 사용</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 다른 핵심 원리들은 향후 추가 예정 */}
        <div className="card bg-blue-50 border border-blue-200">
          <div className="text-center py-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">🚧 더 많은 핵심 원리가 추가될 예정입니다!</h3>
            <p className="text-blue-800">
              IoC Container, AOP, 스타터 의존성, 조건부 설정, 액추에이터 등의 내용이 곧 업데이트됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CorePrinciples