import { Link } from 'react-router-dom'

function CorePrinciples() {
  const principles = [
    {
      title: '자동 설정',
      description: 'Spring Boot의 핵심 기능인 Auto-Configuration의 동작 원리와 커스텀 구현 방법',
      link: '/principles/auto-configuration',
      icon: '🔧',
      status: '완료',
      topics: ['조건부 어노테이션', 'spring.factories', '커스텀 자동 설정', '디버깅 도구']
    },
    {
      title: 'IoC Container',
      description: '제어의 역전과 의존성 주입의 핵심 개념 및 Spring Container의 동작 방식',
      link: '/principles/ioc-container',
      icon: '🔄',
      status: '완료',
      topics: ['의존성 주입', 'Bean 생명주기', 'Bean Scope', '생명주기 콜백']
    },
    {
      title: 'AOP',
      description: '관점 지향 프로그래밍을 통한 횡단 관심사 분리와 Spring AOP 구현',
      link: '/principles/aop',
      icon: '🎯',
      status: '준비중',
      topics: ['Aspect', 'Pointcut', 'Advice', 'Proxy Pattern']
    },
    {
      title: '스타터 의존성',
      description: 'Spring Boot Starter의 구조와 의존성 관리 메커니즘',
      link: '/principles/starters',
      icon: '📦',
      status: '완료',
      topics: ['Starter 구조', '의존성 전이', 'BOM', '버전 관리']
    },
    {
      title: '조건부 설정',
      description: 'Conditional 어노테이션을 활용한 유연한 설정 시스템',
      link: '/principles/conditional',
      icon: '⚙️',
      status: '준비중',
      topics: ['@ConditionalOnClass', '@ConditionalOnBean', 'Profile', 'Environment']
    },
    {
      title: '액추에이터',
      description: 'Spring Boot Actuator를 통한 애플리케이션 모니터링과 관리',
      link: '/principles/actuator',
      icon: '📊',
      status: '준비중',
      topics: ['Health Check', 'Metrics', 'Info Endpoint', 'Custom Actuator']
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">⚡ Spring Boot 핵심 원리</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Spring Boot의 핵심 메커니즘과 동작 원리를 깊이 있게 이해하고,
          실제 구현 예시와 모범 사례를 통해 전문성을 높여보세요.
        </p>
      </div>

      <div className="space-y-8">
        {/* 핵심 원리 카드들 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <div key={index} className="card group hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{principle.icon}</div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  principle.status === '완료'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {principle.status}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {principle.title}
              </h3>

              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {principle.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">주요 주제</h4>
                <div className="flex flex-wrap gap-2">
                  {principle.topics.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {principle.status === '완료' ? (
                <Link
                  to={principle.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  자세히 보기 →
                </Link>
              ) : (
                <span className="text-gray-400 font-medium text-sm">
                  곧 업데이트 예정
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CorePrinciples