import React from 'react';
import { Droplets, Thermometer, Zap, Shield, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ServicePageTemplate } from '../components/ServicePageTemplate';

export const PoolPage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: 'Havuz Sistemleri',
      subtitle: 'Profesyonel havuz sistemleri ile temiz, sağlıklı ve keyifli yüzme deneyimi sunuyoruz.',
      features: [
        { icon: Droplets, title: 'Temiz Su', description: 'Modern filtrasyon sistemleri ile kristal berraklığında su' },
        { icon: Thermometer, title: 'Isı Kontrolü', description: 'İstediğiniz sıcaklıkta konforlu havuz' },
        { icon: Zap, title: 'Enerji Tasarrufu', description: 'Verimli pompalar ile düşük işletme maliyeti' },
        { icon: Shield, title: 'Uzun Ömür', description: 'Kaliteli ekipmanlar ile dayanıklı sistem' }
      ],
      systems: [
        {
          name: 'Filtrasyon Sistemleri',
          description: 'Havuz suyu temizliği için profesyonel filtrasyon çözümleri',
          features: ['Kum filtreleri', 'Kartuş filtreleri', 'DE filtreleri', 'Otomatik filtre yıkama', 'Çoklu valf sistemleri'],
          applications: ['Özel Havuzlar', 'Otel Havuzları', 'Olimpik Havuzlar']
        },
        {
          name: 'Isıtma Sistemleri',
          description: 'Havuz suyu ısıtma için enerji verimli çözümler',
          features: ['Isı pompası sistemleri', 'Elektrikli ısıtıcılar', 'Güneş kollektörleri', 'Eşanjörler', 'Dijital kontrol'],
          applications: ['Kapalı Havuzlar', 'Açık Havuzlar', 'Termal Havuzlar']
        }
      ],
      applications: [
        { icon: Award, title: 'Özel Havuzlar', description: 'Konutlar için özel havuz sistemleri' },
        { icon: Award, title: 'Otel Havuzları', description: 'Otel ve tatil köyleri için büyük ölçekli çözümler' },
        { icon: Award, title: 'Olimpik Havuzlar', description: 'Spor tesisleri için profesyonel sistemler' },
        { icon: Award, title: 'Termal Havuzlar', description: 'Spa ve termal tesisler için özel projeler' }
      ],
      mainContent: {
        title: 'Havuz Sistemleri Nedir?',
        description: [
          'Havuz sistemleri, suyun temizliği, sirkülasyonu ve ısıtılması için gerekli tüm ekipmanları içerir.',
          'Modern havuz sistemleri ile bakım kolaylığı ve enerji tasarrufu sağlanır.'
        ],
        advantages: [
          'Filtrasyon ve su arıtma sistemleri',
          'Havuz ısıtma çözümleri',
          'Otomatik dozaj sistemleri',
          'Aydınlatma sistemleri',
          'Havuz temizlik ekipmanları',
          'Enerji verimli pompalar',
          'Su seviye kontrol sistemleri',
          'Profesyonel bakım hizmeti'
        ]
      },
      ctaTitle: 'Havuz Sistemleri',
      ctaDescription: 'Hayalinizdeki havuz için profesyonel danışmanlık ve kurulum hizmeti alın.',
      ctaButtonText: 'Hemen İletişime Geçin'
    },
    en: {
      title: 'Pool Systems',
      subtitle: 'We offer clean, healthy and enjoyable swimming experience with professional pool systems.',
      features: [
        { icon: Droplets, title: 'Clean Water', description: 'Crystal clear water with modern filtration systems' },
        { icon: Thermometer, title: 'Temperature Control', description: 'Comfortable pool at your desired temperature' },
        { icon: Zap, title: 'Energy Saving', description: 'Low operating costs with efficient pumps' },
        { icon: Shield, title: 'Long Life', description: 'Durable system with quality equipment' }
      ],
      systems: [
        {
          name: 'Filtration Systems',
          description: 'Professional filtration solutions for pool water cleaning',
          features: ['Sand filters', 'Cartridge filters', 'DE filters', 'Automatic filter washing', 'Multi-valve systems'],
          applications: ['Private Pools', 'Hotel Pools', 'Olympic Pools']
        },
        {
          name: 'Heating Systems',
          description: 'Energy efficient solutions for pool water heating',
          features: ['Heat pump systems', 'Electric heaters', 'Solar collectors', 'Heat exchangers', 'Digital control'],
          applications: ['Indoor Pools', 'Outdoor Pools', 'Thermal Pools']
        }
      ],
      applications: [
        { icon: Award, title: 'Private Pools', description: 'Special pool systems for residences' },
        { icon: Award, title: 'Hotel Pools', description: 'Large-scale solutions for hotels and resorts' },
        { icon: Award, title: 'Olympic Pools', description: 'Professional systems for sports facilities' },
        { icon: Award, title: 'Thermal Pools', description: 'Special projects for spa and thermal facilities' }
      ],
      mainContent: {
        title: 'What are Pool Systems?',
        description: [
          'Pool systems include all equipment necessary for water cleaning, circulation and heating.',
          'Ease of maintenance and energy savings are provided with modern pool systems.'
        ],
        advantages: [
          'Filtration and water treatment systems',
          'Pool heating solutions',
          'Automatic dosing systems',
          'Lighting systems',
          'Pool cleaning equipment',
          'Energy efficient pumps',
          'Water level control systems',
          'Professional maintenance service'
        ]
      },
      ctaTitle: 'Pool Systems',
      ctaDescription: 'Get professional consultancy and installation service for your dream pool.',
      ctaButtonText: 'Contact Us Now'
    }
  };

  const data = content[language];

  return (
    <ServicePageTemplate
      title={data.title}
      subtitle={data.subtitle}
      heroImage="images/havuzHero.png"
      features={data.features}
      mainContent={data.mainContent}
      systems={data.systems}
      applications={data.applications}
      ctaTitle={data.ctaTitle}
      ctaDescription={data.ctaDescription}
      ctaButtonText={data.ctaButtonText}
      gradientColors="from-blue-400 to-cyan-500"
    />
  );
};
