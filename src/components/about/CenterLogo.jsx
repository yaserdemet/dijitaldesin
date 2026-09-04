import Logo from "../../assets/digi1.svg";

const CenterLogo = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-gray-50 relative">
        <img
          src={Logo}
          alt="DijitalDesin"
          className="w-24 h-24 object-contain"
        />
        <span className="w-4 h-4 bg-zinc-900 animate-pulse rounded-full absolute top-4 right-0" />
      </div>
    </div>
  );
};

export default CenterLogo;
