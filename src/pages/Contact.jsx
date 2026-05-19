import { Helmet } from 'react-helmet-async'
import SectionHeading from '../components/ui/SectionHeading'
import ContactForm from '../components/ContactForm'
import FAQ from '../components/FAQ'
import { contactInfo } from '../data/content'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>تواصل معنا | مدرسة الغد الخاصة</title>
        <meta name="description" content="تواصل مع مدرسة الغد الخاصة - هاتف، بريد إلكتروني، أو عبر نموذج الاتصال" />
      </Helmet>

      <div className="pt-24 pb-8 bg-gradient-to-br from-primary-700 to-primary-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">تواصل معنا</h1>
          <p className="text-gray-300">نحن هنا لمساعدتك</p>
        </div>
      </div>

      <section className="section-padding bg-white" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="والمعلومات" highlight="العنوان" subtitle="كيف تصل إلينا" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="font-bold text-primary-600 mb-2">العنوان</h3>
              <p className="text-gray-600 text-sm">{contactInfo.address}</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="font-bold text-primary-600 mb-2">البريد الإلكتروني</h3>
              <p className="text-gray-600 text-sm" dir="ltr">{contactInfo.email}</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-bold text-primary-600 mb-2">الهاتف</h3>
              {contactInfo.phones.map((phone, i) => (
                <p key={i} className="text-gray-600 text-sm" dir="ltr">{phone}</p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.456!2d56.123!3d24.456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDI3JzIxLjYiTiA1NsKwMDcnMjIuOCJF!5e0!3m2!1sar!2som!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع المدرسة"
            />
          </div>
        </div>
      </section>

      <div className="bg-gray-50">
        <ContactForm />
      </div>
      <FAQ />
    </>
  )
}
