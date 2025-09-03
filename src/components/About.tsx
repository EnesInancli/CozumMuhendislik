import React from 'react';
import { Award, Users, Target, Zap } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'; // Eklendi

const stats = [
  { icon: Users, label: 'Mutlu Müşteri', value: 500 },
  { icon: Award, label: 'Yıllık Deneyim', value: 15 },
  { icon: Target, label: 'Tamamlanan Proje', value: 1000 },
  { icon: Zap, label: 'Uzman Ekip', value: 50 }
];

export const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="hakkimizda" className="bg-white dark:bg-slate-800 py-24 transition-colors duration-300" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Başlık Animasyonlu */}
            <motion.h2
              initial={{ opacity: 0, y: -40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Hakkımızda
            </motion.h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Şirketimiz Bodrum‘da kurulmuş olup mekanik tesisat konusunda taahhütlü satış ve servis üzerine çalışmaktadır.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              ALARKO CARRİER TOSHİBA 'nın BODRUM bölge bayisiyiz, ayrıca SERKON, BOGENN, ATLAS ve CARİSA firmalarının Bodrum bayiliğini yapmaktadır. Bölgede ısıtma, soğutma, havalandırma, yüzme havuzu, sıhhi tesisat ve altyapı üzerine yapmış olduğumuz bir çok taahhüt referanslarımız vardır. Firmamız Bodrum ve çevresinde komple otel mekanik tesisat yapımı konusunda uzman bir ekibe sahiptir.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{
                      color: inView ? undefined : 'transparent',
                      opacity: inView ? 1 : 0,
                      transition: 'opacity 2s ease-in-out'
                    }}
                  >
                    {inView ? (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={4}
                        useEasing={true}
                        separator=","
                      />
                    ) : (
                      0
                    )}
                    +
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-gray-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Vizyonumuz</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Sektörde lider konumda olmak ve müşterilerimize en iyi hizmeti sunarak 
                onların başarısına katkıda bulunmak.
              </p>

              <h3 className="text-2xl font-bold mb-4">Misyonumuz</h3>
              <p className="text-blue-100 leading-relaxed">
                Kaliteli ürün ve hizmetlerimizle müşteri beklentilerini aşmak, 
                sürdürülebilir büyüme sağlamak ve topluma değer katmak.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
