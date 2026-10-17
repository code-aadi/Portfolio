import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Sections from './components/Sections'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Chatbot from './components/Chatbot/Chatbot'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return (<><Navbar /><main><Hero /><Sections.About /><Sections.Skills /><Projects /><Sections.Journey /><Sections.Social /><Contact /></main><Footer /><Chatbot /></>)
}
