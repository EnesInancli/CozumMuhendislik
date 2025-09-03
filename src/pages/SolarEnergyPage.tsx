import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Zap, Leaf, TrendingDown, CheckCircle, Award, Battery, Home } from 'lucide-react';

const features = [
  {
    icon: Sun,
    title: 'Güneş Enerjisi',
    description: 'Sınırsız ve ücretsiz güneş enerjisinden yararlanın'
  },
  {
    icon: Zap,
    title: 'Elektrik Üretimi',
    description: 'Kendi elektriğinizi üretin, faturalarınızı sıfırlayın'
  },
  {
    icon: Leaf,
    title: 'Çevre Dostu',
    description: 'Karbon ayak izinizi azaltın, doğayı koruyun'
  },
  {
    icon: TrendingDown,
    title: 'Maliyet Tasarrufu',
    description: '%90\'a varan elektrik faturası tasarrufu'
  }
];

const systems = [
  {
    name: 'Çatı Üstü GES',
    description: 'Konut ve işyerleri için çatı montajlı sistemler',
    features: [
      '5-50 kW kapasiteler',
      'Kolay kurulum',
      'Hızlı geri ödeme',
      '25 yıl garanti'
    ],
    capacity: '5-50 kW',
    suitable: ['Evler', 'Küçük işletmeler', 'Apartmanlar']
  },
  {
    name: 'Arazi GES',
    description: 'Büyük ölçekli güneş enerji santralleri',
    features: [
      '100 kW+ kapasiteler',
      'Yüksek verimlilik',
      'Profesyonel izleme',
      'Uzun vadeli yatırım'
    ],
    capacity: '100+ kW',
    suitable: ['Fabrikalar', 'Büyük işletmeler', 'Yatırımcılar']
  },
  {
    name: 'Hibrit Sistemler',
    description: 'Batarya depolamalı güneş enerji sistemleri',
    features: [
      'Enerji depolama',
      'Kesintisiz güç',
      'Akıllı yönetim',
      'Maksimum verim'
    ],
    capacity: '10-100 kW',
    suitable: ['Hastaneler', 'Veri merkezleri', 'Kritik tesisler']
  }
];

const benefits = [
  {
    icon: TrendingDown,
    title: '25 Yıl Tasarruf',
    description: 'Uzun vadeli elektrik faturası tasarrufu'
  },
  {
    icon: Award,
    title: 'Devlet Teşvikleri',
    description: 'Kurulum ve üretim teşviklerinden yararlanın'
  },
  {
    icon: Battery,
    title: 'Enerji Bağımsızlığı',
    description: 'Kendi enerjinizi üretin, bağımsız olun'
  },
  {
    icon: Home,
    title: 'Emlak Değeri',
    description: 'Mülkünüzün değerini artırın'
  }
];

const process = [
  {
    step: '1',
    title: 'Keşif ve Analiz',
    description: 'Çatı analizi ve enerji ihtiyacı hesaplama'
  },
  {
    step: '2',
    title: 'Proje Tasarımı',
    description: 'Özel tasarım ve verimlilik hesaplamaları'
  },
  {
    step: '3',
    title: 'İzin İşlemleri',
    description: 'Yasal izinler ve elektrik şirketi başvuruları'
  },
  {
    step: '4',
    title: 'Kurulum',
    description: 'Profesyonel montaj ve sistem kurulumu'
  },
  {
    step: '5',
    title: 'Devreye Alma',
    description: 'Test, ayar ve sistemi devreye alma'
  }
];

export const SolarEnergyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6"
            >
              Güneş Enerji Sistemleri (GES)
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              Güneş enerjisi ile elektrik faturalarınızı sıfırlayın, 
              çevreyi koruyun ve enerji bağımsızlığınızı kazanın.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">GES Avantajları</h2>
            <p className="text-xl text-gray-600">Güneş enerjisi sistemlerinin faydaları</p>
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
                <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-yellow-600" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">GES Sistem Çeşitleri</h2>
            <p className="text-xl text-gray-600">İhtiyacınıza uygun güneş enerji çözümleri</p>
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
                
                <div className="bg-yellow-50 rounded-lg p-4 mb-6">
                  <p className="text-sm font-medium text-yellow-800">Kapasite: {system.capacity}</p>
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
                  <h4 className="font-semibold text-gray-900 mb-2">Uygun Alanlar:</h4>
                  <div className="flex flex-wrap gap-2">
                    {system.suitable.map((area, areaIndex) => (
                      <span key={areaIndex} className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                        {area}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ekonomik Faydalar</h2>
            <p className="text-xl text-gray-600">GES yatırımının getirdiği avantajlar</p>
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
                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kurulum Süreci</h2>
            <p className="text-xl text-gray-600">GES kurulumunun aşamaları</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-orange-600">{item.step}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Yatırım Geri Dönüşü</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                GES yatırımınız ortalama 6-8 yılda kendini amorti eder. 
                25 yıllık sistem ömrü boyunca büyük tasarruf sağlarsınız.
              </p>
              
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">Ortalama Geri Ödeme Süresi</span>
                    <span className="text-2xl font-bold text-green-600">6-8 Yıl</span>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">25 Yıllık Toplam Tasarruf</span>
                    <span className="text-2xl font-bold text-blue-600">500.000+ ₺</span>
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">Yıllık Elektrik Tasarrufu</span>
                    <span className="text-2xl font-bold text-yellow-600">%90</span>
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
                alt="Güneş Enerji Sistemi"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-500 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Güneş Enerjisi ile Geleceğe Yatırım Yapın
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Ücretsiz keşif ve fizibilite analizi ile size en uygun GES çözümünü belirleyelim.
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            Ücretsiz GES Analizi
          </button>
        </div>
      </section>
    </div>
  );
};