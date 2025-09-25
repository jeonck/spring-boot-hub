import { Link } from 'react-router-dom'
import MermaidDiagram from '../../components/MermaidDiagram'

function Conditional() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link to="/principles" className="hover:text-blue-600">핵심 원리</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">조건부 설정</span>
        </div>
      </nav>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">⚙️ 조건부 설정 (Conditional Configuration)</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Conditional 어노테이션을 활용한 유연한 설정 시스템으로 환경별 맞춤형 애플리케이션을 구성하세요.
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
              <strong>조건부 설정(Conditional Configuration)</strong>은 특정 조건이 만족될 때만 Bean을 생성하거나
              설정을 활성화하는 Spring Boot의 핵심 메커니즘입니다. 이를 통해 환경별 설정, 라이브러리 존재 여부,
              사용자 정의 조건 등에 따라 유연하게 애플리케이션을 구성할 수 있습니다.
            </p>
            <div className="mt-4 bg-white rounded-lg p-3 border">
              <p className="text-sm text-gray-600">
                <strong>핵심 개념:</strong><br/>
                • <strong>@Conditional</strong>: 기본 조건부 어노테이션<br/>
                • <strong>Condition</strong>: 조건 평가 로직을 구현하는 인터페이스<br/>
                • <strong>ConfigurationCondition</strong>: 설정 단계별 조건 평가<br/>
                • <strong>@ConditionalOnXxx</strong>: Spring Boot 제공 조건부 어노테이션들
              </p>
            </div>
          </div>
        </div>

        {/* 동작 원리 */}
        <div id="working-principle" className="card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">🎨 동작 원리</h2>
            <a href="#table-of-contents" className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
              ↑ 목차로 가기
            </a>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">조건부 설정 평가 과정</h3>
            <MermaidDiagram
              chart={`
                graph TD
                    A["Spring Boot 시작"] --> B["Configuration 클래스 스캔"]
                    B --> C["@Conditional 어노테이션 발견"]

                    C --> D["Condition 인터페이스 구현체 실행"]
                    D --> E["ConditionContext 제공"]
                    E --> F["Environment, ClassLoader,<br/>BeanRegistry 등 접근"]

                    F --> G{"조건 평가 결과"}
                    G -->|true| H["Bean 등록 진행"]
                    G -->|false| I["Bean 등록 스킵"]

                    H --> J["ConfigurationCondition<br/>단계별 평가"]
                    J --> K{"PARSE_CONFIGURATION<br/>단계 통과?"}
                    K -->|Yes| L{"REGISTER_BEAN<br/>단계 통과?"}
                    K -->|No| M["Configuration 파싱 스킵"]

                    L -->|Yes| N["Bean 생성 및 등록"]
                    L -->|No| O["Bean 등록만 스킵"]

                    I --> P["조건 미충족으로<br/>기능 비활성화"]
                    M --> P
                    O --> P
                    N --> Q["조건부 설정 완료"]

                    classDef start fill:#e3f2fd,stroke:#1976d2,stroke-width:2px
                    classDef condition fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
                    classDef decision fill:#fff3e0,stroke:#ef6c00,stroke-width:2px
                    classDef result fill:#e8f5e8,stroke:#388e3c,stroke-width:2px

                    class A,B start
                    class C,D,E,F,J condition
                    class G,K,L decision
                    class N,Q,P result
              `}
              className="mb-6"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">주요 Conditional 어노테이션</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-3">🏗️ 클래스 & Bean 조건</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• <code>@ConditionalOnClass</code> - 클래스 존재 시</li>
                  <li>• <code>@ConditionalOnMissingClass</code> - 클래스 부재 시</li>
                  <li>• <code>@ConditionalOnBean</code> - Bean 존재 시</li>
                  <li>• <code>@ConditionalOnMissingBean</code> - Bean 부재 시</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-3">⚙️ 속성 & 환경 조건</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• <code>@ConditionalOnProperty</code> - 속성값 조건</li>
                  <li>• <code>@Profile</code> - 프로파일 조건</li>
                  <li>• <code>@ConditionalOnExpression</code> - SpEL 표현식</li>
                  <li>• <code>@ConditionalOnJava</code> - Java 버전</li>
                </ul>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-3">🌐 웹 & 리소스 조건</h4>
                <ul className="text-sm text-purple-800 space-y-1">
                  <li>• <code>@ConditionalOnWebApplication</code> - 웹 애플리케이션</li>
                  <li>• <code>@ConditionalOnNotWebApplication</code> - 비웹 애플리케이션</li>
                  <li>• <code>@ConditionalOnResource</code> - 리소스 존재</li>
                  <li>• <code>@ConditionalOnJndi</code> - JNDI 사용 가능</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-orange-900 mb-3">🛢️ 기타 조건</h4>
                <ul className="text-sm text-orange-800 space-y-1">
                  <li>• <code>@ConditionalOnSingleCandidate</code> - 단일 후보</li>
                  <li>• <code>@ConditionalOnCloudPlatform</code> - 클라우드 플랫폼</li>
                  <li>• 커스텀 Condition 구현 가능</li>
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
              <h4 className="font-semibold text-green-900 mb-3">🔧 환경별 유연성</h4>
              <ul className="text-sm text-green-800 space-y-2">
                <li>• <strong>환경별 설정</strong> - 개발/테스트/운영 환경 자동 구성</li>
                <li>• <strong>기능 토글</strong> - 속성 값으로 기능 on/off</li>
                <li>• <strong>라이브러리 호환</strong> - 클래스패스 기반 자동 설정</li>
                <li>• <strong>점진적 배포</strong> - Feature Flag 패턴 구현</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-3">🏗️ 아키텍처 유연성</h4>
              <ul className="text-sm text-blue-800 space-y-2">
                <li>• <strong>모듈형 설계</strong> - 조건별 독립적 컴포넌트</li>
                <li>• <strong>의존성 관리</strong> - 선택적 의존성 활성화</li>
                <li>• <strong>설정 분리</strong> - 환경별 설정 클래스 분리</li>
                <li>• <strong>확장성</strong> - 새로운 조건 쉽게 추가</li>
              </ul>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-900 mb-3">⚡ 성능 최적화</h4>
              <ul className="text-sm text-purple-800 space-y-2">
                <li>• <strong>지연 로딩</strong> - 필요시에만 Bean 생성</li>
                <li>• <strong>메모리 절약</strong> - 불필요한 객체 생성 방지</li>
                <li>• <strong>시작 시간 단축</strong> - 조건 미충족 Bean 생성 스킵</li>
                <li>• <strong>리소스 효율</strong> - 사용하지 않는 기능 비활성화</li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-900 mb-3">🛡️ 안정성</h4>
              <ul className="text-sm text-orange-800 space-y-2">
                <li>• <strong>충돌 방지</strong> - 조건부 Bean 등록으로 충돌 회피</li>
                <li>• <strong>우아한 실패</strong> - 조건 미충족시 대안 제공</li>
                <li>• <strong>환경 격리</strong> - 환경별 독립적 동작</li>
                <li>• <strong>테스트 용이</strong> - 테스트 환경별 설정 분리</li>
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

          {/* 기본 조건부 설정 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">🔧 기본 조건부 설정</h3>
            <div className="code-block">
              <pre>{`// 1. 속성 기반 조건부 설정
@Configuration
public class CacheConfiguration {

    // Redis가 활성화된 경우만 Redis 캐시 매니저 생성
    @Bean
    @ConditionalOnProperty(
        prefix = "app.cache",
        name = "type",
        havingValue = "redis",
        matchIfMissing = false  // 속성이 없으면 false
    )
    public CacheManager redisCacheManager() {
        return RedisCacheManager.builder()
                               .connectionFactory(redisConnectionFactory())
                               .build();
    }

    // 인메모리 캐시를 기본값으로 사용
    @Bean
    @ConditionalOnProperty(
        prefix = "app.cache",
        name = "type",
        havingValue = "memory",
        matchIfMissing = true   // 속성이 없으면 true (기본값)
    )
    public CacheManager memoryCacheManager() {
        return new ConcurrentMapCacheManager("default");
    }

    // Redis 라이브러리가 클래스패스에 있을 때만 연결 팩토리 생성
    @Bean
    @ConditionalOnClass(RedisConnectionFactory.class)
    @ConditionalOnProperty(prefix = "app.cache", name = "type", havingValue = "redis")
    public RedisConnectionFactory redisConnectionFactory() {
        LettuceConnectionFactory factory = new LettuceConnectionFactory();
        factory.setHostName("localhost");
        factory.setPort(6379);
        return factory;
    }
}

// application.yml 설정 예시
app:
  cache:
    type: redis    # redis, memory 중 선택
    redis:
      host: localhost
      port: 6379

# 개발 환경 (application-dev.yml)
app:
  cache:
    type: memory   # 개발시 간단한 메모리 캐시 사용

# 운영 환경 (application-prod.yml)
app:
  cache:
    type: redis    # 운영시 Redis 캐시 사용`}</pre>
            </div>
          </div>

          {/* 프로파일 기반 설정 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">🏷️ 프로파일 기반 조건부 설정</h3>
            <div className="code-block">
              <pre>{`// 1. 환경별 데이터베이스 설정
@Configuration
public class DatabaseConfiguration {

    // 개발 환경: H2 인메모리 데이터베이스
    @Profile("dev")
    @Configuration
    static class DevDatabaseConfig {

        @Bean
        @Primary
        public DataSource devDataSource() {
            return new EmbeddedDatabaseBuilder()
                    .setType(EmbeddedDatabaseType.H2)
                    .addScript("classpath:schema.sql")
                    .addScript("classpath:data.sql")
                    .build();
        }

        @Bean
        public PlatformTransactionManager devTransactionManager(DataSource dataSource) {
            return new DataSourceTransactionManager(dataSource);
        }
    }

    // 테스트 환경: 테스트 전용 설정
    @Profile("test")
    @Configuration
    static class TestDatabaseConfig {

        @Bean
        @Primary
        public DataSource testDataSource() {
            HikariConfig config = new HikariConfig();
            config.setJdbcUrl("jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1");
            config.setUsername("sa");
            config.setPassword("");
            return new HikariDataSource(config);
        }
    }

    // 운영 환경: PostgreSQL 데이터베이스
    @Profile("prod")
    @Configuration
    static class ProdDatabaseConfig {

        @Bean
        @Primary
        @ConditionalOnProperty("spring.datasource.url")
        public DataSource prodDataSource() {
            HikariConfig config = new HikariConfig();
            config.setJdbcUrl(environment.getProperty("spring.datasource.url"));
            config.setUsername(environment.getProperty("spring.datasource.username"));
            config.setPassword(environment.getProperty("spring.datasource.password"));
            config.setMaximumPoolSize(20);
            return new HikariDataSource(config);
        }
    }
}

// 2. 로깅 설정
@Configuration
public class LoggingConfiguration {

    // 로컬 개발시: 콘솔 로깅
    @Profile({"dev", "test"})
    @Bean
    public LoggingAspect developmentLoggingAspect() {
        return new ConsoleLoggingAspect();
    }

    // 운영환경: 파일 + 원격 로깅
    @Profile("prod")
    @Bean
    @ConditionalOnProperty(
        prefix = "app.logging",
        name = "remote.enabled",
        havingValue = "true"
    )
    public LoggingAspect productionLoggingAspect() {
        return new RemoteLoggingAspect();
    }
}

// 3. 보안 설정
@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

    // 개발환경: 보안 비활성화
    @Profile("dev")
    @Configuration
    static class DevSecurityConfig {

        @Bean
        public SecurityFilterChain devFilterChain(HttpSecurity http) throws Exception {
            return http.csrf().disable()
                      .authorizeHttpRequests(auth -> auth.anyRequest().permitAll())
                      .build();
        }
    }

    // 운영환경: 강화된 보안
    @Profile("prod")
    @Configuration
    static class ProdSecurityConfig {

        @Bean
        public SecurityFilterChain prodFilterChain(HttpSecurity http) throws Exception {
            return http.authorizeHttpRequests(auth ->
                        auth.requestMatchers("/public/**").permitAll()
                           .anyRequest().authenticated())
                      .oauth2Login()
                      .sessionManagement(session ->
                        session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                      .build();
        }
    }
}`}</pre>
            </div>
          </div>

          {/* 커스텀 조건 구현 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">🛠️ 커스텀 조건 구현</h3>
            <div className="code-block">
              <pre>{`// 1. 커스텀 Condition 인터페이스 구현
public class DatabaseAvailableCondition implements Condition {

    @Override
    public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {
        Environment env = context.getEnvironment();
        String url = env.getProperty("spring.datasource.url");

        if (url == null) {
            return false;
        }

        // 데이터베이스 연결 테스트
        try (Connection connection = DriverManager.getConnection(url,
                env.getProperty("spring.datasource.username"),
                env.getProperty("spring.datasource.password"))) {

            return connection.isValid(5); // 5초 타임아웃

        } catch (SQLException e) {
            return false;
        }
    }
}

// 2. 커스텀 조건 어노테이션 생성
@Target({ElementType.TYPE, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Conditional(DatabaseAvailableCondition.class)
public @interface ConditionalOnDatabaseAvailable {
}

// 3. 복합 조건 구현
public class CloudPlatformCondition implements Condition {

    @Override
    public boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata) {
        Environment env = context.getEnvironment();

        // AWS 환경 감지
        boolean isAWS = env.getProperty("AWS_REGION") != null ||
                       env.getProperty("aws.region") != null;

        // Google Cloud 환경 감지
        boolean isGCP = env.getProperty("GOOGLE_CLOUD_PROJECT") != null ||
                       env.getProperty("gcp.project") != null;

        // Azure 환경 감지
        boolean isAzure = env.getProperty("AZURE_SUBSCRIPTION_ID") != null ||
                         env.getProperty("azure.subscription") != null;

        return isAWS || isGCP || isAzure;
    }
}

// 4. 조건 조합 사용
@Configuration
@ConditionalOnCloudPlatform(CloudPlatform.CLOUD_FOUNDRY)
public class CloudConfiguration {

    @Bean
    @ConditionalOnDatabaseAvailable
    @ConditionalOnProperty("app.features.advanced-monitoring")
    public MonitoringService cloudMonitoringService() {
        return new CloudMonitoringService();
    }

    @Bean
    @ConditionalOnMissingBean(MonitoringService.class)  // 위 Bean이 없으면 기본값
    public MonitoringService basicMonitoringService() {
        return new BasicMonitoringService();
    }
}

// 5. SpEL 기반 복잡한 조건
@Configuration
public class AdvancedConfiguration {

    // SpEL 표현식으로 복잡한 조건 표현
    @Bean
    @ConditionalOnExpression(
        "#{environment['app.mode'] == 'advanced' and " +
        "environment['app.features.ai'] == 'true' and " +
        "T(java.lang.Runtime).getRuntime().maxMemory() > 1024 * 1024 * 1024}"
    )
    public AIService aiService() {
        return new AIService();
    }

    // Java 버전 기반 조건
    @Bean
    @ConditionalOnJava(JavaVersion.SEVENTEEN)
    public ModernJavaFeatureService modernJavaService() {
        return new ModernJavaFeatureService();
    }

    // 리소스 존재 기반 조건
    @Bean
    @ConditionalOnResource("classpath:config/feature-flags.yml")
    public FeatureFlagService featureFlagService() {
        return new YamlFeatureFlagService();
    }
}

// 6. 실행 시간 조건부 Bean 생성
@Component
public class RuntimeConditionalService {

    @EventListener
    @ConditionalOnProperty("app.dynamic.config.enabled")
    public void onApplicationStarted(ApplicationStartedEvent event) {
        // 런타임에 외부 API 호출하여 기능 활성화 여부 결정
        boolean featureEnabled = checkExternalAPI();

        if (featureEnabled) {
            // 동적으로 Bean 등록
            ConfigurableApplicationContext context = event.getApplicationContext();
            GenericBeanDefinition beanDefinition = new GenericBeanDefinition();
            beanDefinition.setBeanClass(DynamicFeatureService.class);

            DefaultListableBeanFactory beanFactory =
                (DefaultListableBeanFactory) context.getBeanFactory();
            beanFactory.registerBeanDefinition("dynamicFeatureService", beanDefinition);
        }
    }

    private boolean checkExternalAPI() {
        // 외부 API 호출 로직
        return true;
    }
}`}</pre>
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
                  <h5 className="font-medium text-green-900">🎯 조건 설계</h5>
                  <ul className="text-sm text-green-800 space-y-1 mt-1">
                    <li>• 단순하고 명확한 조건 표현식 사용</li>
                    <li>• 기본값 제공으로 graceful fallback 구현</li>
                    <li>• <code>matchIfMissing</code> 속성 적절히 활용</li>
                    <li>• 조건 평가 순서 고려한 설계</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-green-900">📝 설정 관리</h5>
                  <ul className="text-sm text-green-800 space-y-1 mt-1">
                    <li>• 환경별 설정 파일 명확히 분리</li>
                    <li>• Properties 클래스로 타입 안전성 확보</li>
                    <li>• 설정 검증 로직 포함</li>
                    <li>• 문서화된 설정 속성 제공</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-green-900">🏗️ 아키텍처</h5>
                  <ul className="text-sm text-green-800 space-y-1 mt-1">
                    <li>• 조건부 설정 클래스를 별도 패키지로 분리</li>
                    <li>• 공통 조건을 재사용 가능한 컴포넌트로 추상화</li>
                    <li>• 테스트 프로파일에서 조건 동작 검증</li>
                    <li>• Auto-Configuration과 조건부 설정 조화</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">❌ 주의사항</h4>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 space-y-3">
                <div>
                  <h5 className="font-medium text-red-900">⚠️ 복잡성 관리</h5>
                  <ul className="text-sm text-red-800 space-y-1 mt-1">
                    <li>• 과도하게 복잡한 조건 표현식 지양</li>
                    <li>• 중첩된 조건부 설정으로 인한 혼란 방지</li>
                    <li>• SpEL 표현식의 성능 영향 고려</li>
                    <li>• 조건 평가 실패 시 적절한 오류 메시지 제공</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-red-900">🐛 디버깅 이슈</h5>
                  <ul className="text-sm text-red-800 space-y-1 mt-1">
                    <li>• 조건 미충족으로 인한 Bean 누락 추적 어려움</li>
                    <li>• 런타임 환경과 테스트 환경의 조건 차이</li>
                    <li>• 조건 평가 순서에 따른 예상치 못한 동작</li>
                    <li>• IDE에서 조건부 Bean 의존성 추적 한계</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-red-900">🔄 운영 문제</h5>
                  <ul className="text-sm text-red-800 space-y-1 mt-1">
                    <li>• 환경별 설정 불일치로 인한 배포 실패</li>
                    <li>• 동적 조건 변경 시 애플리케이션 재시작 필요</li>
                    <li>• 외부 시스템 의존 조건의 안정성 이슈</li>
                    <li>• 조건 충족 여부 모니터링 부족</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 디버깅 및 모니터링 팁 */}
          <div className="mt-6">
            <h4 className="font-semibold text-gray-800 mb-3">💡 디버깅 및 모니터링</h4>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="code-block">
                <pre>{`// 1. 조건 평가 결과 로깅
@Component
@Slf4j
public class ConditionalEvaluationLogger {

    @EventListener
    public void onApplicationStarted(ApplicationStartedEvent event) {
        ConditionEvaluationReport report = ConditionEvaluationReport
            .get(event.getApplicationContext().getBeanFactory());

        // 조건 평가 결과 출력
        report.getConditionAndOutcomesBySource().forEach((source, conditions) -> {
            conditions.forEach(conditionAndOutcome -> {
                log.info("조건 평가: {} -> {}",
                    source, conditionAndOutcome.getOutcome());
            });
        });
    }
}

// 2. application.yml 디버그 설정
logging:
  level:
    org.springframework.boot.autoconfigure: DEBUG
    org.springframework.context.annotation: DEBUG

# 3. Actuator를 통한 조건 확인
management:
  endpoints:
    web:
      exposure:
        include: conditions
  endpoint:
    conditions:
      enabled: true

# 4. JVM 시스템 속성으로 조건 제어
java -jar myapp.jar \\
  -Dspring.profiles.active=prod \\
  -Dapp.cache.type=redis \\
  -Dapp.features.advanced=true

# 5. 환경 변수로 조건 제어
export SPRING_PROFILES_ACTIVE=prod
export APP_CACHE_TYPE=redis
export APP_FEATURES_ADVANCED=true`}</pre>
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
                  <li>• <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.condition-annotations" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Spring Boot Condition Annotations</a></li>
                  <li>• <a href="https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-java-conditional" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Spring Framework @Conditional</a></li>
                  <li>• <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.profiles" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Spring Profiles 가이드</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">🛠️ 개발 도구</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Spring Boot Actuator - <code>/conditions</code> 엔드포인트</li>
                  <li>• <code>--debug</code> 플래그 - 조건 평가 상세 로그</li>
                  <li>• <code>ConditionEvaluationReport</code> - 프로그래밍 방식 조건 확인</li>
                  <li>• IDE 플러그인: 조건부 Bean 시각화</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">🎓 심화 학습</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Feature Flag 패턴과 조건부 설정</li>
                  <li>• 마이크로서비스 환경에서의 조건부 설정</li>
                  <li>• Cloud Config와 조건부 설정 연동</li>
                  <li>• 컨테이너 환경에서의 동적 설정 관리</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">🔧 실무 활용</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• A/B 테스트를 위한 조건부 설정</li>
                  <li>• 멀티 테넌시 환경에서의 조건부 설정</li>
                  <li>• 레거시 시스템 마이그레이션 시 조건부 설정</li>
                  <li>• 성능 최적화를 위한 조건부 Bean 로딩</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Conditional