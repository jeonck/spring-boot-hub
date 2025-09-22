function GradleExamples() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Gradle 예제</h1>
      
      <div className="space-y-8">
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">기본 Spring Boot 프로젝트</h2>
          <p className="text-gray-600 mb-4">
            Gradle을 사용한 기본 Spring Boot 애플리케이션 예제입니다.
          </p>
          
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900 mb-2">build.gradle</h3>
            <div className="code-block">
              <pre>{`plugins {
    id 'org.springframework.boot' version '3.1.0'
    id 'io.spring.dependency-management' version '1.1.0'
    id 'java'
}

group = 'com.springhub.example'
version = '0.0.1-SNAPSHOT'
java.sourceCompatibility = JavaVersion.VERSION_17

repositories {
    mavenCentral()
}

dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    implementation 'org.springframework.boot:spring-boot-starter-validation'
    
    runtimeOnly 'com.h2database:h2'
    
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
}`}</pre>
            </div>
          </div>
          
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900 mb-2">실행 명령어</h3>
            <div className="code-block">
              <pre>{`# 애플리케이션 실행
./gradlew bootRun

# 빌드
./gradlew build

# 테스트 실행
./gradlew test

# JAR 파일 실행
./gradlew bootJar
java -jar build/libs/example-0.0.1-SNAPSHOT.jar`}</pre>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">REST API 예제</h2>
          <p className="text-gray-600 mb-4">
            Spring Boot와 Gradle을 사용한 RESTful API 구현 예제입니다.
          </p>
          
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Controller 예제</h3>
            <div className="code-block">
              <pre>{`@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.findById(id);
        return user != null ? ResponseEntity.ok(user) : ResponseEntity.notFound().build();
    }
    
    @PostMapping
    public User createUser(@Valid @RequestBody User user) {
        return userService.save(user);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @Valid @RequestBody User user) {
        User updatedUser = userService.update(id, user);
        return updatedUser != null ? ResponseEntity.ok(updatedUser) : ResponseEntity.notFound().build();
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        boolean deleted = userService.delete(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}`}</pre>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Gradle 주요 명령어</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">개발 명령어</h3>
              <ul className="space-y-1 text-gray-600">
                <li><code className="bg-gray-100 px-1 rounded">./gradlew bootRun</code> - 애플리케이션 실행</li>
                <li><code className="bg-gray-100 px-1 rounded">./gradlew test</code> - 테스트 실행</li>
                <li><code className="bg-gray-100 px-1 rounded">./gradlew build</code> - 빌드</li>
                <li><code className="bg-gray-100 px-1 rounded">./gradlew clean</code> - 빌드 파일 정리</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">배포 명령어</h3>
              <ul className="space-y-1 text-gray-600">
                <li><code className="bg-gray-100 px-1 rounded">./gradlew bootJar</code> - JAR 파일 생성</li>
                <li><code className="bg-gray-100 px-1 rounded">./gradlew bootWar</code> - WAR 파일 생성</li>
                <li><code className="bg-gray-100 px-1 rounded">./gradlew publish</code> - 아티팩트 배포</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GradleExamples