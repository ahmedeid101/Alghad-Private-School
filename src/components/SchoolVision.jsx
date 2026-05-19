import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import Button from './ui/Button'
import { schoolVision } from '../data/content'

export default function SchoolVision() {
  return (
    <section id="school-vision" className="section-padding bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <video className="w-full h-48 object-cover" controls>
                  <source src={schoolVision.video} type="video/mp4" />
                </video>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl mt-8">
                <video className="w-full h-48 object-cover" controls>
                  <source src={schoolVision.video2} type="video/mp4" />
                </video>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading title="المدرسة" highlight="رؤية" align="right" />
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {schoolVision.text}
            </p>
            <div className="rounded-2xl overflow-hidden shadow-xl mb-6">
              <img src={schoolVision.image} alt="رؤية المدرسة" className="w-full h-64 object-cover" />
            </div>
            <Button href="#school-message">تعرف أكثر</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
