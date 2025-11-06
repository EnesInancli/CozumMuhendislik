import React from 'react';
import { Zap, Settings, Shield, TrendingUp, Award } from 'lucide-react';
import { ServicePageTemplate } from '../components/ServicePageTemplate';
import { useLanguage } from '../contexts/LanguageContext';

export const ClimateSystemsPage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: 'Klima Teknolojileri',
      subtitle: 'Gelişmiş klima teknolojileri ile enerji verimli, konforlu ve güvenilir iklimlendirme çözümleri sunuyoruz.',
      features: [
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
      ],
      applications: [
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
      ],
      mainContent: {
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
      },
      ctaTitle: 'Klima Teknolojileri',
      ctaDescription: 'Projeniz için en uygun klima çözümünü belirlemek üzere uzman ekibimizle hemen iletişime geçebilirsiniz.',
      ctaButtonText: 'Hemen İletişime Geçin'
    },
    en: {
      title: 'Climate Technologies',
      subtitle: 'We offer energy-efficient, comfortable, and reliable climate control solutions with advanced air conditioning technologies.',
      features: [
        {
          icon: Zap,
          title: 'Energy Efficiency',
          description: 'Reduces energy consumption by 20-40% with modern climate systems'
        },
        {
          icon: Settings,
          title: 'Smart Control',
          description: 'Easy and fast temperature adjustment via mobile app or panel'
        },
        {
          icon: Shield,
          title: 'Reliability',
          description: 'Long life and durability thanks to high quality components'
        },
        {
          icon: TrendingUp,
          title: 'High Performance',
          description: 'Provides comfortable environment with fast cooling and heating'
        }
      ],
      applications: [
        {
          icon: Award,
          title: 'Homes',
          description: 'Silent and energy-efficient climate solutions for residences'
        },
        {
          icon: Award,
          title: 'Offices',
          description: 'Optimum temperature and humidity balance in work areas'
        },
        {
          icon: Award,
          title: 'Commercial Areas',
          description: 'Powerful and reliable air conditioning for stores, restaurants and cafes'
        },
        {
          icon: Award,
          title: 'Industry and Factories',
          description: 'Reliable temperature and air control in large areas'
        }
      ],
      mainContent: {
        title: 'What is Climate Technology?',
        description: [
          'Modern climate technologies are systems designed to control ambient temperature and provide energy savings.',
          'Optimum comfort can be provided for every space with different technologies such as split, multi-split and VRF systems.'
        ],
        image: 'images/klimaTeknolojileri.png',
        advantages: [
          'Split, multi-split and VRF system options',
          'Energy-saving and environmentally friendly refrigerant gas usage',
          'Silent operation and high performance',
          'Easy installation and maintenance',
          'Smart control and remote management',
          'Durable and long-lasting components',
          'Precise temperature and humidity control',
          'Flexibility for commercial and residential projects'
        ]
      },
      ctaTitle: 'Climate Technologies',
      ctaDescription: 'Contact our expert team immediately to determine the most suitable climate solution for your project.',
      ctaButtonText: 'Contact Us Now'
    }
  };

  const data = content[language];

  return (
    <ServicePageTemplate
      title={data.title}
      subtitle={data.subtitle}
      heroImage="images/klimateknolojileriHero.png"
      features={data.features}
      mainContent={data.mainContent}
      applications={data.applications}
      ctaTitle={data.ctaTitle}
      ctaDescription={data.ctaDescription}
      ctaButtonText={data.ctaButtonText}
      gradientColors="from-green-600 to-green-600"
    />
  );
};
