import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const logos = [
  { name: 'Bodrum Belediyesi', src: 'images/BodrumBelediye.png' },
  { name: 'Maltepe Universitesi', src: 'images/MaltepeUni.png' },
  { name: 'Marmara Eğitim Kurumları', src: 'images/MarmaraEgitim.png' },
  { name: 'Rixos Hotel', src: 'images/Rixos.png' },
  { name: 'Sentido', src: 'images/Sentido.png' },
  { name: 'Sun Dance Resorts', src: 'images/SunDance.png' }
];

export const References: React.FC = () => {
  const { t } = useLanguage();
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section id="referanslar" className="bg-gray-50 dark:bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-12">
          {t('references.title')}
        </h2>

        {/* Auto Scroll Container */}
        <div className="overflow-hidden relative">
          <div
            className="flex w-max animate-scroll gap-12 px-4"
          >
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 h-24 w-40 sm:w-48 flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-20 object-contain w-full px-4 grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
