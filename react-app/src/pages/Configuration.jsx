function Configuration() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">설정 가이드</h1>
      
      <div className="space-y-8">
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">application.yml 설정</h2>
          <div className="code-block">
            <pre>{`# 기본 설정
spring:
  application:
    name: spring-boot-hub
  
  # 데이터베이스 설정
  datasource:
    url: jdbc:h2:mem:testdb
    driver-class-name: org.h2.Driver
    username: sa
    password: 
  
  # JPA 설정
  jpa:
    hibernate:
      ddl-auto: create-drop
    show-sql: true
    properties:
      hibernate:
        format_sql: true
  
  # H2 콘솔 활성화
  h2:
    console:
      enabled: true
      path: /h2-console

# 서버 설정
server:
  port: 8080
  servlet:
    context-path: /api

# 로깅 설정
logging:
  level:
    com.springhub.example: DEBUG
    org.springframework.web: DEBUG
    org.hibernate.SQL: DEBUG
  pattern:
    console: "%d{yyyy-MM-dd HH:mm:ss} - %msg%n"
    file: "%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n"
  file:
    name: logs/spring-boot-hub.log`}</pre>
          </div>
        </div>
        
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">프로파일별 설정</h2>
          
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900 mb-2">application-dev.yml (개발환경)</h3>
            <div className="code-block">
              <pre>{`spring:
  datasource:
    url: jdbc:h2:mem:devdb
    username: dev
    password: dev123
  
  jpa:
    hibernate:
      ddl-auto: create-drop
    show-sql: true

logging:
  level:
    root: INFO
    com.springhub.example: DEBUG

server:
  port: 8080`}</pre>
            </div>
          </div>
          
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900 mb-2">application-prod.yml (운영환경)</h3>
            <div className="code-block">
              <pre>{`spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/springhub
    username: \${DB_USERNAME}
    password: \${DB_PASSWORD}
    driver-class-name: org.postgresql.Driver
  
  jpa:
    hibernate:
      ddl-auto: validate
    show-sql: false
    properties:
      hibernate:
        dialect: org.hibernate.dialect.PostgreSQLDialect

logging:
  level:
    root: WARN
    com.springhub.example: INFO
  file:
    name: logs/spring-boot-hub-prod.log

server:
  port: 8080
  ssl:
    enabled: true
    key-store: classpath:keystore.p12
    key-store-password: \${SSL_PASSWORD}`}</pre>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">커스텀 설정 클래스</h2>
          <div className="code-block">
            <pre>{`@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/h2-console/**").permitAll()
                .anyRequest().authenticated()
            )
            .oauth2Login(oauth2 -> oauth2
                .loginPage("/login")
                .defaultSuccessUrl("/dashboard")
            )
            .logout(logout -> logout
                .logoutSuccessUrl("/login?logout")
                .invalidateHttpSession(true)
            )
            .csrf(csrf -> csrf
                .ignoringRequestMatchers("/h2-console/**")
                .ignoringRequestMatchers("/api/**")
            )
            .headers(headers -> headers
                .frameOptions().disable()
            );
        
        return http.build();
    }
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

@Configuration
@EnableJpaRepositories(basePackages = "com.springhub.example.repository")
public class DatabaseConfig {
    
    @Bean
    @Primary
    public DataSource primaryDataSource() {
        return DataSourceBuilder.create()
            .driverClassName("org.h2.Driver")
            .url("jdbc:h2:mem:testdb")
            .username("sa")
            .password("")
            .build();
    }
    
    @Bean
    public JpaTransactionManager transactionManager(EntityManagerFactory emf) {
        return new JpaTransactionManager(emf);
    }
}`}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Configuration