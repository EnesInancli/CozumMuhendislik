import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Settings, CheckCircle, Award, TrendingUp, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Enerji Tasarrufu',
    description: 'Klimalarımız %30-50 oranında enerji tasarrufu sağlar'
  },
  {
    icon: Settings,
    title: 'Bireysel Ayarlar',
    description: 'Her oda için sıcaklık ve fan hızı kontrolü'
  },
  {
    icon: Shield,
    title: 'Güvenilir Sistem',
    description: 'Uzun ömürlü ve dayanıklı klima teknolojisi'
  },
  {
    icon: TrendingUp,
    title: 'Yüksek Performans',
    description: 'Sessiz ve güçlü çalışma performansı'
  }
];

const advantages = [
  'Farklı kapasite seçenekleri',
  'Akıllı termostat ve kontrol sistemleri',
  'Düşük enerji tüketimi',
  'Kolay kurulum ve bakım',
  'Çevre dostu soğutucu gaz',
  'Uzaktan kontrol imkanı',
  'Sessiz çalışma özelliği',
  'Uzun ömürlü dayanıklı üniteler'
];

export const ClimateSystemPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{  
          backgroundImage: "url(/images/klimateknolojileri.png)"
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-75 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-bold text-white mb-6"
          >
            Klima Teknolojileri
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl text-white mb-12 max-w-3xl mx-auto"
          >
            Modern klima teknolojisi ile enerji verimli, konforlu ve kullanıcı dostu 
            iklimlendirme çözümleri sunuyoruz.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Klima Teknolojisinin Avantajları</h2>
            <p className="text-xl text-gray-600">Yüksek kalite ve verimli iklimlendirme özellikleri</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon; // ✅ React uyumlu
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Klima Teknolojisi Nedir?</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Modern klima sistemleri, enerji verimliliği ve kullanıcı konforunu ön planda tutarak 
                iç mekanları optimum sıcaklıkta tutar.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Akıllı kontrol sistemleri ile bireysel ihtiyaçlara göre ayarlanabilir ve çevre dostu çözümler sunar.
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
                src="/images/KlimaTeknoloji.png"
                alt="Klima Teknolojisi"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kullanım Alanları</h2>
            <p className="text-xl text-gray-600">Klima teknolojilerinin tercih edildiği alanlar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Evler ve Daireler</h3>
              <p className="text-gray-600">Konforlu ve enerji tasarruflu iklimlendirme çözümleri</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ofis ve İş Yerleri</h3>
              <p className="text-gray-600">Çalışma ortamlarında konforlu ve verimli iklimlendirme</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mağaza ve Ticari Alanlar</h3>
              <p className="text-gray-600">Geniş alanlarda verimli ve sessiz klima çözümleri</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Klima Teknolojisi
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Projeniz için en uygun klima çözümünü belirlemek üzere uzman ekibimizle hemen iletişime geçebilirsiniz.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            Hemen İletişime Geçin
          </button>
        </div>
      </section>
    </div>
  );
};
