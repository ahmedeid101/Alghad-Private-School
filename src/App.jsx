import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Graduates from './pages/Graduates'
import ScrollToTop from './components/ui/ScrollToTop'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/graduates" element={<Graduates />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
