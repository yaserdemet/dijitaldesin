const OrbitRings = () => {
  const rings = [
    { r: "80", opacity: "0.2", strokeWidth: "0.8" },
    { r: "110", opacity: "0.25", strokeWidth: "0.8" },
    { r: "140", opacity: "0.3", strokeWidth: "0.8" },
    { r: "170", opacity: "0.35", strokeWidth: "1" },
    { r: "200", opacity: "0.4", strokeWidth: "1" },
    { r: "230", opacity: "0.35", strokeWidth: "1" },
    { r: "260", opacity: "0.25", strokeWidth: "0.8" },
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 500 500"
    >
      {rings.map((ring, index) => (
        <circle
          key={index}
          cx="250"
          cy="250"
          r={ring.r}
          fill="none"
          stroke="#b6b5b5"
          strokeWidth={ring.strokeWidth}
          opacity={ring.opacity}
        />
      ))}
    </svg>
  );
};

export default OrbitRings;
