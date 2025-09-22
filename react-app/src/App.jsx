import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import GradleExamples from './pages/GradleExamples'
import MavenExamples from './pages/MavenExamples'
import KotlinExamples from './pages/KotlinExamples'
import DesignPatterns from './pages/DesignPatterns'
import Configuration from './pages/Configuration'
import ComparisonGuide from './pages/ComparisonGuide'

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
          <Route path="/config" element={<Configuration />} />
          <Route path="/comparison" element={<ComparisonGuide />} />
        </Routes>
      </main>
    </div>
  )
}

export default App