import React from 'react';
import { Zap, Settings, Shield, TrendingUp, Award } from 'lucide-react';
import { ServicePageTemplate } from '../components/ServicePageTemplate';

const features = [
  {
    icon: Zap,
    title: 'Enerji Verimliliği',
    description: 'Modern klima sistemleri ile enerji tüketimini %20-40 oranında azaltır'
  },
  {
    icon: Settings,
    title: 'Akıllı Kontrol',
    description: 'Mobil uygulama veya panel üzerinden kolay ve hızlı sıcaklık ayarı'
  },
  {
    icon: Shield,
    title: 'Güvenilirlik',
    description: 'Yüksek kaliteli komponentler sayesinde uzun ömür ve dayanıklılık'
  },
  {
    icon: TrendingUp,
    title: 'Yüksek Performans',
    description: 'Hızlı soğutma ve ısıtma ile konforlu ortam sağlar'
  }
];

const applications = [
  {
    icon: Award,
    title: 'Evler',
    description: 'Konutlar için sessiz ve enerji verimli klima çözümleri'
  },
  {
    icon: Award,
    title: 'Ofisler',
    description: 'Çalışma alanlarında optimum sıcaklık ve nem dengesi'
  },
  {
    icon: Award,
    title: 'Ticari Alanlar',
    description: 'Mağaza, restoran ve kafeler için güçlü ve güvenilir iklimlendirme'
  },
  {
    icon: Award,
    title: 'Sanayi ve Fabrikalar',
    description: 'Büyük alanlarda güvenilir sıcaklık ve hava kontrolü'
  }
];

const mainContent = {
  title: 'Klima Teknolojileri Nedir?',
  description: [
    'Modern klima teknolojileri, ortam sıcaklığını kontrol etmek ve enerji tasarrufu sağlamak amacıyla tasarlanmış sistemlerdir.',
    'Split, multi-split ve VRF sistemler gibi farklı teknolojilerle her alan için optimum konfor sağlanabilir.'
  ],
  image: 'images/klimaTeknolojileri.png',
  advantages: [
    'Split, multi-split ve VRF sistem seçenekleri',
    'Enerji tasarruflu ve çevre dostu soğutucu gaz kullanımı',
    'Sessiz çalışma ve yüksek performans',
    'Kolay kurulum ve bakım imkanı',
    'Akıllı kontrol ve uzaktan yönetim',
    'Dayanıklı ve uzun ömürlü komponentler',
    'Hassas sıcaklık ve nem kontrolü',
    'Ticari ve konut projelerine uygun esneklik'
  ]
};

export const ClimateSystemsPage: React.FC = () => {
  return (
    <ServicePageTemplate
      title="Klima Teknolojileri"
      subtitle="Gelişmiş klima teknolojileri ile enerji verimli, konforlu ve güvenilir iklimlendirme çözümleri sunuyoruz."
      heroImage="images/klimateknolojileriHero.png"
      features={features}
      mainContent={mainContent}
      applications={applications}
      ctaTitle="Klima Teknolojileri"
      ctaDescription="Projeniz için en uygun klima çözümünü belirlemek üzere uzman ekibimizle hemen iletişime geçebilirsiniz."
      ctaButtonText="Hemen İletişime Geçin"
      gradientColors="from-green-600 to-green-600"
    />
  );
};
