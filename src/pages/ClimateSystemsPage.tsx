import React from 'react';
import { Zap, Settings, Shield, TrendingUp, Award } from 'lucide-react';
import { ServicePageTemplate } from '../components/ServicePageTemplate';

const features = [
  {
    icon: Zap,
    title: 'Enerji Tasarrufu',
    description: 'Klimalarımız %30-50 oranında enerji tasarrufu sağlar'
  },
  {
    icon: Settings,
    title: 'Bireysel Ayarlar',
    description: 'Her oda için sıcaklık ve fan hızı kontrolü'
  },
  {
    icon: Shield,
    title: 'Güvenilir Sistem',
    description: 'Uzun ömürlü ve dayanıklı klima teknolojisi'
  },
  {
    icon: TrendingUp,
    title: 'Yüksek Performans',
    description: 'Sessiz ve güçlü çalışma performansı'
  }
];

const systems = [
  {
    name: 'Split Klima Sistemleri',
    description: 'Tek oda için ideal çözüm',
    features: [
      'Kolay kurulum',
      'Ekonomik fiyat',
      'Sessiz çalışma',
      'İnverter teknoloji'
    ],
    capacity: '9.000-24.000 BTU',
    applications: ['Evler', 'Küçük Ofisler', 'Mağazalar']
  },
  {
    name: 'Multi Split Sistemler',
    description: 'Çoklu oda klimatizasyonu',
    features: [
      'Tek dış ünite',
      'Çoklu iç ünite',
      'Bireysel kontrol',
      'Enerji tasarrufu'
    ],
    capacity: '18.000-48.000 BTU',
    applications: ['Apartmanlar', 'Ofisler', 'Villalar']
  },
  {
    name: 'Kaset Tipi Klimalar',
    description: 'Tavan montajlı estetik çözüm',
    features: [
      'Tavan montajı',
      '4 yönlü üfleme',
      'Estetik tasarım',
      'Eşit hava dağılımı'
    ],
    capacity: '18.000-60.000 BTU',
    applications: ['Ofisler', 'Mağazalar', 'Restoranlar']
  }
];

const applications = [
  {
    icon: Award,
    title: 'Evler ve Daireler',
    description: 'Konforlu ve enerji tasarruflu iklimlendirme çözümleri'
  },
  {
    icon: Award,
    title: 'Ofis ve İş Yerleri',
    description: 'Çalışma ortamlarında konforlu ve verimli iklimlendirme'
  },
  {
    icon: Award,
    title: 'Mağaza ve Ticari Alanlar',
    description: 'Geniş alanlarda verimli ve sessiz klima çözümleri'
  },
  {
    icon: Award,
    title: 'Restoranlar',
    description: 'Yiyecek sektörü için özel klima çözümleri'
  }
];

const mainContent = {
  title: 'Klima Teknolojisi Nedir?',
  description: [
    'Modern klima sistemleri, enerji verimliliği ve kullanıcı konforunu ön planda tutarak iç mekanları optimum sıcaklıkta tutar.',
    'Akıllı kontrol sistemleri ile bireysel ihtiyaçlara göre ayarlanabilir ve çevre dostu çözümler sunar.'
  ],
  image: 'images/KlimaAi.png',
  advantages: [
    'Farklı kapasite seçenekleri',
    'Akıllı termostat ve kontrol sistemleri',
    'Düşük enerji tüketimi',
    'Kolay kurulum ve bakım',
    'Çevre dostu soğutucu gaz',
    'Uzaktan kontrol imkanı',
    'Sessiz çalışma özelliği',
    'Uzun ömürlü dayanıklı üniteler'
  ]
};

export const ClimateSystemsPage: React.FC = () => {
  return (
    <ServicePageTemplate
      title="Klima Teknolojileri"
      subtitle="Modern klima teknolojisi ile enerji verimli, konforlu ve kullanıcı dostu iklimlendirme çözümleri sunuyoruz."
      heroImage="images/KlimaAi.png"
      features={features}
      mainContent={mainContent}
      systems={systems}
      applications={applications}
      ctaTitle="Klima Teknolojisi"
      ctaDescription="Projeniz için en uygun klima çözümünü belirlemek üzere uzman ekibimizle hemen iletişime geçebilirsiniz."
      ctaButtonText="Hemen İletişime Geçin"
      gradientColors="from-blue-600 to-blue-700"
    />
  );
};