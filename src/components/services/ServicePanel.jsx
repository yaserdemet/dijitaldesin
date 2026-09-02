import { Icon } from "@iconify/react";

const ServicePanel = ({ service }) => {
  return (
    <div
      role="tabpanel"
      className="animate-card-in rounded-3xl border border-slate-200/80 bg-white shadow-2xl p-6 md:p-10"
    >
      <div className="flex items-center gap-3 mb-8">
        <Icon icon={service.icon} className="w-7 h-7 text-gray-900" />
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          {service.panelTitle}
        </h3>
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        {service.items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3"
              style={{ backgroundColor: "var(--third-color)" }}
            >
              <Icon icon={item.icon} className="w-5 h-5 text-gray-900" />
            </span>

            <h4 className="text-base font-bold text-gray-900 mb-1.5">
              {item.title}
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePanel;
