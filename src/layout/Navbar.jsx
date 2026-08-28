import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/digi1.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src={Logo} width="180" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-black hover:bg-gray-100 p-2 rounded-lg transition-colors duration-300 ease-in-out text-sm"
            >
              Anasayfa
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-black hover:bg-gray-100 p-2 rounded-lg transition-colors duration-300 ease-in-out text-sm"
            >
              Biz Kimiz?
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-black hover:bg-gray-100 p-2 rounded-lg transition-colors duration-300 ease-in-out text-sm"
            >
              Hizmetlerimiz
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-black hover:bg-gray-100 p-2 rounded-lg transition-colors duration-300 ease-in-out text-sm"
            >
              İletişim
            </Link>
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:inline-block bg-zinc-900 text-white px-6 py-2 rounded-lg hover:shadow-lg transition font-medium"
            >
              Sizi Arayalım
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
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
              <Link
                to="/"
                className="text-gray-700 hover:text-indigo-600 transition font-medium px-2 py-2 rounded hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Anasayfa
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-indigo-600 transition font-medium px-2 py-2 rounded hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Biz Kimiz?
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-indigo-600 transition font-medium px-2 py-2 rounded hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Hizmetlerimiz
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-indigo-600 transition font-medium px-2 py-2 rounded hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
