import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { quickLinks } from '../data/content'

export default function QuickLinks() {
  return (
    <section className="relative -mt-16 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-2xl p-4 md:p-6"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {quickLinks.map((link, i) => (
              <Link
                key={i}
                to={link.href}
                className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-primary-50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                  <img src={link.icon} alt={link.label} className="w-7 h-7 object-contain" />
                </div>
                <span className="text-xs font-medium text-gray-700 group-hover:text-primary-600 text-center">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
