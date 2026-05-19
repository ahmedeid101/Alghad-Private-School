import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import { galleryImages } from '../data/content'

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="section-padding bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="مدرستنا" highlight="براعم" subtitle="معرض الصور" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {galleryImages.map((src, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelected(src)}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <img src={src} alt={`صورة ${i + 1}`} className="w-full h-48 object-cover" loading="lazy" />
            </motion.button>
          ))}
        </motion.div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gold-400 transition-colors"
            aria-label="إغلاق"
          >
            ✕
          </button>
          <img src={selected} alt="" className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl" />
        </div>
      )}
    </section>
  )
}
