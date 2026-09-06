import { Suspense, lazy } from "react";
import FirstSection from "../components/home/FirstSection";
import Counts from "../components/home/Counts";
import LaunchCTA from "../components/home/LaunchCTA";

// Agir bagimliliklar (recharts / react-fast-marquee) baslangic Home chunk'indan
// cikarilir; bu bilesenler ilk boyamadan sonra ayri chunk olarak yuklenir.
const ChartsSection = lazy(() => import("../components/home/ChartsSection"));
const RevenueSection = lazy(() => import("../components/home/RevenueSection"));
const Carosuel = lazy(() => import("../components/home/Carosuel"));

const Home = () => {
  return (
    <>
      <main className="relative bg-white overflow-hidden">
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]
            bg-[size:40px_40px]
            [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]
          "
        />

        <FirstSection />
        <Suspense fallback={null}>
          <ChartsSection />
        </Suspense>
      <Counts />

      </main>

      <Suspense fallback={null}>
        <Carosuel variant="brands" />
        <RevenueSection />
        <Carosuel
          variant="logos"
          direction="down"
          columns={3}
          mobileColumns={2}
          logoHeight="h-20"
          mobileLogoHeight="h-16"
        />
      </Suspense>

      <LaunchCTA />
    </>
  );
};

export default Home;
