import Seo from "../utils/Seo";
import JsonLd from "../utils/JsonLd";
import TicimaxLogo from "../assets/ticimax-logo.svg?url";
import IkasLogo from "../assets/ikas-logo.svg";
import AboutContent from "../components/about/AboutContent";
import OrbitLogos from "../components/about/OrbitLogos";
import MissionList from "../components/about/MissionList";
import { SITE_URL, ORGANIZATION_SCHEMA } from "../utils/organizationSchema";

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: `${SITE_URL}/about`,
  name: "Hakkımızda",
  mainEntity: ORGANIZATION_SCHEMA,
};

const About = () => {
  const platforms = [
    { icon: "logos:google", label: "Google", angle: 0, isIcon: true },
    { icon: "logos:meta", label: "Meta", angle: 60, isIcon: true },
    { icon: "logos:tiktok-icon", label: "TikTok", angle: 120, isIcon: true },
    { src: TicimaxLogo, label: "Ticimax", angle: 180, isIcon: false },
    { src: IkasLogo, label: "Ikas", angle: 240, isIcon: false },
    { icon: "logos:shopify", label: "Shopify", angle: 300, isIcon: true },
  ];

  return (
    <>
      <Seo
        title="Hakkımızda"
        description="2019'den beri markaların dijital dönüşümü, güçlenmesi ve sürdürülebilir büyümesi için stratejik çözümler sunuyoruz. Veri odaklı, yaratıcı ve sonuç tabanında çalışan dijital pazarlama ajansı."
      />
      <JsonLd data={aboutJsonLd} />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AboutContent />
            <OrbitLogos platforms={platforms} />
          </div>
        <MissionList />
        </div>
      </div>

      <style>{`
        ${platforms
          .map(
            (_, index) => `
          @keyframes float-${index} {
            0%, 100% {
              transform: translateY(0px) scale(1);
              opacity: 1;
            }
            50% {
              transform: translateY(-8px) scale(1.05);
              opacity: 0.95;
            }
          }
        `,
          )
          .join("\n")}
      `}</style>
    </>
  );
};

export default About;
