import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Her rota değişiminde Meta Pixel'e PageView gönderir.
// Pixel temel kodu (index.html) fbq'yu kuyruk olarak tanımladığı için script inmeden önce de güvenle çağrılabilir.
export default function PageViewTracker() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname, search]);

  return null;
}
