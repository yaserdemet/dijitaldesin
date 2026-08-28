import FirstSection from "../components/home/FirstSection";
import ChartsSection from "../components/home/ChartsSection";
import Carosuel from "../components/home/Carosuel";
import LaunchCTA from "../components/home/LaunchCTA";
import Counts from "../components/home/Counts";
import Testimony from "../components/home/Testimony";

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
        <ChartsSection />
      </main>

      <Carosuel />
      <Testimony />
      <LaunchCTA />
      <Counts />
    </>
  );
};

export default Home;
