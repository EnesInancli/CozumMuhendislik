import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="images/SekmeLogosu.png" 
                alt="Bodrum Çözüm Mühendislik Logo" 
                className="w-full h-full object-contain"
              />
            </div>

              <span className="text-xl font-bold">Bodrum Çözüm Mühendislik</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              {t('footer.description')}
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link 
                  to="/hakkimizda"
                  className="hover:text-white transition-colors text-left"
                >
                  {t('nav.about')}
                </Link>
              </li>
            
              <li>
                <Link 
                  to="/referanslar"
                  className="hover:text-white transition-colors text-left"
                >
                  {t('nav.references')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/galeri"
                  className="hover:text-white transition-colors text-left"
                >
                  {t('nav.gallery')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">{t('footer.contact')}</h3>
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
                  <p>{t('contact.addressLine1')}</p>
                  <p>{t('contact.addressLine2')}</p>
                  <p>{t('contact.addressLine3')}</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>{t('contact.workingHoursText')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 Bodrum Çözüm Mühendislik. {t('footer.rights')}</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.privacy')}</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.terms')}</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
