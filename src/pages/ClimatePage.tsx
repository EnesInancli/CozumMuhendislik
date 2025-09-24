import React from 'react';
import { motion } from 'framer-motion';
import { Snowflake, Thermometer, Zap, Shield, Dot } from 'lucide-react';

const climateProducts = [
  {
    category: 'Toshiba Split Klimalar',
    description: 'Japon teknolojisi ile üstün performans ve enerji verimliliği sunan split klima sistemleri.',
    products: [
      {
        name: 'TOSHIBA SEIYA',
        features: ['SEIYA’nın konfor ve performans optimizasyonu onu rakiplerine göre eşsiz bir ürün haline getirmektedir. Tüm ürün gamı A++ soğutma ve A+ ısıtma enerji sınıfındadır ve bu çok düşük enerji tüketimiyle optimum konfor anlamına gelmektedir.'],
        image: 'images/seiya.webp'
      },
      {
        name: 'TOSHİBA SHORAI EDGE',
        features: ['Ultra Saf hava filtresi ve tasarım uzaktan kumandasıyla en yüksek enerji verimliliği. 3D ve Careflow hava dağıtımı, hava akışını odada cereyansız hale getirir. 1:1 tek dış üniteyle veya 2 ila 5 odalı çoklu dış ünitede diğer iç ünitelerle birlikte kullanılabilir.'],
        image: 'images/shorai.webp'
      },
      {
        name: 'TOSHİBA HAORI',
        features: ['A+++ enerji sınıfı ile yüksek enerji tasarrufu, dahili enerji tüketimi modülü ile sürekli izleme, standart wi-fi kiti ile istediğiniz her yerden kontrol imkanı, şık ve göz alıcı kumaş kaplama özelliği ile tüm ihtiyaçlarınızı karşılayan klimanız HAORI...'],
        image: 'images/haori.jpg'
      },
      {
        name: 'TOSHİBA DAISEIKAI 10',
        features: ['DAISAIKAI 10, yenilikçi tasarım, yüksek verimlilik ve maksimum konforun simgesidir. Sadece soğutma veya ısıtma için bile fazlasıyla iyidir. Oda havası en üst düzeyde taşınır ve temizlenir. 1:1 tek dış üniteyle veya 2 ila 5 odalı çoklu dış ünitede diğer iç ünitelerle birlikte kullanılabilir.'],
        image: 'images/daiseikai.webp'
      }
    ]
  },
  {
    category: 'Toshiba Multi Klimalar',
    description: 'Tek dış ünite ile çoklu iç ünite kontrolü sağlayan, enerji verimli multi split sistemler.',
    products: [
      {
        name: 'TOSHIBA Multi Split 2+1',
        capacity: '18000 BTU',
        features: ['Tek dış ünite', 'Çoklu iç ünite', 'Bireysel kontrol', 'Enerji tasarrufu'],
        image: 'images/Klimalar.jpg'
      },
      {
        name: 'TOSHIBA Multi Split 3+1',
        capacity: '24000 BTU',
        features: ['3 iç ünite', 'Akıllı kontrol', 'Sessiz çalışma', 'Kompakt tasarım'],
        image: 'images/Klimalar.jpg'
      }
    ]
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
    title: 'Güvenilir Marka',
    description: 'Toshiba ve Alarko güvencesi ile kaliteli hizmet'
  },
  {
    icon: Thermometer,
    title: 'Akıllı Kontrol',
    description: 'WiFi ile uzaktan kontrol ve programlama'
  }
];

export const ClimatePage: React.FC = () => {
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
              Klimalar
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              Toshiba ve Alarko markaları ile enerji verimli, teknolojik klima çözümleri. 
              Split ve multi sistemler ile her ihtiyaca uygun seçenekler.
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

      {/* Products Sections */}
      {climateProducts.map((category, categoryIndex) => (
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
                          <Dot className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
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
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Size Uygun Klima Çözümünü Bulalım
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Uzman ekibimiz en uygun klimayı seçin.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            Hemen İletişime Geçin
          </button>
        </div>
      </section>
    </div>
  );
};