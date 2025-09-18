import React from 'react';
import { Gauge, Zap, Shield, Settings, Award } from 'lucide-react';
import { ServicePageTemplate } from '../components/ServicePageTemplate';

const features = [
  {
    icon: Gauge,
    title: 'Sabit Basınç',
    description: 'Tüm katlarda eşit su basıncı garantisi'
  },
  {
    icon: Zap,
    title: 'Enerji Tasarrufu',
    description: 'İnverter teknolojisi ile %40 enerji tasarrufu'
  },
  {
    icon: Shield,
    title: 'Güvenilir Sistem',
    description: 'Otomatik kontrol ve koruma sistemleri'
  },
  {
    icon: Settings,
    title: 'Kolay Bakım',
    description: 'Minimal bakım gereksinimleri'
  }
];

const systems = [
  {
    name: 'Hidrofor Sistemleri',
    description: 'Geleneksel su basınçlandırma çözümü',
    features: [
      'Basınç tankı ile çalışma',
      'Otomatik açma/kapama',
      'Ekonomik çözüm',
      'Kolay kurulum'
    ],
    capacity: '1-50 daire',
    applications: ['Apartmanlar', 'Küçük Siteler', 'Villalar']
  },
  {
    name: 'İnverter Sistemler',
    description: 'Modern değişken hızlı pompa sistemleri',
    features: [
      'Sabit basınç kontrolü',
      'Enerji tasarrufu',
      'Sessiz çalışma',
      'Uzun ömür'
    ],
    capacity: '10-200 daire',
    applications: ['Büyük Apartmanlar', 'Siteler', 'İş Merkezleri']
  },
  {
    name: 'Booster Sistemler',
    description: 'Yüksek binalar için güçlü çözüm',
    features: [
      'Çoklu pompa sistemi',
      'Yedekli çalışma',
      'Yüksek kapasite',
      'Otomatik kontrol'
    ],
    capacity: '50+ daire',
    applications: ['Gökdelenler', 'Büyük Kompleksler', 'Endüstri']
  }
];

const applications = [
  {
    icon: Award,
    title: 'Apartmanlar',
    description: 'Çok katlı konut binaları için su basınçlandırma'
  },
  {
    icon: Award,
    title: 'Siteler',
    description: 'Büyük konut kompleksleri için merkezi sistem'
  },
  {
    icon: Award,
    title: 'İş Merkezleri',
    description: 'Ofis binaları için güvenilir su temini'
  },
  {
    icon: Award,
    title: 'Oteller',
    description: 'Konaklama tesisleri için kesintisiz su hizmeti'
  }
];

const mainContent = {
  title: 'Su Basınçlandırma Nasıl Çalışır?',
  description: [
    'Su basınçlandırma sistemleri, şehir şebekesinden gelen düşük basınçlı suyu pompalar yardımıyla yüksek basınca çıkararak binanın tüm katlarına eşit basınçta su ulaştırır.',
    'Modern inverter teknolojisi ile sistem, ihtiyaca göre otomatik olarak pompa hızını ayarlayarak enerji tasarrufu sağlar.'
  ],
  image: 'images/Header_Background.jpeg',
  advantages: [
    'Tüm katlarda eşit basınç',
    'Otomatik çalışma',
    'Enerji tasarrufu',
    'Sessiz çalışma',
    'Uzun ömür',
    'Kolay bakım',
    'Güvenli sistem',
    'Ekonomik işletme'
  ]
};

export const WaterPressurePage: React.FC = () => {
  return (
    <ServicePageTemplate
      title="Su Basınçlandırma"
      subtitle="Modern su basınçlandırma sistemleri ile tüm katlarda eşit ve yeterli su basıncı sağlıyoruz."
      heroImage="images/Header_Background.jpeg"
      features={features}
      mainContent={mainContent}
      systems={systems}
      applications={applications}
      ctaTitle="Su Basınç Probleminizi Çözelim"
      ctaDescription="Binanızın ihtiyacına uygun su basınçlandırma sistemi için ücretsiz keşif hizmeti."
      ctaButtonText="Ücretsiz Keşif Talep Et"
      gradientColors="from-blue-600 to-cyan-600"
    />
  );
};