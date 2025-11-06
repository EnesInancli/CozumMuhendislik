import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Fan, Snowflake, ThermometerSun, Wrench, Waves, Droplets, Wind, Filter, Sun } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';


export const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Fan,
      titleKey: 'services.vrf',
      descKey: 'services.vrfDesc',
      link: '/vrf-sistemleri',
      image: 'images/vrfsistem.png'
    },
    {
      icon: Snowflake,
      titleKey: 'services.climate',
      descKey: 'services.climateDesc',
      link: '/klima-teknolojileri',
      image: 'images/KlimaAi.png'
    },
    {
      icon: ThermometerSun,
      titleKey: 'services.heatPump',
      descKey: 'services.heatPumpDesc',
      link: '/isi-pompasi',
      image: 'images/IsiPompalari.jpg'
    },
    {
      icon: Wrench,
      titleKey: 'services.mechanical',
      descKey: 'services.mechanicalDesc',
      link: '/mekanik-tesisat',
      image: 'images/Header_Background.jpeg'
    },
    {
      icon: Waves,
      titleKey: 'services.pool',
      descKey: 'services.poolDesc',
      link: '/havuz',
      image: 'images/havuz.jpeg'
    },
    {
      icon: Droplets,
      titleKey: 'services.waterPressure',
      descKey: 'services.waterPressureDesc',
      link: '/su-basinclandirma',
      image: 'images/Header_Background.jpeg'
    },
    {
      icon: Wind,
      titleKey: 'services.ventilation',
      descKey: 'services.ventilationDesc',
      link: '/havalandirma',
      image: 'images/Header_Background.jpeg'
    },
    {
      icon: Filter,
      titleKey: 'services.waterTreatment',
      descKey: 'services.waterTreatmentDesc',
      link: '/su-aritma',
      image: 'images/MarmaraSuAritma.jpeg'
    },
    {
      icon: Sun,
      titleKey: 'services.solar',
      descKey: 'services.solarDesc',
      link: '/ges',
      image: 'images/Header_Background.jpeg'
    }
  ];

  return (
    <section id="hizmetlerimiz" className="bg-gray-50 dark:bg-slate-900 py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Başlık ve Açıklama */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('nav.services')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </motion.div>

        {/* Hizmet Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={service.link}
                className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-gray-900/10 dark:hover:shadow-slate-900/50 transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-slate-700 block"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-2">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t(service.titleKey)}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{t(service.descKey)}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};