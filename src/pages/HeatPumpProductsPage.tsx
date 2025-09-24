import React from 'react';
import { motion } from 'framer-motion';
import { Thermometer, Leaf, Zap, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const heatPumpProducts = [
  {
    category: 'Toshiba Estia Split Isı Pompası',
    description: 'Japon teknolojisi ile üstün performans sunan, çevre dostu R32 gazlı split tip ısı pompası sistemleri.',
    products: [
      {
        name: 'TOSHIBA Estia 6 kW',
        features: ['R32 Çevre Dostu Gaz', 'A+++ Enerji Sınıfı', '-25°C\'ye Kadar Çalışma', 'Akıllı Defrost'],
        image: 'images/IsiPompalari.jpg'
      },
      {
        name: 'TOSHIBA Estia 8 kW',
        features: ['Yüksek COP Değeri', 'Sessiz Çalışma', 'Uzaktan Kontrol', 'Kompakt Tasarım'],
        image: 'images/IsiPompalari.jpg'
      }
    ]
  }
];

const features = [
  {
    icon: Thermometer,
    title: 'Verimli Isıtma',
    description: 'Düşük sıcaklıklarda bile yüksek performans'
  },
  {
    icon: Leaf,
    title: 'Çevre Dostu',
    description: 'Düşük karbon emisyonu ile çevre koruma'
  },
  {
    icon: Zap,
    title: 'Enerji Tasarrufu',
    description: '%75\'e varan enerji tasarrufu'
  },
  {
    icon: Shield,
    title: 'Güvenilir Marka',
    description: 'Toshiba ve Alarko güvencesi'
  }
];

export const HeatPumpProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6"
            >
              Isı Pompaları
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              Toshiba Estia ve Alarko Flair serisi ile çevre dostu, enerji verimli ısı pompası sistemleri. 
              Hem ısıtma hem soğutma için ideal çözümler.
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
                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Sections */}
      {heatPumpProducts.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-24 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{category.category}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.products.map((product, productIndex) => (
                <motion.div
                  key={productIndex}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: productIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{product.name}</h3>
                    
                    <div className="space-y-3 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Çevre Dostu Isı Pompası ile Tasarruf Edin
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Uzman ekibimiz ile ücretsiz keşif hizmeti alın ve size en uygun ısı pompasını seçin.
          </p>
          <Link 
            to="/iletisim"
            className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Ücretsiz Keşif Talep Et
          </Link>
        </div>
      </section>
    </div>
  );
};