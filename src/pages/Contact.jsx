import ContactHeader from '../components/contact/ContactHeader'
import ContactForm from '../components/contact/ContactForm'
import MapSection from '../components/contact/MapSection'
import AboutSection from '../components/contact/AboutSection'
import ContactHours from '../components/contact/ContactHours'
import Seo from '../utils/Seo'

const Contact = () => {
  return (
    <div className="bg-white">
      <Seo title="İletişim" description="DijitalDesin ile iletişime geçin. Sorularınızı yanıtlamak ve size yardımcı olmak için buradayız." />
      <ContactHeader />

      <div className="py-16 md:py-24 px-4 relative">
        {/* Grid pattern arka plan */}
        <div
          className="absolute inset-0
    bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]
    bg-[size:40px_40px]
    [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"
        ></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-2 border-gray-200">
              <ContactForm />
            </div>
            <div>
              <MapSection />
            </div>
          </div>

          <div className="border-t-2 border-gray-200 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <AboutSection />
              <ContactHours />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

