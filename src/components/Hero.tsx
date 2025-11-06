import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="anasayfa" className="relative overflow-hidden">
      {/* Arka Plan Görseli */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('images/Header_Background.jpeg')" }}
      />

      {/* Üstüne Opaklık ve Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-80 z-10" />

      {/* İçerik */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          {/* Başlık */}
          <motion.h1 
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1] text-center"
          >
            <span className="block text-gray-900">
              {t('hero.title')}
            </span>
            <span className="block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent leading-[1.3]">
              {t('hero.subtitle1')}
            </span>
            <span className="block bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent leading-[1.1]">
              {t('hero.subtitle2')}
            </span>
          </motion.h1>

          {/* Açıklama */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            {t('hero.authorized')}
          </motion.p>

          {/* Butonlar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              onClick={() => scrollToSection('hizmetlerimiz')}
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-2"
            >
              <span>{t('hero.discoverServices')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => scrollToSection('hakkimizda')}
              className="group bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 border border-gray-200 hover:border-gray-300 flex items-center space-x-2"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>{t('hero.aboutUs')}</span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
