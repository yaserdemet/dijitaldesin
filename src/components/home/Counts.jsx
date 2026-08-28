import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

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

    // Sayıları ayıkla (55+ -> 55, 350m+ -> 350, %95+ -> 95, 6+ -> 6)
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
    },
    {
      name: "Gösterim",
      value: "350m+",
    },
    {
      name: "Müşteri Memnuniyeti",
      value: "%95+",
    },
    {
      name: "Yıl Deneyim",
      value: "6+",
    },
  ];

  return (
    <section className="relative bg-zinc-900 overflow-hidden py-24 px-4">
      {/* Grid pattern arka plan - siyah bg, beyaz grid */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]"
        style={{
          backgroundSize: "40px 40px",
          opacity: 0.1,
        }}
      ></div>

      {/* Content */}
      <main className="relative z-10 max-w-7xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-1000 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="text-5xl md:text-6xl font-bold text-white mb-3">
                {counts[index]}{stat.value.replace(/\d/g, "")}
              </div>
              <div className="text-lg text-gray-300 font-medium">
                {stat.name}
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Counts;
