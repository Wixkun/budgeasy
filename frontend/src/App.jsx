import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import Signup from './pages/Signup'

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen transition-colors duration-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <ThemeToggle /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  )
}
