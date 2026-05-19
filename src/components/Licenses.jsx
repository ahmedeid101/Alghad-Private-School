import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import { licenses } from '../data/content'

export default function Licenses() {
  return (
    <section id="licences" className="section-padding bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="التراخيص" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
        >
          {licenses.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img src={src} alt={`ترخيص ${i + 1}`} className="w-full h-48 object-cover" loading="lazy" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
