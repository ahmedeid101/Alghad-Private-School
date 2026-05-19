import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import Button from './ui/Button'
import { schoolAims } from '../data/content'

export default function SchoolAims() {
  return (
    <section id="school-aims" className="section-padding bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary-600/10 rounded-full" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={schoolAims.image} alt="أهداف المدرسة" className="w-full h-[500px] object-cover" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <SectionHeading title="المدرسة" highlight="أهداف" align="right" />
            <ul className="space-y-4 mb-6">
              {schoolAims.items.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="w-6 h-6 rounded-full bg-primary-600 text-white text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-base">{item}</span>
                </motion.li>
              ))}
            </ul>
            <Button href="#apply-us" variant="gold">للتسجيل</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
