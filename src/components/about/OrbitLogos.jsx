import CenterLogo from "./CenterLogo";
import OrbitRings from "./OrbitRings";
import PlatformLogo from "./PlatformLogo";

const OrbitLogos = ({ platforms }) => {
  const delays = [0, 0.2, 0.4, 0.6, 0.8, 1];

  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-full max-w-md aspect-square">
        <CenterLogo />
        <OrbitRings />
        {platforms.map((platform, index) => (
          <PlatformLogo
            key={index}
            platform={platform}
            index={index}
            delays={delays}
          />
        ))}
      </div>
    </div>
  );
};

export default OrbitLogos;
