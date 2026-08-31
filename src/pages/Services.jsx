import Seo from "../utils/Seo";
import ServicesTabs from "../components/services/ServicesTabs";

const Services = () => {
  return (
    <>
      <Seo
        title="Hizmetlerimiz"
        description="Performans pazarlama, Google, Meta ve TikTok reklam yönetimi ile markanızı ölçülebilir şekilde büyütüyoruz."
      />

      <ServicesTabs />
    </>
  );
};

export default Services;
