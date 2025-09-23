import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Zap, CheckCircle, Heart, Shield, Lightbulb } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Mutlu Müşteri', value: '1000+' },
  { icon: Award, label: 'Yıllık Deneyim', value: '15+' },
  { icon: Target, label: 'Tamamlanan Proje', value: '500+' },
  { icon: Zap, label: 'Uzman Ekip', value: '25+' }
];

const values = [
  {
    icon: Heart,
    title: 'Müşteri Memnuniyeti',
    description: 'Müşterilerimizin memnuniyeti bizim en büyük önceliğimizdir. Her projede mükemmelliği hedefliyoruz.'
  },
  {
    icon: Shield,
    title: 'Güvenilirlik',
    description: 'Sözümüzü tutmak ve kaliteli hizmet sunmak konusunda 15 yıldır güvenilir bir partner olarak hizmet veriyoruz.'
  },
  {
    icon: Lightbulb,
    title: 'İnovasyon',
    description: 'Sektördeki en son teknolojileri takip ederek müşterilerimize en inovatif çözümleri sunuyoruz.'
  },
  {
    icon: CheckCircle,
    title: 'Kalite',
    description: 'Tüm projelerimizde uluslararası kalite standartlarını uygulayarak mükemmel sonuçlar elde ediyoruz.'
  }
];


export const AboutPage: React.FC = () => {
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
              Hakkımızda
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              2008 yılından bu yana klima ve mekanik tesisat sektöründe faaliyet gösteren, 
              müşteri memnuniyetini ön planda tutan güvenilir bir firmayız.
            </motion.p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Hikayemiz</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Şirketimiz Bodrum‘da kurulmuş olup mekanik tesisat konusunda taahhütlü satış ve servis üzerine çalışmaktadır.

              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              ALARKO CARRİER TOSHİBA 'nın BODRUM bölge bayisiyiz, ayrıca SERKON, BOGENN, ATLAS ve CARİSA firmalarının Bodrum bayiliğini yapmaktadır. Bölgede ısıtma, soğutma, havalandırma, yüzme havuzu, sıhhi tesisat ve altyapı üzerine yapmış olduğumuz bir çok taahhüt referanslarımız vardır. Firmamız Bodrum ve çevresinde komple otel mekanik tesisat yapımı konusunda uzman bir ekibe sahiptir.

              </p>
              
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="images/bina.webp"
                alt="Binamız"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Değerlerimiz</h2>
            <p className="text-xl text-gray-600">Çalışma prensiplerimizi oluşturan temel değerler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      
      {/* Vision & Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-3xl font-bold mb-6">Vizyonumuz</h3>
              <p className="text-blue-100 leading-relaxed text-lg">
                Türkiye'de klima ve mekanik tesisat sektöründe lider konumda olmak, 
                sürdürülebilir ve çevre dostu çözümlerle müşterilerimizin yaşam 
                kalitesini artırmak.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-3xl font-bold mb-6">Misyonumuz</h3>
              <p className="text-green-100 leading-relaxed text-lg">
                Kaliteli ürün ve hizmetlerimizle müşteri beklentilerini aşmak, 
                teknolojik yenilikleri takip ederek sektöre değer katmak ve 
                sürdürülebilir büyüme sağlamak.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};