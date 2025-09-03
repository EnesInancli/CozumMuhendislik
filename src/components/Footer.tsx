import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold">Bodrum Çözüm Mühendislik</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Projeleriniz için mühendislik çözümleri sunuyor, kaliteli hizmet anlayışımızla geleceği inşa ediyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Hızlı Bağlantılar</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link 
                  to="/hakkimizda"
                  className="hover:text-white transition-colors text-left"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link 
                  to="/hizmetlerimiz"
                  className="hover:text-white transition-colors text-left"
                >
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link 
                  to="/urunlerimiz"
                  className="hover:text-white transition-colors text-left"
                >
                  Ürünlerimiz
                </Link>
              </li>
              <li>
                <Link 
                  to="/referanslar"
                  className="hover:text-white transition-colors text-left"
                >
                  Referanslar
                </Link>
              </li>
              <li>
                <Link 
                  to="/galeri"
                  className="hover:text-white transition-colors text-left"
                >
                  Galeri
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">İletişim</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>+90 (252) 363 77 16</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>info@bodrumcozummuhendislik.com</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Podium İş Merkezi, Konacık</p>
                  <p>Atatürk Blv. No:178</p>
                  <p>48100 Bodrum/Muğla</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Pazartesi - Cumartesi <br />  09.00 - 18.00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 Bodrum Çözüm Mühendislik. Tüm hakları saklıdır.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Gizlilik Politikası</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Kullanım Şartları</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Çerez Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
