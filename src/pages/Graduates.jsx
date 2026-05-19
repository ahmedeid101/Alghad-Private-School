import { Helmet } from 'react-helmet-async'
import Gallery from '../components/Gallery'

export default function Graduates() {
  return (
    <>
      <Helmet>
        <title>الخريجين | مدرسة الغد الخاصة</title>
        <meta name="description" content="براعم مدرسة الغد الخاصة - معرض صور الخريجين" />
      </Helmet>

      <div className="pt-24 pb-8 bg-gradient-to-br from-primary-700 to-primary-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">الخريجين</h1>
          <p className="text-gray-300 text-lg">نحن قادرون علي إعداد جيل متميز</p>
          <span className="inline-block mt-2 text-gold-400 font-medium">براعم مدرستنا</span>
        </div>
      </div>

      <Gallery />
    </>
  )
}
