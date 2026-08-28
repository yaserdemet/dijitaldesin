import { Icon } from "@iconify/react";

const PlatformLogo = ({ platform, index, delays }) => {
  const angleRad = (platform.angle * Math.PI) / 180;
  const x = 180 * Math.cos(angleRad - Math.PI / 2);
  const y = 180 * Math.sin(angleRad - Math.PI / 2);

  return (
    <div
      className="orbit-item absolute"
      style={{
        animation: `float-${index} 3.5s ease-in-out infinite`,
        animationDelay: `${delays[index]}s`,
        width: "24px",
        height: "24px",
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        marginLeft: "-12px",
        marginTop: "-12px",
      }}
    >
      <div className="absolute w-20 h-20 -ml-10 -mt-10 bg-white rounded-xl shadow-lg flex items-center justify-center border-2 border-gray-100 hover:shadow-2xl hover:scale-110 transition-all duration-300">
        {platform.isIcon ? (
          <Icon icon={platform.icon} width="36" height="36" />
        ) : (
          <img
            src={platform.src}
            alt={platform.label}
            className="w-10 h-10 object-contain"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        )}
      </div>
    </div>
  );
};

export default PlatformLogo;
