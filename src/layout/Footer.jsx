import { Link } from "react-router-dom";
import DijitalDesinLogo from "../assets/digi1.png";
import Cards from "../assets/cards.svg";
import { Icon } from "@iconify/react";

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
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors duration-500 ease-in-out hover:bg-blue-600 hover:text-white"
              >
                <Icon icon="mynaui:facebook" className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors duration-500 ease-in-out hover:bg-pink-600 hover:text-white"
              >
                <Icon icon="mynaui:instagram" className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors duration-500 ease-in-out hover:bg-blue-600 hover:text-white"
              >
                <Icon icon="mynaui:linkedin" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Hizmetler */}
          <div className="space-y-4">
            <h3 className="text-gray-900 font-semibold text-lg">Hizmetler</h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-gray-900 transition text-sm"
                >
                  Dijital Pazarlama
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-gray-900 transition text-sm"
                >
                  SEO Optimizasyonu
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-gray-900 transition text-sm"
                >
                  Sosyal Medya
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-gray-900 transition text-sm"
                >
                  Web Tasarımı
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-gray-900 transition text-sm"
                >
                  İçerik Pazarlaması
                </Link>
              </li>
            </ul>
          </div>

          {/* Şirket */}
          <div className="space-y-4">
            <h3 className="text-gray-900 font-semibold text-lg">Şirket</h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-gray-900 transition text-sm"
                >
                  Hakkında
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-gray-900 transition text-sm"
                >
                  Neden Biz?
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition text-sm"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition text-sm"
                >
                  Başarı Hikayeleri
                </a>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-gray-900 transition text-sm"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Yasal */}
          <div className="space-y-4">
            <h3 className="text-gray-900 font-semibold text-lg">Yasal</h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition text-sm"
                >
                  Gizlilik Politikası
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition text-sm"
                >
                  Kullanım Şartları
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition text-sm"
                >
                  Çerez Politikası
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition text-sm"
                >
                  İş Ortaklığı
                </a>
              </li>
            </ul>
          </div>
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
          <div >

          <img src={Cards} />
</div>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition text-sm"
            >
              Gizlilik &nbsp; &nbsp; &nbsp;|
            </a>

            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition text-sm"
            >
              Şartlar &nbsp; &nbsp; &nbsp;|
            </a>

            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition text-sm"
            >
              Çerezler
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
