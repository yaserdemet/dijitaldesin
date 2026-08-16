import FirstSection from "../components/home/FirstSection";
import ChartsSection from "../components/home/ChartsSection";
import Marquee from "react-fast-marquee";
import { Icon } from "@iconify/react";

const MarqueeComponent =
  typeof Marquee === "function" ? Marquee : Marquee?.default || Marquee;

const brands = [
  { name: "Shopify", icon: "logos:shopify" },
  { name: "ikas", icon: "simple-icons:ikas", src: "/assets/logos/ikas.png" },
  { name: "WooCommerce", icon: "logos:woocommerce" },
  { name: "Trendyol", icon: "simple-icons:trendyol" },
  { name: "Amazon", icon: "logos:amazon-icon" },
  { name: "Meta", icon: "logos:meta" },
  { name: "Google Ads", icon: "logos:google-ads" },
];
const Home = () => {
  return (
    <>
      <section className="relative bg-white overflow-hidden">
        {/* Grid pattern arka plan */}
        <div
          className="absolute inset-0
    bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]
    bg-[size:40px_40px]
    [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"
        ></div>

        <FirstSection />
        <ChartsSection />
        <MarqueeComponent
          speed={40}
          gradient={true}
          gradientColor="#ffffff"
          gradientWidth={80}
          pauseOnHover={true}
          className="py-6 border-y border-slate-100 bg-slate-50/50"
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
                  className="h-8 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              ) : null}
              {b.icon ? (
                <Icon icon={b.icon} className="h-8 w-auto text-3xl" />
              ) : null}
              <span className="font-semibold text-slate-800 text-sm tracking-wide">
                {b.name}
              </span>
            </div>
          ))}
        </MarqueeComponent>
      </section>
    </>
  );
};

export default Home;
