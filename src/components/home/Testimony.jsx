const Testimony = () => {
  const reviews = [
    {
      name: "Ünsal Çamoğlu",
      company: "ebebek",
      text: "Her adımda güven dolu ve sonuç odaklı bir deneyim yaşadık.",
    },
    {
      name: "Fatma Yaşar",
      company: "Fatma Yaşar",
      text: "Etkili çözümleriyle hedeflerimize ulaşıyoruz.",
    },
    {
      name: "Muhammet Tataş",
      company: "Advena Home",
      text: "Markamızı yeni bir seviyeye taşıdılar.",
    },
    {
      name: "Ayşe Yılmaz",
      company: "Trakian",
      text: "İş süreçlerimizi çok daha verimli hale getirdik.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Müşteri Yorumları
          </h2>

          <p className="text-lg text-gray-600">
            Bize güvenen müşterilerimizin deneyimleri
          </p>
        </div>

        {/* İki Sütun Yan Yana */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sol Sütun - Yukarıya Kayma */}
          <div className="h-[500px] overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

            <div className="scroll-animate flex flex-col gap-6" style={{ height: 'fit-content' }}>
              {reviews.map((review, index) => (
                <ReviewCard
                  key={`left-${index}`}
                  review={review}
                />
              ))}
              {reviews.map((review, index) => (
                <ReviewCard
                  key={`left-repeat-${index}`}
                  review={review}
                />
              ))}
            </div>
          </div>

          {/* Sağ Sütun - Aşağıya Kayma */}
          <div className="h-[500px] overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

            <div className="scroll-animate-down flex flex-col gap-6" style={{ height: 'fit-content' }}>
              {reviews.map((review, index) => (
                <ReviewCard
                  key={`right-${index}`}
                  review={review}
                />
              ))}
              {reviews.map((review, index) => (
                <ReviewCard
                  key={`right-repeat-${index}`}
                  review={review}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ReviewCard = ({ review }) => {
  return (
    <div
      className="
        flex-shrink-0
        bg-white
        rounded-2xl
        shadow-lg
        p-6
        border
        border-gray-100
        hover:shadow-xl
        transition-shadow
      "
    >
      <div className="flex items-start gap-4">

        <img
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.name}`}
          alt={review.name}
          className="w-16 h-16 rounded-full object-cover flex-shrink-0"
        />

        <div className="flex-1">
          <p className="text-gray-700 italic mb-3">
            "{review.text}"
          </p>

          <div className="flex items-center gap-2">
            <h4 className="font-bold text-gray-900">
              {review.name}
            </h4>

            <span className="text-gray-500 text-sm">
              • {review.company}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Testimony;
