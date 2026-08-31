import { Icon } from "@iconify/react";

const ServiceTabButton = ({ service, isActive, onSelect }) => {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      onClick={onSelect}
      className={`group w-full text-left flex items-start gap-4 p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
        isActive
          ? "bg-white border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] scale-[1.02]"
          : "border-transparent hover:bg-white/60"
      }`}
    >
      <span
        className={`flex items-center justify-center w-12 h-12 rounded-xl border shrink-0 transition-colors duration-300 ${
          isActive
            ? "border-gray-200 shadow-sm"
            : "border-gray-200/60 bg-transparent group-hover:bg-white"
        }`}
        style={isActive ? { backgroundColor: "var(--primary-color)" } : undefined}
      >
        <Icon icon={service.icon} className="w-6 h-6 text-gray-900" />
      </span>

      <span className="flex flex-col flex-1 justify-center min-h-[3rem]">
        <span className="text-base font-bold text-gray-900">
          {service.title}
        </span>

        {isActive && (
          <span className="mt-2 text-sm text-gray-600 leading-relaxed">
            {service.summary}
          </span>
        )}
      </span>
    </button>
  );
};

export default ServiceTabButton;
