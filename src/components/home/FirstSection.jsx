import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import HighLightText from "../../utils/HighlightText";
const REKLAM_VALUES = ["Değer", "Kazanç", "Satış", "Dönüşüm"];

const FirstSection = () => {
  const [reklam, setReklam] = useState(REKLAM_VALUES[0]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % REKLAM_VALUES.length;
      setReklam(REKLAM_VALUES[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-24 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Sol Kolon (Web'de 1. Kolon, Mobilde Üst Satır) */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          <button
            className="px-4 py-2
           transition-all
  duration-300
  hover:shadow-xl
  hover:-translate-y-1
          border-gray-200 border-2 rounded-lg text-gray-900 font-light text-sm md:text-base hover:bg-gray-50 "
          >
            E-Ticaret için Geliştirildi
          </button>

          <div className="flex flex-col gap-2 md:gap-4">
            <p className="font-bold text-gray-900 text-3xl md:text-4xl lg:text-5xl">
              Anında Yanıt
            </p>
            <p className="font-bold text-gray-900 text-3xl md:text-4xl lg:text-5xl flex items-center justify-center lg:justify-start gap-3 flex-wrap">
              Artan <HighLightText>{reklam}</HighLightText>
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            <button
              className="  px-6 py-3
  rounded-xl
  bg-black
  text-white
  font-semibold
  shadow-lg
  transition-all
  duration-300
  hover:shadow-xl
  hover:-translate-y-1"
            >
              Bizimle İletişime Geçin
            </button>
            <button
              className="  px-6 py-3
  rounded-xl
  bg-white
  text-black
  font-semibold
  shadow-lg
  transition-all
  duration-300
  hover:shadow-xl
  hover:-translate-y-1"
            >
              <Icon icon="akar-icons:phone" className="w-4 h-4 inline" /> Sizi
              Arayalım
            </button>
          </div>
        </div>

        {/* Sağ Kolon (Web'de 2. Kolon, Mobilde Alt Satır) */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            E-TİCARET VE DİJİTAL <br className="hidden sm:inline" /> DANIŞMANLIK
            AJANSI
          </h1>
          <p className="mt-4 md:mt-6 text-gray-600 text-sm sm:text-base md:text-lg max-w-xl">
            Dijitalin gücünü performansla birleştiren Dijitaldesin ile büyümeye
            hazır olun. <br className="hidden sm:inline" /> Sürdürülebilir
            büyüme hedefleyen markalar için buradayız.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
