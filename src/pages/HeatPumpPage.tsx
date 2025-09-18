import React from 'react';
import { Thermometer, Leaf, Zap, Shield, Award } from 'lucide-react';
import { ServicePageTemplate } from '../components/ServicePageTemplate';

const features = [
  {
    icon: Thermometer,
    title: 'Verimli Isıtma',
    description: 'Düşük sıcaklıklarda bile yüksek performans'
  },
  {
    icon: Leaf,
    title: 'Çevre Dostu',
    description: 'Düşük karbon emisyonu ile çevre koruma'
  },
  {
    icon: Zap,
    title: 'Enerji Tasarrufu',
    description: '%75\'e varan enerji tasarrufu'
  },
  {
    icon: Shield,
    title: 'Güvenilir',
    description: 'Uzun ömürlü ve dayanıklı sistem'
  }
];

const systems = [
  {
    name: 'Hava Kaynaklı Isı Pompası',
    description: 'Dış havadan enerji çekerek ısıtma ve soğutma sağlar',
    features: [
      'Kolay kurulum',
      'Düşük yatırım maliyeti',
      'Yıl boyunca kullanım',
      'Bakım kolaylığı'
    ],
    capacity: '5-50 kW',
    applications: ['Evler', 'Küçük Ofisler', 'Villalar']
  },
  {
    name: 'Su Kaynaklı Isı Pompası',
    description: 'Yeraltı suyu veya yüzey suyundan enerji çeker',
    features: [
      'Yüksek verimlilik',
      'Sabit performans',
      'Uzun ömür',
      'Sessiz çalışma'
    ],
    capacity: '10-100 kW',
    applications: ['Büyük Binalar', 'Oteller', 'Endüstri']
  },
  {
    name: 'Toprak Kaynaklı Isı Pompası',
    description: 'Toprağın sabit sıcaklığından yararlanır',
    features: [
      'En yüksek verim',
      'Minimum işletme maliyeti',
      'Çevre dostu',
      '25+ yıl ömür'
    ],
    capacity: '15-200 kW',
    applications: ['Lüks Konutlar', 'Büyük Projeler', 'Kampüsler']
  }
];

const applications = [
  {
    icon: Award,
    title: 'Konutlar',
    description: 'Villa ve apartman daireleri'
  },
  {
    icon: Award,
    title: 'Ofisler',
    description: 'İş yerleri ve büro binaları'
  },
  {
    icon: Award,
    title: 'Oteller',
    description: 'Konaklama tesisleri'
  },
  {
    icon: Award,
    title: 'Endüstri',
    description: 'Fabrika ve üretim tesisleri'
  }
];

const mainContent = {
  title: 'Isı Pompası Nasıl Çalışır?',
  description: [
    'Isı pompası, doğadaki mevcut ısıyı (hava, su, toprak) alarak binaya transfer eden çevre dostu bir sistemdir.',
    'Elektrik enerjisinin sadece %25\'ini kullanarak, %75\'ini doğadan ücretsiz olarak elde eder. Bu sayede yüksek verimlilik sağlar.'
  ],
  image: 'images/IsiPompalari.jpg',
  advantages: [
    'Hem ısıtma hem soğutma özelliği',
    '%75 enerji tasarrufu',
    'Çevre dostu teknoloji',
    'Düşük işletme maliyeti',
    'Uzun sistem ömrü',
    'Sessiz çalışma',
    'Otomatik kontrol',
    'Minimum bakım gereksinimi'
  ]
};

export const HeatPumpPage: React.FC = () => {
  return (
    <ServicePageTemplate
      title="Isı Pompası Sistemleri"
      subtitle="Çevre dostu ve enerji verimli ısı pompası teknolojisi ile hem ısıtma hem de soğutma ihtiyaçlarınızı karşılayın."
      heroImage="images/IsiPompalari.jpg"
      features={features}
      mainContent={mainContent}
      systems={systems}
      applications={applications}
      ctaTitle="Isı Pompası ile Tasarruf Edin"
      ctaDescription="Çevre dostu ısı pompası sistemleri ile hem doğayı koruyun hem de enerji faturalarınızı düşürün."
      ctaButtonText="Ücretsiz Analiz Talep Et"
      gradientColors="from-green-600 to-blue-600"
    />
  );
};