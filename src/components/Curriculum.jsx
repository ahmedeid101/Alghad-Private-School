import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import Card, { CardImage, CardContent } from './ui/Card'
import { curriculums } from '../data/content'

export default function Curriculum() {
  return (
    <section className="section-padding bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="الدراسية" highlight="المناهج" subtitle="تعرف على مناهجنا" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {curriculums.map((item, i) => (
            <Card key={i}>
              <CardImage src={item.image} alt={item.title} className="h-72" />
              <CardContent className="text-center">
                <h3 className="text-2xl font-bold text-primary-600">{item.title}</h3>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
