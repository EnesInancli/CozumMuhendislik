import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Filter, Shield, Zap, CheckCircle, Award, Beaker, Heart } from 'lucide-react';

const features = [
  {
    icon: Filter,
    title: 'Çoklu Filtreleme',
    description: 'Sediment, karbon ve RO filtre sistemleri'
  },
  {
    icon: Shield,
    title: 'Bakteriyel Koruma',
    description: 'UV sterilizasyon ile %99.9 bakteri eliminasyonu'
  },
  {
    icon: Zap,
    title: 'Otomatik Sistem',
    description: 'Akıllı kontrol ve otomatik yıkama'
  },
  {
    icon: Heart,
    title: 'Sağlıklı Su',
    description: 'İçme suyu standartlarında temiz su'
  }
];

const systems = [
  {
    name: 'Ters Osmoz (RO) Sistemleri',
    description: 'En etkili su arıtma teknolojisi',
    features: [
      '5-7 aşamalı filtreleme',
      '%99 kirlilik giderimi',
      'Mineral dengeleme',
      'Otomatik yıkama'
    ],
    capacity: '50-5000 L/gün',
    applications: ['Evler', 'Ofisler', 'Restoranlar']
  },
  {
    name: 'Endüstriyel Su Arıtma',
    description: 'Büyük kapasiteli arıtma sistemleri',
    features: [
      'Yüksek kapasite',
      'Otomatik kontrol',
      'Uzaktan izleme',
      'Kimyasal dozajlama'
    ],
    capacity: '1000+ L/gün',
    applications: ['Fabrikalar', 'Oteller', 'Hastaneler']
  },
  {
    name: 'UV Sterilizasyon',
    description: 'Kimyasalsız dezenfeksiyon sistemi',
    features: [
      'Kimyasalsız arıtma',
      'Anında sterilizasyon',
      'Düşük işletme maliyeti',
      'Çevre dostu'
    ],
    capacity: 'Tüm kapasiteler',
    applications: ['Tüm sektörler']
  }
];

const contaminants = [
  {
    name: 'Klorür',
    removal: '%99',
    icon: '🧪'
  },
  {
    name: 'Bakteriler',
    removal: '%99.9',
    icon: '🦠'
  },
  {
    name: 'Ağır Metaller',
    removal: '%98',
    icon: '⚗️'
  },
  {
    name: 'Pestisitler',
    removal: '%95',
    icon: '🌿'
  }
];

const benefits = [
  'Sağlıklı içme suyu',
  'Kötü tat ve koku giderimi',
  'Cilt ve saç sağlığı',
  'Ev aletlerinin korunması',
  'Çevre dostu çözüm',
  'Uzun vadeli tasarruf'
];

export const WaterTreatmentPage: React.FC = () => {
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
              Su Arıtma Sistemleri
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              Gelişmiş su arıtma teknolojileri ile temiz, sağlıklı ve 
              güvenli içme suyu elde edin.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Su Arıtma Avantajları</h2>
            <p className="text-xl text-gray-600">Modern su arıtma sistemlerinin faydaları</p>
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
                <div className="bg-cyan-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-cyan-600" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Su Arıtma Sistem Çeşitleri</h2>
            <p className="text-xl text-gray-600">İhtiyacınıza uygun su arıtma çözümleri</p>
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
                
                <div className="bg-cyan-50 rounded-lg p-4 mb-6">
                  <p className="text-sm font-medium text-cyan-800">Kapasite: {system.capacity}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {system.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Uygulama Alanları:</h4>
                  <div className="flex flex-wrap gap-2">
                    {system.applications.map((app, appIndex) => (
                      <span key={appIndex} className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded-full">
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

      {/* Contaminant Removal Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kirlilik Giderim Oranları</h2>
            <p className="text-xl text-gray-600">Su arıtma sistemlerimizin etkinliği</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contaminants.map((contaminant, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="text-4xl mb-4">{contaminant.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{contaminant.name}</h3>
                <div className="text-3xl font-bold text-cyan-600 mb-2">{contaminant.removal}</div>
                <p className="text-sm text-gray-600">Giderim Oranı</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Su Arıtmanın Faydaları</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Kaliteli su arıtma sistemleri ile sağlığınızı koruyun, 
                ev aletlerinizin ömrünü uzatın ve çevre dostu bir yaşam sürün.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Su Arıtma Sistemi"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Arıtma Süreci</h2>
            <p className="text-xl text-gray-600">Su arıtma sisteminin çalışma aşamaları</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-cyan-600">1</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Ön Filtreleme</h3>
              <p className="text-gray-600 text-sm">Büyük parçacıkların giderilmesi</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-cyan-600">2</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Karbon Filtre</h3>
              <p className="text-gray-600 text-sm">Klor ve kötü tat giderimi</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-cyan-600">3</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">RO Membran</h3>
              <p className="text-gray-600 text-sm">Moleküler seviyede arıtma</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-cyan-600">4</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">UV Sterilizasyon</h3>
              <p className="text-gray-600 text-sm">Bakteri ve virüs eliminasyonu</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-cyan-600">5</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Mineral Dengeleme</h3>
              <p className="text-gray-600 text-sm">Sağlıklı mineral ilavesi</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Temiz Su İçin Hemen Başlayın
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Su kalitesi analizi ile size en uygun arıtma sistemini belirleyelim.
          </p>
          <button className="bg-white text-cyan-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            Ücretsiz Su Analizi
          </button>
        </div>
      </section>
    </div>
  );
};