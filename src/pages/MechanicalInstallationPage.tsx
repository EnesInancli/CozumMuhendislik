import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Settings, Cog, Shield, CheckCircle, Award, Target, Users } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Proje Tasarımı',
    description: 'Binanızın ihtiyaçlarına özel mekanik tesisat projeleri hazırlıyoruz'
  },
  {
    icon: Settings,
    title: 'Sistem Kurulumu',
    description: 'Profesyonel ekibimizle kaliteli kurulum hizmeti sunuyoruz'
  },
  {
    icon: Cog,
    title: 'Bakım ve Onarım',
    description: 'Düzenli bakım ve acil onarım hizmetleri ile sistem sürekliliği'
  },
  {
    icon: Shield,
    title: 'Kalite Güvencesi',
    description: 'Tüm işlerimizde kalite standartları ve garanti güvencesi'
  }
];

const systems = [
  {
    name: 'Isıtma Sistemleri',
    description: 'Kombi, kazan, radyatör ve yerden ısıtma sistemleri',
    features: [
      'Kombi kurulumu ve bakımı',
      'Kazan sistemleri',
      'Radyatör montajı',
      'Yerden ısıtma',
      'Sistem optimizasyonu'
    ]
  },
  {
    name: 'Soğutma Sistemleri',
    description: 'Klima, chiller ve soğutma kulesi sistemleri',
    features: [
      'Merkezi klima sistemleri',
      'Chiller kurulumu',
      'Soğutma kuleleri',
      'Fan coil sistemleri',
      'Otomasyon sistemleri'
    ]
  },
  {
    name: 'Havalandırma Sistemleri',
    description: 'Temiz hava sirkülasyonu ve hava kalitesi sistemleri',
    features: [
      'Mekanik havalandırma',
      'Hava kanalları',
      'Filtre sistemleri',
      'Aspirasyon sistemleri',
      'Basınç kontrolü'
    ]
  }
];

const projects = [
  {
    name: 'Otel Projesi',
    description: '200 odalı otel için komple mekanik tesisat',
    scope: 'VRF + Merkezi sistem hibrit çözüm'
  },
  {
    name: 'Ofis Binası',
    description: '15 katlı ofis binası mekanik tesisat',
    scope: 'Chiller sistem + BMS entegrasyonu'
  },
  {
    name: 'AVM Projesi',
    description: '50.000 m² alışveriş merkezi',
    scope: 'Merkezi klima + Havalandırma sistemi'
  }
];

export const MechanicalInstallationPage: React.FC = () => {
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
              Mekanik Tesisat
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              Profesyonel mekanik tesisat hizmetleri ile binaların ısıtma, 
              soğutma ve havalandırma ihtiyaçlarını eksiksiz karşılıyoruz.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hizmet Alanlarımız</h2>
            <p className="text-xl text-gray-600">Kapsamlı mekanik tesisat çözümleri</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sistem Çeşitleri</h2>
            <p className="text-xl text-gray-600">Uzmanlaştığımız mekanik tesisat sistemleri</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {systems.map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{system.name}</h3>
                <p className="text-gray-600 mb-6">{system.description}</p>
                
                <div className="space-y-3">
                  {system.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Çalışma Sürecimiz</h2>
            <p className="text-xl text-gray-600">Projeden teslime kadar takip ettiğimiz adımlar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Keşif ve Analiz</h3>
              <p className="text-gray-600">Projenin detaylı incelenmesi ve ihtiyaç analizi</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Proje Tasarımı</h3>
              <p className="text-gray-600">Teknik çizimler ve sistem tasarımının hazırlanması</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Kurulum</h3>
              <p className="text-gray-600">Profesyonel ekiple kaliteli montaj işlemi</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Test ve Teslim</h3>
              <p className="text-gray-600">Sistem testleri ve müşteriye teslim</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Örnek Projelerimiz</h2>
            <p className="text-xl text-gray-600">Gerçekleştirdiğimiz büyük ölçekli projeler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-900">{project.scope}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Mekanik Tesisat Projeniz İçin
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            15 yıllık deneyimimiz ile projenizi baştan sona profesyonelce yönetiyoruz.
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            Proje Danışmanlığı Al
          </button>
        </div>
      </section>
    </div>
  );
};