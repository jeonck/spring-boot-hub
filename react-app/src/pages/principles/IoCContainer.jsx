import { Link } from 'react-router-dom'
import MermaidDiagram from '../../components/MermaidDiagram'

function IoCContainer() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link to="/principles" className="hover:text-blue-600">핵심 원리</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">IoC Container</span>
        </div>
      </nav>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">🔄 제어의 역전 (IoC Container)</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Spring Framework의 핵심인 IoC Container와 의존성 주입의 동작 원리를 깊이 있게 알아보세요.
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
            <p className="text-gray-700 mb-4">
              <strong>제어의 역전(IoC, Inversion of Control)</strong>은 객체의 생성과 의존성 관리의 제어권을
              개발자가 아닌 프레임워크가 가지는 설계 원칙입니다. Spring의 IoC Container는 이 원칙을 구현한 핵심 컴포넌트로,
              객체의 생명주기를 관리하고 의존성을 자동으로 주입합니다.
            </p>
            <p className="text-gray-700">
              전통적인 방식에서는 객체가 직접 의존 객체를 생성하고 관리했지만, IoC에서는 이 역할을 컨테이너가 담당하여
              <strong>의존성 주입(Dependency Injection)</strong>을 통해 객체 간의 결합도를 낮추고 유연성을 높입니다.
            </p>
          </div>
        </div>

        {/* 동작 원리 다이어그램 */}
        <div id="working-principle" className="card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">🎨 동작 원리</h2>
            <a href="#table-of-contents" className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
              ↑ 목차로 가기
            </a>
          </div>
          <MermaidDiagram
            chart={`
              graph TD
                  A["Spring 애플리케이션 시작"] --> B["컴포넌트 스캔"]
                  B --> C["Bean 정의 수집"]
                  C --> D["의존성 분석"]

                  D --> E["Bean 생성 순서 결정"]
                  E --> F{"순환 의존성<br/>체크"}
                  F -->|No Cycle| G["Bean 인스턴스 생성"]
                  F -->|Cycle Detected| H["순환 의존성 해결<br/>또는 오류"]

                  G --> I["의존성 주입 실행"]
                  I --> J["초기화 메서드 호출"]
                  J --> K["Bean 등록 완료"]

                  H --> L["애플리케이션 시작 실패"]
                  K --> M["Application Context<br/>준비 완료"]

                  classDef startEnd fill:#e1f5fe,stroke:#01579b,stroke-width:2px
                  classDef decision fill:#fff3e0,stroke:#ef6c00,stroke-width:2px
                  classDef process fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
                  classDef error fill:#ffebee,stroke:#c62828,stroke-width:2px

                  class A,M startEnd
                  class F decision
                  class B,C,D,E,G,I,J,K process
                  class H,L error
            `}
            className="mb-6"
          />
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
              <h4 className="font-semibold text-green-900 mb-3">🔗 낮은 결합도</h4>
              <ul className="text-sm text-green-800 space-y-2">
                <li>• 객체 간 직접적인 의존성 제거</li>
                <li>• 인터페이스 기반 설계 촉진</li>
                <li>• 모듈 간 독립성 향상</li>
                <li>• 코드 변경 영향 범위 최소화</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-3">🧪 테스트 용이성</h4>
              <ul className="text-sm text-blue-800 space-y-2">
                <li>• Mock 객체 주입 간편</li>
                <li>• 단위 테스트 작성 용이</li>
                <li>• 테스트 격리성 보장</li>
                <li>• TDD 개발 방식 지원</li>
              </ul>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-900 mb-3">♻️ 재사용성</h4>
              <ul className="text-sm text-purple-800 space-y-2">
                <li>• 컴포넌트 재사용성 증대</li>
                <li>• 설정 기반 구성 변경</li>
                <li>• 플러그인 아키텍처 지원</li>
                <li>• 확장 가능한 구조</li>
              </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-900 mb-3">🏗️ 생명주기 관리</h4>
              <ul className="text-sm text-yellow-800 space-y-2">
                <li>• 객체 생성/소멸 자동화</li>
                <li>• 싱글톤/프로토타입 스코프 관리</li>
                <li>• 리소스 해제 자동화</li>
                <li>• 초기화/소멸 콜백 지원</li>
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

          {/* 전통적인 방식 vs IoC 방식 비교 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">🔄 전통적인 방식 vs IoC 방식 비교</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-red-700 mb-3">❌ 전통적인 방식 (높은 결합도)</h4>
                <div className="code-block">
                  <pre>{`public class OrderService {
    private PaymentService paymentService;
    private InventoryService inventoryService;
    private EmailService emailService;

    public OrderService() {
        // 직접 의존성 생성 - 강한 결합
        this.paymentService = new PaymentService();
        this.inventoryService = new InventoryService();
        this.emailService = new EmailService();
    }

    public void processOrder(Order order) {
        // 비즈니스 로직
        paymentService.charge(order.getAmount());
        inventoryService.reserve(order.getItems());
        emailService.sendConfirmation(order.getEmail());
    }
}`}</pre>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-green-700 mb-3">✅ IoC 방식 (낮은 결합도)</h4>
                <div className="code-block">
                  <pre>{`@Service
public class OrderService {
    private final PaymentService paymentService;
    private final InventoryService inventoryService;
    private final EmailService emailService;

    // Constructor Injection - IoC Container가 주입
    public OrderService(PaymentService paymentService,
                       InventoryService inventoryService,
                       EmailService emailService) {
        this.paymentService = paymentService;
        this.inventoryService = inventoryService;
        this.emailService = emailService;
    }

    public void processOrder(Order order) {
        // 동일한 비즈니스 로직
        paymentService.charge(order.getAmount());
        inventoryService.reserve(order.getItems());
        emailService.sendConfirmation(order.getEmail());
    }
}`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* 의존성 주입 방법들 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">💉 의존성 주입 방법</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-green-700 mb-3">✅ Constructor Injection (권장)</h4>
                <div className="code-block">
                  <pre>{`@Service
public class UserService {
    private final UserRepository userRepository;
    private final EmailService emailService;

    // 생성자 주입 - 불변성 보장, 필수 의존성 명시
    public UserService(UserRepository userRepository, EmailService emailService) {
        this.userRepository = userRepository;
        this.emailService = emailService;
    }

    // @Autowired 생략 가능 (생성자가 하나인 경우)
}`}</pre>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-yellow-700 mb-3">⚠️ Setter Injection (선택적 의존성)</h4>
                <div className="code-block">
                  <pre>{`@Service
public class NotificationService {
    private EmailService emailService;
    private SmsService smsService;

    @Autowired(required = false)  // 선택적 의존성
    public void setEmailService(EmailService emailService) {
        this.emailService = emailService;
    }

    @Autowired(required = false)
    public void setSmsService(SmsService smsService) {
        this.smsService = smsService;
    }

    public void sendNotification(String message) {
        if (emailService != null) {
            emailService.send(message);
        }
        if (smsService != null) {
            smsService.send(message);
        }
    }
}`}</pre>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-red-700 mb-3">❌ Field Injection (비권장)</h4>
                <div className="code-block">
                  <pre>{`@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;  // 테스트 어려움

    @Autowired
    private PriceCalculator priceCalculator;      // 불변성 보장 불가

    // 생성자나 setter가 없어 테스트 시 Mock 주입이 어려움
}`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Bean 생명주기 관리 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">🔄 Bean 생명주기 관리</h3>
            <div className="code-block">
              <pre>{`@Component
public class DatabaseConnectionManager {

    private Connection connection;

    // 1. Bean 생성 후 초기화
    @PostConstruct
    public void initialize() {
        System.out.println("데이터베이스 연결 초기화");
        // connection = createConnection();
    }

    // 2. Bean 소멸 전 정리
    @PreDestroy
    public void cleanup() {
        System.out.println("데이터베이스 연결 해제");
        if (connection != null) {
            // connection.close();
        }
    }

    // InitializingBean 인터페이스 구현 방식
    @Component
    public class AlternativeLifecycleBean implements InitializingBean, DisposableBean {

        @Override
        public void afterPropertiesSet() throws Exception {
            // 초기화 로직
            System.out.println("InitializingBean.afterPropertiesSet() 호출");
        }

        @Override
        public void destroy() throws Exception {
            // 소멸 로직
            System.out.println("DisposableBean.destroy() 호출");
        }
    }
}

// 설정 클래스에서 Bean 정의
@Configuration
public class AppConfig {

    @Bean(initMethod = "customInit", destroyMethod = "customDestroy")
    public MyService myService() {
        return new MyService();
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
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <ul className="text-sm text-green-800 space-y-2">
                  <li>• <strong>Constructor Injection</strong> 우선 사용</li>
                  <li>• <strong>final 키워드</strong>로 불변성 보장</li>
                  <li>• <strong>인터페이스 기반 설계</strong>로 결합도 최소화</li>
                  <li>• <strong>@Component 스캔</strong> 활용한 자동 등록</li>
                  <li>• <strong>단일 책임 원칙</strong> 준수</li>
                  <li>• <strong>순환 의존성</strong> 방지</li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">❌ 주의사항</h4>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <ul className="text-sm text-red-800 space-y-2">
                  <li>• <strong>Field Injection</strong> 사용 지양</li>
                  <li>• <strong>God Object</strong> 패턴 방지</li>
                  <li>• <strong>과도한 의존성</strong> 주입 지양</li>
                  <li>• <strong>런타임 의존성</strong> 체크 부족</li>
                  <li>• <strong>Bean Scope</strong> 무분별한 사용</li>
                  <li>• <strong>정적 팩토리 메서드</strong> 남용</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bean Scope 설명 */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🔢 Bean Scope 종류</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">🎯 Singleton (기본값)</h4>
                <p className="text-sm text-blue-800">IoC Container당 하나의 인스턴스만 생성</p>
                <div className="code-block mt-2">
                  <pre className="text-xs">{`@Component  // 기본적으로 Singleton
public class SingletonService {}`}</pre>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">🔄 Prototype</h4>
                <p className="text-sm text-green-800">요청할 때마다 새로운 인스턴스 생성</p>
                <div className="code-block mt-2">
                  <pre className="text-xs">{`@Component
@Scope("prototype")
public class PrototypeService {}`}</pre>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-900 mb-2">🌐 Request (Web)</h4>
                <p className="text-sm text-yellow-800">HTTP 요청당 하나의 인스턴스</p>
                <div className="code-block mt-2">
                  <pre className="text-xs">{`@Component
@Scope("request")
public class RequestScopedService {}`}</pre>
                </div>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-2">📅 Session (Web)</h4>
                <p className="text-sm text-purple-800">HTTP 세션당 하나의 인스턴스</p>
                <div className="code-block mt-2">
                  <pre className="text-xs">{`@Component
@Scope("session")
public class SessionScopedService {}`}</pre>
                </div>
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
                  <li>• <a href="https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Spring IoC Container 공식 가이드</a></li>
                  <li>• <a href="https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-dependencies" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">의존성 주입 상세 가이드</a></li>
                  <li>• <a href="https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-factory-scopes" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Bean Scope 완전 가이드</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">🛠️ 실용 도구</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <code className="bg-gray-200 px-2 py-1 rounded">@PostConstruct</code> / <code className="bg-gray-200 px-2 py-1 rounded">@PreDestroy</code> 생명주기 관리</li>
                  <li>• <code className="bg-gray-200 px-2 py-1 rounded">@Qualifier</code>로 Bean 구별</li>
                  <li>• <code className="bg-gray-200 px-2 py-1 rounded">@Primary</code>로 우선순위 지정</li>
                  <li>• <code className="bg-gray-200 px-2 py-1 rounded">ApplicationContext</code>로 런타임 Bean 접근</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Back to index */}
        <div className="text-center">
          <Link
            to="/principles"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← 핵심 원리 목록으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  )
}

export default IoCContainer