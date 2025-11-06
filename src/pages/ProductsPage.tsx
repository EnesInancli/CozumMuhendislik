import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Snowflake, Thermometer, Zap, Shield, Star, Award } from 'lucide-react';

const products = [
  {
    name: 'TOSHIBA RAS-B10BKVG-TR',
    category: 'Split Klima',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'A++ Enerji Sınıfı',
      '9000 BTU Soğutma',
      'İnverter Teknoloji',
      'R32 Çevre Dostu Gaz',
      'WiFi Kontrol'
    ],
    specs: {
      cooling: '9000 BTU/h',
      heating: '10000 BTU/h',
      room: '25-35 m²',
      energy: 'A++',
      noise: '19 dB'
    },
    price: '₺12.500'
  },
  {
    name: 'TOSHIBA RAS-B13BKVG-TR',
    category: 'Split Klima',
    image: 'https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'A++ Enerji Sınıfı',
      '12000 BTU Soğutma',
      'İnverter Teknoloji',
      'R32 Çevre Dostu Gaz',
      'Akıllı Sensör'
    ],
    specs: {
      cooling: '12000 BTU/h',
      heating: '13000 BTU/h',
      room: '35-45 m²',
      energy: 'A++',
      noise: '21 dB'
    },
    price: '₺15.800'
  },
  {
    name: 'TOSHIBA RAS-B18BKVG-TR',
    category: 'Split Klima',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'A++ Enerji Sınıfı',
      '18000 BTU Soğutma',
      'İnverter Teknoloji',
      'R32 Çevre Dostu Gaz',
      'Turbo Soğutma'
    ],
    specs: {
      cooling: '18000 BTU/h',
      heating: '19000 BTU/h',
      room: '50-70 m²',
      energy: 'A++',
      noise: '23 dB'
    },
    price: '₺22.400'
  }
];

const features = [
  {
    icon: Zap,
    title: 'Enerji Tasarrufu',
    description: 'İnverter teknolojisi ile %60\'a varan enerji tasarrufu'
  },
  {
    icon: Snowflake,
    title: 'Hızlı Soğutma',
    description: 'Turbo mod ile 30 saniyede hızlı soğutma'
  },
  {
    icon: Shield,
    title: '5 Yıl Garanti',
    description: 'Kompresör için 5 yıl, cihaz için 2 yıl garanti'
  },
  {
    icon: Thermometer,
    title: 'Akıllı Kontrol',
    description: 'WiFi ile uzaktan kontrol ve programlama'
  }
];

export const ProductsPage: React.FC = () => {
  const { t } = useLanguage();
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
              Ürünlerimiz
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              TOSHIBA kalitesi ile enerji verimli ve teknolojik klima çözümleri.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">TOSHIBA Split Klimalar</h2>
            <p className="text-xl text-gray-600">Japon teknolojisi ile üstün performans</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
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
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">(4.8)</span>
                  </div>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <Award className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Teknik Özellikler</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>Soğutma: <span className="font-medium">{product.specs.cooling}</span></div>
                      <div>Isıtma: <span className="font-medium">{product.specs.heating}</span></div>
                      <div>Alan: <span className="font-medium">{product.specs.room}</span></div>
                      <div>Enerji: <span className="font-medium">{product.specs.energy}</span></div>
                      <div>Ses: <span className="font-medium">{product.specs.noise}</span></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-600">{product.price}</div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                      Fiyat Al
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ücretsiz Keşif ve Montaj Hizmeti
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Profesyonel ekibimiz ile ücretsiz keşif hizmeti alın ve en uygun klimayı seçin.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            Ücretsiz Keşif Talep Et
          </button>
        </div>
      </section>
    </div>
  );
};