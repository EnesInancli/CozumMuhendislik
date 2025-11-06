import React from 'react';
import { motion } from 'framer-motion';
import { Building, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const projects = [
  {
    name: 'Bodrum Marmara Koleji Yarı Olimpik Havuz',
    location: 'Bodrum',
    year: '2023',
    type: 'Okul',
    area: '50m²',
    image: 'images/havuz.jpeg',
    description: 'Bodrum Marmara Koleji Yarı Olimpik Havuz kurulumu.',
  },
  {
    name: 'Maltepe Üniversitesi Havuz Makine Dairesi',
    location: 'Bodrum',
    year: '2023',
    type: 'Ofis Binası',
    area: '20 m²',
    image: 'images/kazandairesi.jpeg',
    description: 'Maltepe Üniversitesi Havuz Kazan Dairesi kurulumu.',
  },
];

const stats = [
  { label: '', value: '' },
  { label: 'Tamamlanan Proje', value: '500+' },
  { label: 'Mutlu Müşteri', value: '1000+' },
];

const logos = [
  { name: 'Bodrum Belediyesi', src: 'images/BodrumBelediye.png' },
  { name: 'Maltepe Universitesi', src: 'images/MaltepeUni.png' },
  { name: 'Marmara Eğitim Kurumları', src: 'images/MarmaraEgitim.png' },
  { name: 'Rixos Hotel', src: 'images/Rixos.png' },
  { name: 'Sentido', src: 'images/Sentido.png' },
  { name: 'Sun Dance Resorts', src: 'images/SunDance.png' }
];

export const ReferencesPage: React.FC = () => {
  const { t } = useLanguage();
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6"
            >
              {t('references.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              {t('references.subtitle')}
            </motion.p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('references.featuredProjects')}</h2>
            <p className="text-xl text-gray-600">{t('references.featuredProjectsDesc')}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.year}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.name}</h3>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{project.location}</span>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center">
                      <Building className="w-4 h-4 text-blue-600 mr-2" />
                      <span>{project.type}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-blue-600 mr-2" />
                      <span>{project.area}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Logos Auto Scroll Section */}
      <section id="referanslar" className="bg-gray-50 dark:bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-12">
            {t('references.brands')}
          </h2>

          <div className="overflow-hidden relative">
            <div className="flex w-max animate-scroll gap-12 px-4">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 h-24 w-40 sm:w-48 flex items-center justify-center"
                >
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('references.joinReferences')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('references.joinReferencesDesc')}
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            {t('references.getQuote')}
          </button>
        </div>
      </section>
    </div>
  );
};
