import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import { application } from '../data/content'
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi'

export default function Application() {
  //const [activeTab, setActiveTab] = useState('gallery')
  const [sliderIndex, setSliderIndex] = useState(0)

  const slides = [
    {
      type: 'images',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-100">
            <img src={application.images[0]} alt="" className="w-full h-80 object-contain" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-100">
            <img src={application.images[1]} alt="" className="w-full h-80 object-contain" />
          </div>
        </div>
      ),
    },
    {
      type: 'terms',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-primary-600 mb-6 text-center">شروط القبول</h3>
            <ul className="space-y-4">
              {application.admissionTerms.map((term, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-primary-600 text-white text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gold-500 mb-6 text-center">متطلبات التسجيل</h3>
            <ul className="space-y-4">
              {application.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-gold-500 text-white text-xs flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      type: 'images2',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-100">
            <img src={application.images[2]} alt="" className="w-full h-80 object-contain" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-100">
            <img src={application.images[3]} alt="" className="w-full h-80 object-contain" />
          </div>
        </div>
      ),
    },
  ]

  const nextSlide = () => setSliderIndex((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setSliderIndex((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section id="apply-us" className="section-padding bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="والتسجيل" highlight="التقديم" />

        <div className="flex justify-center gap-2 mb-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSliderIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === sliderIndex ? 'bg-primary-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`الانتقال إلى الشريحة ${i + 1}`}
            />
          ))}
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="السابق"
          >
            <HiChevronRight size={24} className="text-primary-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="التالي"
          >
            <HiChevronLeft size={24} className="text-primary-600" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={sliderIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {slides[sliderIndex].content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
