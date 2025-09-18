import React from 'react';
import { Wind, Filter, Fan, Shield, Award } from 'lucide-react';
import { ServicePageTemplate } from '../components/ServicePageTemplate';

const features = [
  {
    icon: Wind,
    title: 'Temiz Hava',
    description: 'Sürekli temiz hava sirkülasyonu sağlar'
  },
  {
    icon: Filter,
    title: 'Hava Filtreleme',
    description: 'Gelişmiş filtre sistemleri ile hava kalitesi'
  },
  {
    icon: Fan,
    title: 'Enerji Verimli',
    description: 'EC motorlar ile düşük enerji tüketimi'
  },
  {
    icon: Shield,
    title: 'Sağlıklı Ortam',
    description: 'Nem ve CO2 kontrolü ile konforlu yaşam'
  }
];

const systems = [
  {
    name: 'Mekanik Havalandırma',
    description: 'Zorla hava sirkülasyonu sağlayan sistemler',
    features: [
      'Sürekli hava değişimi',
      'Kontrollü hava akışı',
      'Enerji geri kazanım',
      'Otomatik kontrol'
    ],
    applications: ['Ofisler', 'Fabrikalar', 'AVM\'ler']
  },
  {
    name: 'Aspirasyon Sistemleri',
    description: 'Endüstriyel toz ve duman emme sistemleri',
    features: [
      'Güçlü emme kapasitesi',
      'Filtre sistemleri',
      'Gürültü kontrolü',
      'Kolay bakım'
    ],
    applications: ['Atölyeler', 'Fabrikalar', 'Laboratuvarlar']
  },
  {
    name: 'Temiz Oda Sistemleri',
    description: 'Yüksek hava kalitesi gerektiren alanlar için',
    features: [
      'HEPA filtreleme',
      'Basınç kontrolü',
      'Parçacık kontrolü',
      'Steril ortam'
    ],
    applications: ['Hastaneler', 'Laboratuvarlar', 'Üretim']
  }
];

const applications = [
  {
    icon: Award,
    title: 'Ofisler',
    description: 'İş yerlerinde temiz hava sirkülasyonu'
  },
  {
    icon: Award,
    title: 'Fabrikalar',
    description: 'Endüstriyel havalandırma çözümleri'
  },
  {
    icon: Award,
    title: 'Hastaneler',
    description: 'Steril ortam için özel havalandırma'
  },
  {
    icon: Award,
    title: 'Laboratuvarlar',
    description: 'Yüksek kaliteli hava filtreleme'
  }
];

const mainContent = {
  title: 'Havalandırma Sistemleri Nedir?',
  description: [
    'Havalandırma sistemleri, kapalı mekanlarda temiz hava sirkülasyonu sağlayarak iç hava kalitesini artıran sistemlerdir.',
    'Modern havalandırma sistemleri, enerji verimli EC motorlar, gelişmiş filtre teknolojileri ve akıllı kontrol sistemleri ile donatılmıştır.'
  ],
  image: 'images/Header_Background.jpeg',
  advantages: [
    'HEPA ve karbon filtre seçenekleri',
    'Enerji geri kazanım sistemleri',
    'Otomatik hız kontrolü',
    'Uzaktan izleme ve kontrol',
    'Düşük gürültü seviyesi',
    'Kolay bakım',
    'Uzun ömür',
    'Çevre dostu teknoloji'
  ]
};

export const VentilationPage: React.FC = () => {
  return (
    <ServicePageTemplate
      title="Havalandırma Sistemleri"
      subtitle="Profesyonel havalandırma sistemleri ile temiz hava sirkülasyonu ve sağlıklı iç mekan ortamları yaratıyoruz."
      heroImage="images/Header_Background.jpeg"
      features={features}
      mainContent={mainContent}
      systems={systems}
      applications={applications}
      ctaTitle="Temiz Hava İçin Hemen Başlayın"
      ctaDescription="Sağlıklı yaşam alanları için profesyonel havalandırma sistemi kurulumu."
      ctaButtonText="Hava Kalitesi Analizi Al"
      gradientColors="from-green-600 to-blue-600"
    />
  );
};