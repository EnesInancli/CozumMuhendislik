import React from 'react';
import { Wrench, Settings, Cog, Shield, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ServicePageTemplate } from '../components/ServicePageTemplate';

export const MechanicalInstallationPage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: 'Mekanik Tesisat',
      subtitle: 'Profesyonel mekanik tesisat çözümleri ile güvenli, verimli ve uzun ömürlü sistemler sunuyoruz.',
      features: [
        { icon: Wrench, title: 'Proje Tasarımı', description: 'Binanızın ihtiyaçlarına özel mekanik tesisat projeleri hazırlıyoruz' },
        { icon: Settings, title: 'Sistem Kurulumu', description: 'Profesyonel ekibimizle kaliteli kurulum hizmeti sunuyoruz' },
        { icon: Cog, title: 'Bakım ve Onarım', description: 'Düzenli bakım ve acil onarım hizmetleri ile sistem sürekliliği' },
        { icon: Shield, title: 'Kalite Güvencesi', description: 'Tüm işlerimizde kalite standartları ve garanti güvencesi' }
      ],
      systems: [
        {
          name: 'Isıtma Sistemleri',
          description: 'Kombi, kazan, radyatör ve yerden ısıtma sistemleri',
          features: ['Kombi kurulumu ve bakımı', 'Kazan sistemleri', 'Radyatör montajı', 'Yerden ısıtma', 'Sistem optimizasyonu'],
          applications: ['Konutlar', 'Ofisler', 'Oteller']
        },
        {
          name: 'Soğutma Sistemleri',
          description: 'Klima, chiller ve soğutma kulesi sistemleri',
          features: ['Merkezi klima sistemleri', 'Chiller kurulumu', 'Soğutma kuleleri', 'Fan coil sistemleri', 'Otomasyon sistemleri'],
          applications: ['Büyük Binalar', 'AVM\'ler', 'Endüstri']
        },
        {
          name: 'Havalandırma Sistemleri',
          description: 'Temiz hava sirkülasyonu ve hava kalitesi sistemleri',
          features: ['Mekanik havalandırma', 'Hava kanalları', 'Filtre sistemleri', 'Aspirasyon sistemleri', 'Basınç kontrolü'],
          applications: ['Fabrikalar', 'Hastaneler', 'Laboratuvarlar']
        }
      ],
      applications: [
        { icon: Award, title: 'Oteller', description: 'Konaklama tesisleri için komple mekanik tesisat' },
        { icon: Award, title: 'Ofis Binaları', description: 'İş merkezleri için profesyonel tesisat çözümleri' },
        { icon: Award, title: 'Alışveriş Merkezleri', description: 'AVM\'ler için geniş kapsamlı tesisat sistemleri' },
        { icon: Award, title: 'Konutlar', description: 'Rezidanslar için güvenli tesisat uygulamaları' }
      ],
      mainContent: {
        title: 'Mekanik Tesisat Nedir?',
        description: [
          'Mekanik tesisat, binaların ısıtma, soğutma, havalandırma ve sıhhi tesisat sistemlerinin tasarımı ve kurulumunu kapsar.',
          'Modern mekanik tesisat sistemleri ile konforlu yaşam alanları ve verimli çalışma ortamları oluşturulur.'
        ],
        advantages: [
          'Komple mekanik tesisat tasarımı ve uygulaması',
          'Kaliteli ve sertifikalı malzeme kullanımı',
          'Enerji verimli sistem çözümleri',
          'Hızlı ve profesyonel montaj hizmeti',
          'Periyodik bakım ve servis desteği',
          '7/24 teknik destek',
          'Uzun ömürlü ve güvenilir sistemler',
          'Garanti ve servis güvencesi'
        ]
      },
      ctaTitle: 'Mekanik Tesisat Çözümleri',
      ctaDescription: 'Projeniz için en uygun mekanik tesisat sistemini belirlemek üzere uzman ekibimizle hemen iletişime geçin.',
      ctaButtonText: 'Hemen İletişime Geçin'
    },
    en: {
      title: 'Mechanical Installation',
      subtitle: 'We offer safe, efficient and long-lasting systems with professional mechanical installation solutions.',
      features: [
        { icon: Wrench, title: 'Project Design', description: 'We prepare mechanical installation projects specific to your building needs' },
        { icon: Settings, title: 'System Installation', description: 'We offer quality installation service with our professional team' },
        { icon: Cog, title: 'Maintenance and Repair', description: 'System continuity with regular maintenance and emergency repair services' },
        { icon: Shield, title: 'Quality Assurance', description: 'Quality standards and warranty guarantee in all our work' }
      ],
      systems: [
        {
          name: 'Heating Systems',
          description: 'Boiler, furnace, radiator and underfloor heating systems',
          features: ['Boiler installation and maintenance', 'Furnace systems', 'Radiator installation', 'Underfloor heating', 'System optimization'],
          applications: ['Residences', 'Offices', 'Hotels']
        },
        {
          name: 'Cooling Systems',
          description: 'Air conditioning, chiller and cooling tower systems',
          features: ['Central air conditioning systems', 'Chiller installation', 'Cooling towers', 'Fan coil systems', 'Automation systems'],
          applications: ['Large Buildings', 'Shopping Malls', 'Industry']
        },
        {
          name: 'Ventilation Systems',
          description: 'Clean air circulation and air quality systems',
          features: ['Mechanical ventilation', 'Air ducts', 'Filter systems', 'Aspiration systems', 'Pressure control'],
          applications: ['Factories', 'Hospitals', 'Laboratories']
        }
      ],
      applications: [
        { icon: Award, title: 'Hotels', description: 'Complete mechanical installation for accommodation facilities' },
        { icon: Award, title: 'Office Buildings', description: 'Professional installation solutions for business centers' },
        { icon: Award, title: 'Shopping Malls', description: 'Comprehensive installation systems for shopping centers' },
        { icon: Award, title: 'Residences', description: 'Safe installation applications for residential buildings' }
      ],
      mainContent: {
        title: 'What is Mechanical Installation?',
        description: [
          'Mechanical installation covers the design and installation of heating, cooling, ventilation and plumbing systems of buildings.',
          'Comfortable living spaces and efficient working environments are created with modern mechanical installation systems.'
        ],
        advantages: [
          'Complete mechanical installation design and application',
          'Use of quality and certified materials',
          'Energy efficient system solutions',
          'Fast and professional installation service',
          'Periodic maintenance and service support',
          '24/7 technical support',
          'Long-lasting and reliable systems',
          'Warranty and service guarantee'
        ]
      },
      ctaTitle: 'Mechanical Installation Solutions',
      ctaDescription: 'Contact our expert team immediately to determine the most suitable mechanical installation system for your project.',
      ctaButtonText: 'Contact Us Now'
    }
  };

  const data = content[language];

  return (
    <ServicePageTemplate
      title={data.title}
      subtitle={data.subtitle}
      heroImage="images/mekaniktesisatHero.png"
      features={data.features}
      mainContent={data.mainContent}
      systems={data.systems}
      applications={data.applications}
      ctaTitle={data.ctaTitle}
      ctaDescription={data.ctaDescription}
      ctaButtonText={data.ctaButtonText}
      gradientColors="from-orange-600 to-red-600"
    />
  );
};
