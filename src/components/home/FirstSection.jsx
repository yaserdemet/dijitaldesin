import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import HeroTileSlider from "./HeroTileSlider";
import { brands } from "./brandsData";
import { PATH_PAGE } from "../../router/path";
import { toWithSearch } from "../../utils/withSearch";
import dashboardDesktop from "../../assets/dashboard/dashboard1.webp";
import sinemKivanc from "../../assets/logolar/1-sinem-kivanc.png";
import mervellion from "../../assets/logolar/2-mervellion.png";
import zerrincan from "../../assets/logolar/3-zerrincan.png";
import modaAksa from "../../assets/logolar/4-moda-aksa.png";
import nugu from "../../assets/logolar/5-nugu.png";

// 1. kutu: Dijitaldesin Dashboard görüntüsünden KPI kartlarının yakın planı.
// Görüntü 1837x740; her kare kutu oranında (1.3:1) 360x277'lik bir kesit.
// Konumlar background-position yüzdesi: x = sol / (1837 - 360), y = üst / (740 - 277).
const DASHBOARD_CROPS = [
  { name: "Net Ciro", position: "23% 41%" },
  { name: "ROAS", position: "48.2% 41%" },
  { name: "Sipariş Adedi", position: "73.3% 41%" },
  { name: "Harcama", position: "98.4% 41%" },
];

// "Başarılı marka" satırındaki referans logoları
const CLIENT_LOGOS = [
  { name: "Sinem Kıvanç", src: sinemKivanc },
  { name: "Mervellion", src: mervellion },
  { name: "Zerrincan", src: zerrincan },
  { name: "Moda Aksa", src: modaAksa },
  { name: "Nugu", src: nugu },
];

const renderShot = (crop) => (
  <span
    className="block w-full h-full bg-no-repeat"
    style={{
      backgroundImage: `url(${dashboardDesktop})`,
      backgroundSize: "510%",
      backgroundPosition: crop.position,
    }}
  />
);

// 2. kutu: İş Ortaklarımız (ikas, Ticimax, Google, Meta...)
const renderBrand = (brand) =>
  brand.src ? (
    <img src={brand.src} alt="" decoding="async" className="w-[80%] h-[60%] object-contain" />
  ) : (
    <Icon icon={brand.icon} className="w-[55%] h-[55%]" />
  );

const tileClass =
  "h-[0.9em] w-[1.3em] mx-[0.1em] -translate-y-[0.04em] bg-white border-gray-200";

// Hizmetler sayfasındaki "DİJİTALDESİN PANEL" pill'i ile aynı görünüm;
// hover'da siyaha döner (bkz. CtaLabel animasyonu)
const ctaClass =
  "group relative overflow-hidden inline-flex items-center justify-center gap-2 px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold uppercase border border-gray-300 text-gray-900 hover:bg-gray-900 hover:border-gray-900 hover:text-white transition-colors duration-300";

// Ritz'teki hover animasyonu: sağdaki ikon dışarı kayıp kaybolur, aynı ikon
// soldan girer, yazı ikonun yerini açmak için sağa kayar (ikon 16px + boşluk 8px = 24px).
const CtaLabel = ({ label, icon }) => (
  <>
    <Icon
      icon={icon}
      aria-hidden="true"
      className="absolute left-4 top-1/2 -translate-y-1/2 -translate-x-6 w-4 h-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
    />
    <span className="transition-transform duration-300 group-hover:translate-x-6">
      {label}
    </span>
    <Icon
      icon={icon}
      aria-hidden="true"
      className="w-4 h-4 transition-all duration-300 group-hover:translate-x-6 group-hover:opacity-0"
    />
  </>
);

const FirstSection = () => {
  const { search } = useLocation();

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-12">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Referans logoları + marka sayısı */}
        <div className="flex flex-col items-center gap-2">
       
          <div className="flex -space-x-5 -my-1.5">
            {CLIENT_LOGOS.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                width="60"
                height="60"
                decoding="async"
                className="relative w-15 h-15 scale-80 hover:z-10 hover:scale-100 hover:-translate-y-1 transition-transform duration-300 cursor-pointer rounded-full bg-white object-contain border-2 border-white ring-1 ring-gray-200"
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">55+ Başarılı Marka</span>
        </div>

        <h1 className="mt-6 md:mt-8 text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight text-gray-900">
          İşinizi
          <HeroTileSlider items={DASHBOARD_CROPS} renderItem={renderShot} className={tileClass} />
          geliştirmeye <br className="hidden sm:inline" />
          <HeroTileSlider
            items={brands}
            renderItem={renderBrand}
            delay={1250}
            className={tileClass}
          />
        ile  hemen başlayın
        </h1>

        <p className="mt-6 md:mt-8 text-gray-600 text-sm sm:text-base md:text-lg max-w-xl">
          Dijitalin gücünü performansla birleştiren Dijitaldesin ile büyümeye
          hazır olun. Sürdürülebilir büyüme hedefleyen markalar için buradayız.
        </p>

        <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#ara" className={ctaClass}>
            <CtaLabel label="Sizi Arayalım" icon="solar:phone-calling-linear" />
          </a>
          <Link to={toWithSearch(PATH_PAGE.contact, search)} className={ctaClass}>
            <CtaLabel label="Görüşme Planla" icon="solar:calendar-mark-linear" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
