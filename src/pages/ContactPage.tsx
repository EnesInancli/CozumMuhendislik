import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, Users } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', email: '', phone: '', subject: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      details: ['+90 (212) 123 45 67', '+90 (532) 123 45 67'],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Mail,
      title: 'E-posta',
      details: ['info@sirketadi.com', 'destek@sirketadi.com'],
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: MapPin,
      title: 'Adres',
      details: ['Maslak Mahallesi, Teknoloji Caddesi', 'No: 123, Kat: 5, 34485 Sarıyer/İstanbul'],
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      details: ['Pazartesi - Cuma: 09:00 - 18:00', 'Cumartesi: 09:00 - 14:00'],
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const services = [
    'VRF Sistemleri',
    'Klima Teknolojileri',
    'Mekanik Tesisat',
    'Bakım ve Onarım',
    'Proje Danışmanlığı',
    'Diğer'
  ];

  const features = [
    {
      icon: MessageCircle,
      title: '24 Saat İçinde Yanıt',
      description: 'Tüm mesajlarınıza 24 saat içinde dönüş yapıyoruz'
    },
    {
      icon: Calendar,
      title: 'Ücretsiz Keşif',
      description: 'Projeniz için ücretsiz keşif ve danışmanlık hizmeti'
    },
    {
      icon: Users,
      title: 'Uzman Ekip',
      description: '15+ yıl deneyimli profesyonel ekibimiz'
    }
  ];

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
              İletişim
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              Projeleriniz hakkında konuşmak için bizimle iletişime geçin. 
              Uzman ekibimiz size en uygun çözümü sunmaya hazır.
            </motion.p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg"
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

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">İletişim Bilgileri</h2>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${info.color}`}>
                      <info.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 mb-1">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Harita Görünümü</p>
                  <p className="text-sm text-gray-500">Maslak, Sarıyer/İstanbul</p>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Bize Yazın</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Adınızı ve soyadınızı girin"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="E-posta adresinizi girin"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Telefon numaranızı girin"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Hizmet Türü
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Hizmet seçin</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Konu *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Mesajınızın konusunu girin"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesaj *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Mesajınızı detaylı olarak yazın..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Mesajı Gönder</span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sık Sorulan Sorular</h2>
            <p className="text-xl text-gray-600">Merak ettiğiniz konular hakkında bilgi alın</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Keşif hizmeti ücretli mi?</h3>
              <p className="text-gray-600">Hayır, tüm keşif hizmetlerimiz ücretsizdir. Uzman ekibimiz projenizi değerlendirip size en uygun çözümü sunar.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Garanti süresi ne kadar?</h3>
              <p className="text-gray-600">Ürünlerimiz için 2-5 yıl arası garanti sunuyoruz. İşçilik garantimiz ise 2 yıldır.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Bakım hizmeti veriyor musunuz?</h3>
              <p className="text-gray-600">Evet, kurduğumuz tüm sistemler için düzenli bakım ve 7/24 teknik destek hizmeti veriyoruz.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Proje süresi ne kadar?</h3>
              <p className="text-gray-600">Proje büyüklüğüne göre değişmekle birlikte, ortalama 1-4 hafta arasında tamamlanır.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Hemen Arayın, Ücretsiz Keşif Alın
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Projeniz için en uygun çözümü bulmak üzere uzman ekibimiz size ücretsiz keşif hizmeti sunuyor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+902121234567"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Hemen Arayın</span>
            </a>
            <a
              href="mailto:info@sirketadi.com"
              className="bg-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-900 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>E-posta Gönderin</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};