import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Waves, Brush, Wrench, Shield, CheckCircle, Award, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: Droplets,
    title: 'Temiz Su Sirkülasyonu',
    description: 'Sürekli döngüyle hijyenik havuz deneyimi.'
  },
  {
    icon: Shield,
    title: 'Güvenli Sistemler',
    description: 'Otomatik kontrol ve su kalitesi izleme çözümleri.'
  },
  {
    icon: RefreshCw,
    title: 'Enerji Verimliliği',
    description: 'Verimli motor ve filtre sistemleri ile düşük enerji tüketimi.'
  },
  {
    icon: Wrench,
    title: 'Kolay Bakım',
    description: 'Basit erişim ve bakım dostu ekipman yerleşimi.'
  }
];

const systems = [
  {
    name: 'Skimmer Sistemleri',
    description: 'Küçük ve orta ölçekli havuzlar için ekonomik çözüm',
    features: [
      'Yüzeyden su alma (skimmer)',
      'Kompakt yapı',
      'Düşük maliyet',
      'Kolay bakım'
    ],
    capacity: 'Villa / müstakil havuzlar'
  },
  {
    name: 'Taşmalı Sistemler',
    description: 'Estetik ve sürekli yüzey temizliği sağlayan sistem',
    features: [
      'Su taşma kanalları',
      'Yüksek temizlik kapasitesi',
      'Lüks görünüm',
      'Sabit su seviyesi'
    ],
    capacity: 'Otel, site, büyük konut projeleri'
  },
  {
    name: 'Yüzme Havuzu Ekipmanları',
    description: 'Pompa, filtre, aydınlatma, kimyasal dozajlama sistemleri',
    features: [
      'Uzun ömürlü ekipman',
      'Dijital kontrol paneli',
      'Filtrasyon sistemleri',
      'LED aydınlatmalar'
    ],
    capacity: 'Tüm tipte havuzlar için'
  }
];

const applications = [
  {
    icon: Award,
    title: 'Villalar',
    description: 'Kişisel kullanım için estetik ve kompakt havuz çözümleri'
  },
  {
    icon: Award,
    title: 'Oteller',
    description: 'Profesyonel misafir deneyimi için lüks sistemler'
  },
  {
    icon: Award,
    title: 'Spor Salonları',
    description: 'Yarı olimpik veya tam olimpik havuz ihtiyaçları'
  },
  {
    icon: Award,
    title: 'Sosyal Tesisler',
    description: 'Toplu yaşam alanlarında ortak kullanım çözümleri'
  }
];

export const PoolPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6"
          >
            Havuz Sistemleri
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Özel ve ticari havuzlar için hijyenik, enerji verimli ve güvenli sistem çözümleri sunuyoruz.
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Havuz Avantajları</h2>
          <p className="text-xl text-gray-600 mb-16">Modern havuz sistemlerinin kullanıcıya sağladığı faydalar</p>

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

      {/* Systems */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Havuz Sistemleri</h2>
          <p className="text-xl text-gray-600 mb-16">İhtiyacınıza göre farklı teknik çözümler</p>

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
                <div className="space-y-3 text-left">
                  {system.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Uygulama Alanları</h2>
          <p className="text-xl text-gray-600 mb-16">Havuz sistemlerinin tercih edildiği başlıca alanlar</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gray-50 rounded-2xl p-8 shadow-lg"
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

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Hayalinizdeki Havuzu Kurmamıza İzin Verin
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            İster özel villa, ister büyük ölçekli tesis... Size özel havuz çözümü için bizimle iletişime geçin.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            Ücretsiz Keşif Talep Et
          </button>
        </div>
      </section>
    </div>
  );
};
