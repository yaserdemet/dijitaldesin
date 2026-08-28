import FeatureItem from "./FeatureItem";

const FeaturesList = () => {
  const features = [
    "Veri analiziyle desteklenen, ölçülebilir sonuçlar elde eden stratejiler",
    "Her markanın kimliğine özel kişiselleştirilmiş çözümler",
    "Şeffaf iletişim ve uzun soluklu iş ortaklıklarına odaklanan yaklaşım",
  ];

  return (
    <div className="space-y-4">
      {features.map((feature, index) => (
        <FeatureItem key={index} text={feature} />
      ))}
    </div>
  );
};

export default FeaturesList;
