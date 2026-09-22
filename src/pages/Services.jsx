import Seo from "../utils/Seo";
import JsonLd from "../utils/JsonLd";
import ServicesTabs from "../components/services/ServicesTabs";
import DijitaldesinDashboard from "../components/services/DijitaldesinDashboard";
import { SERVICES } from "../components/services/servicesData";
import { SITE_URL, ORGANIZATION_SCHEMA } from "../utils/organizationSchema";

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@graph": SERVICES.map((service) => ({
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.summary,
    url: `${SITE_URL}/services#${service.id}`,
    provider: ORGANIZATION_SCHEMA,
    areaServed: "TR",
  })),
};

const Services = () => {
  return (
    <>
      <Seo
        title="Hizmetlerimiz"
        description="Performans pazarlama, Google, Meta ve TikTok reklam yönetimi ile markanızı ölçülebilir şekilde büyütüyoruz."
      />
      <JsonLd data={servicesJsonLd} />
      <DijitaldesinDashboard />
      <ServicesTabs />
    </>
  );
};

export default Services;
