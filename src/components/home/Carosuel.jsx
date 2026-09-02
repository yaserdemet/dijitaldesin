import React from "react";
import Marquee from "react-fast-marquee";
import { Icon } from "@iconify/react";
import ticimaxLogo from "../../assets/ticimax-logo.svg";
import ikasLogo from "../../assets/ikas-logo.webp";
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
const Carosuel = () => {
  return (
    <div className="w-full p-24">
      <p className="text-center text-4xl font-bold my-8">İş Ortaklarımız</p>
      <MarqueeComponent
        speed={40}
        gradient={false}
        gradientColor="#ffffff"
        gradientWidth={80}
        pauseOnHover={true}
        className="py-12 border-y border-slate-200 bg-slate-50/50"
      >
        {brands.map((b, idx) => (
          <div
            key={`${b.name}-${idx}`}
            className="mx-8 flex items-center gap-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
          >
            {b.src ? (
              <img
                src={b.src}
                alt={b.name}
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            ) : null}
            {b.icon ? (
              <Icon icon={b.icon} className="h-12 w-auto text-3xl" />
            ) : null}
          </div>
        ))}
      </MarqueeComponent>
    </div>
  );
};

export default Carosuel;
