import React from 'react';
import { Droplets, Filter, Zap, Shield, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ServicePageTemplate } from '../components/ServicePageTemplate';

export const WaterTreatmentPage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: 'Su Arıtma Sistemleri',
      subtitle: 'Temiz ve sağlıklı su için profesyonel arıtma çözümleri sunuyoruz.',
      features: [
        { icon: Droplets, title: 'Temiz Su', description: 'İçme ve kullanma suyu arıtma' },
        { icon: Filter, title: 'Çoklu Filtrasyon', description: 'Mekanik, kimyasal ve UV arıtma' },
        { icon: Zap, title: 'Enerji Tasarrufu', description: 'Verimli pompa ve kontrol sistemleri' },
        { icon: Shield, title: 'Güvenli Su', description: 'Bakteriyel ve kimyasal temizlik' }
      ],
      systems: [
        {
          name: 'İçme Suyu Arıtma',
          description: 'Evler ve işletmeler için temiz içme suyu',
          features: ['Ters ozmos sistemleri', 'UV dezenfeksiyon', 'Aktif karbon filtreleme', 'Mineralizasyon', 'Dijital izleme'],
          applications: ['Konutlar', 'Ofisler', 'Restoranlar']
        },
        {
          name: 'Endüstriyel Arıtma',
          description: 'Fabrikalar için büyük kapasiteli sistemler',
          features: ['Kimyasal arıtma', 'Biyolojik arıtma', 'Atık su arıtma', 'Geri kazanım', 'Otomasyon'],
          applications: ['Fabrikalar', 'Oteller', 'Hastaneler']
        }
      ],
      applications: [
        { icon: Award, title: 'Konutlar', description: 'Evler için temiz içme suyu sistemleri' },
        { icon: Award, title: 'Restoranlar', description: 'Gıda işletmeleri için güvenli su' },
        { icon: Award, title: 'Oteller', description: 'Konaklama tesisleri için arıtma' },
        { icon: Award, title: 'Endüstri', description: 'Üretim tesisleri için su arıtma' }
      ],
      mainContent: {
        title: 'Su Arıtma Sistemleri Nedir?',
        description: [
          'Su arıtma sistemleri, suyun fiziksel, kimyasal ve biyolojik kirliliklerden arındırılmasını sağlar.',
          'Modern arıtma teknolojileri ile sağlıklı ve güvenli su elde edilir.'
        ],
        advantages: [
          'Çoklu filtre sistemleri',
          'UV dezenfeksiyon teknolojisi',
          'Ters ozmos arıtma',
          'Otomatik kontrol ve izleme',
          'Enerji verimli pompalar',
          'Kolay bakım ve servis',
          'Uzun ömürlü ekipman',
          'Sertifikalı arıtma çözümleri'
        ]
      },
      ctaTitle: 'Su Arıtma Çözümleri',
      ctaDescription: 'Temiz ve sağlıklı su için profesyonel arıtma sistemleri.',
      ctaButtonText: 'Hemen İletişime Geçin'
    },
    en: {
      title: 'Water Treatment Systems',
      subtitle: 'We offer professional treatment solutions for clean and healthy water.',
      features: [
        { icon: Droplets, title: 'Clean Water', description: 'Drinking and utility water treatment' },
        { icon: Filter, title: 'Multi Filtration', description: 'Mechanical, chemical and UV treatment' },
        { icon: Zap, title: 'Energy Saving', description: 'Efficient pump and control systems' },
        { icon: Shield, title: 'Safe Water', description: 'Bacterial and chemical cleaning' }
      ],
      systems: [
        {
          name: 'Drinking Water Treatment',
          description: 'Clean drinking water for homes and businesses',
          features: ['Reverse osmosis systems', 'UV disinfection', 'Active carbon filtration', 'Mineralization', 'Digital monitoring'],
          applications: ['Residences', 'Offices', 'Restaurants']
        },
        {
          name: 'Industrial Treatment',
          description: 'Large capacity systems for factories',
          features: ['Chemical treatment', 'Biological treatment', 'Wastewater treatment', 'Recovery', 'Automation'],
          applications: ['Factories', 'Hotels', 'Hospitals']
        }
      ],
      applications: [
        { icon: Award, title: 'Residences', description: 'Clean drinking water systems for homes' },
        { icon: Award, title: 'Restaurants', description: 'Safe water for food businesses' },
        { icon: Award, title: 'Hotels', description: 'Treatment for accommodation facilities' },
        { icon: Award, title: 'Industry', description: 'Water treatment for production facilities' }
      ],
      mainContent: {
        title: 'What are Water Treatment Systems?',
        description: [
          'Water treatment systems purify water from physical, chemical and biological contaminants.',
          'Healthy and safe water is obtained with modern treatment technologies.'
        ],
        advantages: [
          'Multi-filter systems',
          'UV disinfection technology',
          'Reverse osmosis treatment',
          'Automatic control and monitoring',
          'Energy efficient pumps',
          'Easy maintenance and service',
          'Long-lasting equipment',
          'Certified treatment solutions'
        ]
      },
      ctaTitle: 'Water Treatment Solutions',
      ctaDescription: 'Professional treatment systems for clean and healthy water.',
      ctaButtonText: 'Contact Us Now'
    }
  };

  const data = content[language];

  return (
    <ServicePageTemplate
      title={data.title}
      subtitle={data.subtitle}
      heroImage="images/suaritmaHero.png"
      features={data.features}
      mainContent={data.mainContent}
      systems={data.systems}
      applications={data.applications}
      ctaTitle={data.ctaTitle}
      ctaDescription={data.ctaDescription}
      ctaButtonText={data.ctaButtonText}
      gradientColors="from-blue-500 to-teal-500"
    />
  );
};
