const Services = () => {
  const services = [
    {
      icon: '📊',
      title: 'Dijital Pazarlama Stratejisi',
      description:
        'Markanızın dijital varlığını güçlendirmek için özel stratejiler geliştiriyoruz.',
    },
    {
      icon: '🎯',
      title: 'SEO Optimizasyonu',
      description:
        'Arama motorlarında yüksek sıralamalara ulaşmanız için SEO hizmetleri sunuyoruz.',
    },
    {
      icon: '📢',
      title: 'Sosyal Medya Yönetimi',
      description:
        'Sosyal medya platformlarında etkin ve profesyonel bir varlık oluşturuyoruz.',
    },
    {
      icon: '💼',
      title: 'İçerik Pazarlaması',
      description:
        'Kaliteli ve etkili içerikler aracılığıyla hedef kitlenizle bağlantı kuracağız.',
    },
    {
      icon: '💻',
      title: 'Web Tasarım & Geliştirme',
      description:
        'Modern, hızlı ve responsive web siteleri tasarlayıp geliştiriyoruz.',
    },
    {
      icon: '📈',
      title: 'Reklam Yönetimi (PPC)',
      description:
        'Google Ads ve diğer platformlarda etkili reklam kampanyaları yönetiyoruz.',
    },
  ]

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Hizmetlerimiz</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            İşletmenizin dijital dönüşümünü sağlamak için sunduğumuz profesyonel hizmetler
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Hangi Hizmeti Arıyorsunuz?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Profesyonel danışmanlarımız, işletmenizin ihtiyaçlarına göre özel çözümler sunmak için hazır.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg hover:shadow-lg transition"
          >
            Hemen İletişime Geçin
          </a>
        </div>
      </div>
    </div>
  )
}

export default Services
