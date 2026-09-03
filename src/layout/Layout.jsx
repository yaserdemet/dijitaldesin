import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ErrorBoundary from "../components/ErrorBoundary";
import { Icon } from "@iconify/react";

const Layout = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "8503090374";
    const text = "Merhaba, Dijitaldesin ile iletişime geçmek istiyorum.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };
  const [showText, setShowText] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <button
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}
        onClick={handleWhatsAppClick}
        className="*: animate-bounce  fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
      >
        <Icon icon="akar-icons:whatsapp-fill" className="w-6 h-6 text-white" />
        <span className="w-2 h-2 rounded animate-pulse absolute top-0 right-0 bg-green-500"></span>
      </button>
      {showText && (
        <div className="fixed bottom-6 right-16 bg-white text-gray-900 p-3 rounded-lg shadow-lg transition-all duration-300">
          WhatsApp ile iletişime geç
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Layout;
