const LogosGrid = ({ logos }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-24 group"
          style={{
            animation: 'cardIn 0.6s ease-out forwards',
            animationDelay: `${index * 50}ms`,
            opacity: 0,
          }}
        >
          <img
            src={logo.src}
            alt={logo.name}
            className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100"
          />
        </div>
      ))}
    </div>
  );
};

export default LogosGrid;
