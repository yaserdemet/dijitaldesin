import Seo from "../utils/Seo";
import JsonLd from "../utils/JsonLd";
import FaqAccordion from "../components/sss/FaqAccordion";

const faqs = [
  {
    question: "Dijitaldesin hangi hizmetleri sunuyor?",
    answer:
      "Google, Meta ve TikTok reklam yönetimi, SEO optimizasyonu, sosyal medya yönetimi, web tasarımı ve e-ticaret entegrasyonları (Ticimax, Ikas vb.) dahil olmak üzere uçtan uca dijital pazarlama hizmetleri sunuyoruz.",
  },
  {
    question: "Hizmet almaya nasıl başlayabilirim?",
    answer:
      "İletişim sayfamızdaki formu doldurarak veya doğrudan telefon ile bize ulaşarak markanız için ücretsiz bir ön değerlendirme talep edebilirsiniz. Sonrasında ihtiyaçlarınıza özel bir strateji sunuyoruz.",
  },
  {
    question: "Hangi e-ticaret altyapılarıyla çalışıyorsunuz?",
    answer:
      "Ticimax ve Ikas başta olmak üzere birçok e-ticaret altyapısıyla entegre çalışıyor; ürün, sipariş ve reklam verilerinizi tek bir noktadan yönetmenizi sağlıyoruz.",
  },
  {
    question: "Sonuçları nasıl raporluyorsunuz?",
    answer:
      "Kampanya performansını düzenli aralıklarla; harcama, dönüşüm ve ROAS gibi ölçülebilir metriklerle raporluyor, şeffaf bir şekilde sizinle paylaşıyoruz.",
  },
  {
    question: "Minimum bir çalışma süresi veya sözleşme taahhüdü var mı?",
    answer:
      "Süreç ve şartlar markanızın ihtiyacına göre birlikte belirlenir. Detaylar için iletişim ekibimizle görüşerek size özel koşulları öğrenebilirsiniz.",
  },
  {
    question: "Küçük ölçekli işletmelerle de çalışıyor musunuz?",
    answer:
      "Evet, büyüklüğü fark etmeksizin markanızın hedeflerine uygun, ölçeklenebilir çözümler sunuyoruz.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const Sss = () => {
  return (
    <>
      <Seo
        title="Sıkça Sorulan Sorular"
        description="DijitalDesin hizmetleri, e-ticaret entegrasyonları ve çalışma sürecimiz hakkında sıkça sorulan sorular ve cevapları."
      />
      <JsonLd data={faqJsonLd} />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <header className="mb-12 text-center">
            <p className="text-sm font-semibold tracking-wide text-gray-500 mb-2">
              YARDIM MERKEZİ
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sıkça Sorulan Sorular
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Hizmetlerimiz ve çalışma sürecimiz hakkında en çok merak
              edilen soruları sizin için derledik.
            </p>
          </header>

          <FaqAccordion items={faqs} />

      
        </div>
      </div>
    </>
  );
};

export default Sss;
