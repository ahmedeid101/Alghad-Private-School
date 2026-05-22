import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'يرجى إدخال الاسم'
    if (!form.email.trim()) errs.email = 'يرجى إدخال البريد الإلكتروني'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'بريد إلكتروني غير صالح'
    if (!form.phone.trim()) errs.phone = 'يرجى إدخال رقم الهاتف'
    if (!form.message.trim()) errs.message = 'يرجى إدخال الرسالة'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const inputClass = (name) =>
    `w-full px-4 py-3 rounded-xl border-2 text-right transition-all duration-200 outline-none ${
      errors[name]
        ? 'border-red-400 bg-red-50 focus:border-red-500'
        : 'border-gray-200 bg-white focus:border-primary-600'
    }`

  return (
    <section className="section-padding" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading title="معنا" highlight="تواصل" align="right" />
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="/alghad/alghad.jpeg" alt="تواصل معنا" className="w-full h-96 object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary-600 rounded-2xl p-8 shadow-2xl"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center text-white py-12"
              >
                <div className="w-20 h-20 rounded-full bg-green-400 flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">تم الإرسال بنجاح!</h3>
                <p className="text-gray-200">سنقوم بالرد عليك في أقرب وقت ممكن</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="الإسم"
                    className={inputClass('name')}
                  />
                  {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="البريد الالكتروني"
                    className={inputClass('email')}
                  />
                  {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="رقم الهاتف"
                    className={inputClass('phone')}
                  />
                  {errors.phone && <p className="text-red-300 text-sm mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="الرسالة"
                    rows={4}
                    className={inputClass('message')}
                  />
                  {errors.message && <p className="text-red-300 text-sm mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gold-500 hover:bg-gold-600 text-white font-bold rounded-xl transition-colors shadow-lg"
                >
                  أرسل
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
