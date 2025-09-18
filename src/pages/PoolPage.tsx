import React from 'react';
import { Droplets, Waves, Shield, RefreshCw, Award } from 'lucide-react';
import { ServicePageTemplate } from '../components/ServicePageTemplate';

const features = [
  {
    icon: Droplets,
    title: 'Temiz Su Sirkülasyonu',
    description: 'Sürekli döngüyle hijyenik havuz deneyimi.'
  },
  {
    icon: Shield,
    title: 'Güvenli Sistemler',
    description: 'Otomatik kontrol ve su kalitesi izleme çözümleri.'
  },
  {
    icon: RefreshCw,
    title: 'Enerji Verimliliği',
    description: 'Verimli motor ve filtre sistemleri ile düşük enerji tüketimi.'
  },
  {
    icon: Waves,
    title: 'Kolay Bakım',
    description: 'Basit erişim ve bakım dostu ekipman yerleşimi.'
  }
];

const systems = [
  {
    name: 'Skimmer Sistemleri',
    description: 'Küçük ve orta ölçekli havuzlar için ekonomik çözüm',
    features: [
      'Yüzeyden su alma (skimmer)',
      'Kompakt yapı',
      'Düşük maliyet',
      'Kolay bakım'
    ],
    capacity: 'Villa / müstakil havuzlar',
    applications: ['Villalar', 'Müstakil Evler', 'Küçük Oteller']
  },
  {
    name: 'Taşmalı Sistemler',
    description: 'Estetik ve sürekli yüzey temizliği sağlayan sistem',
    features: [
      'Su taşma kanalları',
      'Yüksek temizlik kapasitesi',
      'Lüks görünüm',
      'Sabit su seviyesi'
    ],
    capacity: 'Otel, site, büyük konut projeleri',
    applications: ['Oteller', 'Siteler', 'Büyük Projeler']
  },
  {
    name: 'Yüzme Havuzu Ekipmanları',
    description: 'Pompa, filtre, aydınlatma, kimyasal dozajlama sistemleri',
    features: [
      'Uzun ömürlü ekipman',
      'Dijital kontrol paneli',
      'Filtrasyon sistemleri',
      'LED aydınlatmalar'
    ],
    capacity: 'Tüm tipte havuzlar için',
    applications: ['Tüm Havuz Tipleri']
  }
];

const applications = [
  {
    icon: Award,
    title: 'Villalar',
    description: 'Kişisel kullanım için estetik ve kompakt havuz çözümleri'
  },
  {
    icon: Award,
    title: 'Oteller',
    description: 'Profesyonel misafir deneyimi için lüks sistemler'
  },
  {
    icon: Award,
    title: 'Spor Salonları',
    description: 'Yarı olimpik veya tam olimpik havuz ihtiyaçları'
  },
  {
    icon: Award,
    title: 'Sosyal Tesisler',
    description: 'Toplu yaşam alanlarında ortak kullanım çözümleri'
  }
];

const mainContent = {
  title: 'Havuz Sistemleri Nasıl Çalışır?',
  description: [
    'Modern havuz sistemleri, su sirkülasyonu, filtrasyon, kimyasal dengeleme ve dezenfeksiyon süreçlerini otomatik olarak yönetir.',
    'Akıllı kontrol sistemleri ile su kalitesi sürekli izlenir ve optimal seviyede tutulur.'
  ],
  image: 'images/Header_Background.jpeg',
  advantages: [
    'Otomatik su temizleme',
    'Kimyasal dengeleme',
    'Enerji verimli pompalar',
    'LED aydınlatma sistemleri',
    'Uzaktan kontrol',
    'Güvenlik sistemleri',
    'Kolay bakım',
    'Uzun ömürlü ekipmanlar'
  ]
};

export const PoolPage: React.FC = () => {
  return (
    <ServicePageTemplate
      title="Havuz Sistemleri"
      subtitle="Özel ve ticari havuzlar için hijyenik, enerji verimli ve güvenli sistem çözümleri sunuyoruz."
      heroImage="images/Header_Background.jpeg"
      features={features}
      mainContent={mainContent}
      systems={systems}
      applications={applications}
      ctaTitle="Hayalinizdeki Havuzu Kurmamıza İzin Verin"
      ctaDescription="İster özel villa, ister büyük ölçekli tesis... Size özel havuz çözümü için bizimle iletişime geçin."
      ctaButtonText="Ücretsiz Keşif Talep Et"
      gradientColors="from-blue-600 to-cyan-600"
    />
  );
};