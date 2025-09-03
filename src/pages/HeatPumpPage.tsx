import React from 'react';
import { motion } from 'framer-motion';
import { Thermometer, Leaf, Zap, Shield, CheckCircle, TrendingDown, Award } from 'lucide-react';

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
    title: 'Güvenilir',
    description: 'Uzun ömürlü ve dayanıklı sistem'
  }
];

const types = [
  {
    name: 'Hava Kaynaklı Isı Pompası',
    description: 'Dış havadan enerji çekerek ısıtma ve soğutma sağlar',
    advantages: [
      'Kolay kurulum',
      'Düşük yatırım maliyeti',
      'Yıl boyunca kullanım',
      'Bakım kolaylığı'
    ]
  },
  {
    name: 'Su Kaynaklı Isı Pompası',
    description: 'Yeraltı suyu veya yüzey suyundan enerji çeker',
    advantages: [
      'Yüksek verimlilik',
      'Sabit performans',
      'Uzun ömür',
      'Sessiz çalışma'
    ]
  },
  {
    name: 'Toprak Kaynaklı Isı Pompası',
    description: 'Toprağın sabit sıcaklığından yararlanır',
    advantages: [
      'En yüksek verim',
      'Minimum işletme maliyeti',
      'Çevre dostu',
      '25+ yıl ömür'
    ]
  }
];

export const HeatPumpPage: React.FC = () => {
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
              Isı Pompası Sistemleri
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              Çevre dostu ve enerji verimli ısı pompası teknolojisi ile 
              hem ısıtma hem de soğutma ihtiyaçlarınızı karşılayın.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Isı Pompası Avantajları</h2>
            <p className="text-xl text-gray-600">Neden ısı pompası tercih etmelisiniz?</p>
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
                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Isı Pompası Nasıl Çalışır?</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Isı pompası, doğadaki mevcut ısıyı (hava, su, toprak) alarak 
                binaya transfer eden çevre dostu bir sistemdir.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Elektrik enerjisinin sadece %25'ini kullanarak, %75'ini doğadan 
                ücretsiz olarak elde eder. Bu sayede yüksek verimlilik sağlar.
              </p>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="font-bold text-gray-900 mb-4">Enerji Verimliliği</h4>
                <div className="flex items-center space-x-4">
                  <TrendingDown className="w-8 h-8 text-green-500" />
                  <div>
                    <p className="text-2xl font-bold text-green-600">%75</p>
                    <p className="text-sm text-gray-600">Enerji Tasarrufu</p>
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
                alt="Isı Pompası"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Isı Pompası Çeşitleri</h2>
            <p className="text-xl text-gray-600">İhtiyacınıza uygun ısı pompası türü</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {types.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{type.name}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                
                <div className="space-y-3">
                  {type.advantages.map((advantage, advantageIndex) => (
                    <div key={advantageIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{advantage}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Uygulama Alanları</h2>
            <p className="text-xl text-gray-600">Isı pompasının kullanıldığı alanlar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Konutlar</h3>
              <p className="text-gray-600 text-sm">Villa ve apartman daireleri</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Ofisler</h3>
              <p className="text-gray-600 text-sm">İş yerleri ve büro binaları</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Oteller</h3>
              <p className="text-gray-600 text-sm">Konaklama tesisleri</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Endüstri</h3>
              <p className="text-gray-600 text-sm">Fabrika ve üretim tesisleri</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Isı Pompası ile Tasarruf Edin
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Çevre dostu ısı pompası sistemleri ile hem doğayı koruyun hem de enerji faturalarınızı düşürün.
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            Ücretsiz Analiz Talep Et
          </button>
        </div>
      </section>
    </div>
  );
};