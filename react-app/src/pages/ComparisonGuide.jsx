function ComparisonGuide() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Maven vs Gradle vs application.yml 완전 비교표</h1>

      <div className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-400 rounded">
        <p className="text-blue-800 font-medium">
          💡 <strong>핵심 결론</strong><br/>
          • <strong>빌드 도구(Maven/Gradle)</strong>: 컴파일/패키징 담당<br/>
          • <strong>application.yml</strong>: 런타임 설정 담당<br/>
          • <strong>둘 다 필수</strong>: 서로 보완하며 동작<br/>
          • <strong>application.yml은 공통</strong>: Maven이든 Gradle이든 항상 사용
        </p>
      </div>

      <div className="space-y-12">
        {/* 1. 기본 파일 구성 비교 */}
        <section className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">1️⃣ 기본 파일 구성 비교</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">항목</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Maven 프로젝트</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Gradle 프로젝트</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">application.yml</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">주요 빌드 파일</td>
                  <td className="border border-gray-300 px-4 py-3">pom.xml</td>
                  <td className="border border-gray-300 px-4 py-3">build.gradle</td>
                  <td className="border border-gray-300 px-4 py-3">❌ (설정 파일)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">설정 언어</td>
                  <td className="border border-gray-300 px-4 py-3">XML</td>
                  <td className="border border-gray-300 px-4 py-3">Groovy/Kotlin DSL</td>
                  <td className="border border-gray-300 px-4 py-3">YAML (또는 Properties)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">파일 위치</td>
                  <td className="border border-gray-300 px-4 py-3">프로젝트 루트</td>
                  <td className="border border-gray-300 px-4 py-3">프로젝트 루트</td>
                  <td className="border border-gray-300 px-4 py-3">src/main/resources/</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">파일 크기</td>
                  <td className="border border-gray-300 px-4 py-3">📏 중간~큰 (XML)</td>
                  <td className="border border-gray-300 px-4 py-3">📏 작음 (스크립트)</td>
                  <td className="border border-gray-300 px-4 py-3">📏 작음 (계층 구조)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">스프링부트 통합</td>
                  <td className="border border-gray-300 px-4 py-3">spring-boot-starter-parent</td>
                  <td className="border border-gray-300 px-4 py-3">springBoot 플러그인</td>
                  <td className="border border-gray-300 px-4 py-3">Spring Boot 자체 제공</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">초기 생성</td>
                  <td className="border border-gray-300 px-4 py-3">Spring Initializr 자동</td>
                  <td className="border border-gray-300 px-4 py-3">Spring Initializr 자동</td>
                  <td className="border border-gray-300 px-4 py-3">Spring Initializr 자동</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 2. 의존성 관리 비교 */}
        <section className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">2️⃣ 의존성 관리 비교 (빌드 파일 + application.yml 연계)</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">기능</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Maven (pom.xml)</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Gradle (build.gradle)</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">application.yml</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">의존성 선언</td>
                  <td className="border border-gray-300 px-4 py-3">&lt;dependencies&gt;</td>
                  <td className="border border-gray-300 px-4 py-3">dependencies {'{ }'}</td>
                  <td className="border border-gray-300 px-4 py-3">❌ (빌드 도구가 처리)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Spring Boot Starter</td>
                  <td className="border border-gray-300 px-4 py-3">&lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;</td>
                  <td className="border border-gray-300 px-4 py-3">implementation 'org.springframework.boot:spring-boot-starter-web'</td>
                  <td className="border border-gray-300 px-4 py-3">❌ (의존성만으로 자동 설정)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">프로파일별 설정</td>
                  <td className="border border-gray-300 px-4 py-3">&lt;profiles&gt; (복잡)</td>
                  <td className="border border-gray-300 px-4 py-3">gradle.properties</td>
                  <td className="border border-gray-300 px-4 py-3">✅ spring.profiles.active</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">버전 관리</td>
                  <td className="border border-gray-300 px-4 py-3">&lt;dependencyManagement&gt;</td>
                  <td className="border border-gray-300 px-4 py-3">dependencyManagement {'{ }'}</td>
                  <td className="border border-gray-300 px-4 py-3">❌ (빌드 도구가 처리)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">의존성 분석</td>
                  <td className="border border-gray-300 px-4 py-3">mvn dependency:tree</td>
                  <td className="border border-gray-300 px-4 py-3">./gradlew dependencies</td>
                  <td className="border border-gray-300 px-4 py-3">❌ (런타임 확인)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. 실제 설정 예제 비교 */}
        <section className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">3️⃣ 실제 설정 예제 비교 (동일한 웹 애플리케이션)</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Maven 프로젝트 전체 설정</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">프로젝트 구조</h4>
                  <div className="code-block">
                    <pre>{`프로젝트 구조
├── pom.xml (빌드 + 의존성)
├── src/
│   └── main/
│       ├── java/com/example/DemoApplication.java
│       └── resources/
│           └── application.yml (애플리케이션 설정)
└── mvnw (Maven Wrapper)`}</pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-2">pom.xml</h4>
                  <div className="code-block">
                    <pre>{`<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
</dependencies>`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Gradle 프로젝트 전체 설정</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">프로젝트 구조</h4>
                  <div className="code-block">
                    <pre>{`프로젝트 구조
├── build.gradle (빌드 + 의존성)
├── gradle.properties (프로젝트 속성)
├── src/
│   └── main/
│       ├── kotlin/com/example/DemoApplication.kt
│       └── resources/
│           └── application.yml (애플리케이션 설정)
└── gradlew (Gradle Wrapper)`}</pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-2">build.gradle</h4>
                  <div className="code-block">
                    <pre>{`dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
}`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">application.yml (공통)</h3>
            <div className="code-block">
              <pre>{`server:
  port: 8080

spring:
  application:
    name: demo-app
  profiles:
    active: dev

logging:
  level:
    com.example: DEBUG`}</pre>
            </div>
          </div>
        </section>

        {/* 4. 설정 우선순위와 상호작용 */}
        <section className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">4️⃣ 설정 우선순위와 상호작용</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">설정 항목</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Maven (pom.xml)</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Gradle (build.gradle)</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">application.yml</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">우선순위</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">포트 설정</td>
                  <td className="border border-gray-300 px-4 py-3">❌</td>
                  <td className="border border-gray-300 px-4 py-3">❌</td>
                  <td className="border border-gray-300 px-4 py-3">server.port: 8080</td>
                  <td className="border border-gray-300 px-4 py-3">🥇 최고</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">의존성 버전</td>
                  <td className="border border-gray-300 px-4 py-3">&lt;version&gt;2.7.0&lt;/version&gt;</td>
                  <td className="border border-gray-300 px-4 py-3">version '2.7.0'</td>
                  <td className="border border-gray-300 px-4 py-3">❌</td>
                  <td className="border border-gray-300 px-4 py-3">🥈 중간</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">프로파일</td>
                  <td className="border border-gray-300 px-4 py-3">&lt;activeProfiles&gt;</td>
                  <td className="border border-gray-300 px-4 py-3">spring.profiles.active</td>
                  <td className="border border-gray-300 px-4 py-3">spring.profiles.active: dev</td>
                  <td className="border border-gray-300 px-4 py-3">🥉 동등</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">JVM 옵션</td>
                  <td className="border border-gray-300 px-4 py-3">&lt;configuration&gt;</td>
                  <td className="border border-gray-300 px-4 py-3">jvmArgs</td>
                  <td className="border border-gray-300 px-4 py-3">❌</td>
                  <td className="border border-gray-300 px-4 py-3">🥈 중간</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">로깅 레벨</td>
                  <td className="border border-gray-300 px-4 py-3">❌</td>
                  <td className="border border-gray-300 px-4 py-3">❌</td>
                  <td className="border border-gray-300 px-4 py-3">logging.level.root: INFO</td>
                  <td className="border border-gray-300 px-4 py-3">🥇 최고</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">데이터소스</td>
                  <td className="border border-gray-300 px-4 py-3">❌</td>
                  <td className="border border-gray-300 px-4 py-3">❌</td>
                  <td className="border border-gray-300 px-4 py-3">spring.datasource.url: jdbc:h2:mem:test</td>
                  <td className="border border-gray-300 px-4 py-3">🥇 최고</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. 프로파일 관리 비교 */}
        <section className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">5️⃣ 프로파일 관리 비교 (환경별 설정)</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">환경</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Maven</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Gradle</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">application.yml</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">개발 (dev)</td>
                  <td className="border border-gray-300 px-4 py-3">&lt;profile&gt;&lt;id&gt;dev&lt;/id&gt;</td>
                  <td className="border border-gray-300 px-4 py-3">spring.profiles.active=dev</td>
                  <td className="border border-gray-300 px-4 py-3">spring.profiles.active=dev</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">운영 (prod)</td>
                  <td className="border border-gray-300 px-4 py-3">&lt;profile&gt;&lt;id&gt;prod&lt;/id&gt;</td>
                  <td className="border border-gray-300 px-4 py-3">build.gradle 조건부</td>
                  <td className="border border-gray-300 px-4 py-3">application-prod.yml</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">테스트 (test)</td>
                  <td className="border border-gray-300 px-4 py-3">&lt;profile&gt;&lt;id&gt;test&lt;/id&gt;</td>
                  <td className="border border-gray-300 px-4 py-3">test {'{ }'} 블록</td>
                  <td className="border border-gray-300 px-4 py-3">application-test.yml</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">관리 복잡도</td>
                  <td className="border border-gray-300 px-4 py-3">🔴 높음</td>
                  <td className="border border-gray-300 px-4 py-3">🟡 중간</td>
                  <td className="border border-gray-300 px-4 py-3">🟢 낮음</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">실제 프로파일 예제 (application.yml 방식 - 추천)</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">기본 설정 (application.yml)</h4>
                <div className="code-block">
                  <pre>{`spring:
  profiles:
    active: dev`}</pre>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">개발 환경 (application-dev.yml)</h4>
                  <div className="code-block">
                    <pre>{`server:
  port: 8080
spring:
  datasource:
    url: jdbc:h2:mem:devdb`}</pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-2">운영 환경 (application-prod.yml)</h4>
                  <div className="code-block">
                    <pre>{`server:
  port: 80
spring:
  datasource:
    url: jdbc:mysql://prod-db:3306/myapp`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. 파일별 역할과 상호작용 다이어그램 */}
        <section className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">6️⃣ 파일별 역할과 상호작용 다이어그램</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="code-block">
              <pre>{`┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   pom.xml       │    │  build.gradle    │    │ application.yml │
│  (Maven)        │    │  (Gradle)        │    │ (공통)          │
├─────────────────┤    ├──────────────────┤    ├─────────────────┤
│ • 의존성 관리   │    │ • 의존성 관리    │    │ • 서버 설정     │
│ • 빌드 설정     │    │ • 빌드 태스크    │    │ • DB 설정       │
│ • 플러그인      │    │ • Kotlin 통합    │    │ • 로깅 설정     │
│ • 버전 관리     │    │ • 커스텀 태스크  │    │ • 프로파일      │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         └──────────┬────────────┘                       │
                    │                                     │
              ┌─────▼─────┐                         ┌─────▼─────┐
              │ Spring   │                         │ Spring    │
              │ Boot     │◄───────────────────────│Boot Auto- │
              │ Starter  │    (의존성 제공)        │Config     │
              └──────────┘                         └───────────┘`}</pre>
            </div>
          </div>
        </section>

        {/* 7. 실전 선택 가이드 */}
        <section className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">7️⃣ 실전 선택 가이드 (3파일 조합 관점)</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">상황</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Maven + application.yml</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Gradle + application.yml</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">🎯 초보자</td>
                  <td className="border border-gray-300 px-4 py-3">✅ 추천 (pom.xml 구조 단순)</td>
                  <td className="border border-gray-300 px-4 py-3">⚠️ Kotlin 시 추천</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">⚡ 빌드 속도</td>
                  <td className="border border-gray-300 px-4 py-3">❌</td>
                  <td className="border border-gray-300 px-4 py-3">✅ 빠른 빌드 필요 시</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">📁 설정 관리</td>
                  <td className="border border-gray-300 px-4 py-3">🟡 중간 (XML + YAML)</td>
                  <td className="border border-gray-300 px-4 py-3">🟢 좋음 (스크립트 + YAML)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">🏢 팀 환경</td>
                  <td className="border border-gray-300 px-4 py-3">✅ 기존 Maven 팀</td>
                  <td className="border border-gray-300 px-4 py-3">⚠️ 새로운 팀</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">🔧 유연성</td>
                  <td className="border border-gray-300 px-4 py-3">❌</td>
                  <td className="border border-gray-300 px-4 py-3">✅ 커스텀 빌드 필요 시</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">📚 문서화</td>
                  <td className="border border-gray-300 px-4 py-3">✅ 풍부함</td>
                  <td className="border border-gray-300 px-4 py-3">🟡 증가 중</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 8. 실제 실행 명령어 비교 */}
        <section className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">8️⃣ 실제 실행 명령어 비교</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">작업</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Maven</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Gradle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">프로젝트 빌드</td>
                  <td className="border border-gray-300 px-4 py-3"><code className="bg-gray-100 px-2 py-1 rounded">mvn clean install</code></td>
                  <td className="border border-gray-300 px-4 py-3"><code className="bg-gray-100 px-2 py-1 rounded">./gradlew build</code></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">애플리케이션 실행</td>
                  <td className="border border-gray-300 px-4 py-3"><code className="bg-gray-100 px-2 py-1 rounded">mvn spring-boot:run</code></td>
                  <td className="border border-gray-300 px-4 py-3"><code className="bg-gray-100 px-2 py-1 rounded">./gradlew bootRun</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">프로파일 지정</td>
                  <td className="border border-gray-300 px-4 py-3"><code className="bg-gray-100 px-2 py-1 rounded text-xs">mvn spring-boot:run -Dspring.profiles.active=prod</code></td>
                  <td className="border border-gray-300 px-4 py-3"><code className="bg-gray-100 px-2 py-1 rounded text-xs">./gradlew bootRun --args='--spring.profiles.active=prod'</code></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">패키징 (JAR)</td>
                  <td className="border border-gray-300 px-4 py-3"><code className="bg-gray-100 px-2 py-1 rounded">mvn clean package</code></td>
                  <td className="border border-gray-300 px-4 py-3"><code className="bg-gray-100 px-2 py-1 rounded">./gradlew bootJar</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">의존성 확인</td>
                  <td className="border border-gray-300 px-4 py-3"><code className="bg-gray-100 px-2 py-1 rounded">mvn dependency:tree</code></td>
                  <td className="border border-gray-300 px-4 py-3"><code className="bg-gray-100 px-2 py-1 rounded">./gradlew dependencies</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 9. 권장 조합과 이유 */}
        <section className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">9️⃣ 권장 조합과 이유</h2>
          <div className="space-y-6">
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Maven + application.yml</h3>
              <div className="text-green-700">
                <p className="mb-2"><strong>이유:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>표준화된 구조</li>
                  <li>풍부한 문서</li>
                  <li>Spring Boot 완벽 통합</li>
                </ul>
                <p className="mt-2"><strong>적합 상황:</strong> 🎓 학습, 🏢 기업 환경</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Gradle + application.yml</h3>
              <div className="text-blue-700">
                <p className="mb-2"><strong>이유:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>빠른 빌드</li>
                  <li>Kotlin 최적화</li>
                  <li>유연한 설정</li>
                </ul>
                <p className="mt-2"><strong>적합 상황:</strong> 🚀 스타트업, 💻 Kotlin 개발</p>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">application.yml 단독</h3>
              <div className="text-purple-700">
                <p className="mb-2"><strong>이유:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>런타임 설정 최적화</li>
                  <li>환경별 분리 쉬움</li>
                  <li>가독성 우수</li>
                </ul>
                <p className="mt-2"><strong>적합 상황:</strong> 모든 프로젝트</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ComparisonGuide