import { useState } from "react";
const LaunchCTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block text-sm font-semibold border-2 border-gray-200 py-2 px-4 rounded-full uppercase tracking-wide mb-6">
          Hemen Başlayın
        </span>

        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Dijital Çözümünüzü{" "}
          <span className="relative inline-block cursor-highlight-wrapper">
            Birlikte
            <span className="cursor-highlight"></span>
            <span className="cursor-pointer"></span>
          </span>{" "}
          Tasarlayalım
        </h2>

        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light">
          Kısa bir keşif görüşmesinde markanızı analiz ediyor, size özel bir
          dijital büyüme yol haritası çıkarıyoruz. Daha fazla sonuç, daha az
          çaba.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="px-8 py-3 bg-black text-white font-semibold rounded-lg"
          >
            {isHovered ? "Hadi Başlayalım" : "Seni Bekliyoruz"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default LaunchCTA;
