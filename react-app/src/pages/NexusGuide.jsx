function NexusGuide() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">🏛️ Nexus 폐쇄망 스프링부트 완벽 가이드</h1>

      <div className="mb-8 p-6 bg-red-50 border-l-4 border-red-400 rounded">
        <p className="text-red-800 font-medium">
          ⚡ <strong>폐쇄망 프로젝트 성공의 핵심</strong><br/>
          • <strong>초기 설정 시간 최소화</strong>: 잘못된 설정으로 인한 하루 이상의 시간 낭비 방지<br/>
          • <strong>즉시 활용 가능한 설정</strong>: 복사 붙여넣기로 바로 작동하는 완성형 설정<br/>
          • <strong>환경별 대응</strong>: 다양한 Nexus 환경에 맞춘 유연한 설정 템플릿<br/>
          • <strong>트러블슈팅 완비</strong>: 자주 발생하는 문제의 즉시 해결 방법 제공
        </p>
      </div>

      <div className="space-y-12">
        {/* 1. 5분 빠른 시작 가이드 */}
        <section className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 5분 빠른 시작 (폐쇄망 전용)</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-4">📋 1단계: 환경 정보 수집 (2분)</h3>
              <div className="code-block">
                <pre>{`# 1. Nexus 서버 접속 테스트
curl -I http://YOUR_NEXUS_URL:8081/

# 2. 인증 테스트 (ID/PW 확인)
curl -u admin:password http://YOUR_NEXUS_URL:8081/service/rest/v1/status

# 3. 레포지토리 구조 확인
curl -u admin:password http://YOUR_NEXUS_URL:8081/service/rest/v1/repositories

# 📝 메모할 정보:
# - Nexus URL: http://nexus.company.com:8081
# - Repository 이름: maven-public (또는 public)
# - 인증 ID/PW: admin/password123`}</pre>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">⚙️ 2단계: 원클릭 설정 적용 (3분)</h3>
              <div className="code-block">
                <pre>{`# Maven 사용자
mkdir -p ~/.m2
# settings.xml 파일을 아래 템플릿으로 생성

# Gradle 사용자
# gradle.properties 파일을 프로젝트 루트에 생성

# 즉시 테스트
mvn dependency:resolve        # Maven
./gradlew dependencies        # Gradle

# ✅ 성공 시 → Spring Boot 프로젝트 바로 시작 가능!`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Maven + Nexus 완벽 설정 */}
        <section className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📦 Maven + Nexus 완벽 설정</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">A. 전역 설정 (~/.m2/settings.xml) - 복사해서 바로 사용</h3>
              <div className="code-block">
                <pre>{`<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0">

    <!-- 🔧 여기만 수정하세요 -->
    <localRepository>/opt/maven-repo</localRepository>  <!-- 경로 변경 가능 -->

    <!-- 🔐 Nexus 인증 정보 -->
    <servers>
        <server>
            <id>nexus-public</id>
            <username>YOUR_NEXUS_USER</username>          <!-- 수정 필요 -->
            <password>YOUR_NEXUS_PASSWORD</password>      <!-- 수정 필요 -->
        </server>
        <server>
            <id>nexus-releases</id>
            <username>YOUR_NEXUS_USER</username>          <!-- 수정 필요 -->
            <password>YOUR_NEXUS_PASSWORD</password>      <!-- 수정 필요 -->
        </server>
    </servers>

    <!-- 🌐 Nexus 미러 (모든 요청을 Nexus로) -->
    <mirrors>
        <mirror>
            <id>nexus-mirror</id>
            <name>Company Nexus</name>
            <url>http://YOUR_NEXUS_URL:8081/repository/maven-public/</url>  <!-- 수정 필요 -->
            <mirrorOf>central,*</mirrorOf>
        </mirror>
    </mirrors>

    <!-- 🔧 프록시 설정 (필요한 경우만) -->
    <proxies>
        <proxy>
            <id>company-proxy</id>
            <active>true</active>
            <protocol>http</protocol>
            <host>YOUR_PROXY_HOST</host>                   <!-- 수정 필요 -->
            <port>8080</port>                              <!-- 수정 필요 -->
            <nonProxyHosts>localhost|*.company.com|YOUR_NEXUS_HOST</nonProxyHosts>
        </proxy>
    </proxies>
</settings>`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">B. 프로젝트 설정 (pom.xml) - 복사해서 바로 사용</h3>
              <div className="code-block">
                <pre>{`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.company</groupId>
    <artifactId>nexus-demo</artifactId>
    <version>1.0.0</version>
    <packaging>jar</packaging>

    <!-- 🍃 Spring Boot 부모 -->
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.2.0</version>
        <relativePath/>
    </parent>

    <!-- 🔧 Java 버전 -->
    <properties>
        <java.version>17</java.version>
    </properties>

    <!-- 📚 Nexus 레포지토리 (프로젝트별 우선순위) -->
    <repositories>
        <repository>
            <id>nexus-public</id>
            <name>Company Nexus Public</name>
            <url>http://YOUR_NEXUS_URL:8081/repository/maven-public/</url>  <!-- 수정 필요 -->
            <releases><enabled>true</enabled></releases>
            <snapshots><enabled>true</enabled></snapshots>
        </repository>
    </repositories>

    <pluginRepositories>
        <pluginRepository>
            <id>nexus-public</id>
            <name>Company Nexus Public</name>
            <url>http://YOUR_NEXUS_URL:8081/repository/maven-public/</url>  <!-- 수정 필요 -->
        </pluginRepository>
    </pluginRepositories>

    <!-- 🎯 기본 의존성 -->
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <!-- 🏗️ 빌드 설정 -->
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
          </div>
        </section>

        {/* 3. Gradle + Nexus 완벽 설정 */}
        <section className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🐘 Gradle + Nexus 완벽 설정</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">A. 프로젝트 설정 (build.gradle) - 복사해서 바로 사용</h3>
              <div className="code-block">
                <pre>{`// 🔧 플러그인 관리 (최우선)
pluginManagement {
    repositories {
        maven {
            name = 'CompanyNexus'
            url = 'http://YOUR_NEXUS_URL:8081/repository/maven-public/'  // 수정 필요
            credentials {
                username = project.findProperty('nexusUsername') ?: 'YOUR_USER'
                password = project.findProperty('nexusPassword') ?: 'YOUR_PASS'
            }
        }
        gradlePluginPortal()
    }
}

// 🍃 Spring Boot 플러그인
plugins {
    id 'org.springframework.boot' version '3.2.0'
    id 'io.spring.dependency-management' version '1.1.4'
    id 'java'
}

// 📋 프로젝트 정보
group = 'com.company'
version = '1.0.0'
java.sourceCompatibility = JavaVersion.VERSION_17

// 📚 의존성 레포지토리
repositories {
    maven {
        name = 'CompanyNexus'
        url = 'http://YOUR_NEXUS_URL:8081/repository/maven-public/'  // 수정 필요
        credentials {
            username = project.findProperty('nexusUsername') ?: 'YOUR_USER'
            password = project.findProperty('nexusPassword') ?: 'YOUR_PASS'
        }
    }
    // 백업용 (Nexus 장애 시)
    mavenCentral()
}

// 🎯 의존성
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
}

// 🧪 테스트 설정
tasks.named('test') {
    useJUnitPlatform()
}`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">B. 보안 설정 (gradle.properties) - 프로젝트 루트에 생성</h3>
              <div className="code-block">
                <pre>{`# 🔐 Nexus 인증 정보
nexusUsername=YOUR_NEXUS_USER
nexusPassword=YOUR_NEXUS_PASSWORD

# 🚀 성능 최적화 (폐쇄망 환경)
org.gradle.caching=true
org.gradle.parallel=true
org.gradle.configureondemand=true
org.gradle.jvmargs=-Xmx2g -XX:MaxMetaspaceSize=512m

# 📁 로컬 캐시 경로 (옵션)
gradle.user.home=/opt/gradle-cache

# 🌐 프록시 설정 (필요한 경우만)
systemProp.http.proxyHost=YOUR_PROXY_HOST
systemProp.http.proxyPort=8080
systemProp.http.nonProxyHosts=localhost|*.company.com|YOUR_NEXUS_HOST`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* 4. 즉시 실행 가능한 검증 명령어 */}
        <section className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔍 즉시 실행 검증 명령어 (폐쇄망 필수)</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-4">Maven 검증 단계</h3>
              <div className="code-block">
                <pre>{`# 1️⃣ Nexus 연결 확인
mvn help:evaluate -Dexpression=settings.localRepository -q -DforceStdout

# 2️⃣ Spring Boot 다운로드 테스트
mvn dependency:get \\
  -Dartifact=org.springframework.boot:spring-boot-starter-web:3.2.0

# 3️⃣ 의존성 해결 테스트
mvn dependency:resolve -DdownloadSources=true

# 4️⃣ 전체 빌드 검증
mvn clean compile

# 5️⃣ Spring Boot 실행 테스트
mvn spring-boot:run

# 🔧 문제 발생 시 디버그
mvn dependency:resolve -X | grep "Downloading from"`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Gradle 검증 단계</h3>
              <div className="code-block">
                <pre>{`# 1️⃣ Gradle 환경 확인
./gradlew --version

# 2️⃣ Nexus 연결 확인
./gradlew dependencies --configuration compileClasspath

# 3️⃣ Spring Boot 의존성 확인
./gradlew dependencies | grep spring-boot

# 4️⃣ 전체 빌드 검증
./gradlew clean build

# 5️⃣ Spring Boot 실행 테스트
./gradlew bootRun

# 🔧 문제 발생 시 디버그
./gradlew build --info | grep "Downloading"`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* 5. 폐쇄망 환경별 설정 템플릿 */}
        <section className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🏢 폐쇄망 환경별 설정 템플릿</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">환경 유형</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Nexus URL 패턴</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Repository 이름</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">인증 방식</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">🏛️ 대기업</td>
                  <td className="border border-gray-300 px-4 py-3">https://nexus.company.com:8443</td>
                  <td className="border border-gray-300 px-4 py-3">maven-public</td>
                  <td className="border border-gray-300 px-4 py-3">LDAP + SSL</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">🏢 중견기업</td>
                  <td className="border border-gray-300 px-4 py-3">http://nexus.internal:8081</td>
                  <td className="border border-gray-300 px-4 py-3">public</td>
                  <td className="border border-gray-300 px-4 py-3">ID/PW</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">🚀 스타트업</td>
                  <td className="border border-gray-300 px-4 py-3">http://10.0.1.100:8081</td>
                  <td className="border border-gray-300 px-4 py-3">maven-public</td>
                  <td className="border border-gray-300 px-4 py-3">admin/admin123</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">🔐 보안기관</td>
                  <td className="border border-gray-300 px-4 py-3">https://artifacts.secure.gov:9443</td>
                  <td className="border border-gray-300 px-4 py-3">approved-libs</td>
                  <td className="border border-gray-300 px-4 py-3">인증서 + 토큰</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. 폐쇄망 특화 트러블슈팅 */}
        <section className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🚨 폐쇄망 특화 트러블슈팅 (즉시 해결)</h2>

          <div className="space-y-6">
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">에러 증상</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">원인</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">즉시 해결 명령어</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">❌ "401 Unauthorized"</td>
                    <td className="border border-gray-300 px-4 py-3">인증 정보 오류</td>
                    <td className="border border-gray-300 px-4 py-3"><code className="bg-gray-100 px-2 py-1 rounded text-xs">curl -u user:pass http://nexus.../service/rest/v1/status</code></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">❌ "Repository offline"</td>
                    <td className="border border-gray-300 px-4 py-3">Nexus 서버 중단</td>
                    <td className="border border-gray-300 px-4 py-3"><code className="bg-gray-100 px-2 py-1 rounded text-xs">telnet nexus.company.com 8081</code></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">❌ "PKIX path building failed"</td>
                    <td className="border border-gray-300 px-4 py-3">SSL 인증서 문제</td>
                    <td className="border border-gray-300 px-4 py-3"><code className="bg-gray-100 px-2 py-1 rounded text-xs">-Dmaven.wagon.http.ssl.insecure=true</code></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">❌ "Artifact not found"</td>
                    <td className="border border-gray-300 px-4 py-3">레포지토리 경로 오류</td>
                    <td className="border border-gray-300 px-4 py-3"><code className="bg-gray-100 px-2 py-1 rounded text-xs">curl http://nexus.../repository/maven-public/</code></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">❌ "Connection timeout"</td>
                    <td className="border border-gray-300 px-4 py-3">방화벽/프록시</td>
                    <td className="border border-gray-300 px-4 py-3"><code className="bg-gray-100 px-2 py-1 rounded text-xs">curl -x proxy:8080 http://nexus.../</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-800 mb-4">⚡ 긴급 상황 대응 (SSL 우회 - 임시용)</h3>
              <div className="code-block">
                <pre>{`# 🚨 임시 SSL 우회 (개발 환경만 사용)
# Maven
export MAVEN_OPTS="-Dmaven.wagon.http.ssl.insecure=true -Dmaven.wagon.http.ssl.allowall=true"
mvn clean install

# Gradle
export GRADLE_OPTS="-Dorg.gradle.internal.http.ssl.insecure=true"
./gradlew build

# 🔐 보안 권장사항:
# 1. 임시 사용 후 즉시 SSL 인증서 정상화
# 2. 운영 환경에서는 절대 사용 금지
# 3. 인증서 담당자와 즉시 협의`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* 7. 폐쇄망 성능 최적화 */}
        <section className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">⚡ 폐쇄망 성능 최적화 (시간 단축)</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📁 로컬 캐시 최적화</h3>
              <div className="code-block">
                <pre>{`# Maven 로컬 레포지토리 SSD 이동
mkdir -p /fast-disk/maven-repo
export MAVEN_OPTS="-Dmaven.repo.local=/fast-disk/maven-repo"

# Gradle 캐시 최적화 (gradle.properties)
org.gradle.caching=true
org.gradle.parallel=true
org.gradle.daemon=true
org.gradle.jvmargs=-Xmx4g

# Spring Boot 전체 의존성 사전 다운로드
mvn dependency:go-offline \\
  -DdownloadSources=true \\
  -DdownloadJavadocs=true

# 오프라인 모드 활용
mvn clean install -o  # 오프라인 빌드`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🔄 동기화 스크립트</h3>
              <div className="code-block">
                <pre>{`#!/bin/bash
# nexus-sync.sh - 팀 전체 의존성 동기화

echo "🔄 Spring Boot 의존성 사전 다운로드..."

# 핵심 Spring Boot Starter들
STARTERS=(
    "spring-boot-starter-web"
    "spring-boot-starter-data-jpa"
    "spring-boot-starter-security"
    "spring-boot-starter-test"
    "spring-boot-starter-actuator"
)

for starter in "\${STARTERS[@]}"; do
    echo "⬇️ 다운로드: $starter"
    mvn dependency:get \\
      -Dartifact=org.springframework.boot:$starter:3.2.0
done

echo "✅ 동기화 완료! 오프라인 개발 준비됨"`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* 8. 환경별 체크리스트 */}
        <section className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">✅ 폐쇄망 환경별 초기 설정 체크리스트</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-green-800 mb-4">🏛️ 대기업 환경</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span>☐</span>
                  <span>LDAP 인증 정보 확인</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>☐</span>
                  <span>SSL 인증서 설치</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>☐</span>
                  <span>프록시 설정 적용</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>☐</span>
                  <span>방화벽 정책 확인</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>☐</span>
                  <span>보안 정책 준수</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">🏢 중견기업 환경</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span>☐</span>
                  <span>Nexus 접속 정보 확인</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>☐</span>
                  <span>기본 인증 설정</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>☐</span>
                  <span>네트워크 연결 테스트</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>☐</span>
                  <span>캐시 디렉토리 설정</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>☐</span>
                  <span>빌드 테스트 실행</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-purple-800 mb-4">🚀 스타트업 환경</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span>☐</span>
                  <span>간단 인증 설정</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>☐</span>
                  <span>로컬 Nexus 구축</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>☐</span>
                  <span>팀 설정 공유</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>☐</span>
                  <span>자동화 스크립트 적용</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>☐</span>
                  <span>문서화 완료</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. 커스텀 설정 생성기 */}
        <section className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🛠️ 환경별 커스텀 설정 생성기</h2>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">📝 당신의 환경 정보를 입력하세요</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nexus URL</label>
                  <div className="code-block">
                    <pre>예시: http://nexus.company.com:8081</pre>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Repository 이름</label>
                  <div className="code-block">
                    <pre>예시: maven-public, public, central</pre>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">인증 방식</label>
                  <div className="code-block">
                    <pre>예시: admin/password, LDAP, Token</pre>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">프록시 사용</label>
                  <div className="code-block">
                    <pre>예시: proxy.company.com:8080</pre>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">SSL 사용</label>
                  <div className="code-block">
                    <pre>예시: HTTPS, HTTP, 인증서 무시</pre>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">특수 설정</label>
                  <div className="code-block">
                    <pre>예시: 포트 변경, 경로 변경</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
              <p className="text-blue-800 text-sm">
                💡 <strong>맞춤 설정 제공</strong><br/>
                위 정보를 바탕으로 당신의 환경에 맞는 완성된 settings.xml, build.gradle, gradle.properties 파일을 생성해드립니다.
                각 템플릿의 'YOUR_NEXUS_URL', 'YOUR_USER' 등을 실제 값으로 변경하여 사용하세요.
              </p>
            </div>
          </div>
        </section>

        {/* 10. 핵심 결론 */}
        <section className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💡 폐쇄망 Nexus 성공 핵심 결론</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <h3 className="text-lg font-semibold text-green-800 mb-2">✅ 성공 포인트</h3>
              <ul className="text-green-700 space-y-1 text-sm">
                <li>• <strong>설정 단순화</strong>: maven-public 하나로 모든 해결</li>
                <li>• <strong>즉시 테스트</strong>: curl + mvn dependency:resolve</li>
                <li>• <strong>캐시 최적화</strong>: SSD + 사전 다운로드</li>
                <li>• <strong>오프라인 준비</strong>: go-offline으로 완전 독립</li>
                <li>• <strong>팀 공유</strong>: 검증된 설정 파일 공유</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <h3 className="text-lg font-semibold text-red-800 mb-2">🚨 피해야 할 실수</h3>
              <ul className="text-red-700 space-y-1 text-sm">
                <li>• <strong>복잡한 미러 설정</strong>: mirrorOf=* 사용 금지</li>
                <li>• <strong>SSL 무시 남용</strong>: 임시용으로만 사용</li>
                <li>• <strong>캐시 무시</strong>: -U 옵션 남용하지 말 것</li>
                <li>• <strong>인증 정보 노출</strong>: 코드에 직접 입력 금지</li>
                <li>• <strong>환경 혼재</strong>: 개발/운영 설정 분리 필수</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
            <p className="text-blue-800 text-center font-medium">
              🎯 <strong>폐쇄망 개발의 핵심</strong>: 초기 설정을 완벽하게 → 프로젝트 성공의 90%<br/>
              이 가이드의 템플릿을 복사해서 바로 사용하면 5분 내 Spring Boot 개발 환경 완성!
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default NexusGuide