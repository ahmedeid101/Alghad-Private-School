//import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { contactInfo, socialLinks } from '../../data/content'

export default function Footer() {
  return (
    <footer className="bg-primary-600 text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img src="/images/logo.jpg" alt="مدرسة الغد الخاصة" className="h-14 w-auto rounded-lg mb-6" />
            <p className="text-gray-300 leading-relaxed text-sm">
              نحن نطمح لإعداد جيل مشرق قادر علي القيادة والارتقاء بوطنه الي القمه مسلح بكتاب الله وسنة رسوله
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-gold-400">وسائل التواصل الاجتماعي</h3>
            <p className="text-gray-300 text-sm mb-4">يمكنك التواصل معنا بسهولة عبر حساباتنا الرسمية</p>
            <div className="flex gap-4">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 transition-colors"
                aria-label="فيسبوك"
              >
                <FaFacebook size={22} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 transition-colors"
                aria-label="انستغرام"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 transition-colors"
                aria-label="تويتر"
              >
                <FaTwitter size={22} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-gold-400">تواصل معنا</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="mt-1 shrink-0">📍</span>
                <span className="break-words">{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="shrink-0">✉️</span>
                <span dir="ltr" className="break-words">{contactInfo.email}</span>
              </li>
              {contactInfo.phones.map((phone, i) => (
                <li key={i} className="flex items-center gap-3 ms-[62.5%]" dir="ltr">
                  <span className="break-words">{phone}</span>
                  <span className="shrink-0">📞</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-center text-gray-400 text-sm">
            © Copyrights {new Date().getFullYear()} - جميع الحقوق محفوظة لمدرسة الغد الخاصة
          </p>
        </div>
      </div>
    </footer>
  )
}
