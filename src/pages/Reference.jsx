import Seo from "../components/seo ui/Seo";
import LogosGrid from "../components/reference/LogosGrid";


const Reference = () => {

  //* Tek tek import yapmak yerine meta glob kullan
  const logoModules = import.meta.glob("../assets/referances/*.svg", {
    eager: true,
    import: "default",
  });
  

  const logos = Object.entries(logoModules).map(([path, src]) => {
    const filename = path.split("/").pop().replace(".svg", "");
    const name = filename
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return { name, src };
  });

  return (
    <>
      <Seo
        title="Referanslar | DijitalDesin"
        description="DijitalDesin ile çalıştığımız 60+ markanın portföyünü ve başarı hikayelerini keşfedin."
      />

      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Referanslar
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Türkiye'nin çeşitli sektörlerinden 60+ markayla başarıyla
              çalıştığımız projelerimizi göz atın.
            </p>
          </div>

          {/* Logos Grid */}
          <LogosGrid logos={logos} />
        </div>
      </div>
    </>
  );
};

export default Reference;
