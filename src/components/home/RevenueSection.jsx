import { Icon } from "@iconify/react";
import { useInView } from "react-intersection-observer";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import HighlightText from "../../utils/HighlightText";
import Logo from "../../assets/icon-d.jpeg";

const dataGelir = [
  { ay: "Oca", gelir: 32 },
  { ay: "Şub", gelir: 48 },
  { ay: "Mar", gelir: 40 },
  { ay: "Nis", gelir: 62 },
  { ay: "May", gelir: 74 },
  { ay: "Haz", gelir: 96 },
];

const RevenueSection = () => {
  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className="relative w-full bg-gray-50 py-16 lg:py-32 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
          {/* Sol Kolon */}
          <div
            ref={leftRef}
            className={`space-y-8 transition-all duration-700 ${
              leftInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="inline-block px-4 py-2 rounded-2xl text-xs font-semibold border border-gray-300 text-gray-900">
              PERFORMANS ODAKLI BÜYÜME
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight lg:leading-[1.2]">
              Her Etkileşimi{" "}
              <HighlightText>Gelire Dönüştürün</HighlightText>
            </h2>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Google, Meta ve TikTok'tan gelen her ziyaretçiyi veri odaklı
              stratejiler ve yaratıcı içeriklerle satışa dönüştürüyoruz.
              Kampanya performansını gerçek zamanlı izler, doğru kitleye
              doğru mesajla ulaşarak dönüşüm oranınızı sürekli artırırız.
            </p>
          </div>

          {/* Sağ Kolon */}
          <div
            ref={rightRef}
            className={`relative transition-all duration-700 ${
              rightInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative w-full max-w-[650px] mx-auto rounded-2xl border border-slate-200/80 bg-white shadow-2xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Aylık Gelir Artışı
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl md:text-4xl font-bold text-gray-900">
                      %128
                    </span>
                    <span
                      className="inline-flex items-center text-xs text-gray-700 font-semibold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: 'var(--primary-color)' }}
                    >
                      +96 gün
                    </span>
                  </div>
                </div>
                <Icon
                  icon="solar:chart-2-bold-duotone"
                  className="w-8 h-8 text-gray-900"
                />
              </div>

              <div className="w-full h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={dataGelir}>
                    <defs>
                      <linearGradient
                        id="colorGelir"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="rgb(163,230,53)"
                          stopOpacity={0.5}
                        />
                        <stop
                          offset="95%"
                          stopColor="rgb(163,230,53)"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#111827",
                        borderRadius: "8px",
                        border: "none",
                        color: "#fff",
                        fontSize: "12px",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="gelir"
                      stroke="rgb(63,98,18)"
                      strokeWidth={2.5}
                      fillOpacity={1}
                      fill="url(#colorGelir)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Yüzen rozet kart */}
            <div
              className={`absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl bg-gray-900 text-white px-5 py-4 shadow-xl transition-all duration-700 delay-300 ${
                rightInView
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90"
              }`}
            >
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <img src={Logo} alt="DijitalDesin" className="w-7 h-auto" />
              </div>
              <div>
                <p className="text-sm font-bold leading-tight">
                  Gerçek Zamanlı
                </p>
                <p className="text-xs text-gray-300">Dönüşüm Takibi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueSection;
