import React from 'react';
import { Filter, Shield, Zap, Heart, Award } from 'lucide-react';
import { ServicePageTemplate } from '../components/ServicePageTemplate';

const features = [
  {
    icon: Filter,
    title: 'Çoklu Filtreleme',
    description: 'Sediment, karbon ve RO filtre sistemleri'
  },
  {
    icon: Shield,
    title: 'Bakteriyel Koruma',
    description: 'UV sterilizasyon ile %99.9 bakteri eliminasyonu'
  },
  {
    icon: Zap,
    title: 'Otomatik Sistem',
    description: 'Akıllı kontrol ve otomatik yıkama'
  },
  {
    icon: Heart,
    title: 'Sağlıklı Su',
    description: 'İçme suyu standartlarında temiz su'
  }
];

const systems = [
  {
    name: 'Ters Osmoz (RO) Sistemleri',
    description: 'En etkili su arıtma teknolojisi',
    features: [
      '5-7 aşamalı filtreleme',
      '%99 kirlilik giderimi',
      'Mineral dengeleme',
      'Otomatik yıkama'
    ],
    capacity: '50-5000 L/gün',
    applications: ['Evler', 'Ofisler', 'Restoranlar']
  },
  {
    name: 'Endüstriyel Su Arıtma',
    description: 'Büyük kapasiteli arıtma sistemleri',
    features: [
      'Yüksek kapasite',
      'Otomatik kontrol',
      'Uzaktan izleme',
      'Kimyasal dozajlama'
    ],
    capacity: '1000+ L/gün',
    applications: ['Fabrikalar', 'Oteller', 'Hastaneler']
  },
  {
    name: 'UV Sterilizasyon',
    description: 'Kimyasalsız dezenfeksiyon sistemi',
    features: [
      'Kimyasalsız arıtma',
      'Anında sterilizasyon',
      'Düşük işletme maliyeti',
      'Çevre dostu'
    ],
    capacity: 'Tüm kapasiteler',
    applications: ['Tüm sektörler']
  }
];

const applications = [
  {
    icon: Award,
    title: 'Evler',
    description: 'Aile sağlığı için temiz içme suyu'
  },
  {
    icon: Award,
    title: 'Ofisler',
    description: 'Çalışanlar için kaliteli su çözümleri'
  },
  {
    icon: Award,
    title: 'Restoranlar',
    description: 'Yiyecek sektörü için özel arıtma'
  },
  {
    icon: Award,
    title: 'Hastaneler',
    description: 'Medikal kalitede su arıtma sistemleri'
  }
];

const mainContent = {
  title: 'Su Arıtma Nasıl Çalışır?',
  description: [
    'Su arıtma sistemleri, çok aşamalı filtreleme teknolojisi ile suda bulunan zararlı maddeleri, bakterileri ve virüsleri giderir.',
    'Modern RO teknolojisi ile moleküler seviyede arıtma yapılarak, sağlıklı ve temiz içme suyu elde edilir.'
  ],
  image: 'images/Header_Background.jpeg',
  advantages: [
    'Sağlıklı içme suyu',
    'Kötü tat ve koku giderimi',
    'Cilt ve saç sağlığı',
    'Ev aletlerinin korunması',
    'Çevre dostu çözüm',
    'Uzun vadeli tasarruf',
    'Otomatik çalışma',
    'Kolay bakım'
  ]
};

export const WaterTreatmentPage: React.FC = () => {
  return (
    <ServicePageTemplate
      title="Su Arıtma Sistemleri"
      subtitle="Gelişmiş su arıtma teknolojileri ile temiz, sağlıklı ve güvenli içme suyu elde edin."
      heroImage="images/Header_Background.jpeg"
      features={features}
      mainContent={mainContent}
      systems={systems}
      applications={applications}
      ctaTitle="Temiz Su İçin Hemen Başlayın"
      ctaDescription="Su kalitesi analizi ile size en uygun arıtma sistemini belirleyelim."
      ctaButtonText="Ücretsiz Su Analizi"
      gradientColors="from-cyan-600 to-blue-600"
    />
  );
};