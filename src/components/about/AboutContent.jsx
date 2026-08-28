import AboutHeader from "./AboutHeader";
import FeaturesList from "./FeaturesList";

const AboutContent = () => {
  return (
    <div className="flex flex-col justify-center">
      <AboutHeader />

      <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        Markaların Dijital{" "}
        <span className="bg-[rgb(223,255,79)] px-3 py-1 rounded-lg">
          Dönüşümü
        </span>
      </h1>

      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
        2019 yılında Ankara'da başlayan hikayemizde, markaların dijital dünyada fark yaratmasını, güçlenmesini ve sürdürülebilir şekilde büyümesini hedefleyen bir ajansız. Türkiye'nin dört bir yanından markalarla çalışarak, farklı sektörlerde edindiğimiz deneyimi her projeye değer katan stratejilere dönüştürüyoruz. Veri analizini, yaratıcı bakış açısını ve güncel reklam teknolojilerini bir araya getirerek; her markanın kimliğine ve hedeflerine özel çözümler sunuyoruz.
      </p>

      <FeaturesList />
    </div>
  );
};

export default AboutContent;
