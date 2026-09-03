import Seo from "../utils/Seo";
import ServicesTabs from "../components/services/ServicesTabs";
import DijitaldesinDashboard from "../components/services/DijitaldesinDashboard";

const Services = () => {
  return (
    <>
      <Seo
        title="Hizmetlerimiz"
        description="Performans pazarlama, Google, Meta ve TikTok reklam yönetimi ile markanızı ölçülebilir şekilde büyütüyoruz."
      />
      <DijitaldesinDashboard />
      <ServicesTabs />
    </>
  );
};

export default Services;
