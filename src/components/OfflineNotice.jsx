import { useState } from "react";

// Gerçek bağlantıyı test eder. Benzersiz query + no-store sayesinde
// ne tarayıcı cache'inden ne de service worker önbelleğinden yanıt döner.
const checkConnection = async () => {
  try {
    const res = await fetch(`/manifest.webmanifest?ping=${Date.now()}`, {
      cache: "no-store",
    });
    return res.ok;
  } catch {
    return false;
  }
};

// İnternet yokken Layout içinde (navbar ile footer arasında) gösterilir.
// İkon inline SVG: Iconify ikonları ağdan yüklendiği için çevrimdışıyken görünmeyebilir.
const OfflineNotice = () => {
  const [status, setStatus] = useState("idle"); // idle | checking | failed
  const [attempts, setAttempts] = useState(0);

  // Sayfayı körlemesine yenilemek yerine önce bağlantıyı dener; internet yoksa
  // tarayıcının hata sayfasına düşmeden burada kalır.
  const handleRetry = async () => {
    setStatus("checking");
    if (await checkConnection()) {
      window.location.reload();
    } else {
      setStatus("failed");
      setAttempts((n) => n + 1);
    }
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-100 px-6 py-16 text-center"
    >
      <div className="relative mb-8">
        <span className="absolute inset-0 rounded-full bg-(--third-color) animate-ping" />
        <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200">
          <svg
            className="w-12 h-12 text-zinc-900"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 20h.01" />
            <path d="M8.5 16.43a5 5 0 0 1 7 0" />
            <path d="M5 12.86a10 10 0 0 1 5.17-2.69" />
            <path d="M19 12.86a10 10 0 0 0-2-1.43" />
            <path d="M2 8.82a15 15 0 0 1 4.18-2.65" />
            <path d="M22 8.82a15 15 0 0 0-11.29-3.76" />
            <path d="m2 2 20 20" />
          </svg>
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        İnternet bağlantısı yok
      </h1>
      <p className="text-gray-600 max-w-md mb-8">
        Bağlantınızı kontrol edin. İnternet geri geldiğinde sayfa otomatik
        olarak yüklenecek.
      </p>

      <button
        type="button"
        onClick={handleRetry}
        disabled={status === "checking"}
        className="px-6 py-3 bg-zinc-900 border-2 border-zinc-900 text-white rounded-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-wait"
      >
        {status === "checking" ? "Kontrol ediliyor..." : "Tekrar Dene"}
      </button>

      {status === "failed" && (
        <p key={attempts} className="mt-4 text-sm text-gray-500 animate-scale-in">
          Hâlâ bağlantı yok. Lütfen biraz sonra tekrar deneyin.
        </p>
      )}
    </div>
  );
};

export default OfflineNotice;
