import { useState } from 'react'
import SectionHeading from './ui/SectionHeading'
import Button from './ui/Button'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <section className="section-padding bg-primary-600" dir="rtl">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <SectionHeading
          title="البريدية"
          highlight="النشرة"
          className="text-white"
        />
        <p className="text-gray-300 mb-8">اشترك في نشرتنا البريدية ليصلك كل جديد عن المدرسة</p>

        {subscribed ? (
          <div className="text-white text-lg font-semibold bg-green-500/20 rounded-xl py-4 px-6">
            ✓ تم الاشتراك بنجاح!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="البريد الإلكتروني"
              required
              className="flex-1 px-6 py-3 rounded-xl border-0 outline-none text-right"
            />
            <Button type="submit" variant="gold" className="shrink-0">
              اشتراك
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
