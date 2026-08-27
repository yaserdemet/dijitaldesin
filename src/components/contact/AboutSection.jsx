import { Icon } from "@iconify/react";

const AboutSection = () => {
  const contactInfo = [
    {
      icon: "solar:phone-bold",
      label: "Telefon",
      value: "+850 309 03 74",
      link: "tel:+8503090374",
    },
    {
      icon: "solar:letter-bold",
      label: "Email",
      value: "info@dijitaldesin.com",
      link: "mailto:info@dijitaldesin.com",
    },
    {
      icon: "solar:map-point-bold",
      label: "Adres",
      value:
        "One Tower Business Club, Oran, Kudüs Cd. 6/1, 06550 Çankaya/Ankara",
      link: "#",
    },
  ];

  const socials = [
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

  return (
    <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg p-8">
      <div className="border-b-2 border-gray-200 pb-6 mb-6">
        <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
          İletişim Bilgileri
        </h4>
        <div className="space-y-3">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="flex items-start gap-3 group hover:text-gray-900 transition"
            >
              <Icon
                icon={info.icon}
                className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5"
              />
              <div>
                <p className="text-xs font-semibold text-gray-700 uppercase">
                  {info.label}
                </p>
                <p className="text-sm text-gray-600 group-hover:text-gray-900">
                  {info.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
          Sosyal Medya
        </h4>
        <div className="flex gap-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              title={social.label}
              className="w-12 h-12 bg-gray-50 border-2 border-gray-200 rounded-xl flex items-center justify-center text-gray-900 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-black"
            >
              <Icon icon={social.icon} className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
