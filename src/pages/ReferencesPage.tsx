import React from 'react';
import { motion } from 'framer-motion';
import { Building, MapPin, Calendar, CheckCircle, Star, Quote } from 'lucide-react';

const projects = [
  {
    name: 'Akasya AVM',
    location: 'Acıbadem, İstanbul',
    year: '2023',
    type: 'Ticari Merkez',
    area: '15.000 m²',
    system: 'VRF Sistem',
    image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Büyük ölçekli alışveriş merkezi için kapsamlı VRF klima sistemi kurulumu.',
    features: ['200+ iç ünite', 'Merkezi kontrol sistemi', 'Enerji tasarrufu %45']
  },
  {
    name: 'Metropol İstanbul',
    location: 'Ataşehir, İstanbul',
    year: '2023',
    type: 'Ofis Binası',
    area: '8.500 m²',
    system: 'Chiller Sistem',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: '25 katlı ofis binası için merkezi klima sistemi ve mekanik tesisat.',
    features: ['Merkezi chiller', 'Fan coil sistemleri', 'BMS entegrasyonu']
  },
  {
    name: 'Loft Residence',
    location: 'Beşiktaş, İstanbul',
    year: '2022',
    type: 'Konut Projesi',
    area: '12.000 m²',
    system: 'Multi Split',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Lüks konut projesi için bireysel klima sistemleri kurulumu.',
    features: ['150 daire', 'Bireysel kontrol', 'Sessiz çalışma']
  },
  {
    name: 'Tech Park İstanbul',
    location: 'Maslak, İstanbul',
    year: '2022',
    type: 'Teknoloji Merkezi',
    area: '20.000 m²',
    system: 'VRF + Chiller',
    image: 'https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Teknoloji şirketleri için hibrit klima sistemi çözümü.',
    features: ['Hibrit sistem', 'Akıllı kontrol', 'Yedekli sistem']
  }
];

const testimonials = [
  {
    company: 'Akasya AVM Yönetimi',
    person: 'Mehmet Özkan',
    position: 'Teknik Müdür',
    text: 'Profesyonel ekip ve kaliteli hizmet. Sistemimiz 2 yıldır sorunsuz çalışıyor.',
    rating: 5,
    logo: 'AY'
  },
  {
    company: 'Metropol İnşaat',
    person: 'Ayşe Demir',
    position: 'Proje Müdürü',
    text: 'Zamanında teslim ve mükemmel işçilik. Kesinlikle tavsiye ediyoruz.',
    rating: 5,
    logo: 'Mİ'
  },
  {
    company: 'Loft Yapı',
    person: 'Can Yılmaz',
    position: 'Genel Müdür',
    text: 'Müşteri memnuniyeti odaklı yaklaşımları bizi çok etkiledi.',
    rating: 5,
    logo: 'LY'
  }
];

const stats = [
  { label: 'Tamamlanan Proje', value: '500+' },
  { label: 'Mutlu Müşteri', value: '1000+' },
  { label: 'Toplam Alan', value: '2M m²' },
  { label: 'Yıllık Deneyim', value: '15+' }
];

export const ReferencesPage: React.FC = () => {
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
              Referanslarımız
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              Gerçekleştirdiğimiz projeler ve müşteri memnuniyeti bizim en büyük başarımızdır.
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
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Öne Çıkan Projelerimiz</h2>
            <p className="text-xl text-gray-600">Gerçekleştirdiğimiz büyük ölçekli projeler</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
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
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.year}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.name}</h3>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{project.location}</span>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center">
                      <Building className="w-4 h-4 text-blue-600 mr-2" />
                      <span>{project.type}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-blue-600 mr-2" />
                      <span>{project.area}</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Sistem: {project.system}</h4>
                    <div className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Müşteri Görüşleri</h2>
            <p className="text-xl text-gray-600">Projelerimiz hakkında müşterilerimizin düşünceleri</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">
                    {testimonial.logo}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">{testimonial.company}</h4>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-600 opacity-50" />
                  <p className="text-gray-600 leading-relaxed pl-6 italic">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.person}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
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
            Siz de Referanslarımıza Katılın
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Projeniz için profesyonel çözümler sunmaya hazırız. Hemen iletişime geçin.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            Proje Teklifi Al
          </button>
        </div>
      </section>
    </div>
  );
};