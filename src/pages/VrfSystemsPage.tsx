import React from 'react';
import { Zap, Settings, Shield, TrendingUp, Award } from 'lucide-react';
import { ServicePageTemplate } from '../components/ServicePageTemplate';

const features = [
  {
    icon: Zap,
    title: 'Enerji Verimliliği',
    description: '%30-50 oranında enerji tasarrufu sağlar'
  },
  {
    icon: Settings,
    title: 'Bireysel Kontrol',
    description: 'Her oda için ayrı sıcaklık kontrolü'
  },
  {
    icon: Shield,
    title: 'Güvenilirlik',
    description: 'Uzun ömürlü ve dayanıklı sistem'
  },
  {
    icon: TrendingUp,
    title: 'Performans',
    description: 'Yüksek performans ve sessiz çalışma'
  }
];


const applications = [
  {
    icon: Award,
    title: 'Ofis Binaları',
    description: 'Büyük ofis kompleksleri ve iş merkezleri için ideal çözüm'
  },
  {
    icon: Award,
    title: 'Otel ve Restoranlar',
    description: 'Konaklama ve yiyecek sektörü için konforlu ortam'
  },
  {
    icon: Award,
    title: 'Alışveriş Merkezleri',
    description: 'Geniş alanlı ticari mekanlar için verimli çözüm'
  },
  {
    icon: Award,
    title: 'Hastaneler',
    description: 'Sağlık sektörü için güvenilir iklimlendirme'
  }
];

const mainContent = {
  title: 'VRF Teknolojisi Nedir?',
  description: [
    'VRF (Variable Refrigerant Flow) sistemleri, değişken soğutucu akışkan teknolojisi kullanarak her iç üniteye ihtiyacı kadar soğutucu gönderen akıllı klima sistemleridir.',
    'Bu teknoloji sayesinde enerji tüketimi optimize edilir ve her alan için bireysel konfor sağlanır.'
  ],
  image: 'images/VrfSistemToshiba.png',
  advantages: [
    'Tek dış ünite ile çoklu iç ünite kontrolü',
    'Değişken soğutucu akışkan teknolojisi',
    'Düşük işletme maliyeti',
    'Kolay kurulum ve bakım',
    'Çevre dostu R32 soğutucu gaz',
    'Akıllı kontrol sistemleri',
    'Sessiz çalışma özelliği',
    'Uzaktan kontrol imkanı'
  ]
};

export const VrfSystemsPage: React.FC = () => {
  return (
    <ServicePageTemplate
      title="VRF Sistemleri"
      subtitle="Variable Refrigerant Flow (VRF) teknolojisi ile enerji verimli, esnek ve konforlu klima çözümleri sunuyoruz."
      heroImage="images/vrfsistem.png"
      features={features}
      mainContent={mainContent}
      applications={applications}
      ctaTitle="VRF Sistemi"
      ctaDescription="Projeniz için en uygun VRF çözümünü belirlemek üzere uzman ekibimizle hemen iletişime geçebilirsiniz."
      ctaButtonText="Hemen İletişime Geçin"
      gradientColors="from-blue-600 to-blue-600"
    />
  );
};