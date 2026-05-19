import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import { faqItems } from '../data/content'
import { HiChevronDown } from 'react-icons/hi'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="section-padding bg-gray-50" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="الشائعة" highlight="الأسئلة" />

        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 ${
                openIndex === i ? 'shadow-xl' : ''
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-right"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-gray-800 text-lg">{item.question}</span>
                <HiChevronDown
                  className={`text-primary-600 transition-transform duration-300 shrink-0 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
