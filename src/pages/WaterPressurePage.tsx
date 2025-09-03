import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Gauge, Zap, Shield, CheckCircle, Settings, Award, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Gauge,
    title: 'Sabit Basınç',
    description: 'Tüm katlarda eşit su basıncı garantisi'
  },
  {
    icon: Zap,
    title: 'Enerji Tasarrufu',
    description: 'İnverter teknolojisi ile %40 enerji tasarrufu'
  },
  {
    icon: Shield,
    title: 'Güvenilir Sistem',
    description: 'Otomatik kontrol ve koruma sistemleri'
  },
  {
    icon: Settings,
    title: 'Kolay Bakım',
    description: 'Minimal bakım gereksinimleri'
  }
];

const systems = [
  {
    name: 'Hidrofor Sistemleri',
    description: 'Geleneksel su basınçlandırma çözümü',
    features: [
      'Basınç tankı ile çalışma',
      'Otomatik açma/kapama',
      'Ekonomik çözüm',
      'Kolay kurulum'
    ],
    capacity: '1-50 daire'
  },
  {
    name: 'İnverter Sistemler',
    description: 'Modern değişken hızlı pompa sistemleri',
    features: [
      'Sabit basınç kontrolü',
      'Enerji tasarrufu',
      'Sessiz çalışma',
      'Uzun ömür'
    ],
    capacity: '10-200 daire'
  },
  {
    name: 'Booster Sistemler',
    description: 'Yüksek binalar için güçlü çözüm',
    features: [
      'Çoklu pompa sistemi',
      'Yedekli çalışma',
      'Yüksek kapasite',
      'Otomatik kontrol'
    ],
    capacity: '50+ daire'
  }
];

const applications = [
  {
    icon: Award,
    title: 'Apartmanlar',
    description: 'Çok katlı konut binaları için su basınçlandırma'
  },
  {
    icon: Award,
    title: 'Siteler',
    description: 'Büyük konut kompleksleri için merkezi sistem'
  },
  {
    icon: Award,
    title: 'İş Merkezleri',
    description: 'Ofis binaları için güvenilir su temini'
  },
  {
    icon: Award,
    title: 'Oteller',
    description: 'Konaklama tesisleri için kesintisiz su hizmeti'
  }
];

export const WaterPressurePage: React.FC = () => {
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
              Su Basınçlandırma
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              Modern su basınçlandırma sistemleri ile tüm katlarda 
              eşit ve yeterli su basıncı sağlıyoruz.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sistem Avantajları</h2>
            <p className="text-xl text-gray-600">Modern su basınçlandırma sistemlerinin faydaları</p>
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
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sistem Çeşitleri</h2>
            <p className="text-xl text-gray-600">İhtiyacınıza uygun su basınçlandırma çözümleri</p>
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
                
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <p className="text-sm font-medium text-blue-800">Kapasite: {system.capacity}</p>
                </div>
                
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

      {/* How It Works Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Nasıl Çalışır?</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Su basınçlandırma sistemleri, şehir şebekesinden gelen düşük basınçlı 
                suyu pompalar yardımıyla yüksek basınca çıkararak binanın tüm katlarına 
                eşit basınçta su ulaştırır.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Modern inverter teknolojisi ile sistem, ihtiyaca göre otomatik olarak 
                pompa hızını ayarlayarak enerji tasarrufu sağlar.
              </p>

              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center space-x-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                  <div>
                    <h4 className="font-bold text-gray-900">Enerji Verimliliği</h4>
                    <p className="text-gray-600">%40'a varan enerji tasarrufu</p>
                  </div>
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
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Su Basınçlandırma Sistemi"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Uygulama Alanları</h2>
            <p className="text-xl text-gray-600">Su basınçlandırma sistemlerinin kullanıldığı yerler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <app.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{app.title}</h3>
                <p className="text-gray-600">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Su Basınç Probleminizi Çözelim
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Binanızın ihtiyacına uygun su basınçlandırma sistemi için ücretsiz keşif hizmeti.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            Ücretsiz Keşif Talep Et
          </button>
        </div>
      </section>
    </div>
  );
};