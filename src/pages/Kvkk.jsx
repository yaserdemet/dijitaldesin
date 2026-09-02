import Seo from "../utils/Seo";

const COMPANY = "DİJİTALDESİN AJANS";
const ADDRESS = "One Tower Business Club, Oran, Kudüs Cd. 6/1, 06550 Çankaya / Ankara";
const EMAIL = "info@dijitaldesin.com";
const PHONE_LABEL = "+850 309 03 74";
const PHONE_HREF = "tel:+8503090374";

const sections = [
  {
    title: "Veri Sorumlusu",
    paragraphs: [
      `6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, kişisel verileriniz veri sorumlusu sıfatıyla ${COMPANY} tarafından aşağıda açıklanan kapsamda işlenmektedir.`,
      `${COMPANY}, ${ADDRESS} adresinde faaliyet göstermekte olup; ${PHONE_LABEL} telefon numarası ve ${EMAIL} e-posta adresi üzerinden iletişime geçilebilir. Ajansın web sitesi www.dijitaldesin.com’dur.`,
    ],
  },
  {
    title: "İşlenen Kişisel Veriler",
    paragraphs: [
      "Ajans tarafından işlenebilecek kişisel veriler aşağıdakilerden oluşabilmektedir:",
    ],
    items: [
      "Ad, soyad gibi kimlik bilgileri",
      "Telefon numarası, e-posta adresi ve adres gibi iletişim bilgileri",
      "Müşteri ve yetkili bilgileri",
      "Talep ve mesaj içerikleri",
      "Web sitesi ziyaretlerine ilişkin IP adresi, trafik ve çerez (cookie) verileri",
      "Reklam ve kampanya performans bilgileri",
      "Fatura ve ödeme süreçlerine ilişkin finansal bilgiler",
    ],
  },
  {
    title: "Kişisel Verilerin İşlenme Amaçları",
    paragraphs: ["Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:"],
    items: [
      "Dijital pazarlama, reklam ve danışmanlık hizmetlerinin sunulması",
      "Reklam kampanyalarının planlanması, yönetilmesi, raporlanması ve optimizasyonu",
      "Müşteri ilişkileri ve iletişim süreçlerinin yürütülmesi",
      "Teklif ve sözleşme süreçlerinin gerçekleştirilmesi",
      "Faturalandırma ve muhasebe işlemlerinin yapılması",
      "Web sitesi ve dijital platformların işletilmesi ve geliştirilmesi",
      "Hukuki yükümlülüklerin yerine getirilmesi",
      "Bilgi güvenliği ve operasyonel süreçlerin sağlanması",
    ],
  },
  {
    title: "Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi",
    paragraphs: [
      "Kişisel verileriniz; www.dijitaldesin.com web sitesi, iletişim ve teklif formları, e-posta, telefon, sosyal medya kanalları, sözleşmeler ve hizmet süreçleri aracılığıyla elektronik veya fiziki ortamlarda toplanmaktadır.",
      "Bu veriler; KVKK’nın 5. maddesi uyarınca bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması, Ajansın hukuki yükümlülüklerini yerine getirebilmesi, meşru menfaatlerinin korunması ve gerekli hallerde açık rızanızın bulunması hukuki sebeplerine dayanılarak işlenmektedir.",
    ],
  },
  {
    title: "Kişisel Verilerin Aktarılması",
    paragraphs: [
      "Kişisel verileriniz, KVKK’nın 8. ve 9. maddelerine uygun olarak aşağıdaki taraflara aktarılabilmektedir:",
    ],
    items: [
      "Ajansın hizmet aldığı iş ortaklarına ve tedarikçilerine",
      "Google, Meta, TikTok gibi reklam ve pazarlama platformlarına",
      "Sunucu ve yazılım altyapısı hizmet sağlayıcılarına",
      "Muhasebe ve hukuk danışmanlarına",
      "Yetkili kamu kurum ve kuruluşlarına",
    ],
  },
  {
    title: "Kişisel Verilerin Saklanma Süresi",
    paragraphs: [
      "Kişisel verileriniz, işlenme amaçlarının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen saklama süreleri dikkate alınarak muhafaza edilmekte ve anonim hale getirilmektedir.",
    ],
  },
  {
    title: "Veri Güvenliği ve Mevzuata Uyum",
    paragraphs: [
      "Ajans, kişisel verilerin işlenmesi süreçlerinde 6698 sayılı Kişisel Verilerin Korunması Kanunu başta olmak üzere ilgili tüm mevzuata uygun hareket etmeyi ilke edinmiştir.",
      "Bu kapsamda, kişisel verilerin hukuka aykırı olarak işlenmesini ve yetkisiz kişiler tarafından erişilmesini önlemek amacıyla gerekli teknik ve idari tedbirler alınmakta; veri güvenliğinin sağlanmasına yönelik güncel teknolojik altyapılar ve iç denetim mekanizmaları kullanılmaktadır.",
    ],
  },
];

const Kvkk = () => {
  return (
    <>
      <Seo
        title="KVKK Aydınlatma Metni"
        description="DijitalDesin Ajans KVKK aydınlatma metni: işlenen kişisel veriler, işlenme amaçları, toplanma yöntemi, aktarım, saklama süresi ve veri güvenliği hakkında bilgilendirme."
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <header className="mb-12 border-b border-gray-200 pb-8">
            <p className="text-sm font-semibold tracking-wide text-gray-500 mb-2">
              YASAL BİLGİLENDİRME
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              KVKK Aydınlatma Metni
            </h1>
          </header>

          <div className="space-y-10">
            {sections.map((section, index) => (
              <section key={section.title} className="scroll-mt-24">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 border-l-3 border-l-zinc-600 pl-3">
                  <span className="text-gray-400 mr-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {section.title}
                </h2>

                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-gray-600 leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.items && (
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-gray-600 leading-relaxed"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-2xl border-2 border-gray-200 bg-white p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              İletişim
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              KVKK kapsamındaki taleplerinizi, yazılı olarak veya KVKK’da
              öngörülen diğer yöntemlerle aşağıdaki kanallar üzerinden
              Ajansımıza iletebilirsiniz.
            </p>

            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-gray-900">E-posta</dt>
                <dd>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-gray-600 hover:text-gray-900 transition"
                  >
                    {EMAIL}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-gray-900">Telefon</dt>
                <dd>
                  <a
                    href={PHONE_HREF}
                    className="text-gray-600 hover:text-gray-900 transition"
                  >
                    {PHONE_LABEL}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-gray-900">Adres</dt>
                <dd className="text-gray-600">{ADDRESS}</dd>
              </div>
            </dl>
          </section>
        </div>
      </div>
    </>
  );
};

export default Kvkk;
