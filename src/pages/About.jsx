const About = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Biz Kimiz?</h1>
          <p className="text-xl text-gray-600">
            Dijital pazarlama alanında yetkin ve deneyimli bir ekip
          </p>
        </div>

        {/* About Content */}
        <div className="bg-white rounded-lg shadow-lg p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Hakkımızda</h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            DijitalDesin, işletmelerin dijital dönüşümünü gerçekleştirmek ve online
            varlıklarını güçlendirmek için kurulmuş profesyonel bir danışmanlık ajansıdır.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Misyonumuz</h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            İşletmelerin dijital hedeflerine ulaşmasında, stratejik ve veriye dayalı
            çözümler sunmak, uzun vadeli başarı sağlamaktır.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Vizyonumuz</h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Türkiye'nin en güvenilir ve yenilikçi dijital danışmanlık ajansı olmak,
            müşterilerimizin başarısını kendi başarımız olarak görmektir.
          </p>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Neden Biz?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-3">10+</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Yıl Deneyim</h3>
              <p className="text-gray-600">
                Dijital pazarlama alanında on yıldan fazla deneyim ve uzmanlık
              </p>
            </div>
            <div className="bg-purple-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-purple-600 mb-3">500+</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Başarılı Proje</h3>
              <p className="text-gray-600">
                Yüzlerce işletmeye başarılı dijital pazarlama hizmetleri sundum
              </p>
            </div>
            <div className="bg-indigo-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-3">99%</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Müşteri Memnuniyeti</h3>
              <p className="text-gray-600">
                Müşteri memnuniyeti ve sonuç odaklı çalışma prensibiyle işler yürütüyoruz
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

