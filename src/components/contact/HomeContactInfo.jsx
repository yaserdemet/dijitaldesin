import { Icon } from "@iconify/react";

const CONTACT_INFO = [
  {
    icon: "solar:map-point-bold",
    label: "Adres",
    value: "One Tower Business Club, Oran, Kudüs Cd. 6/1, 06550 Çankaya/Ankara",
  },
  {
    icon: "solar:phone-bold",
    label: "Telefon",
    value: "+908503090374",
  },
  {
    icon: "solar:letter-bold",
    label: "Email",
    value: "info@dijitaldesin.com",
  },
];

const SOCIALS = [
  {
    icon: "mdi:facebook",
    label: "Facebook",
    link: "https://www.facebook.com/dijitaldesin",
  },
  {
    icon: "mdi:instagram",
    label: "Instagram",
    link: "https://www.instagram.com/dijitaldesin.co/",
  },
  {
    icon: "mdi:linkedin",
    label: "LinkedIn",
    link: "https://www.linkedin.com/company/dijitaldesin-reklam-ajansı/",
  },
];

const HomeContactInfo = () => {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Bizimle İletişime Geçin
        </h2>
        <p className="text-lg text-gray-600">
          Hayaliniz var, stratejimiz hazır. Markanızı dijitalde büyütmek,
          görünürlüğünüzü artırmak ve hedefleri aşmak için yalnızca bir tık
          uzağınızdayız. Hadi başlayalım.
        </p>
      </div>

      <div className="space-y-12">
        {CONTACT_INFO.map((info) => (
          <div key={info.label} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-sky-100 border border-blue-200 flex items-center justify-center shrink-0 shadow-sm">
              <Icon
                icon={info.icon}
                className="w-5 h-5 text-blue-600"
              />
            </div>
            <div>
              <p className="text-md font-bold text-gray-700 uppercase">
                {info.label}
              </p>
              <p className="text-base text-gray-600">{info.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        {SOCIALS.map((social) => (
          <a
            key={social.label}
            href={social.link}
            title={social.label}
            className="w-12 h-12 bg-gray-50 border-2 border-gray-200 rounded-xl flex items-center justify-center text-gray-900 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-black"
          >
            <Icon icon={social.icon} className="w-6 h-6" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default HomeContactInfo;
