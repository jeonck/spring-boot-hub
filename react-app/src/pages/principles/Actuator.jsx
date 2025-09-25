import { Link } from 'react-router-dom'
import MermaidDiagram from '../../components/MermaidDiagram'

function Actuator() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link to="/principles" className="hover:text-blue-600">핵심 원리</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">액추에이터</span>
        </div>
      </nav>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">📊 액추에이터 (Spring Boot Actuator)</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Spring Boot Actuator를 통한 애플리케이션 모니터링, 관리, 그리고 운영 환경에서의 가시성 확보 방법을 학습하세요.
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
              <strong>Spring Boot Actuator</strong>는 운영 중인 애플리케이션을 모니터링하고 관리하기 위한
              프로덕션 레디(Production-ready) 기능들을 제공하는 라이브러리입니다.
              HTTP 엔드포인트와 JMX를 통해 애플리케이션의 상태, 메트릭스, 환경 정보 등을
              외부에서 확인하고 관리할 수 있게 해줍니다.
            </p>
            <div className="mt-4 bg-white rounded-lg p-3 border">
              <p className="text-sm text-gray-600">
                <strong>핵심 기능:</strong><br/>
                • <strong>Health Checks</strong>: 애플리케이션 및 의존 서비스 상태 확인<br/>
                • <strong>Metrics</strong>: 성능, 사용량, 오류율 등 다양한 메트릭 수집<br/>
                • <strong>Environment Info</strong>: 설정, 환경 변수, 시스템 정보 조회<br/>
                • <strong>Application Management</strong>: 로그 레벨 변경, 스레드 덤프 등
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
            <h3 className="text-lg font-semibold text-gray-800 mb-4">주요 Actuator 엔드포인트</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-3">📊 모니터링 엔드포인트</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• <code>/health</code> - 애플리케이션 상태</li>
                  <li>• <code>/metrics</code> - 성능 메트릭</li>
                  <li>• <code>/prometheus</code> - Prometheus 형식 메트릭</li>
                  <li>• <code>/info</code> - 애플리케이션 정보</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-3">🔧 관리 엔드포인트</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• <code>/env</code> - 환경 설정 정보</li>
                  <li>• <code>/loggers</code> - 로그 레벨 조회/변경</li>
                  <li>• <code>/beans</code> - Spring Bean 정보</li>
                  <li>• <code>/configprops</code> - 설정 속성</li>
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
              <h4 className="font-semibold text-green-900 mb-3">📈 운영 가시성</h4>
              <ul className="text-sm text-green-800 space-y-2">
                <li>• <strong>실시간 모니터링</strong> - 애플리케이션 상태 실시간 확인</li>
                <li>• <strong>성능 메트릭</strong> - CPU, 메모리, DB 연결 등 핵심 지표</li>
                <li>• <strong>비즈니스 메트릭</strong> - 사용자 정의 비즈니스 지표 수집</li>
                <li>• <strong>트렌드 분석</strong> - 시계열 데이터로 성능 추세 파악</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-3">🔧 운영 효율성</h4>
              <ul className="text-sm text-blue-800 space-y-2">
                <li>• <strong>원격 관리</strong> - 서버 접근 없이 애플리케이션 관리</li>
                <li>• <strong>동적 설정</strong> - 재시작 없이 로그 레벨 등 변경</li>
                <li>• <strong>자동화 연동</strong> - 모니터링 도구와 쉬운 통합</li>
                <li>• <strong>알람 연동</strong> - Health Check 실패시 자동 알림</li>
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

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">🔧 기본 Actuator 설정</h3>
            <div className="bg-gray-100 rounded-lg p-4">
              <h4 className="text-md font-medium text-gray-700 mb-3">Maven 의존성</h4>
              <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>`}
              </pre>
            </div>

            <div className="mt-6 bg-gray-100 rounded-lg p-4">
              <h4 className="text-md font-medium text-gray-700 mb-3">application.yml 설정</h4>
              <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics,env
  endpoint:
    health:
      enabled: true
      show-details: when-authorized
    info:
      enabled: true`}
              </pre>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">🏥 커스텀 Health Indicator</h3>
            <div className="bg-gray-100 rounded-lg p-4">
              <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`@Component
public class CustomHealthIndicator implements HealthIndicator {

    @Override
    public Health health() {
        try {
            // 커스텀 헬스 체크 로직
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

    private boolean checkExternalService() {
        // 실제 외부 서비스 체크 로직
        return true;
    }
}`}
              </pre>
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
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <ul className="text-sm text-green-800 space-y-2">
                  <li>• 운영환경에서는 민감한 엔드포인트 비활성화</li>
                  <li>• 별도 포트 및 HTTPS 사용으로 관리 인터페이스 보호</li>
                  <li>• 인증/권한 설정으로 접근 제어</li>
                  <li>• Health Check에서 민감 정보 노출 방지</li>
                  <li>• 비즈니스 중요 지표를 우선으로 메트릭 설계</li>
                  <li>• 적절한 태그 사용으로 메트릭 분류 및 필터링</li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">❌ 주의사항</h4>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <ul className="text-sm text-red-800 space-y-2">
                  <li>• 과도한 메트릭 수집으로 인한 성능 저하</li>
                  <li>• Health Check 호출 빈도 최적화 필요</li>
                  <li>• 모든 엔드포인트 기본 노출의 보안 위험</li>
                  <li>• heapdump, threaddump 등 민감 정보 포함</li>
                  <li>• shutdown 엔드포인트 의도치 않은 활성화</li>
                  <li>• 메트릭 데이터 보존 기간 및 용량 관리</li>
                </ul>
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
                  <li>• <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Spring Boot Actuator 공식 가이드</a></li>
                  <li>• <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html#actuator.metrics" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Micrometer 메트릭 가이드</a></li>
                  <li>• <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html#actuator.endpoints.security" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Actuator 보안 설정</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">🛠️ 모니터링 도구</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <a href="https://prometheus.io/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Prometheus</a> - 메트릭 수집 및 저장</li>
                  <li>• <a href="https://grafana.com/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Grafana</a> - 메트릭 시각화 및 대시보드</li>
                  <li>• <a href="https://micrometer.io/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Micrometer</a> - 메트릭 파사드 라이브러리</li>
                  <li>• Spring Boot Admin - Actuator 기반 관리 UI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Actuator