import React from 'react';
import { motion } from 'framer-motion';
import {Zap, Settings, CheckCircle, Award, TrendingUp, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Enerji Verimliliği',
    description: '%30-50 oranında enerji tasarrufu sağlar'
  },
  {
    icon: Settings,
    title: 'Bireysel Kontrol',
    description: 'Her oda için ayrı sıcaklık kontrolü'
  },
  {
    icon: Shield,
    title: 'Güvenilirlik',
    description: 'Uzun ömürlü ve dayanıklı sistem'
  },
  {
    icon: TrendingUp,
    title: 'Performans',
    description: 'Yüksek performans ve sessiz çalışma'
  }
];

const advantages = [
  'Tek dış ünite ile çoklu iç ünite kontrolü',
  'Değişken soğutucu akışkan teknolojisi',
  'Düşük işletme maliyeti',
  'Kolay kurulum ve bakım',
  'Çevre dostu R32 soğutucu gaz',
  'Akıllı kontrol sistemleri',
  'Sessiz çalışma özelliği',
  'Uzaktan kontrol imkanı'
];

export const VrfSystemsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
<section
  className="relative py-24 bg-cover bg-center"
  style={{  
    backgroundImage: "url(public/images/vrfsistem.png)"
  }}
>
  <div className="absolute inset-0 bg-blue-900 bg-opacity-75 z-0"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <motion.h1 
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-6xl font-bold text-white mb-6"
      >
        VRF Sistemleri
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-xl text-white mb-12 max-w-3xl mx-auto"
      >
        Variable Refrigerant Flow (VRF) teknolojisi ile enerji verimli, 
        esnek ve konforlu klima çözümleri sunuyoruz.
      </motion.p>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">VRF Sisteminin Avantajları</h2>
            <p className="text-xl text-gray-600">Modern klima teknolojisinin sunduğu üstün özellikler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">VRF Teknolojisi Nedir?</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                VRF (Variable Refrigerant Flow) sistemleri, değişken soğutucu akışkan teknolojisi 
                kullanarak her iç üniteye ihtiyacı kadar soğutucu gönderen akıllı klima sistemleridir.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Bu teknoloji sayesinde enerji tüketimi optimize edilir ve her alan için 
                bireysel konfor sağlanır.
              </p>

              <div className="space-y-3">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
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
                src="public/VrfSistemToshiba.png"
                alt="VRF Sistem"
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
            <p className="text-xl text-gray-600">VRF sistemlerinin kullanıldığı alanlar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ofis Binaları</h3>
              <p className="text-gray-600">Büyük ofis kompleksleri ve iş merkezleri için ideal çözüm</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Otel ve Restoranlar</h3>
              <p className="text-gray-600">Konaklama ve yiyecek sektörü için konforlu ortam</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Alışveriş Merkezleri</h3>
              <p className="text-gray-600">Geniş alanlı ticari mekanlar için verimli çözüm</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            VRF Sistemi 
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Projeniz için en uygun VRF çözümünü belirlemek üzere uzman ekibimizle hemen iletişime geçebilirsiniz.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            Hemen İletişime Geçin
          </button>
        </div>
      </section>
    </div>
  );
};