import { motion } from 'framer-motion'

export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -8 } : undefined}
      className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-shadow duration-300 ${hover ? 'hover:shadow-2xl' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function CardImage({ src, alt, className = '' }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        loading="lazy"
      />
    </div>
  )
}

export function CardContent({ children, className = '' }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  )
}
