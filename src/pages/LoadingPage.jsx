import { useEffect, useState } from "react";

// Chunk hızlı geldiğinde spinner'ın bir kare görünüp kaybolması,
// beklemenin kendisinden daha rahatsız edici. Bu eşiğin altındaki
// geçişlerde hiçbir şey göstermiyoruz.
const APPEAR_DELAY = 200;

const LoadingPage = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), APPEAR_DELAY);
    return () => clearTimeout(timer);
  }, []);

  return (
    // Yükseklik baştan ayrılıyor; içerik geldiğinde footer zıplamıyor.
    <div
      className="min-h-[70vh] flex items-center justify-center bg-white px-6"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      {visible && (
        <div className="animate-loader-in flex flex-col items-center gap-7">
          <div className="h-1 w-48 overflow-hidden rounded-full bg-gray-200">
            <div className="h-full w-1/3 rounded-full bg-black animate-loader-bar" />
          </div>

          <p className="animate-loader-text text-sm font-semibold tracking-wide text-gray-500">
            Yükleniyor...
          </p>
        </div>
      )}

      <span className="sr-only">Sayfa yükleniyor</span>
    </div>
  );
};

export default LoadingPage;
