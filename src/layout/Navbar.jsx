import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/digi1.png";

const NAV_LINKS = [
  { label: "Anasayfa", path: "/" },
  { label: "Biz Kimiz?", path: "/about" },
  { label: "Hizmetlerimiz", path: "/services" },
  { label: "Referanslar", path: "/reference" },
  { label: "İletişim", path: "/contact" },
];

const NAV_STYLES = {
  link: "text-gray-700 hover:text-black hover:bg-gray-100 p-2 rounded-lg transition-colors duration-300 ease-in-out text-sm",
  activeLink: "text-black bg-(--third-color) p-2 rounded-lg text-sm font-semibold",
  mobileLink: "text-black hover:text-(--primary-color) transition font-medium px-2 py-2 rounded hover:bg-gray-100",
  activeMobileLink: "text-(--primary-color) transition font-medium px-2 py-2 rounded bg-gray-100",
  ctaButton: "bg-zinc-900 text-white px-6 py-2 rounded-lg hover:shadow-lg transition font-medium",
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center flex-shrink-0">
            <img src={Logo} width="180" alt="DijitalDesin" />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? NAV_STYLES.activeLink : NAV_STYLES.link
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <NavLink
              to="/contact"
              className="hidden md:inline-block bg-zinc-900 text-white px-6 py-2 rounded-lg hover:shadow-lg transition font-medium"
            >
              Sizi Arayalım
            </NavLink>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-label="Menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? NAV_STYLES.activeMobileLink : NAV_STYLES.mobileLink
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
