import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';


export const Products: React.FC = () => {
  const { t } = useLanguage();

  const products = [
    {
      nameKey: 'products.climates',
      descKey: 'products.climatesDesc',
      image: 'images/Klimalar.jpg',
      link: '/klimalar'
    },
    {
      nameKey: 'products.heatPumps',
      descKey: 'products.heatPumpsDesc',
      image: 'images/IsiPompalari.jpg',
      link: '/isi-pompalari'
    },
  ];

  return (
    <section id="urunlerimiz" className="bg-white dark:bg-slate-800 pt-0 pb-24 transition-colors duration-300">
      
      <div className="relative h-72 md:h-96 w-full">
        <img 
          src="images/KlimaAi.png"
          alt="Ürünler Arkaplan"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">{t('products.title')}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center mb-16">
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('products.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group bg-gray-50 dark:bg-slate-900 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-gray-900/10 dark:hover:shadow-slate-900/50 transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t(product.nameKey)}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{t(product.descKey)}</p>
                
                <Link 
                  to={product.link}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 group-hover:bg-blue-700"
                >
                  <span>{t('products.viewDetails')}</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
