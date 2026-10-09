import { useEffect, useState } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import Seo from "../utils/Seo";

const EmailRecived = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, email, phone } = location.state || {};

  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    let pending = false;
    try {
      pending = sessionStorage.getItem("dd_lead_pending") === "1";
      sessionStorage.removeItem("dd_lead_pending");
    } catch {
      // sessionStorage kapalıysa (gizli sekme vb.) sessizce yok say
    }

    // Sadece iletişim formunun gerçek bir başarılı gönderiminden sonra
    // gelindiyse tetiklenir; sayfa doğrudan açılır/yenilenirse saymaz.
    if (pending && typeof window.oaiq === "function") {
      window.oaiq("measure", "lead_created", { type: "customer_action" });
    }
    if (pending && typeof window.fbq === "function") {
      window.fbq("track", "Lead");
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    if (seconds <= 0) {
      navigate("/");
    }

    return () => clearTimeout(timer);
  }, [seconds]);

  if (!name || !email) {
    return <Navigate to="/" replace />;
    //* <Navigate /> ile mail veya name yoksa url den bu sayfaya gidemezler. Replace ise url de history olarak kalmaz.
  }

  return (
    <div className="bg-white min-h-[70vh] flex items-center px-4 py-16 md:py-24">
      <Seo
        title="Mesajınız Alındı"
        description="Mesajınız başarıyla iletildi. Dijitaldesin ekibi en kısa sürede sizinle iletişime geçecek."
      />

      <div className="w-full mx-auto text-center">
        <div className=" animate-pulse  inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-8">
          <Icon
            icon="solar:check-circle-bold"
            className="w-12 h-12 text-green-600 "
          />
        </div>

        <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {name} <br /> Mesajınız Alındı!
        </p>
        <p className="text-lg text-gray-600 mb-2">
          En kısa sürede sizinle {phone} numaralı telefonunuzdan temasa
          geçeceğiz.
        </p>
        <p className="text-gray-500 mb-12">
          Talebinizi inceleyip size özel bir dönüş sağlamak için ekibimiz
          çalışmaya başladı.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="sm:w-auto text-center px-4 py-3 text-sm text-gray-600 border-2 border-gray-200 rounded-xl">
            {seconds} saniye içerisinde anasayfaya yönlendirileceksiniz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailRecived;
