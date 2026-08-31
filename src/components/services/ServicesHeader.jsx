import HighlightText from "../../utils/HighlightText";

const ServicesHeader = () => {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <span className="inline-block mb-4 px-4 py-2 rounded-2xl text-xs font-semibold border border-gray-300 text-gray-900">
        HİZMETLERİMİZ
      </span>

      <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
        İşletmenizi Büyütecek <HighlightText>Dijital Hizmetler</HighlightText>
      </h2>

      <p className="text-base md:text-lg text-gray-600">
        Performans pazarlamadan Google, Meta ve TikTok reklam yönetimine kadar;
        markanızı ölçülebilir ve sürdürülebilir şekilde büyüten çözümler
        sunuyoruz.
      </p>
    </div>
  );
};

export default ServicesHeader;
