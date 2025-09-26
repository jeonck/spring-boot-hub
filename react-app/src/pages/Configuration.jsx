function Configuration() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">📋 빌드 & 설정 가이드</h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Gradle, Maven을 사용한 Spring Boot 프로젝트 설정부터 Kotlin 언어 지원,
          환경별 설정 관리까지 완벽한 가이드를 제공합니다.
        </p>
      </div>

      {/* 목차 */}
      <div id="table-of-contents" className="card bg-gray-50 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">📋 가이드 목차</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <a href="#gradle-setup" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-white transition-colors">
            <span className="text-2xl">🔧</span>
            <span className="font-medium text-gray-900">Gradle 설정</span>
          </a>
          <a href="#maven-setup" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-white transition-colors">
            <span className="text-2xl">📦</span>
            <span className="font-medium text-gray-900">Maven 설정</span>
          </a>
          <a href="#kotlin-setup" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-white transition-colors">
            <span className="text-2xl">🎆</span>
            <span className="font-medium text-gray-900">Kotlin 설정</span>
          </a>
          <a href="#application-config" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-white transition-colors">
            <span className="text-2xl">⚙️</span>
            <span className="font-medium text-gray-900">환경별 설정</span>
          </a>
        </div>
      </div>

      <div className="space-y-12">
        {/* Gradle 설정 섹션 */}
        <div id="gradle-setup" className="card">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">🔧</span>
              <h2 className="text-2xl font-semibold text-gray-900">Gradle 설정</h2>
            </div>
            <a href="#table-of-contents" className="text-sm text-blue-600 hover:text-blue-800">↑ 목차로 가기</a>
          </div>

          <div className="space-y-6">
            {/* 기본 Gradle 설정 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">기본 Spring Boot 프로젝트</h3>
              <p className="text-gray-600 mb-4">모던 빌드 도구인 Gradle을 사용한 Spring Boot 프로젝트 설정입니다.</p>

              <div className="mb-4">
                <h4 className="text-md font-medium text-gray-900 mb-2">build.gradle</h4>
                <div className="code-block">
                  <pre>{`plugins {
    id 'org.springframework.boot' version '3.1.0'
    id 'io.spring.dependency-management' version '1.1.0'
    id 'java'
}

group = 'com.springhub.example'
version = '0.0.1-SNAPSHOT'
java.sourceCompatibility = JavaVersion.VERSION_17

configurations {
    compileOnly {
        extendsFrom annotationProcessor
    }
}

repositories {
    mavenCentral()
}

dependencies {
    // Spring Boot Starters
    implementation 'org.springframework.boot:spring-boot-starter-web'
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    implementation 'org.springframework.boot:spring-boot-starter-validation'
    implementation 'org.springframework.boot:spring-boot-starter-security'
    implementation 'org.springframework.boot:spring-boot-starter-actuator'

    // Database
    runtimeOnly 'com.h2database:h2'
    runtimeOnly 'org.postgresql:postgresql'

    // Development Tools
    developmentOnly 'org.springframework.boot:spring-boot-devtools'

    // Annotation Processing
    compileOnly 'org.projectlombok:lombok'
    annotationProcessor 'org.projectlombok:lombok'

    // Testing
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
    testImplementation 'org.springframework.security:spring-security-test'
    testImplementation 'org.testcontainers:junit-jupiter'
    testImplementation 'org.testcontainers:postgresql'
}

tasks.named('test') {
    useJUnitPlatform()
}

// 커스텀 태스크
tasks.register('bootRunDev') {
    group = 'application'
    description = 'Run the application with dev profile'
    dependsOn 'classes'
    doLast {
        javaexec {
            main = application.mainClass.get()
            classpath = sourceSets.main.runtimeClasspath
            systemProperty 'spring.profiles.active', 'dev'
        }
    }
}`}</pre>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-md font-medium text-gray-900 mb-2">주요 Gradle 명령어</h4>
                <div className="code-block">
                  <pre>{`# 애플리케이션 실행
./gradlew bootRun

# 개발 프로필로 실행
./gradlew bootRunDev

# 빌드 (테스트 포함)
./gradlew build

# 테스트 실행
./gradlew test

# JAR 파일 생성
./gradlew bootJar

# 의존성 확인
./gradlew dependencies

# 프로젝트 정보 확인
./gradlew projects`}</pre>
                </div>
              </div>
            </div>

            {/* 멀티 모듈 Gradle */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">멀티 모듈 프로젝트 설정</h3>

              <div className="mb-4">
                <h4 className="text-md font-medium text-gray-900 mb-2">settings.gradle</h4>
                <div className="code-block">
                  <pre>{`rootProject.name = 'spring-boot-hub'

include 'core'
include 'web'
include 'batch'
include 'common'`}</pre>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-md font-medium text-gray-900 mb-2">루트 build.gradle</h4>
                <div className="code-block">
                  <pre>{`plugins {
    id 'org.springframework.boot' version '3.1.0' apply false
    id 'io.spring.dependency-management' version '1.1.0' apply false
    id 'java'
}

allprojects {
    group = 'com.springhub.example'
    version = '0.0.1-SNAPSHOT'

    repositories {
        mavenCentral()
    }
}

subprojects {
    apply plugin: 'java'
    apply plugin: 'org.springframework.boot'
    apply plugin: 'io.spring.dependency-management'

    java.sourceCompatibility = JavaVersion.VERSION_17

    dependencies {
        implementation 'org.springframework.boot:spring-boot-starter'
        testImplementation 'org.springframework.boot:spring-boot-starter-test'
    }
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Maven 설정 섹션 */}
        <div id="maven-setup" className="card">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">📦</span>
              <h2 className="text-2xl font-semibold text-gray-900">Maven 설정</h2>
            </div>
            <a href="#table-of-contents" className="text-sm text-blue-600 hover:text-blue-800">↑ 목차로 가기</a>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">기본 Spring Boot 프로젝트</h3>
              <p className="text-gray-600 mb-4">전통적이고 안정적인 빌드 도구인 Maven을 사용한 Spring Boot 프로젝트 설정입니다.</p>

              <div className="mb-4">
                <h4 className="text-md font-medium text-gray-900 mb-2">pom.xml</h4>
                <div className="code-block">
                  <pre>{`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         https://maven.apache.org/xsd/maven-4.0.0.xsd">

    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.1.0</version>
        <relativePath/>
    </parent>

    <groupId>com.springhub.example</groupId>
    <artifactId>spring-boot-maven-example</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>spring-boot-maven-example</name>
    <description>Spring Boot Maven Example</description>

    <properties>
        <java.version>17</java.version>
        <testcontainers.version>1.18.0</testcontainers.version>
    </properties>

    <dependencies>
        <!-- Spring Boot Starters -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>

        <!-- Database -->
        <dependency>
            <groupId>com.h2database</groupId>
            <artifactId>h2</artifactId>
            <scope>runtime</scope>
        </dependency>

        <dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
            <scope>runtime</scope>
        </dependency>

        <!-- Development Tools -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>

        <!-- Lombok -->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>

        <!-- Testing -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>org.springframework.security</groupId>
            <artifactId>spring-security-test</artifactId>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>org.testcontainers</groupId>
            <artifactId>junit-jupiter</artifactId>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>org.testcontainers</groupId>
            <artifactId>postgresql</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.testcontainers</groupId>
                <artifactId>testcontainers-bom</artifactId>
                <version>\${testcontainers.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <excludes>
                        <exclude>
                            <groupId>org.projectlombok</groupId>
                            <artifactId>lombok</artifactId>
                        </exclude>
                    </excludes>
                </configuration>
            </plugin>

            <!-- Surefire Plugin for Testing -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <configuration>
                    <includes>
                        <include>**/*Test.java</include>
                        <include>**/*Tests.java</include>
                    </includes>
                </configuration>
            </plugin>

            <!-- Failsafe Plugin for Integration Testing -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-failsafe-plugin</artifactId>
                <configuration>
                    <includes>
                        <include>**/*IT.java</include>
                        <include>**/*IntegrationTest.java</include>
                    </includes>
                </configuration>
                <executions>
                    <execution>
                        <goals>
                            <goal>integration-test</goal>
                            <goal>verify</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>

    <profiles>
        <profile>
            <id>dev</id>
            <properties>
                <spring.profiles.active>dev</spring.profiles.active>
            </properties>
        </profile>

        <profile>
            <id>prod</id>
            <properties>
                <spring.profiles.active>prod</spring.profiles.active>
            </properties>
        </profile>
    </profiles>

</project>`}</pre>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-md font-medium text-gray-900 mb-2">주요 Maven 명령어</h4>
                <div className="code-block">
                  <pre>{`# 애플리케이션 실행
./mvnw spring-boot:run

# 개발 프로필로 실행
./mvnw spring-boot:run -Dspring-boot.run.profiles=dev

# 컴파일
./mvnw compile

# 테스트 실행
./mvnw test

# 통합 테스트 실행
./mvnw integration-test

# 패키징 (JAR 생성)
./mvnw package

# 전체 빌드 (clean + compile + test + package)
./mvnw clean package

# 의존성 확인
./mvnw dependency:tree

# 업데이트 가능한 의존성 확인
./mvnw versions:display-dependency-updates`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kotlin 설정 섹션 */}
        <div id="kotlin-setup" className="card">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">🎆</span>
              <h2 className="text-2xl font-semibold text-gray-900">Kotlin 설정</h2>
            </div>
            <a href="#table-of-contents" className="text-sm text-blue-600 hover:text-blue-800">↑ 목차로 가기</a>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Kotlin + Gradle 설정</h3>
              <p className="text-gray-600 mb-4">현대적이고 간결한 Kotlin 언어로 Spring Boot 애플리케이션을 개발하는 설정입니다.</p>

              <div className="mb-4">
                <h4 className="text-md font-medium text-gray-900 mb-2">build.gradle.kts</h4>
                <div className="code-block">
                  <pre>{`import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    id("org.springframework.boot") version "3.1.0"
    id("io.spring.dependency-management") version "1.1.0"
    kotlin("jvm") version "1.8.21"
    kotlin("plugin.spring") version "1.8.21"
    kotlin("plugin.jpa") version "1.8.21"
    kotlin("kapt") version "1.8.21"
}

group = "com.springhub.example"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_17

configurations {
    compileOnly {
        extendsFrom(configurations.annotationProcessor.get())
    }
}

repositories {
    mavenCentral()
}

dependencies {
    // Spring Boot Starters
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    implementation("org.springframework.boot:spring-boot-starter-validation")
    implementation("org.springframework.boot:spring-boot-starter-security")
    implementation("org.springframework.boot:spring-boot-starter-actuator")

    // Kotlin
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")

    // Coroutines
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-reactor")

    // Database
    runtimeOnly("com.h2database:h2")
    runtimeOnly("org.postgresql:postgresql")

    // Development Tools
    developmentOnly("org.springframework.boot:spring-boot-devtools")

    // Testing
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testImplementation("org.springframework.security:spring-security-test")
    testImplementation("org.jetbrains.kotlinx:kotlinx-coroutines-test")
    testImplementation("io.mockk:mockk:1.13.5")
    testImplementation("com.ninja-squad:springmockk:4.0.2")
}

tasks.withType<KotlinCompile> {
    kotlinOptions {
        freeCompilerArgs = listOf("-Xjsr305=strict")
        jvmTarget = "17"
    }
}

tasks.withType<Test> {
    useJUnitPlatform()
}

// Kotlin 코루틴을 위한 설정
kotlin {
    jvmToolchain(17)
}`}</pre>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-md font-medium text-gray-900 mb-2">Kotlin Spring Boot 애플리케이션 예제</h4>
                <div className="code-block">
                  <pre>{`// Application.kt
@SpringBootApplication
class SpringBootKotlinApplication

fun main(args: Array<String>) {
    runApplication<SpringBootKotlinApplication>(*args)
}

// Controller 예제
@RestController
@RequestMapping("/api/users")
class UserController(
    private val userService: UserService
) {

    @GetMapping
    fun getAllUsers(): ResponseEntity<List<UserDto>> {
        val users = userService.findAllUsers()
        return ResponseEntity.ok(users)
    }

    @GetMapping("/{id}")
    fun getUserById(@PathVariable id: Long): ResponseEntity<UserDto> {
        val user = userService.findUserById(id)
        return ResponseEntity.ok(user)
    }

    @PostMapping
    fun createUser(@Valid @RequestBody userDto: CreateUserDto): ResponseEntity<UserDto> {
        val createdUser = userService.createUser(userDto)
        return ResponseEntity.status(HttpStatus.CREATED).body(createdUser)
    }
}

// Entity 예제
@Entity
@Table(name = "users")
data class User(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(nullable = false, unique = true)
    val email: String,

    @Column(nullable = false)
    val name: String,

    @CreationTimestamp
    val createdAt: LocalDateTime = LocalDateTime.now(),

    @UpdateTimestamp
    val updatedAt: LocalDateTime = LocalDateTime.now()
)

// Data Transfer Objects
data class UserDto(
    val id: Long,
    val email: String,
    val name: String,
    val createdAt: LocalDateTime
)

data class CreateUserDto(
    @field:Email(message = "올바른 이메일 형식이 아닙니다")
    val email: String,

    @field:NotBlank(message = "이름은 필수입니다")
    @field:Size(min = 2, max = 50, message = "이름은 2-50자 사이여야 합니다")
    val name: String
)`}</pre>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-md font-medium text-gray-900 mb-2">Kotlin 코루틴 활용 예제</h4>
                <div className="code-block">
                  <pre>{`// 비동기 서비스 예제
@Service
class AsyncUserService(
    private val userRepository: UserRepository,
    private val externalApiClient: ExternalApiClient
) {

    suspend fun getUserWithExternalData(userId: Long): UserWithExternalData {
        // 병렬로 데이터 조회
        val userDeferred = async { userRepository.findById(userId) }
        val externalDataDeferred = async { externalApiClient.getUserData(userId) }

        val user = userDeferred.await()
        val externalData = externalDataDeferred.await()

        return UserWithExternalData(user, externalData)
    }

    suspend fun processMultipleUsers(userIds: List<Long>): List<ProcessedUser> {
        return userIds.map { userId ->
            async {
                val user = userRepository.findById(userId)
                processUser(user)
            }
        }.awaitAll()
    }
}

// WebFlux 컨트롤러 예제
@RestController
@RequestMapping("/api/reactive/users")
class ReactiveUserController(
    private val userService: ReactiveUserService
) {

    @GetMapping
    fun getAllUsers(): Flux<UserDto> {
        return userService.findAllUsers()
    }

    @GetMapping("/{id}")
    fun getUserById(@PathVariable id: Long): Mono<UserDto> {
        return userService.findUserById(id)
    }

    @PostMapping
    fun createUser(@RequestBody userDto: CreateUserDto): Mono<UserDto> {
        return userService.createUser(userDto)
    }
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 애플리케이션 설정 섹션 */}
        <div id="application-config" className="card">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">⚙️</span>
              <h2 className="text-2xl font-semibold text-gray-900">환경별 설정 관리</h2>
            </div>
            <a href="#table-of-contents" className="text-sm text-blue-600 hover:text-blue-800">↑ 목차로 가기</a>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">기본 application.yml</h3>
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
        dialect: org.hibernate.dialect.H2Dialect

  # H2 콘솔 활성화
  h2:
    console:
      enabled: true
      path: /h2-console

  # JSON 설정
  jackson:
    property-naming-strategy: SNAKE_CASE
    default-property-inclusion: NON_NULL
    serialization:
      write-dates-as-timestamps: false

  # 캐시 설정
  cache:
    type: simple

# 서버 설정
server:
  port: 8080
  servlet:
    context-path: /api
  error:
    include-message: always
    include-binding-errors: always

# 액추에이터 설정
management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics,prometheus
  endpoint:
    health:
      show-details: always

# 로깅 설정
logging:
  level:
    com.springhub.example: DEBUG
    org.springframework.web: DEBUG
    org.hibernate.SQL: DEBUG
    org.hibernate.type.descriptor.sql.BasicBinder: TRACE
  pattern:
    console: "%d{yyyy-MM-dd HH:mm:ss} - %msg%n"
    file: "%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n"
  file:
    name: logs/spring-boot-hub.log`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">개발 환경 설정 (application-dev.yml)</h3>
              <div className="code-block">
                <pre>{`spring:
  # 개발 DB 설정
  datasource:
    url: jdbc:h2:~/devdb;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=FALSE
    username: dev
    password: dev123

  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
    properties:
      hibernate:
        format_sql: true

  # 개발 도구 활성화
  devtools:
    restart:
      enabled: true
    livereload:
      enabled: true

  # 캐시 비활성화
  cache:
    type: none

# 개발 서버 설정
server:
  port: 8080

# 개발 로깅
logging:
  level:
    root: INFO
    com.springhub.example: DEBUG
    org.springframework.security: DEBUG
  file:
    name: logs/spring-boot-hub-dev.log

# 개발용 더미 데이터 설정
app:
  data:
    init-data: true
    dummy-users: 10`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">운영 환경 설정 (application-prod.yml)</h3>
              <div className="code-block">
                <pre>{`spring:
  # 운영 DB 설정
  datasource:
    url: jdbc:postgresql://\${DB_HOST:localhost}:5432/\${DB_NAME:springhub}
    username: \${DB_USERNAME}
    password: \${DB_PASSWORD}
    driver-class-name: org.postgresql.Driver
    hikari:
      maximum-pool-size: 20
      minimum-idle: 5
      idle-timeout: 300000
      max-lifetime: 600000

  jpa:
    hibernate:
      ddl-auto: validate
    show-sql: false
    properties:
      hibernate:
        dialect: org.hibernate.dialect.PostgreSQLDialect
        jdbc:
          batch_size: 50
        order_inserts: true
        order_updates: true

  # 운영용 캐시 설정
  cache:
    type: redis
  redis:
    host: \${REDIS_HOST:localhost}
    port: \${REDIS_PORT:6379}
    password: \${REDIS_PASSWORD:}
    timeout: 2000ms
    lettuce:
      pool:
        max-active: 8
        max-idle: 8
        min-idle: 0

# 운영 서버 설정
server:
  port: 8080
  tomcat:
    max-threads: 200
    min-spare-threads: 10
  compression:
    enabled: true
  ssl:
    enabled: true
    key-store: classpath:keystore.p12
    key-store-password: \${SSL_PASSWORD}
    key-store-type: PKCS12

# 운영 액추에이터 설정
management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics,prometheus
      base-path: /actuator
  endpoint:
    health:
      show-details: when-authorized
  security:
    enabled: true

# 운영 로깅
logging:
  level:
    root: WARN
    com.springhub.example: INFO
  file:
    name: /var/log/spring-boot-hub/application.log
  logback:
    rollingpolicy:
      max-file-size: 100MB
      max-history: 30

# 보안 설정
app:
  security:
    jwt:
      secret: \${JWT_SECRET}
      expiration: 86400000
    cors:
      allowed-origins: \${ALLOWED_ORIGINS:http://localhost:3000}

# 외부 서비스 설정
external:
  api:
    timeout: 5000
    retry:
      max-attempts: 3
      delay: 1000`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">테스트 환경 설정 (application-test.yml)</h3>
              <div className="code-block">
                <pre>{`spring:
  # 테스트 DB 설정 (인메모리)
  datasource:
    url: jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=FALSE
    driver-class-name: org.h2.Driver
    username: sa
    password:

  jpa:
    hibernate:
      ddl-auto: create-drop
    show-sql: false
    properties:
      hibernate:
        format_sql: false

  # 테스트 캐시 설정
  cache:
    type: simple

# 테스트 서버 설정
server:
  port: 0  # 랜덤 포트 사용

# 테스트 로깅 (최소화)
logging:
  level:
    root: WARN
    com.springhub.example: INFO
    org.springframework.test: INFO

# 테스트 데이터 설정
app:
  test:
    data-cleanup: true
    mock-external-services: true`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">커스텀 설정 클래스</h3>
              <div className="code-block">
                <pre>{`// 보안 설정
@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/h2-console/**").permitAll()
                .requestMatchers("/actuator/health").permitAll()
                .anyRequest().authenticated()
            )
            .oauth2Login(oauth2 -> oauth2
                .loginPage("/login")
                .defaultSuccessUrl("/dashboard")
            )
            .jwt(jwt -> jwt
                .decoder(jwtDecoder())
            )
            .logout(logout -> logout
                .logoutSuccessUrl("/login?logout")
                .invalidateHttpSession(true)
            )
            .csrf(csrf -> csrf
                .ignoringRequestMatchers("/h2-console/**", "/api/**")
            )
            .headers(headers -> headers
                .frameOptions().disable()
            );

        return http.build();
    }

    @Bean
    public JwtDecoder jwtDecoder() {
        return NimbusJwtDecoder.withJwkSetUri("https://example.com/.well-known/jwks.json")
                .build();
    }
}

// 데이터베이스 설정
@Configuration
@EnableJpaRepositories(basePackages = "com.springhub.example.repository")
@EnableTransactionManagement
public class DatabaseConfig {

    @Bean
    @Primary
    @ConfigurationProperties("spring.datasource")
    public DataSource primaryDataSource() {
        return DataSourceBuilder.create().build();
    }

    @Bean
    public JpaTransactionManager transactionManager(EntityManagerFactory emf) {
        return new JpaTransactionManager(emf);
    }

    @Bean
    public PlatformTransactionManager transactionManager() {
        return new DataSourceTransactionManager(primaryDataSource());
    }
}

// 캐시 설정
@Configuration
@EnableCaching
public class CacheConfig {

    @Bean
    public CacheManager cacheManager() {
        return new ConcurrentMapCacheManager("users", "products");
    }

    @Bean
    @ConditionalOnProperty(name = "spring.cache.type", havingValue = "redis")
    public RedisCacheManager redisCacheManager(RedisConnectionFactory connectionFactory) {
        RedisCacheConfiguration config = RedisCacheConfiguration.defaultCacheConfig()
                .entryTtl(Duration.ofMinutes(10))
                .serializeKeysWith(RedisSerializationContext.SerializationPair
                        .fromSerializer(new StringRedisSerializer()))
                .serializeValuesWith(RedisSerializationContext.SerializationPair
                        .fromSerializer(new GenericJackson2JsonRedisSerializer()));

        return RedisCacheManager.builder(connectionFactory)
                .cacheDefaults(config)
                .build();
    }
}`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">환경변수 및 외부 설정</h3>
              <div className="code-block">
                <pre>{`# .env 파일 예제
DB_HOST=localhost
DB_NAME=springhub
DB_USERNAME=springuser
DB_PASSWORD=springpass
JWT_SECRET=your-256-bit-secret-key
SSL_PASSWORD=your-ssl-password
REDIS_HOST=localhost
REDIS_PORT=6379
ALLOWED_ORIGINS=http://localhost:3000,https://yourdomain.com

# Docker Compose 환경변수 설정
# docker-compose.yml
version: '3.8'
services:
  app:
    image: spring-boot-hub:latest
    environment:
      - SPRING_PROFILES_ACTIVE=prod
      - DB_HOST=postgres
      - DB_NAME=springhub
      - DB_USERNAME=springuser
      - DB_PASSWORD=springpass
      - REDIS_HOST=redis
    depends_on:
      - postgres
      - redis

  postgres:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=springhub
      - POSTGRES_USER=springuser
      - POSTGRES_PASSWORD=springpass

  redis:
    image: redis:7-alpine`}</pre>
              </div>
            </div>
          </div>
        </div>

        {/* 빌드 및 배포 팁 */}
        <div className="card bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">🚀 빌드 및 배포 팁</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">성능 최적화</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• JAR 파일 계층화 (Layered JAR) 활용</li>
                  <li>• 빌드 캐시 최적화</li>
                  <li>• 멀티 스테이지 Docker 빌드</li>
                  <li>• 의존성 분석으로 불필요한 라이브러리 제거</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">보안 고려사항</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 환경변수로 민감한 정보 관리</li>
                  <li>• 프로파일별 보안 설정 분리</li>
                  <li>• 액추에이터 엔드포인트 보안</li>
                  <li>• 정적 분석 도구 활용</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Configuration