import { Icon } from '@iconify/react'

const ContactHeader = () => {
  return (
    <div className="bg-white py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center lg:text-left max-w-2xl">
          <button className="px-4 py-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-gray-200 border-2 rounded-lg text-gray-900 font-light text-sm md:text-base hover:bg-gray-50 mb-6">
            İletişim ve Destek
          </button>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Bizimle İletişime Geçin
          </h1>

          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
            Dijital pazarlama stratejinizi birlikte oluşturalım. Projeleriniz hakkında konuşmak için aşağıdaki formu doldurun veya doğrudan bize ulaşın.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="tel:+8503090374"
              className="px-6 py-3 rounded-xl bg-black text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
            >
              <Icon icon="solar:phone-bold" className="w-5 h-5" /> Hemen Ara
            </a>
            <a
              href="mailto:info@dijitaldesin.com"
              className="px-6 py-3 rounded-xl bg-white text-black font-semibold shadow-lg border-2 border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
            >
              <Icon icon="solar:letter-bold" className="w-5 h-5" /> Email Gönder
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactHeader
