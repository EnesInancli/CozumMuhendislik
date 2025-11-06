import React from 'react';
import { Wind, Leaf, Zap, Shield, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ServicePageTemplate } from '../components/ServicePageTemplate';

export const VentilationPage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: 'Havalandırma Sistemleri',
      subtitle: 'Temiz ve sağlıklı iç hava kalitesi için profesyonel havalandırma çözümleri sunuyoruz.',
      features: [
        { icon: Wind, title: 'Temiz Hava', description: 'Sürekli taze hava sirkülasyonu' },
        { icon: Leaf, title: 'Enerji Geri Kazanım', description: 'Isı geri kazanımlı sistemlerle tasarruf' },
        { icon: Zap, title: 'Sessiz Çalışma', description: 'Düşük gürültülü fanlar' },
        { icon: Shield, title: 'Filtre Sistemleri', description: 'HEPA ve aktif karbon filtreleme' }
      ],
      systems: [
        {
          name: 'Mekanik Havalandırma',
          description: 'Kontrollü hava girişi ve çıkışı sağlayan sistemler',
          features: ['Isı geri kazanım', 'Nem kontrolü', 'Otomatik fan kontrolü', 'Filtre sistemleri', 'Sessiz çalışma'],
          applications: ['Konutlar', 'Ofisler', 'Okullar']
        },
        {
          name: 'Endüstriyel Havalandırma',
          description: 'Fabrika ve üretim tesisleri için güçlü sistemler',
          features: ['Yüksek kapasite', 'Toz aspirasyonu', 'Koku kontrolü', 'Basınç dengesi', 'Otomasyon'],
          applications: ['Fabrikalar', 'Atölyeler', 'Depolar']
        }
      ],
      applications: [
        { icon: Award, title: 'Konutlar', description: 'Evler için temiz hava ve nem kontrolü' },
        { icon: Award, title: 'Ofisler', description: 'Çalışma alanlarında sağlıklı hava' },
        { icon: Award, title: 'Hastaneler', description: 'Steril ortam için özel çözümler' },
        { icon: Award, title: 'Fabrikalar', description: 'Endüstriyel havalandırma sistemleri' }
      ],
      mainContent: {
        title: 'Havalandırma Sistemleri Nedir?',
        description: [
          'Havalandırma sistemleri, kapalı alanlarda temiz hava sirkülasyonu ve iç hava kalitesini sağlar.',
          'Modern havalandırma sistemleri ile enerji tasarrufu ve konforlu ortamlar elde edilir.'
        ],
        advantages: [
          'Isı geri kazanımlı sistemler',
          'HEPA ve aktif karbon filtreler',
          'Otomatik nem ve CO2 kontrolü',
          'Sessiz ve enerji verimli fanlar',
          'Akıllı kontrol ve izleme',
          'Kolay bakım ve filtre değişimi',
          'Uzaktan yönetim imkanı',
          'Sertifikalı ve güvenli ekipman'
        ]
      },
      ctaTitle: 'Havalandırma Çözümleri',
      ctaDescription: 'Sağlıklı iç hava kalitesi için profesyonel havalandırma sistemleri.',
      ctaButtonText: 'Hemen İletişime Geçin'
    },
    en: {
      title: 'Ventilation Systems',
      subtitle: 'We offer professional ventilation solutions for clean and healthy indoor air quality.',
      features: [
        { icon: Wind, title: 'Clean Air', description: 'Continuous fresh air circulation' },
        { icon: Leaf, title: 'Energy Recovery', description: 'Savings with heat recovery systems' },
        { icon: Zap, title: 'Silent Operation', description: 'Low noise fans' },
        { icon: Shield, title: 'Filter Systems', description: 'HEPA and active carbon filtration' }
      ],
      systems: [
        {
          name: 'Mechanical Ventilation',
          description: 'Systems providing controlled air intake and exhaust',
          features: ['Heat recovery', 'Humidity control', 'Automatic fan control', 'Filter systems', 'Silent operation'],
          applications: ['Residences', 'Offices', 'Schools']
        },
        {
          name: 'Industrial Ventilation',
          description: 'Powerful systems for factories and production facilities',
          features: ['High capacity', 'Dust aspiration', 'Odor control', 'Pressure balance', 'Automation'],
          applications: ['Factories', 'Workshops', 'Warehouses']
        }
      ],
      applications: [
        { icon: Award, title: 'Residences', description: 'Clean air and humidity control for homes' },
        { icon: Award, title: 'Offices', description: 'Healthy air in work areas' },
        { icon: Award, title: 'Hospitals', description: 'Special solutions for sterile environment' },
        { icon: Award, title: 'Factories', description: 'Industrial ventilation systems' }
      ],
      mainContent: {
        title: 'What are Ventilation Systems?',
        description: [
          'Ventilation systems provide clean air circulation and indoor air quality in enclosed spaces.',
          'Energy savings and comfortable environments are achieved with modern ventilation systems.'
        ],
        advantages: [
          'Heat recovery systems',
          'HEPA and active carbon filters',
          'Automatic humidity and CO2 control',
          'Silent and energy efficient fans',
          'Smart control and monitoring',
          'Easy maintenance and filter replacement',
          'Remote management capability',
          'Certified and safe equipment'
        ]
      },
      ctaTitle: 'Ventilation Solutions',
      ctaDescription: 'Professional ventilation systems for healthy indoor air quality.',
      ctaButtonText: 'Contact Us Now'
    }
  };

  const data = content[language];

  return (
    <ServicePageTemplate
      title={data.title}
      subtitle={data.subtitle}
      heroImage="images/havalandirmaHero.png"
      features={data.features}
      mainContent={data.mainContent}
      systems={data.systems}
      applications={data.applications}
      ctaTitle={data.ctaTitle}
      ctaDescription={data.ctaDescription}
      ctaButtonText={data.ctaButtonText}
      gradientColors="from-cyan-600 to-blue-600"
    />
  );
};
