import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Icon } from "@iconify/react";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <button className="*: animate-bounce  fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300">
        <Icon icon="akar-icons:whatsapp-fill" className="w-6 h-6 text-white" />
        <span className="w-2 h-2 rounded animate-pulse absolute top-0 right-0 bg-green-500"></span>
      </button>
      <Footer />
    </div>
  );
};

export default Layout;
