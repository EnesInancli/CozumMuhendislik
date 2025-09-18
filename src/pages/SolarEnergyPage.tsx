import React from 'react';
import { Sun, Zap, Leaf, TrendingDown, Award } from 'lucide-react';
import { ServicePageTemplate } from '../components/ServicePageTemplate';

const features = [
  {
    icon: Sun,
    title: 'Güneş Enerjisi',
    description: 'Sınırsız ve ücretsiz güneş enerjisinden yararlanın'
  },
  {
    icon: Zap,
    title: 'Elektrik Üretimi',
    description: 'Kendi elektriğinizi üretin, faturalarınızı sıfırlayın'
  },
  {
    icon: Leaf,
    title: 'Çevre Dostu',
    description: 'Karbon ayak izinizi azaltın, doğayı koruyun'
  },
  {
    icon: TrendingDown,
    title: 'Maliyet Tasarrufu',
    description: '%90\'a varan elektrik faturası tasarrufu'
  }
];

const systems = [
  {
    name: 'Çatı Üstü GES',
    description: 'Konut ve işyerleri için çatı montajlı sistemler',
    features: [
      '5-50 kW kapasiteler',
      'Kolay kurulum',
      'Hızlı geri ödeme',
      '25 yıl garanti'
    ],
    capacity: '5-50 kW',
    applications: ['Evler', 'Küçük işletmeler', 'Apartmanlar']
  },
  {
    name: 'Arazi GES',
    description: 'Büyük ölçekli güneş enerji santralleri',
    features: [
      '100 kW+ kapasiteler',
      'Yüksek verimlilik',
      'Profesyonel izleme',
      'Uzun vadeli yatırım'
    ],
    capacity: '100+ kW',
    applications: ['Fabrikalar', 'Büyük işletmeler', 'Yatırımcılar']
  },
  {
    name: 'Hibrit Sistemler',
    description: 'Batarya depolamalı güneş enerji sistemleri',
    features: [
      'Enerji depolama',
      'Kesintisiz güç',
      'Akıllı yönetim',
      'Maksimum verim'
    ],
    capacity: '10-100 kW',
    applications: ['Hastaneler', 'Veri merkezleri', 'Kritik tesisler']
  }
];

const applications = [
  {
    icon: Award,
    title: 'Konutlar',
    description: 'Evler için çatı üstü güneş enerji sistemleri'
  },
  {
    icon: Award,
    title: 'Endüstri',
    description: 'Fabrikalar için büyük kapasiteli GES çözümleri'
  },
  {
    icon: Award,
    title: 'Ticari',
    description: 'İşletmeler için enerji tasarrufu çözümleri'
  },
  {
    icon: Award,
    title: 'Tarım',
    description: 'Tarımsal sulama için güneş enerjisi sistemleri'
  }
];

const mainContent = {
  title: 'Güneş Enerji Sistemleri Nasıl Çalışır?',
  description: [
    'Güneş enerji sistemleri, güneş panelleri aracılığıyla güneş ışığını elektrik enerjisine dönüştürür.',
    'Üretilen elektrik doğrudan kullanılabilir veya şebekeye satılabilir. Fazla enerji depolanarak gece kullanımı sağlanabilir.'
  ],
  image: 'images/Header_Background.jpeg',
  advantages: [
    '25 yıl sistem ömrü',
    '%90 elektrik tasarrufu',
    'Çevre dostu teknoloji',
    'Devlet teşvikleri',
    'Hızlı geri ödeme',
    'Minimal bakım',
    'Emlak değeri artışı',
    'Enerji bağımsızlığı'
  ]
};

export const SolarEnergyPage: React.FC = () => {
  return (
    <ServicePageTemplate
      title="Güneş Enerji Sistemleri (GES)"
      subtitle="Güneş enerjisi ile elektrik faturalarınızı sıfırlayın, çevreyi koruyun ve enerji bağımsızlığınızı kazanın."
      heroImage="images/Header_Background.jpeg"
      features={features}
      mainContent={mainContent}
      systems={systems}
      applications={applications}
      ctaTitle="Güneş Enerjisi ile Geleceğe Yatırım Yapın"
      ctaDescription="Ücretsiz keşif ve fizibilite analizi ile size en uygun GES çözümünü belirleyelim."
      ctaButtonText="Ücretsiz GES Analizi"
      gradientColors="from-yellow-500 to-orange-500"
    />
  );
};