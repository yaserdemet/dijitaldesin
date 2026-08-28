import React from "react";
import { Icon } from "@iconify/react";

const MissionList = () => {
  const data = [
    {
      title: "Misyonumuz",
      icon: "mdi:target-variant",
      text: "Dijitaldesin olarak markaların dijital dünyadaki varlığını güçlendirirken, onları yalnızca görünür değil; etkili, hatırlanan ve tercih edilen hale getirmeyi hedefliyoruz. Veri odaklı performans stratejileri, yaratıcı iletişim ve yenilikçi reklam teknolojilerini bir araya getiriyoruz. Doğru hedef kitleye,doğru zamanda ve doğru mesajla ulaşarak sürdürülebilir büyüme sağlıyor; Meta, Google ve TikTok gibi platformlarda ölçümlenebilir, optimize edilebilir ve uzun vadeli değer üreten dijital çözümler sunuyoruz.",
    },
    {
      title: "Vizyonumuz",
      icon: "mdi:telescope",
      text: "Dijitaldesin olarak vizyonumuz; markaların dijital dünyadaki potansiyelini açığa çıkaran, büyümelerini hızlandıran ve onları sektörlerinde liderliğe taşıyan bir dijital performans ajansı olmaktır. Teknoloji, veri ve yaratıcılığı merkezine alan yaklaşımımızla dijital pazarlamanın dönüşümüne yön veriyoruz. Her markaya özel geliştirilen stratejilerle, kalıcı etki yaratan ve sürdürülebilir başarı sağlayan dijital çözümler üretiyoruz. Hedefimiz; yerel ve global ölçekte güvenilen, yenilikçi ve sonuç odaklı bir ajans olarak dijital dünyada referans noktası haline gelmektir.",
    },
    {
      title: "Değerlerimiz",
      icon: "mdi:heart-multiple",
      text: "Dijitaldesin olarak yenilikçiliği, dijital dünyadaki tüm çalışmalarımızın merkezine koyuyoruz. Sürekli gelişen teknolojileri ve trendleri yakından takip ederek markalarımıza güncel ve etkili çözümler sunuyoruz. Güvenilirlik ve şeffaflık, iş ortaklarımızla kurduğumuz ilişkilerin temelini oluşturur; tüm süreçleri açık, ölçülebilir ve anlaşılır şekilde yönetiriz. Hızlı aksiyon alabilen yapımız sayesinde değişen ihtiyaçlara kısa sürede uyum sağlarken, verimlilik odaklı yaklaşımımızla bütçeleri en doğru şekilde kullanırız. Amacımız; değer üreten, sürdürülebilir ve sonuç odaklı dijital çözümler sunmaktır.",
    },
    {
      title: "Sonuç Odaklılık",
      icon: "mdi:chart-line",
      text: "Dijitaldesinʼde başarı, yalnızca yapılan çalışmalarla değil, elde edilen sonuçlarla ölçülür. Tüm dijital pazarlama süreçlerimizi; net hedefler, ölçülebilir metrikler ve sürekli gelişim anlayışı üzerine kurarız. Kampanyaları anlık verilerle takip eder, performansı artıracak aksiyonları hızlıca hayata geçiririz. Satış, dönüşüm ve büyüme odaklı yaklaşımımızla markaların dijital yatırımlarını en verimli şekilde değerlendirmesini sağlarız. Amacımız; her kampanyada somut fayda üreten, sürdürülebilir ve güçlü sonuçlara ulaşmaktır.",
    },
  ];
  return (
    <>
      <section className="grid grid-cols-2 gap-4 mt-24">
        <div>
          <div className="inline-block mb-12">
            <span className="px-4 py-2 border border-gray-300 rounded-full text-sm font-semibold text-gray-700">
              ANKARA'DA 2019'DAN BERİ
            </span>
          </div>

          <h5 className="font-bold text-3xl mb-4">Neler Yapıyoruz</h5>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            E-ticaret ajansı olarak kurulumdan pazarlamaya; e-ticaret
            danışmanlığı kapsamında strateji, <br /> operasyon ve büyüme desteği
            sunuyoruz. <br /> Kampanya yönetimi, site optimizasyonu ve görsel
            iletişimle markanızı güvenle büyütün.
          </p>
        </div>
        <div>
          <div className="h-[500px] overflow-hidden">
            <div className="scroll-loop-down flow-root">
              {Array(2)
                .fill(null)
                .map((_, setIndex) =>
                  data.map((item) => (
                    <div
                      key={`${item.title}-${setIndex}`}
                      className="border border-slate-300 p-12 mb-4 bg-slate-100 rounded-2xl flex-shrink-0"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <Icon
                          icon={item.icon}
                          width="32"
                          height="32"
                          className="text-lime-400 flex-shrink-0 mt-1"
                        />
                        <h3 className="text-lg font-bold text-black">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 text-small font-thin">{item.text}</p>
                    </div>
                  ))
                )}
            </div>
          </div>

          <div></div>
        </div>
      </section>
    </>
  );
};

export default MissionList;
