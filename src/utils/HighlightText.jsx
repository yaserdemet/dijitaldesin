import { Icon } from "@iconify/react";

const HighlightText = ({ children }) => {
  return (
    <span className="relative inline-block px-3 py-1">
      <span className="relative z-10">{children}</span>

      <span
        aria-hidden="true"
        className="animate-highlight-in pointer-events-none absolute inset-0 z-0"
      >
        <span className="animate-highlight-box absolute left-0 top-0 rounded-lg bg-[rgb(223,255,79)]">
          <Icon
            icon="bi:cursor-fill"
            className="animate-highlight-cursor absolute -bottom-3 -right-2 h-5 w-5 text-[rgb(223,255,79)]"
          />
        </span>
      </span>
    </span>
  );
};

export default HighlightText;
