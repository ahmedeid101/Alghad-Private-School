import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading'
import Curriculum from '../components/Curriculum'
import Gallery from '../components/Gallery'

export default function About() {
  return (
    <>
      <Helmet>
        <title>تعرف علينا | مدرسة الغد الخاصة</title>
        <meta name="description" content="تعرف على مدرسة الغد الخاصة - مناهجنا الدراسية ورؤيتنا التعليمية" />
      </Helmet>

      <div className="pt-24 pb-8 bg-gradient-to-br from-primary-700 to-primary-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">تعرف علينا</h1>
          <p className="text-gray-300">مناهجنا ورؤيتنا التعليمية</p>
        </div>
      </div>

      <div className="section-padding bg-gray-50" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="التعريفية" highlight="الفيديوهات" subtitle="شاهد مدرستنا" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-xl bg-white">
                <video className="w-full aspect-video object-cover" controls>
                  <source src={`/images/vid1 (${i}).mp4`} type="video/mp4" />
                </video>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <Curriculum />
      <Gallery />
    </>
  )
}
