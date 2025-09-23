import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Fan, Snowflake, ThermometerSun, Wrench, Waves, Droplets, Wind, Filter, Sun } from 'lucide-react';

const services = [
  {
    icon: Fan,
    title: 'VRF Sistemleri',
    description: 'Enerji verimli, çoklu iç ünite kontrolü sunan gelişmiş iklimlendirme sistemleri.',
    link: '/vrf-sistemleri',
    image: 'images/vrfsistem.png'
  },
  {
    icon: Snowflake,
    title: 'Klima Teknolojileri',
    description: 'Yüksek verimlilikte, modern ve çevre dostu klima çözümleri.',
    link: '/klima-teknolojileri',
    image: 'images/KlimaAi.png'
  },
  {
    icon: ThermometerSun,
    title: 'Isı Pompası',
    description: 'Hem ısıtma hem soğutma sağlayan, enerji tasarruflu sistemler.',
    link: '/isi-pompasi',
    image: 'images/IsiPompalari.jpg'
  },
  {
    icon: Wrench,
    title: 'Mekanik Tesisat',
    description: 'Bina içi tüm mekanik tesisat çözümleri, projelendirme ve uygulama.',
    link: '/mekanik-tesisat',
    image: 'images/Header_Background.jpeg'
  },
  {
    icon: Waves,
    title: 'Havuz',
    description: 'Özel ve ticari havuz sistemlerinin planlaması, kurulumu ve bakımı.',
    link: '/havuz',
    image: 'images/havuz.jpeg'
  },
  {
    icon: Droplets,
    title: 'Su Basınçlandırma',
    description: 'Yüksek katlı binalar için su basıncı düzenleme sistemleri.',
    link: '/su-basinclandirma',
    image: 'images/Header_Background.jpeg'
  },
  {
    icon: Wind,
    title: 'Havalandırma',
    description: 'Temiz hava sirkülasyonu sağlayan havalandırma sistemleri.',
    link: '/havalandirma',
    image: 'images/Header_Background.jpeg'
  },
  {
    icon: Filter,
    title: 'Su Arıtma',
    description: 'İçme suyu kalitesini artırmak için gelişmiş su arıtma sistemleri.',
    link: '/su-aritma',
    image: 'images/Header_Background.jpeg'
  },
  {
    icon: Sun,
    title: 'GES',
    description: 'Güneş enerjisi sistemleriyle sürdürülebilir ve yenilenebilir enerji çözümleri.',
    link: '/ges',
    image: 'images/Header_Background.jpeg'
  }
];

export const Services: React.FC = () => {
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
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Geniş hizmet yelpazemizle tüm teknik ihtiyaçlarınıza çözüm sunuyoruz.
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
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};