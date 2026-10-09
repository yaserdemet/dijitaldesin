import { useInView } from "react-intersection-observer";

const STEPS = [
  {
    title: "Sizi Arayalım ✅",
    text: "İşletmenin ihtiyaçları için bizlerle iletişime geçin, size nasıl yardımcı olabileceğimizi anlatalım.",
    // Masaüstü konumu: bağlantı çizgileriyle aynı 1200x280 koordinat düzleminde (%)
    position: "lg:left-0 lg:top-[30%] lg:w-[32.5%]",
    rotate: "-rotate-2 lg:-rotate-4",
  },
  {
    title: "Toplantı Planla 📆",
    text: "Dijital pazarlama uzmanımızla işletmenize özel bir toplantı gerçekleştirin.",
    position: "lg:left-[34.5%] lg:top-0 lg:w-[33%]",
    rotate: "rotate-2 lg:rotate-8",
    highlight: true,
  },
  {
    title: "Büyümeye Başla 🚀",
    text: "İşletmeniz için detaylı oluşturulan strateji ile büyüme yolculuğunuzu başlatın.",
    position: "lg:right-0 lg:top-[32%] lg:w-[32%]",
    rotate: "-rotate-1 lg:-rotate-3",
  },
];

// Kartları birbirine bağlayan çizgiler (yalnızca masaüstü). viewBox, kart
// kapsayıcısıyla aynı oranda olduğu için uç noktalar kartlarla birlikte ölçeklenir.
const CONNECTORS = [
  { d: "M300 128 C 300 50, 380 18, 470 34", pins: [[300, 128], [470, 34]] },
  { d: "M750 66 C 820 0, 910 30, 870 72 C 845 95, 805 92, 850 118", pins: [[750, 66], [850, 118]] },
];

const ProcessSteps = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <section className="bg-white py-16 md:py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
          Süreç Nasıl İlerliyor?
        </h2>

        <div
          ref={ref}
          className="relative mt-12 md:mt-16 flex flex-col gap-10 max-w-md mx-auto lg:block lg:max-w-none lg:aspect-[1200/280] lg:mt-20"
        >
          <svg
            viewBox="0 0 1200 280"
            className="hidden lg:block absolute inset-0 w-full h-full z-10 pointer-events-none overflow-visible"
            aria-hidden="true"
          >
            {CONNECTORS.map((line, i) => (
              <g key={i}>
                <path
                  d={line.d}
                  fill="none"
                  stroke="var(--primary-color)"
                  strokeWidth="2"
                  pathLength="1"
                  strokeDasharray="1"
                  strokeDashoffset={inView ? 0 : 1}
                  className="transition-[stroke-dashoffset] duration-1000 ease-out"
                  style={{ transitionDelay: `${700 + i * 300}ms` }}
                />
                {line.pins.map(([cx, cy]) => (
                  <circle
                    key={`${cx}-${cy}`}
                    cx={cx}
                    cy={cy}
                    r="6"
                    fill="white"
                    stroke="var(--primary-color)"
                    strokeWidth="2.5"
                    className={`transition-opacity duration-500 ${inView ? "opacity-100" : "opacity-0"}`}
                    style={{ transitionDelay: `${600 + i * 300}ms` }}
                  />
                ))}
              </g>
            ))}
          </svg>

          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className={`lg:absolute ${step.position} ${step.rotate} transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Dış çerçeve: Ritz'teki gibi kartın etrafında kalın kenar; ortadaki vurgulu */}
              <div
                className={`p-2 rounded-[1.6rem] shadow-xl hover:scale-105 hover:-translate-y-1 transition-transform duration-300 ${step.highlight ? "bg-(--secondary-color)" : "bg-gray-200"}`}
              >
                <div className="flex gap-4 items-start rounded-[1.2rem] bg-zinc-800 text-white p-5 md:p-6 min-h-36">
                  <span className="text-6xl font-light leading-none">{i + 1}</span>
                  <div className="text-left">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="mt-1 text-sm md:text-base font-semibold text-gray-100 leading-snug">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
