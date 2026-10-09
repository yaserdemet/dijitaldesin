import { useEffect, useState } from "react";

// Başlık içindeki küçük kutuda öğeleri dikey kaydırarak sırayla gösterir.
// İlk öğe listenin sonuna bir kez daha eklenir; son kopyaya gelince geçiş
// kapatılıp başa dönülür, böylece döngü atlamasız görünür.
const HeroTileSlider = ({ items, renderItem, interval = 2500, delay = 0, className = "" }) => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const slides = [...items, items[0]];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer;
    // delay: iki kutu aynı anda değil, sırayla kaysın diye
    const start = setTimeout(() => {
      timer = setInterval(() => {
        setAnimate(true);
        // Son kopyanın ötesine geçmesin; geçerse kutu boş kalır
        setIndex((i) => Math.min(i + 1, items.length));
      }, interval);
    }, delay);

    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
  }, [interval, delay, items.length]);

  // Son kopyaya gelince geçiş bitince (700ms) animasyonsuz başa dön.
  // transitionend'e güvenilmiyor: sekme arka plandayken vb. tetiklenmeyebiliyor.
  useEffect(() => {
    if (index < items.length) return;
    const reset = setTimeout(() => {
      setAnimate(false);
      setIndex(0);
    }, 700);
    return () => clearTimeout(reset);
  }, [index, items.length]);

  return (
    <span
      aria-hidden="true"
      className={`relative inline-block align-middle overflow-hidden rounded-[0.22em] border-2 shadow-[0_0.05em_0.15em_rgba(0,0,0,0.25)] ${className}`}
    >
      <span
        className={`flex flex-col h-full ${animate ? "transition-transform duration-700 ease-in-out" : ""}`}
        style={{ transform: `translateY(-${index * 100}%)` }}
      >
        {slides.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center justify-center w-full h-full">
            {renderItem(item)}
          </span>
        ))}
      </span>
    </span>
  );
};

export default HeroTileSlider;
