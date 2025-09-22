import { Link } from 'react-router-dom'

function Home() {
  const features = [
    {
      title: 'Gradle 예제',
      description: '모던 빌드 도구 Gradle을 사용한 Spring Boot 프로젝트 예제',
      link: '/gradle',
      icon: '🔧'
    },
    {
      title: 'Maven 예제',
      description: '전통적인 빌드 도구 Maven을 사용한 Spring Boot 프로젝트 예제',
      link: '/maven',
      icon: '📦'
    },
    {
      title: 'Kotlin 예제',
      description: 'Kotlin 언어로 작성된 Spring Boot 애플리케이션 예제',
      link: '/kotlin',
      icon: '🎆'
    },
    {
      title: '디자인 패턴',
      description: 'Spring Boot에서 사용되는 핵심 디자인 패턴과 아키텍처 예제',
      link: '/patterns',
      icon: '🏢'
    },
    {
      title: '설정 가이드',
      description: '환경별 설정, 프로파일 관리, 자동 구성 가이드',
      link: '/config',
      icon: '⚙️'
    },
    {
      title: '완전 비교표',
      description: 'Maven vs Gradle vs application.yml 상세 비교 및 선택 가이드',
      link: '/comparison',
      icon: '📊'
    },
    {
      title: 'Nexus 폐쇄망',
      description: '폐쇄망 환경에서 Nexus를 활용한 Spring Boot 개발 완벽 가이드',
      link: '/nexus',
      icon: '🏛️'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Spring Boot Hub
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          스프링부트 개발의 진입장벽을 해소하고, 탄탄한 기초부터 고급 디자인 패턴까지<br />
          코드 중심의 예제와 함께 학습하세요.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/gradle" className="btn-primary">
            시작하기
          </Link>
          <a 
            href="https://github.com" 
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub에서 보기
          </a>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {features.map((feature, index) => (
          <Link 
            key={index} 
            to={feature.link}
            className="card hover:shadow-md transition-shadow group"
          >
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-spring-600 transition-colors">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Key Benefits */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          주요 학습 콘텐츠
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">프레임워크 핵심 기능</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 자동 구성 (Auto-configuration)</li>
              <li>• 의존성 주입 (Dependency Injection)</li>
              <li>• 스프링 시큐리티 (Spring Security)</li>
              <li>• 데이터 JPA 연동</li>
              <li>• 액추에이터 모니터링</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">아키텍처 패턴</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• MVC 아키텍처 구조</li>
              <li>• 레이어 계층 분리</li>
              <li>• 리포지토리 패턴</li>
              <li>• DTO 패턴</li>
              <li>• 빌더 패턴</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home