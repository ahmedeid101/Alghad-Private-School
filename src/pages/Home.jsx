import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import QuickLinks from '../components/QuickLinks'
import SchoolVision from '../components/SchoolVision'
import SchoolMessage from '../components/SchoolMessage'
import SchoolAims from '../components/SchoolAims'
import Licenses from '../components/Licenses'
import Application from '../components/Application'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Newsletter from '../components/Newsletter'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>مدرسة الغد الخاصة | Al Ghad Private School</title>
        <meta name="description" content="مدرسة الغد الخاصة - مدرسة خاصة في صحار، سلطنة عمان. نطمح لإعداد جيل مشرق قادر على القيادة والارتقاء" />
      </Helmet>

      <Hero />
      <QuickLinks />
      <SchoolVision />
      <SchoolMessage />
      <SchoolAims />
      <Licenses />
      <Application />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <ContactForm />
    </>
  )
}
