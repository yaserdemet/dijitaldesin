import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Icon } from "@iconify/react";
import ticimaxLogo from "../../assets/ticimax-logo.svg";
import ikasLogo from "../../assets/ikas-logo.svg";

const MarqueeComponent =
  typeof Marquee === "function" ? Marquee : Marquee?.default || Marquee;

const brands = [
  { name: "Shopify", icon: "logos:shopify" },
  { name: "Google Ads", icon: "logos:google-ads" },
  { name: "TikTok", icon: "logos:tiktok-icon" },
  { name: "ikas", src: ikasLogo },
  { name: "Ticimax", src: ticimaxLogo },
  { name: "Google Partner", icon: "logos:google" },
  { name: "Meta Business Partner", icon: "logos:meta" },
];

//* Tek tek import yapmak yerine meta glob kullan
const logoModules = import.meta.glob("../../assets/referances/*.svg", {
  eager: true,
  import: "default",
});

const logos = Object.entries(logoModules).map(([path, src]) => {
  const filename = path.split("/").pop().replace(".svg", "");
  const name = filename
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return { name, src };
});

// variant prop'u hangi listenin gösterileceğini seçiyor.
const variants = {
  brands: { items: brands, title: "İş Ortaklarımız" },
  logos: { items: logos, title: "Referanslarımız" },
};

const itemClass =
  "flex items-center justify-center gap-2 cursor-pointer";


const gridColsClass = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};


const MOBILE_QUERY = "(max-width: 767px)";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia(MOBILE_QUERY).matches
  );

  useEffect(() => {
    const query = window.matchMedia(MOBILE_QUERY);
    const onChange = (event) => setIsMobile(event.matches);

    setIsMobile(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return isMobile;
};

const LogoItem = ({ item, logoHeight }) => (
  <>
    {item.src ? (
      <img
        src={item.src}
        alt={item.name}
        className={`${logoHeight} w-auto max-w-full object-contain`}
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
    ) : null}
    {item.icon ? (
      <Icon icon={item.icon} className={`${logoHeight} w-auto text-3xl`} />
    ) : null}
  </>
);

const Carosuel = ({
  variant = "brands",
  title,
  speed = 40,
  direction = "left",
  columns = 3,
  mobileColumns = 2,
  verticalHeight = "34rem",
  verticalDuration = 40,
  logoHeight = "h-12",
  mobileLogoHeight,
}) => {
  const { items, title: defaultTitle } = variants[variant] ?? variants.brands;
  const isVertical = direction === "up" || direction === "down";
  const isMobile = useIsMobile();

  // Dikey modda listeyi sütunlara dağıtıp her sütunu ters yönde
  // döndürüyoruz. Kütüphanenin dikey modu şeridi 90° çevirdiği için
  // sütun yüksekliği kontrol edilemiyordu; burada index.css'teki
  // loopUp/loopDown kullanılıyor.
  const columnCount = Math.max(
    1,
    Math.min(isMobile ? mobileColumns : columns, 4)
  );
  const resolvedLogoHeight =
    isMobile && mobileLogoHeight ? mobileLogoHeight : logoHeight;

  const tracks = Array.from({ length: columnCount }, (_, column) =>
    items.filter((_, index) => index % columnCount === column)
  );

  return (
    <div className="w-full px-6 py-16 md:p-24">
      <p className="text-center text-4xl font-bold my-8">
        {title ?? defaultTitle}
      </p>

      {isVertical ? (
        <div
          className={`mx-auto grid max-w-5xl ${gridColsClass[columnCount]} gap-6 overflow-hidden `}
          style={{ height: verticalHeight }}
        >
          {tracks.map((track, column) => {
            // İlk sütun verilen yönde, komşusu ters yönde aksın.
            const goesDown =
              column % 2 === 0 ? direction === "down" : direction !== "down";

            return (
              <div key={column} className="overflow-hidden">
                <div
                  className={goesDown ? "scroll-loop-down" : "scroll-loop-up"}
                  style={{ animationDuration: `${verticalDuration}s` }}
                >
                  {/* Kesintisiz döngü için içerik iki kez basılıyor */}
                  {[...track].map((item, index) => (
                    <div
                      key={`${item.name}-${index}`}
                      className={`px-3 py-6 ${itemClass}`}
                    >
                      <LogoItem item={item} logoHeight={resolvedLogoHeight} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <MarqueeComponent
          speed={speed}
          gradient={false}
          gradientColor="#ffffff"
          gradientWidth={80}
          pauseOnHover={true}
          className="py-12"
        >
          {items.map((item, index) => (
            <div key={`${item.name}-${index}`} className={`mx-10 md:mx-16 ${itemClass}`}>
              <LogoItem item={item} logoHeight={resolvedLogoHeight} />
            </div>
          ))}
        </MarqueeComponent>
      )}
    </div>
  );
};

export default Carosuel;
