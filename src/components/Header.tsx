import { Link} from 'react-router-dom';
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigateToHome = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
            <Link 
              to="/" 
              onClick={navigateToHome} 
              className="focus:outline-none inline-block"
              >
              <img
              src="images/Logo1.png"
              alt="Logo"
              className="w-[280px] h-[80px] object-contain cursor-pointer transition-transform hover:scale-105 block"
              />
          </Link>

            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Hizmetlerimiz Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('services')}
                className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                <span>Hizmetlerimiz</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                  <Link 
                    to="/vrf-sistemleri"
                    onClick={() => setActiveDropdown(null)}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    VRF Sistemleri
                  </Link>
                  <Link 
                    to="/klima-teknolojileri"
                    onClick={() => setActiveDropdown(null)}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    Klima Teknolojileri
                  </Link>
                  <Link 
                    to="/isi-pompasi"
                    onClick={() => setActiveDropdown(null)}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    Isı Pompası
                  </Link>
                  <Link 
                    to="/mekanik-tesisat"
                    onClick={() => setActiveDropdown(null)}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    Mekanik Tesisat
                  </Link>
                  <Link 
                    to="/havuz"
                    onClick={() => setActiveDropdown(null)}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    Havuz
                  </Link>
                  <Link 
                    to="/su-basinçlandirma"
                    onClick={() => setActiveDropdown(null)}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    Su Basınçlandırma
                  </Link>
                  <Link 
                    to="/havalandirma"
                    onClick={() => setActiveDropdown(null)}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    Havalandırma
                  </Link>
                  <Link 
                    to="/su-aritma"
                    onClick={() => setActiveDropdown(null)}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    Su Arıtma
                  </Link>
                  <Link 
                    to="/ges"
                    onClick={() => setActiveDropdown(null)}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    GES
                  </Link>
                </div>
              )}
            </div>

            {/* Ürünlerimiz Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('products')}
                className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                <span>Ürünlerimiz</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                  <Link 
                    to="/klimalar"
                    onClick={() => setActiveDropdown(null)}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    Klimalar
                  </Link>
                  <Link 
                    to="/isi-pompalari"
                    onClick={() => setActiveDropdown(null)}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    Isı Pompaları
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/referanslar"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Referanslar
            </Link>
            <Link 
              to="/galeri"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Galeri
            </Link>
            <Link 
              to="/hakkimizda"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Hakkımızda
            </Link>
            <Link 
              to="/iletisim"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              İletişim
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {/* Mobile Hizmetlerimiz */}
              <div>
                <button 
                  onClick={() => toggleDropdown('mobile-services')}
                  className="flex items-center justify-between w-full text-gray-600 hover:text-blue-600 transition-colors font-medium text-left"
                >
                  <span>Hizmetlerimiz</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-services' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-services' && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link 
                      to="/vrf-sistemleri"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-gray-500 hover:text-blue-600 transition-colors text-left"
                    >
                      VRF Sistemleri
                    </Link>
                    <Link 
                      to="/klima-teknolojileri"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-gray-500 hover:text-blue-600 transition-colors text-left"
                    >
                      Klima Teknolojileri
                    </Link>
                    <Link 
                      to="/isi-pompasi"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-gray-500 hover:text-blue-600 transition-colors text-left"
                    >
                      Isı Pompası
                    </Link>
                    <Link 
                      to="/mekanik-tesisat"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-gray-500 hover:text-blue-600 transition-colors text-left"
                    >
                      Mekanik Tesisat
                    </Link>
                    <Link 
                      to="/su-basinçlandirma"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-gray-500 hover:text-blue-600 transition-colors text-left"
                    >
                      Su Basınçlandırma
                    </Link>
                    <Link 
                      to="/havalandirma"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-gray-500 hover:text-blue-600 transition-colors text-left"
                    >
                      Havalandırma
                    </Link>
                    <Link 
                      to="/su-aritma"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-gray-500 hover:text-blue-600 transition-colors text-left"
                    >
                      Su Arıtma
                    </Link>
                    <Link 
                      to="/ges"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-gray-500 hover:text-blue-600 transition-colors text-left"
                    >
                      GES
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Ürünlerimiz */}
              <div>
                <button 
                  onClick={() => toggleDropdown('mobile-products')}
                  className="flex items-center justify-between w-full text-gray-600 hover:text-blue-600 transition-colors font-medium text-left"
                >
                  <span>Ürünlerimiz</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-products' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-products' && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link 
                      to="/klimalar"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-gray-500 hover:text-blue-600 transition-colors text-left"
                    >
                      Klimalar
                    </Link>
                    <Link 
                      to="/isi-pompalari"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-gray-500 hover:text-blue-600 transition-colors text-left"
                    >
                      Isı Pompaları
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/referanslar"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-left"
              >
                Referanslar
              </Link>
              <Link 
                to="/galeri"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-left"
              >
                Galeri
              </Link>
              <Link 
                to="/hakkimizda"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-left"
              >
                Hakkımızda
              </Link>
              <Link 
                to="/iletisim"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-left"
              >
                İletişim
              </Link>
            </nav>
          </div>
        )}
      </div>

      {/* Overlay to close dropdowns */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </header>
  );
};