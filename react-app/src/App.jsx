import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import DesignPatterns from './pages/DesignPatterns'
import CorePrinciples from './pages/CorePrinciples'
import DevelopmentTools from './pages/DevelopmentTools'
import AutoConfiguration from './pages/principles/AutoConfiguration'
import IoCContainer from './pages/principles/IoCContainer'
import Starters from './pages/principles/Starters'
import AOP from './pages/principles/AOP'
import Conditional from './pages/principles/Conditional'
import Actuator from './pages/principles/Actuator'
import Configuration from './pages/Configuration'
import ComparisonGuide from './pages/ComparisonGuide'
import NexusGuide from './pages/NexusGuide'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/config" element={<Configuration />} />
          <Route path="/patterns" element={<DesignPatterns />} />
          <Route path="/principles" element={<CorePrinciples />} />
          <Route path="/tools" element={<DevelopmentTools />} />
          <Route path="/principles/auto-configuration" element={<AutoConfiguration />} />
          <Route path="/principles/ioc-container" element={<IoCContainer />} />
          <Route path="/principles/starters" element={<Starters />} />
          <Route path="/principles/aop" element={<AOP />} />
          <Route path="/principles/conditional" element={<Conditional />} />
          <Route path="/principles/actuator" element={<Actuator />} />
          <Route path="/comparison" element={<ComparisonGuide />} />
          <Route path="/nexus" element={<NexusGuide />} />
        </Routes>
      </main>
    </div>
  )
}

export default App