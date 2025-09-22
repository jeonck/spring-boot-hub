import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path
  
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-spring-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SB</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Spring Boot Hub</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              홈
            </Link>
            <Link 
              to="/gradle" 
              className={`nav-link ${isActive('/gradle') ? 'active' : ''}`}
            >
              Gradle 예제
            </Link>
            <Link 
              to="/maven" 
              className={`nav-link ${isActive('/maven') ? 'active' : ''}`}
            >
              Maven 예제
            </Link>
            <Link 
              to="/kotlin" 
              className={`nav-link ${isActive('/kotlin') ? 'active' : ''}`}
            >
              Kotlin 예제
            </Link>
            <Link 
              to="/patterns" 
              className={`nav-link ${isActive('/patterns') ? 'active' : ''}`}
            >
              디자인 패턴
            </Link>
            <Link 
              to="/config" 
              className={`nav-link ${isActive('/config') ? 'active' : ''}`}
            >
              설정 가이드
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar