import { useState } from "react";
import { Icon } from "@iconify/react";

const FaqAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="divide-y  divide-gray-500 border-t border-b border-gray-200">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div className="hover:cursor-pointer" key={item.question}>
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 py-5 text-left group hover:cursor-pointer"
            >
              <span className="font-semibold text-gray-900 text-base md:text-lg group-hover:text-gray-600 transition-colors duration-300">
                {item.question}
              </span>
              <Icon
                icon="solar:add-circle-linear"
                className={`w-6 h-6 shrink-0 text-gray-900 transition-transform duration-300 ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
