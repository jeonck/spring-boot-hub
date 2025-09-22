function MavenExamples() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Maven 예제</h1>
      
      <div className="space-y-8">
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">기본 Spring Boot 프로젝트</h2>
          <p className="text-gray-600 mb-4">
            Maven을 사용한 기본 Spring Boot 애플리케이션 예제입니다.
          </p>
          
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900 mb-2">pom.xml</h3>
            <div className="code-block">
              <pre>{`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
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
    </properties>
    
    <dependencies>
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
            <groupId>com.h2database</groupId>
            <artifactId>h2</artifactId>
            <scope>runtime</scope>
        </dependency>
        
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
    
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>`}</pre>
            </div>
          </div>
          
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900 mb-2">실행 명령어</h3>
            <div className="code-block">
              <pre>{`# 애플리케이션 실행
./mvnw spring-boot:run

# 빌드
./mvnw clean package

# 테스트 실행
./mvnw test

# JAR 파일 실행
java -jar target/spring-boot-maven-example-0.0.1-SNAPSHOT.jar`}</pre>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Service 계층 예제</h2>
          <p className="text-gray-600 mb-4">
            Maven 프로젝트에서 Service 계층 구현 예제입니다.
          </p>
          
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Service 예제</h3>
            <div className="code-block">
              <pre>{`@Service
@Transactional
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    public List<User> findAll() {
        return userRepository.findAll();
    }
    
    public User findById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
    
    public User save(User user) {
        // 비지니스 로직 처리
        validateUser(user);
        user.setCreatedAt(LocalDateTime.now());
        return userRepository.save(user);
    }
    
    public User update(Long id, User user) {
        User existingUser = findById(id);
        if (existingUser != null) {
            existingUser.setName(user.getName());
            existingUser.setEmail(user.getEmail());
            existingUser.setUpdatedAt(LocalDateTime.now());
            return userRepository.save(existingUser);
        }
        return null;
    }
    
    public boolean delete(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }
    
    private void validateUser(User user) {
        if (user.getName() == null || user.getName().trim().isEmpty()) {
            throw new IllegalArgumentException("사용자 이름이 필수입니다.");
        }
        if (user.getEmail() == null || !user.getEmail().contains("@")) {
            throw new IllegalArgumentException("유효한 이메일 주소가 필요합니다.");
        }
    }
}`}</pre>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Maven 주요 명령어</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">개발 명령어</h3>
              <ul className="space-y-1 text-gray-600">
                <li><code className="bg-gray-100 px-1 rounded">./mvnw spring-boot:run</code> - 애플리케이션 실행</li>
                <li><code className="bg-gray-100 px-1 rounded">./mvnw test</code> - 테스트 실행</li>
                <li><code className="bg-gray-100 px-1 rounded">./mvnw compile</code> - 컴파일</li>
                <li><code className="bg-gray-100 px-1 rounded">./mvnw clean</code> - 빌드 파일 정리</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">배포 명령어</h3>
              <ul className="space-y-1 text-gray-600">
                <li><code className="bg-gray-100 px-1 rounded">./mvnw package</code> - JAR 파일 생성</li>
                <li><code className="bg-gray-100 px-1 rounded">./mvnw install</code> - 로컬 리포지토리 설치</li>
                <li><code className="bg-gray-100 px-1 rounded">./mvnw deploy</code> - 원격 리포지토리 배포</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MavenExamples