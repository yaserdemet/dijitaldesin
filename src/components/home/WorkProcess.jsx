import { Icon } from "@iconify/react";

const STEPS = [
  {
    id: 1,
    icon: "solar:target-bold",
    title: "Analiz & Strateji",
    description:
      "Hedeflerinizi, sektörünüzü ve rakiplerinizi analiz ederek en doğru yol haritasını oluşturuyoruz.",
  },
  {
    id: 2,
    icon: "solar:case-bold",
    title: "Marka & Konumlandırma",
    description:
      "Markanızı dijitalde doğru konumlandırıyor, hedef kitlenizle güçlü bir bağ kurmanızı sağlıyoruz.",
  },
  {
    id: 3,
    icon: "solar:graph-up-bold",
    title: "Performans Pazarlaması",
    description:
      "Veriye dayalı reklam stratejileriyle görünürlüğü, dönüşümü ve satışları artırıyoruz.",
  },
  {
    id: 4,
    icon: "solar:settings-bold",
    title: "Optimizasyon & Büyüme",
    description:
      "Sürekli analiz ve optimizasyonla reklam performansını iyileştiriyor, sürdürülebilir büyüme sağlıyoruz.",
  },
];

const WorkProcess = () => {
  return (
    <section className="relative py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">
            Nasıl Çalışıyoruz
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Çalışma Sürecimiz
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.id}
              className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-sky-100 border-2 border-gray-200 rotate-45 flex items-center justify-center mb-6">
                <Icon
                  icon={step.icon}
                  className="w-6 h-6 text-blue-600 -rotate-45"
                />
              </div>

              <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
