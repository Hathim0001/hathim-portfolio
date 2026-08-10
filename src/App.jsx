import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import AISection from './components/AISection'
import Engineering from './components/Engineering'
import GitHubSection from './components/GitHubSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  useEffect(() => {
    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#050810] text-slate-200">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <AISection />
      <Engineering />
      <GitHubSection />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}
