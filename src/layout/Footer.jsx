import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import DijitalDesinLogo from "../assets/digi1.png";
import Cards from "../assets/cards.svg";

const linkClass = "text-gray-600 hover:text-gray-900 transition text-sm";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: "mynaui:facebook",
    hover: "hover:bg-blue-100 hover:border-blue-300 hover:text-blue",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: "mynaui:instagram",
    hover: "hover:bg-pink-100 hover:border-pink-300 hover:text-pink",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: "mynaui:linkedin",
    hover: "hover:bg-blue-100 hover:border-blue-300 hover:text-blue",
  },
];

const linkColumns = [
  {
    title: "Hizmetler",
    links: [
      { label: "Dijital Pazarlama", to: "/services" },
      { label: "SEO Optimizasyonu", to: "/services" },
      { label: "Sosyal Medya", to: "/services" },
      { label: "Web Tasarımı", to: "/services" },
      { label: "İçerik Pazarlaması", to: "/services" },
    ],
  },
  {
    title: "Şirket",
    links: [
      { label: "Hakkında", to: "/about" },
      { label: "Neden Biz?", to: "/services" },
      { label: "Blog", to: "/" },
      { label: "Başarı Hikayeleri", to: "/" },
      { label: "İletişim", to: "/contact" },
    ],
  },
  {
    title: "Yasal",
    links: [
      { label: "Gizlilik Politikası", to: "#" },
      { label: "İş Ortaklığı", to: "#" },
      { label: "KVKK", to: "/kvkk" },
    ],
  },
];

const bottomLinks = [
  { label: "Gizlilik", to: "#" },
  { label: "Şartlar", to: "#" },
  { label: "Çerezler", to: "#" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-900 py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold">
              <img
                src={DijitalDesinLogo}
                alt="DijitalDesin Logo"
                className="h-10 w-auto"
              />
            </Link>

            <p className="text-gray-600 text-sm leading-relaxed">
              İşletmenizin dijital dönüşümünü sağlayarak, hedef kitlenizle güçlü
              bir bağ kurmamız ve satışlarınızı artırmamız için buradayız.
            </p>

            {/* Sosyal Medya İkonları */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg shadow-lg bg-white text-gray-600 border transition-colors duration-500 ease-in-out ${social.hover}`}
                >
                  <Icon icon={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Bağlantı Sütunları */}
          {linkColumns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-gray-900 font-semibold text-lg border-l-3 border-l-zinc-600 pl-2">
                {column.title}
              </h3>

              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-gray-600 text-sm">
              © {currentYear} DijitalDesin. Tüm hakları saklıdır.
            </p>

            <p className="text-gray-400 text-sm">
              Dijitaldesin bir reklam ve e-ticaret AŞ. markasıdır.
            </p>
          </div>
          <div>
            <img src={Cards} alt="Kabul edilen ödeme yöntemleri" />
          </div>

          <div className="flex items-center gap-4">
            {bottomLinks.map((link, index) => (
              <Fragment key={link.label}>
                <Link to={link.to} className={linkClass}>
                  {link.label}
                </Link>
                {index < bottomLinks.length - 1 && (
                  <span aria-hidden="true" className="text-gray-300">
                    |
                  </span>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
