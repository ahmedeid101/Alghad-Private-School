import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './ui/Button'
import { heroSlides } from '../data/content'

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-800 via-primary-600 to-primary-900 pt-20">
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(/images/banner_img.png)' }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="relative z-20 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight">
            {heroSlides[current].title}
          </h1>
          <p className="text-xl md:text-3xl lg:text-4xl text-gold-400 font-bold mb-2">
            {heroSlides[current].subtitle}
          </p>
          <p className="text-lg md:text-2xl text-gray-200 mb-8 font-medium">
            {heroSlides[current].tagline}
          </p>
          <Button href={heroSlides[current].ctaLink} variant="gold" size="lg">
            {heroSlides[current].cta}
          </Button>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? 'bg-gold-400 w-8' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`الانتقال إلى الشريحة ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
