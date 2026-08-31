import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { SERVICES } from "./servicesData";
import ServicesHeader from "./ServicesHeader";
import ServiceTabButton from "./ServiceTabButton";
import ServicePanel from "./ServicePanel";

const ServicesTabs = () => {
  const [activeId, setActiveId] = useState(SERVICES[0].id);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const activeService = SERVICES.find((service) => service.id === activeId);

  return (
    <section className="relative w-full bg-gray-50 py-16 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <ServicesHeader />

        <div
          ref={ref}
          className={`grid md:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16 items-start transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div role="tablist" className="flex flex-col gap-2">
            {SERVICES.map((service) => (
              <ServiceTabButton
                key={service.id}
                service={service}
                isActive={service.id === activeId}
                onSelect={() => setActiveId(service.id)}
              />
            ))}
          </div>

          <ServicePanel key={activeId} service={activeService} />
        </div>
      </div>
    </section>
  );
};

export default ServicesTabs;
