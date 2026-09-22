import { Suspense, lazy } from "react";
import FirstSection from "../components/home/FirstSection";
import Counts from "../components/home/Counts";
import WorkProcess from "../components/home/WorkProcess";
import ContactForm from "../components/contact/ContactForm";
import HomeContactInfo from "../components/contact/HomeContactInfo";
import Seo from "../utils/Seo";
import JsonLd from "../utils/JsonLd";
import { SITE_URL, ORGANIZATION_SCHEMA } from "../utils/organizationSchema";

// Agir bagimliliklar (recharts / react-fast-marquee) baslangic Home chunk'indan
// cikarilir; bu bilesenler ilk boyamadan sonra ayri chunk olarak yuklenir.
//* const ChartsSection = lazy(() => import("../components/home/ChartsSection"));
//* const RevenueSection = lazy(() => import("../components/home/RevenueSection"));
const Carosuel = lazy(() => import("../components/home/Carosuel"));

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    ORGANIZATION_SCHEMA,
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Dijitaldesin",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "tr-TR",
    },
  ],
};

const Home = () => {
  return (
    <>
      <Seo
        title="Dijital Pazarlama Ajansı"
        description="Google, Meta ve TikTok reklam yönetimi, SEO ve e-ticaret entegrasyonları ile markanızı ölçülebilir şekilde büyütüyoruz."
      />
      <JsonLd data={homeJsonLd} />

      <main className="relative bg-white overflow-hidden">

        <FirstSection />
        <WorkProcess />
        {/* <Suspense fallback={null}>
          <ChartsSection />
        </Suspense> */}
      <Counts />

      </main>

      <Suspense fallback={null}>
        <Carosuel variant="brands" />
        {/* <RevenueSection /> */}
        <Carosuel
          variant="logos"
          direction="down"
          columns={3}
          mobileColumns={2}
          logoHeight="h-28"
          mobileLogoHeight="h-28"
        />
      </Suspense>


      <section className="bg-white py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-2 border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <HomeContactInfo />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
