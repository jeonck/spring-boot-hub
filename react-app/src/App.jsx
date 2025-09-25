import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import GradleExamples from './pages/GradleExamples'
import MavenExamples from './pages/MavenExamples'
import KotlinExamples from './pages/KotlinExamples'
import DesignPatterns from './pages/DesignPatterns'
import CorePrinciples from './pages/CorePrinciples'
import AutoConfiguration from './pages/principles/AutoConfiguration'
import IoCContainer from './pages/principles/IoCContainer'
import Starters from './pages/principles/Starters'
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
          <Route path="/gradle" element={<GradleExamples />} />
          <Route path="/maven" element={<MavenExamples />} />
          <Route path="/kotlin" element={<KotlinExamples />} />
          <Route path="/patterns" element={<DesignPatterns />} />
          <Route path="/principles" element={<CorePrinciples />} />
          <Route path="/principles/auto-configuration" element={<AutoConfiguration />} />
          <Route path="/principles/ioc-container" element={<IoCContainer />} />
          <Route path="/principles/starters" element={<Starters />} />
          <Route path="/config" element={<Configuration />} />
          <Route path="/comparison" element={<ComparisonGuide />} />
          <Route path="/nexus" element={<NexusGuide />} />
        </Routes>
      </main>
    </div>
  )
}

export default App