import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";

const Counts = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [animate, setAnimate] = useState(false);
  const [counts, setCounts] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 });

  useEffect(() => {
    if (!inView) return;

    setAnimate(true);

    const targetValues = [55, 350, 95, 6];
    const duration = 2000; // 2 saniye
    let start = 0;

    const timer = setInterval(() => {
      start += 16;
      const progress = Math.min(start / duration, 1);

      const newCounts = {};
      targetValues.forEach((target, index) => {
        newCounts[index] = Math.floor(target * progress);
      });

      setCounts(newCounts);

      if (progress === 1) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView]);

  const stats = [
    {
      name: "Marka",
      value: "55+",
      icon: "solar:buildings-2-bold",
      badge: "Farklı Sektörden",
      subtitle: "Birlikte çalıştığımız marka sayısı",
    },
    {
      name: "Gösterim",
      value: "350m+",
      icon: "solar:eye-bold",
      badge: "Reklam & İçerik",
      subtitle: "Toplam reklam gösterim sayısı",
    },
    {
      name: "Müşteri Memnuniyeti",
      value: "%95+",
      icon: "solar:like-bold",
      badge: "Yüksek Memnuniyet",
      subtitle: "Anketlere göre memnuniyet oranı",
    },
    {
      name: "Yıl Deneyim",
      value: "6+",
      icon: "solar:calendar-bold",
      badge: "2019'dan Beri",
      subtitle: "Sektördeki deneyim süremiz",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 lg:py-24 px-4">
      <main className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_2px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <h3 className="text-base font-bold text-gray-900">
                {stat.name}
              </h3>

              <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-[11px] font-semibold text-green-700">
                <Icon icon="solar:check-circle-bold" className="h-3 w-3" />
                {stat.badge}
              </span>

              <p className="mt-2 text-xs font-medium text-gray-500">
                {stat.subtitle}
              </p>

              <div className="mt-5 flex flex-1 flex-col items-center justify-center">
                <span
                  className="mb-3 inline-flex h-14 w-14 bg-zinc-100 items-center justify-center rounded-2xl"
                  
                >
                  <Icon icon={stat.icon} className="h-6 w-6 text-zinc-900" />
                </span>

                <div className="text-3xl md:text-4xl font-bold text-gray-900">
                  {counts[index]}
                  {stat.value.replace(/\d/g, "")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Counts;
