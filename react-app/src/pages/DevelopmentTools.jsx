import { Link } from 'react-router-dom'

function DevelopmentTools() {
  const toolCategories = [
    {
      title: '코드 생산성 및 보일러플레이트 감소',
      icon: '⚡',
      color: 'blue',
      tools: [
        {
          name: 'Lombok',
          description: '@Getter, @Setter, @Data, @Builder 등의 애너테이션으로 보일러플레이트 코드 자동 생성',
          features: ['컴파일 타임 코드 생성', 'JPA 엔티티/DTO 작성 최적화', 'IDE 통합 지원'],
          useCase: 'Entity, DTO 클래스의 getter/setter 자동 생성'
        },
        {
          name: 'MapStruct',
          description: '객체 매핑 자동화 도구 (엔티티 ↔ DTO 변환)',
          features: ['@Mapper 애너테이션', '성능 효율적 매핑', '타입 안전성'],
          useCase: 'Entity와 DTO 간 자동 매핑 코드 생성'
        },
        {
          name: 'AutoValue / Immutables',
          description: '불변 객체 생성 간소화',
          features: ['@Value.Immutable', '값 객체 생성', 'Lombok 대안'],
          useCase: 'Value Object, Data Transfer Object 생성'
        }
      ]
    },
    {
      title: '데이터 접근 및 ORM',
      icon: '🗄️',
      color: 'green',
      tools: [
        {
          name: 'Spring Data JPA',
          description: 'JPA 기반 리포지토리 인터페이스 자동 구현',
          features: ['@Repository 자동 구현', '메서드 이름 규칙 쿼리', 'CRUD 자동 생성'],
          useCase: 'findByName, existsById 등 간단한 쿼리 메서드'
        },
        {
          name: 'QueryDSL',
          description: '타입 안전한 동적 쿼리 작성',
          features: ['컴파일 타임 쿼리 검증', 'IDE 자동완성', '복잡한 쿼리 지원'],
          useCase: '복잡한 검색 조건이 있는 동적 쿼리'
        },
        {
          name: 'Jooq',
          description: 'SQL 중심의 타입 안전 쿼리 생성',
          features: ['스키마 기반 코드 생성', 'SQL 친화적', '타입 안전성'],
          useCase: 'SQL을 직접 제어하고 싶은 복잡한 쿼리'
        }
      ]
    },
    {
      title: 'REST API 개발',
      icon: '🌐',
      color: 'purple',
      tools: [
        {
          name: 'Spring Web / WebFlux',
          description: 'RESTful API 개발 (MVC & 반응형)',
          features: ['@RestController', '@GetMapping', '반응형 프로그래밍'],
          useCase: 'REST API 엔드포인트 구현'
        },
        {
          name: 'OpenAPI / Swagger',
          description: 'API 명세 자동 생성 및 문서화',
          features: ['API 문서 자동 생성', 'Swagger UI', '클라이언트 코드 생성'],
          useCase: 'API 문서화 및 테스트 인터페이스 제공'
        },
        {
          name: 'Rest Assured',
          description: 'REST API 테스트 자동화',
          features: ['간결한 테스트 문법', 'BDD 스타일', '응답 검증'],
          useCase: 'API 통합 테스트 및 검증'
        }
      ]
    },
    {
      title: '템플릿 엔진',
      icon: '📄',
      color: 'orange',
      tools: [
        {
          name: 'Thymeleaf',
          description: '서버 측 HTML 템플릿 렌더링',
          features: ['Spring Boot 통합', '동적 UI 생성', '표준 HTML 문법'],
          useCase: '서버 사이드 렌더링 웹 페이지'
        },
        {
          name: 'Freemarker',
          description: '고성능 템플릿 엔진',
          features: ['커스터마이징 용이', '복잡한 뷰 렌더링', 'Thymeleaf 대안'],
          useCase: '복잡한 템플릿 로직이 필요한 경우'
        }
      ]
    },
    {
      title: '테스트 도구',
      icon: '🧪',
      color: 'red',
      tools: [
        {
          name: 'JUnit 5',
          description: '단위 테스트 및 통합 테스트',
          features: ['@SpringBootTest', '파라미터화 테스트', 'Nested 테스트'],
          useCase: '단위/통합 테스트 작성'
        },
        {
          name: 'Mockito',
          description: '모의 객체(Mock) 생성 및 테스트',
          features: ['의존성 모킹', '@MockBean', 'Behavior 검증'],
          useCase: '외부 의존성을 격리한 단위 테스트'
        },
        {
          name: 'Testcontainers',
          description: 'Docker 컨테이너 기반 통합 테스트',
          features: ['실제 환경 테스트', 'DB/메시지큐 테스트', '격리된 테스트'],
          useCase: '데이터베이스, 외부 서비스와의 통합 테스트'
        }
      ]
    },
    {
      title: '모니터링 및 로깅',
      icon: '📊',
      color: 'indigo',
      tools: [
        {
          name: 'Spring Boot Actuator',
          description: '애플리케이션 상태 모니터링',
          features: ['/actuator 엔드포인트', '헬스 체크', '메트릭 제공'],
          useCase: '운영 환경 애플리케이션 모니터링'
        },
        {
          name: 'Micrometer',
          description: '메트릭 수집 및 모니터링 통합',
          features: ['Prometheus 연동', 'Grafana 통합', '분산 추적'],
          useCase: '모니터링 시스템과의 메트릭 연동'
        },
        {
          name: 'Logback / SLF4J',
          description: '로깅 프레임워크',
          features: ['구조화된 로깅', '로그 레벨 제어', '다양한 Appender'],
          useCase: '애플리케이션 로그 관리 및 분석'
        }
      ]
    },
    {
      title: '빌드 및 배포',
      icon: '🔧',
      color: 'yellow',
      tools: [
        {
          name: 'Maven / Gradle',
          description: '프로젝트 빌드 및 의존성 관리',
          features: ['스타터 의존성', '플러그인 생태계', '빌드 자동화'],
          useCase: '프로젝트 빌드 및 의존성 관리'
        },
        {
          name: 'Spring Boot DevTools',
          description: '개발 중 빠른 리로딩',
          features: ['자동 재시작', '리로드 기능', '개발 생산성 향상'],
          useCase: '개발 중 코드 변경 시 즉시 반영'
        },
        {
          name: 'JHipster',
          description: '전체 애플리케이션 생성 도구',
          features: ['풀스택 코드 생성', '엔티티 생성', 'UI 코드 자동화'],
          useCase: 'Spring Boot + React/Angular 풀스택 프로젝트 생성'
        }
      ]
    },
    {
      title: '비동기 및 메시징',
      icon: '📡',
      color: 'teal',
      tools: [
        {
          name: 'Spring Kafka',
          description: 'Apache Kafka 통합',
          features: ['@KafkaListener', '메시지 기반 처리', '분산 스트리밍'],
          useCase: '대용량 메시지 스트리밍 처리'
        },
        {
          name: 'Spring AMQP',
          description: 'RabbitMQ 기반 메시지 큐',
          features: ['메시지 큐 처리', '@RabbitListener', '신뢰성 있는 메시징'],
          useCase: '메시지 기반 비동기 처리'
        },
        {
          name: 'Project Reactor',
          description: '반응형 프로그래밍 지원',
          features: ['비동기 스트림', 'WebFlux 통합', '대용량 처리'],
          useCase: '대규모 트래픽의 비동기 처리'
        }
      ]
    },
    {
      title: '보안',
      icon: '🔒',
      color: 'gray',
      tools: [
        {
          name: 'Spring Security',
          description: '인증 및 권한 관리',
          features: ['OAuth2 지원', 'JWT 토큰', '다양한 인증 방식'],
          useCase: '웹 애플리케이션 보안 구현'
        },
        {
          name: 'Keycloak',
          description: '외부 IDP 인증/인가',
          features: ['SSO 구현', '다중 프로토콜', '사용자 관리'],
          useCase: '중앙화된 인증 서버 구축'
        }
      ]
    },
    {
      title: '기타 유용한 도구',
      icon: '🛠️',
      color: 'pink',
      tools: [
        {
          name: 'Flyway / Liquibase',
          description: '데이터베이스 마이그레이션',
          features: ['스키마 버전 관리', '자동 마이그레이션', 'SQL/XML 지원'],
          useCase: '데이터베이스 스키마 변경 관리'
        },
        {
          name: 'Spring Cloud',
          description: '마이크로서비스 아키텍처',
          features: ['서비스 디스커버리', 'Config Server', '회로 차단기'],
          useCase: '분산 마이크로서비스 시스템 구축'
        },
        {
          name: 'Docker Compose',
          description: '컨테이너화 및 환경 구성',
          features: ['멀티 컨테이너 관리', '환경 격리', 'CI/CD 통합'],
          useCase: '개발/테스트 환경 컨테이너 구성'
        }
      ]
    }
  ]

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'border-blue-200 bg-blue-50 text-blue-800',
      green: 'border-green-200 bg-green-50 text-green-800',
      purple: 'border-purple-200 bg-purple-50 text-purple-800',
      orange: 'border-orange-200 bg-orange-50 text-orange-800',
      red: 'border-red-200 bg-red-50 text-red-800',
      indigo: 'border-indigo-200 bg-indigo-50 text-indigo-800',
      yellow: 'border-yellow-200 bg-yellow-50 text-yellow-800',
      teal: 'border-teal-200 bg-teal-50 text-teal-800',
      gray: 'border-gray-200 bg-gray-50 text-gray-800',
      pink: 'border-pink-200 bg-pink-50 text-pink-800'
    }
    return colorMap[color] || colorMap.blue
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">🛠️ Spring Boot 개발 도구</h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          개발 생산성을 높이고 코드 작성 및 유지보수를 간소화하는 다양한 라이브러리와 프레임워크를 소개합니다.
          보일러플레이트 코드 감소부터 모니터링, 배포까지 다양한 영역에서 활용할 수 있는 도구들을 카테고리별로 정리했습니다.
        </p>
      </div>

      {/* 목차 */}
      <div id="table-of-contents" className="card bg-gray-50 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">📋 카테고리별 도구 목차</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {toolCategories.map((category, index) => (
            <a
              key={index}
              href={`#category-${index}`}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white transition-colors"
            >
              <span className="text-2xl">{category.icon}</span>
              <div className="flex-1">
                <div className="font-medium text-gray-900">{category.title}</div>
                <div className="text-sm text-gray-600">{category.tools.length}개 도구</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* 카테고리별 도구들 */}
      <div className="space-y-12">
        {toolCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} id={`category-${categoryIndex}`} className="card">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">{category.icon}</span>
                <h2 className="text-2xl font-semibold text-gray-900">{category.title}</h2>
              </div>
              <a href="#table-of-contents" className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                ↑ 목차로 가기
              </a>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {category.tools.map((tool, toolIndex) => (
                <div key={toolIndex} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getColorClasses(category.color)}`}>
                      {category.title.split(' ')[0]}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {tool.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">주요 특징</h4>
                    <div className="flex flex-wrap gap-2">
                      {tool.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-3">
                    <h4 className="text-sm font-medium text-gray-700 mb-1">활용 사례</h4>
                    <p className="text-sm text-gray-600 italic">
                      {tool.useCase}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 마무리 섹션 */}
      <div className="card bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 mt-12">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🚀 다음 단계</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            이러한 도구들을 프로젝트에 적용해보고 싶다면, 각 도구의 공식 문서를 참고하여
            점진적으로 도입해보세요. 모든 도구를 한번에 사용할 필요는 없으며,
            프로젝트의 요구사항에 맞는 도구를 선별적으로 활용하는 것이 중요합니다.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/principles"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              핵심 원리 학습하기 →
            </Link>
            <Link
              to="/gradle"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              실제 예제 보기 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DevelopmentTools