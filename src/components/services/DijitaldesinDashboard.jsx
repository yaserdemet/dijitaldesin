import React from "react";
import Dashboard1 from "../../assets/dashboard/dashboard1.webp";
import HighlightText from "../../utils/HighlightText";
import MobilDashboard1 from "../../assets/dashboard/mobil1.webp";
import MobilDashboard2 from "../../assets/dashboard/mobil2.webp";
import MobilDashboard3 from "../../assets/dashboard/mobil3.webp";

const MOBIL_IMAGES = [MobilDashboard1, MobilDashboard2, MobilDashboard3];

const DijitaldesinDashboard = () => {
  const [currentImage, setCurrentImage] = React.useState(MOBIL_IMAGES[0]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      // Her turda ekrandaki görselden farklı bir tanesi seçilir
      setCurrentImage((current) => {
        const others = MOBIL_IMAGES.filter((image) => image !== current);
        return others[Math.floor(Math.random() * others.length)];
      });
    }, 2048);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-white py-16 lg:py-28 overflow-x-hidden overflow-y-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
          {/* Görsel: masaüstü paneli + üzerine binen mobil panel */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-[650px] mx-auto">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={Dashboard1}
                  alt="DijitalDesin masaüstü performans paneli"
                  className="absolute inset-0 w-full h-full object-cover object-left"
                />
                <div className="absolute inset-0 bg-black/15" />

                {/* Sabit oran: mobil görsellerin hepsi aynı kutuda, kenar boşluksuz */}
                <div className="absolute bottom-[2%] right-[3%] z-10 h-[90%] aspect-[365/740] overflow-hidden rounded-[36px] shadow-2xl">
                  <img
                    src={currentImage}
                    alt="DijitalDesin mobil performans paneli"
                    className="h-full w-full object-cover object-left"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Metin */}
          <div className="space-y-8 order-1 lg:order-2">
            <span className="inline-block px-4 py-2 rounded-2xl text-xs font-semibold border border-gray-300 text-gray-900">
              DİJİTALDESİN PANEL
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight lg:leading-[1.2]">
              Tüm Verileriniz <HighlightText>Tek Panelde</HighlightText>
            </h2>

            <p className="text-base md:text-[17px] text-gray-600 leading-relaxed">
              Google, Meta ve TikTok reklamlarınızın performansını tek bir panel
              üzerinden anlık olarak takip edin. Cirodan siparişlere, reklam
              harcamalarından ROAS’a kadar tüm dijital performansınızı
              masaüstünden ve mobilden aynı anda izleyin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DijitaldesinDashboard;
