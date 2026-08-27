import { Icon } from "@iconify/react";

const ContactInfo = () => {
  const contactItems = [
    {
      icon: "solar:phone-bold",
      title: "Telefon",
      value: "+850 309 03 74",
      link: "tel:+8503090374",
    },
    {
      icon: "solar:letter-bold",
      title: "Email",
      value: "info@dijitaldesin.com",
      link: "mailto:info@dijitaldesin.com",
    },
    {
      icon: "solar:map-point-bold",
      title: "Adres",
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
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        Bize Ulaşın
      </h2>
      <div className="space-y-4">
        {contactItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="block bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-black"
          >
            <div className="flex items-start gap-4">
              <Icon
                icon={item.icon}
                className="w-6 h-6 text-gray-900 flex-shrink-0 mt-1"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.value}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
      
    </div>
  );
};

export default ContactInfo;
