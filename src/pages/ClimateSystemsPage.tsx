import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Thermometer, Snowflake, Sun, CheckCircle, Star, Shield } from 'lucide-react';

const features = [
  {
    icon: Thermometer,
    title: 'İnverter Teknoloji',
    description: 'Değişken hızlı kompresör ile enerji tasarrufu'
  },
  {
    icon: Wind,
    title: 'Hava Filtreleme',
    description: 'Gelişmiş filtre sistemleri ile temiz hava'
  },
  {
    icon: Snowflake,
    title: 'Hızlı Soğutma',
    description: 'Turbo mod ile anında konfor'
  },
  {
    icon: Sun,
    title: 'Isı Pompası',
    description: 'Kış aylarında verimli ısıtma'
  }
];

const products = [
  {
    name: 'Split Klima Sistemleri',
    description: 'Ev ve küçük ofisler için ideal duvar tipi klimalar',
    features: ['9.000 - 24.000 BTU', 'A++ Enerji Sınıfı', 'WiFi Kontrol', 'Sessiz Çalışma']
  },
  {
    name: 'Multi Split Sistemler',
    description: 'Tek dış ünite ile çoklu iç ünite kontrolü',
    features: ['2-8 iç ünite', 'Bireysel kontrol', 'Esnek kurulum', 'Enerji tasarrufu']
  },
  {
    name: 'Kaset Tipi Klimalar',
    description: 'Asma tavan uygulamaları için estetik çözüm',
    features: ['360° hava dağılımı', 'Gizli kurulum', 'Yüksek kapasite', 'Eşit soğutma']
  }
];

export const ClimateSystemsPage: React.FC = () => {
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
              Klima Teknolojileri
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              En son teknoloji klima sistemleri ile konforlu ve sağlıklı 
              iç mekan ortamları yaratıyoruz.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Modern Klima Teknolojileri</h2>
            <p className="text-xl text-gray-600">Gelişmiş özellikler ile üstün performans</p>
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

      {/* Products Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Klima Sistem Çeşitleri</h2>
            <p className="text-xl text-gray-600">İhtiyacınıza uygun klima çözümleri</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <div className="space-y-3">
                  {product.features.map((feature, featureIndex) => (
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

      {/* Technology Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">TOSHIBA Kalitesi</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                TOSHIBA'nın 140 yıllık teknoloji deneyimi ile üretilen klimalar, 
                üstün performans ve dayanıklılık sunar.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                İnverter teknolojisi, çevre dostu R32 gazı ve akıllı kontrol 
                sistemleri ile enerji tasarrufu sağlayın.
              </p>

              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">5 Yıl Garanti</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Klima Teknolojileri"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Size Uygun Klima Çözümü
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            İhtiyacınıza en uygun klima sistemini seçmek için uzman danışmanlığımızdan yararlanın.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            Ücretsiz Danışmanlık Al
          </button>
        </div>
      </section>
    </div>
  );
};