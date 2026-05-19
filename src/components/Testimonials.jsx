import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import { testimonials } from '../data/content'
import { HiStar } from 'react-icons/hi'

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="عملائنا"
          highlight="آراء"
          className="text-white"
        />
        <div className="text-white text-center mb-2 text-gold-400 font-medium">ماذا يقولون عنا</div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gold-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                {testimonials[active].name[0]}
              </div>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-6">
                "{testimonials[active].text}"
              </p>
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(testimonials[active].rating)].map((_, i) => (
                  <HiStar key={i} className="text-gold-400 text-xl" />
                ))}
              </div>
              <p className="font-bold text-white text-lg">{testimonials[active].name}</p>
              <p className="text-gold-400 text-sm">{testimonials[active].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === active ? 'bg-gold-400 w-8' : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`الانتقال إلى الشهادة ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
