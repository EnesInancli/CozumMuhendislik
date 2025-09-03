import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Filter, Fan, Shield, CheckCircle, Leaf, Award, Activity } from 'lucide-react';

const features = [
  {
    icon: Wind,
    title: 'Temiz Hava',
    description: 'Sürekli temiz hava sirkülasyonu sağlar'
  },
  {
    icon: Filter,
    title: 'Hava Filtreleme',
    description: 'Gelişmiş filtre sistemleri ile hava kalitesi'
  },
  {
    icon: Fan,
    title: 'Enerji Verimli',
    description: 'EC motorlar ile düşük enerji tüketimi'
  },
  {
    icon: Shield,
    title: 'Sağlıklı Ortam',
    description: 'Nem ve CO2 kontrolü ile konforlu yaşam'
  }
];

const systems = [
  {
    name: 'Mekanik Havalandırma',
    description: 'Zorla hava sirkülasyonu sağlayan sistemler',
    features: [
      'Sürekli hava değişimi',
      'Kontrollü hava akışı',
      'Enerji geri kazanım',
      'Otomatik kontrol'
    ],
    applications: ['Ofisler', 'Fabrikalar', 'AVM\'ler']
  },
  {
    name: 'Aspirasyon Sistemleri',
    description: 'Endüstriyel toz ve duman emme sistemleri',
    features: [
      'Güçlü emme kapasitesi',
      'Filtre sistemleri',
      'Gürültü kontrolü',
      'Kolay bakım'
    ],
    applications: ['Atölyeler', 'Fabrikalar', 'Laboratuvarlar']
  },
  {
    name: 'Temiz Oda Sistemleri',
    description: 'Yüksek hava kalitesi gerektiren alanlar için',
    features: [
      'HEPA filtreleme',
      'Basınç kontrolü',
      'Parçacık kontrolü',
      'Steril ortam'
    ],
    applications: ['Hastaneler', 'Laboratuvarlar', 'Üretim']
  }
];

const benefits = [
  {
    icon: Leaf,
    title: 'Hava Kalitesi',
    description: 'İç mekan hava kalitesini artırır'
  },
  {
    icon: Activity,
    title: 'Sağlık',
    description: 'Solunum yolu hastalıklarını önler'
  },
  {
    icon: Award,
    title: 'Konfor',
    description: 'Yaşam ve çalışma konforunu artırır'
  },
  {
    icon: Shield,
    title: 'Koruma',
    description: 'Zararlı gazlardan koruma sağlar'
  }
];

export const VentilationPage: React.FC = () => {
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
              Havalandırma Sistemleri
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              Profesyonel havalandırma sistemleri ile temiz hava sirkülasyonu 
              ve sağlıklı iç mekan ortamları yaratıyoruz.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Havalandırma Avantajları</h2>
            <p className="text-xl text-gray-600">Kaliteli havalandırma sistemlerinin faydaları</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Havalandırma Sistem Çeşitleri</h2>
            <p className="text-xl text-gray-600">İhtiyacınıza uygun havalandırma çözümleri</p>
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
                
                <div className="space-y-3 mb-6">
                  {system.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Uygulama Alanları:</h4>
                  <div className="flex flex-wrap gap-2">
                    {system.applications.map((app, appIndex) => (
                      <span key={appIndex} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sağlık ve Konfor</h2>
            <p className="text-xl text-gray-600">Kaliteli havalandırmanın yaşam kalitenize katkıları</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Info Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Teknik Özellikler</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Modern havalandırma sistemlerimiz, enerji verimli EC motorlar, 
                gelişmiş filtre teknolojileri ve akıllı kontrol sistemleri ile donatılmıştır.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">HEPA ve karbon filtre seçenekleri</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Enerji geri kazanım sistemleri</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Otomatik hız kontrolü</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Uzaktan izleme ve kontrol</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Havalandırma Sistemi"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Temiz Hava İçin Hemen Başlayın
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Sağlıklı yaşam alanları için profesyonel havalandırma sistemi kurulumu.
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            Hava Kalitesi Analizi Al
          </button>
        </div>
      </section>
    </div>
  );
};