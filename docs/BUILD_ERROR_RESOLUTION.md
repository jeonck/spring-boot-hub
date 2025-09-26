# Build Error Resolution Guide

## 📋 개요
Spring Boot Hub 프로젝트에서 발생한 빌드 에러들과 그 해결 과정을 상세히 기록한 문서입니다. 향후 유사한 문제 발생 시 참고할 수 있도록 작성되었습니다.

## 🚨 발생한 주요 에러들

### 1. Mermaid 다이어그램 파싱 에러

#### 에러 내용
```
Parse error on line 8: ... F --> G{@ConditionalOnClas
```

#### 발생 위치
- **파일**: `src/pages/principles/AutoConfiguration.jsx`
- **컴포넌트**: `<MermaidDiagram>` 내부
- **라인**: 다이어그램 정의 8번째 줄

#### 원인 분석
```javascript
// 문제가 된 코드
const diagramDefinition = `
flowchart TD
    A[애플리케이션 시작] --> B[spring.factories 읽기]
    B --> C[Auto-Configuration 클래스 로드]
    C --> D[조건 평가 시작]
    D --> E[@ConditionalOnClass 확인]
    E --> F[@ConditionalOnMissingBean 확인]
    F --> G{@ConditionalOnProperty 확인}  // ← 이 부분에서 에러 발생
`
```

**분석**:
1. Mermaid.js가 `@` 기호를 LINK_ID 토큰으로 잘못 해석
2. `@ConditionalOnClass` 등의 Spring 어노테이션명이 파싱 오류 유발
3. `flowchart TD` 구문에서 특수문자 처리 문제

#### 해결 과정

**1차 시도**: @ 기호 제거
```javascript
// 실패한 접근법
E[ConditionalOnClass 확인]
F[ConditionalOnMissingBean 확인]
G{ConditionalOnProperty 확인}
```
**결과**: 여전히 파싱 에러 발생

**2차 시도**: 따옴표로 감싸기
```javascript
// 부분적 성공
E["@ConditionalOnClass 확인"]
F["@ConditionalOnMissingBean 확인"]
```
**결과**: 일부 개선되었으나 완전 해결 안됨

**최종 해결책**: 다이어그램 구조 전면 변경
```javascript
const diagramDefinition = `
graph TD
    A["애플리케이션 시작"] --> B["spring.factories 파일 스캔"]
    B --> C["자동 설정 클래스 발견"]
    C --> D["조건부 어노테이션 평가"]
    D --> E["클래스 존재 여부 확인"]
    E --> F["Bean 존재 여부 확인"]
    F --> G{"속성 값 확인"}
    G -->|조건 만족| H["Bean 생성"]
    G -->|조건 불만족| I["Bean 생성 제외"]
    H --> J["애플리케이션 컨텍스트 등록"]
`
```

**핵심 변경사항**:
- `flowchart TD` → `graph TD`
- 모든 노드 텍스트를 따옴표로 감싸기
- 어노테이션명을 설명적 텍스트로 변경
- 한글 사용으로 특수문자 문제 회피

### 2. Template Literal Build Error (Critical)

#### 에러 내용
```bash
✘ [ERROR] Unterminated string literal [plugin vite:esbuild]

    src/pages/principles/Actuator.jsx:1010:26:
      1010 │ server.ssl.key-store-password=${MANAGEMENT_KEYSTORE_PASSWORD}
           ╵                           ^

  The line above contains a template literal expression.
  Did you mean to escape it with a backslash?
```

#### 발생 위치
- **파일**: `src/pages/principles/Actuator.jsx`
- **라인**: 1010
- **빌드 단계**: vite:esbuild 플러그인 처리 중

#### 원인 분석
```javascript
// 문제가 된 코드 (Actuator.jsx 내부)
<pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`# SSL 설정 예시
server.port=8443
server.ssl.key-store=classpath:keystore.jks
server.ssl.key-store-password=${MANAGEMENT_KEYSTORE_PASSWORD}  // ← 문제 발생
server.ssl.key-alias=tomcat`}
</pre>
```

**분석**:
1. JSX 내부의 템플릿 리터럴에서 `${MANAGEMENT_KEYSTORE_PASSWORD}` 패턴이 문제
2. esbuild가 이를 JavaScript 템플릿 리터럴 표현식으로 해석
3. 하지만 해당 변수가 정의되지 않아 "Unterminated string literal" 에러 발생
4. 백틱(`) 내부에서 `${}` 패턴이 자동으로 템플릿 리터럴로 처리됨

#### 해결 과정

**1차 시도**: 백슬래시 이스케이프
```javascript
// 시도한 방법
server.ssl.key-store-password=\${MANAGEMENT_KEYSTORE_PASSWORD}
```
**결과**: 여전히 파싱 에러 발생

**2차 시도**: 다른 이스케이프 방법
```javascript
// 시도한 방법들
server.ssl.key-store-password=$\{MANAGEMENT_KEYSTORE_PASSWORD}
server.ssl.key-store-password=\$\{MANAGEMENT_KEYSTORE_PASSWORD}
```
**결과**: 모두 실패

**3차 시도**: 변수 분리
```javascript
// 시도한 방법
const envVar = '${MANAGEMENT_KEYSTORE_PASSWORD}';
// 템플릿에서 사용
server.ssl.key-store-password=${envVar}
```
**결과**: 복잡성 증가, 근본 해결 안됨

**최종 해결책**: 파일 전체 재작성
- Actuator.jsx를 완전히 새로 작성
- 복잡한 템플릿 리터럴 구조 단순화
- `${}` 패턴이 포함된 코드 예시를 일반 텍스트로 변경
- 5섹션 구조는 유지하되 코드 복잡도 대폭 감소

#### 새로운 Actuator.jsx 구조
```javascript
// 안전한 코드 예시 방식
<pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`@Component
public class CustomHealthIndicator implements HealthIndicator {

    @Override
    public Health health() {
        try {
            boolean isHealthy = checkExternalService();

            if (isHealthy) {
                return Health.up()
                           .withDetail("service", "External API")
                           .withDetail("status", "Connected")
                           .build();
            } else {
                return Health.down()
                           .withDetail("service", "External API")
                           .withDetail("error", "Connection failed")
                           .build();
            }
        } catch (Exception e) {
            return Health.down(e).build();
        }
    }
}`}
</pre>
```

## 🔍 에러 해결 전략

### 1. 체계적 접근법
1. **에러 로그 정확한 분석**: 라인 번호와 에러 타입 확인
2. **원인 파악**: 구문적 문제 vs 의미적 문제 구분
3. **단계적 해결**: 작은 수정부터 시작하여 점진적 개선
4. **최후 수단**: 전체 재작성도 고려

### 2. 템플릿 리터럴 에러 방지 가이드라인

#### 피해야 할 패턴들
```javascript
// 위험한 패턴들
{`some text with ${undefined_variable}`}
{`config.property=${ENVIRONMENT_VARIABLE}`}
{`path/to/resource=${DYNAMIC_PATH}`}
```

#### 안전한 대안들
```javascript
// 안전한 패턴들
{`some text with dollar{VARIABLE_NAME}`}          // {} 대신 다른 기호
{'some text with ${VARIABLE_NAME}'}               // 단일 따옴표 사용
{`some text with ` + '${VARIABLE_NAME}'}          // 문자열 연결
```

### 3. Mermaid 다이어그램 모범 사례

#### 권장 구조
```javascript
const diagramDefinition = `
graph TD
    A["시작 단계"] --> B["처리 단계"]
    B --> C{"조건 확인"}
    C -->|Yes| D["성공 경로"]
    C -->|No| E["실패 경로"]
`
```

#### 피해야 할 요소들
- 특수문자 (@, #, $) 직접 사용
- 복잡한 어노테이션명 그대로 사용
- `flowchart` 대신 `graph` 사용 권장
- 따옴표 없이 노드 텍스트 정의

## 📊 해결 결과 비교

### Before (에러 상태)
```bash
# GitHub Actions 빌드 결과
❌ Run npm run build
✘ [ERROR] Unterminated string literal
Build failed with 1 error:
error: Transformation failed with 1 error
```

### After (해결 상태)
```bash
# GitHub Actions 빌드 결과
✅ Run npm run build
> spring-boot-hub@1.0.0 build
> vite build

vite v4.5.14 building for production...
transforming...
✓ 1799 modules transformed.
rendering chunks...
computing gzip size...
✓ built in 4.90s
```

### 배포 상태 비교

#### 실패한 빌드들
- **Run #21**: feat: Complete all 6 Core Principles pages → failure
- **Run #22**: fix: Escape template literal syntax → failure

#### 성공한 빌드
- **Run #23**: fix: Resolve template literal build error → success ✅

## ⚠️ 주의사항 및 예방책

### 1. 템플릿 리터럴 사용 시 주의점
```javascript
// ❌ 위험: 정의되지 않은 변수 참조
{`환경변수: ${ENV_VAR}`}

// ✅ 안전: 변수 미리 정의
const envVar = process.env.ENV_VAR || 'default';
{`환경변수: ${envVar}`}

// ✅ 안전: 단순 텍스트로 처리
{`환경변수: $\{ENV_VAR\}`}
```

### 2. 빌드 전 로컬 테스트 필수
```bash
# 로컬에서 반드시 확인
npm run build
npm run preview
```

### 3. 에러 발생 시 체크리스트
- [ ] 템플릿 리터럴 내 정의되지 않은 변수 확인
- [ ] 특수문자 이스케이프 처리 확인
- [ ] Mermaid 다이어그램 구문 검증
- [ ] JSX 문법 오류 검토
- [ ] import/export 구문 정확성 확인

## 🎯 학습한 교훈

### 1. 복잡성보다 단순성
- 복잡한 템플릿 리터럴보다 단순한 문자열이 안전함
- 기능을 완전히 구현하는 것보다 안정적으로 작동하는 것이 우선

### 2. 빌드 도구의 특성 이해
- esbuild는 템플릿 리터럴을 적극적으로 파싱함
- Vite + React 환경에서의 특수문자 처리 제한사항 존재

### 3. 단계적 해결의 중요성
- 한 번에 모든 것을 고치려 하지 말고 점진적 접근
- 각 수정 후 즉시 빌드 테스트 수행

## 📚 참고 자료

- [Vite Build Options](https://vitejs.dev/config/build-options.html)
- [esbuild Template Literals](https://esbuild.github.io/content-types/#javascript)
- [Mermaid Syntax Documentation](https://mermaid.js.org/intro/syntax-reference.html)
- [React JSX Transform](https://react.dev/blog/2020/09/22/introducing-the-new-jsx-transform)

---

**문서 생성일**: 2025년 9월 26일
**최종 업데이트**: 빌드 에러 완전 해결 후
**상태**: 문제 해결 완료 ✅