import { motion } from 'framer-motion'

export default function SectionHeading({ title, subtitle, highlight, align = 'center', className = '' }) {
  const alignClass = align === 'center' ? 'text-center' : 'text-right'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${alignClass} ${className || 'text-primary-600'}`}
    >
      {subtitle && (
        <span className="inline-block text-gold-500 font-semibold text-sm md:text-base uppercase tracking-wider mb-2">
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold inline-block border-b-4 border-gold-500 pb-2 ${align === 'center' ? '' : ''}`}>
        {highlight && <span className="text-gold-500">{highlight} </span>}
        {title}
      </h2>
    </motion.div>
  )
}
