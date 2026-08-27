import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    hasEcommerce: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        hasEcommerce: '',
      })
      setLoading(false)
      setTimeout(() => setSubmitted(false), 5000)
    }, 1000)
  }

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">İletişim Formu</h2>
      <p className="text-gray-600 mb-8">
        Aşağıdaki formu doldurup gönderin. En kısa sürede sizinle iletişime geçeceğiz.
      </p>

      {submitted && (
        <div className="mb-6 p-4 bg-white border-2 border-black rounded-xl flex items-start gap-3 shadow-lg">
          <span className="text-2xl">✓</span>
          <div>
            <h3 className="font-bold text-gray-900">Mesajınız başarıyla gönderildi!</h3>
            <p className="text-sm text-gray-600">En kısa sürede sizinle iletişime geçeceğiz.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-gray-900 font-semibold mb-2 text-sm">
              Ad Soyad *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-black transition text-gray-900"
              placeholder="Adınız ve soyadınız"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-900 font-semibold mb-2 text-sm">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-black transition text-gray-900"
              placeholder="example@gmail.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-900 font-semibold mb-2 text-sm">
              Telefon *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-black transition text-gray-900"
              placeholder="+90 (5__) ___ __ __"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-gray-900 font-semibold mb-2 text-sm">
              Firma Adı
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-black transition text-gray-900"
              placeholder="Firma adınız"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-gray-900 font-semibold mb-2 text-sm">
            Konu *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-black transition text-gray-900"
            placeholder="Mesaj konusu"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-900 font-semibold mb-2 text-sm">
            Mesajınız *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-black transition resize-none text-gray-900"
            placeholder="Mesajınızı buraya yazınız..."
          />
        </div>

        <div>
          <label className="block text-gray-900 font-semibold mb-4 text-sm">
            E-Ticaret siteniz var mı? *
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="hasEcommerce"
                value="yes"
                checked={formData.hasEcommerce === 'yes'}
                onChange={handleChange}
                required
                className="w-5 h-5 accent-black"
              />
              <span className="text-gray-700 font-medium">Evet</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="hasEcommerce"
                value="no"
                checked={formData.hasEcommerce === 'no'}
                onChange={handleChange}
                required
                className="w-5 h-5 accent-black"
              />
              <span className="text-gray-700 font-medium">Hayır</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? 'Gönderiliyor...' : 'Mesajı Gönder'}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
