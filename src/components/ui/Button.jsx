import { Link } from 'react-router-dom'

export default function Button({ children, variant = 'primary', size = 'md', href, onClick, className = '', ...props }) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-lg hover:shadow-xl',
    gold: 'bg-gold-500 text-white hover:bg-gold-600 focus:ring-gold-400 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500',
    white: 'bg-white text-primary-600 hover:bg-gray-100 focus:ring-primary-500 shadow-lg',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    if (href.startsWith('#')) {
      return (
        <a href={href} className={classes} onClick={onClick} {...props}>
          {children}
        </a>
      )
    }
    return (
      <Link to={href} className={classes} onClick={onClick} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
