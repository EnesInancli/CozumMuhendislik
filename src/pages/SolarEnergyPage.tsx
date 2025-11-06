import React from 'react';
import { Sun, Battery, Zap, Shield, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ServicePageTemplate } from '../components/ServicePageTemplate';

export const SolarEnergyPage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: 'Güneş Enerji Sistemleri',
      subtitle: 'Yenilenebilir enerji ile çevre dostu ve ekonomik elektrik üretimi sağlıyoruz.',
      features: [
        { icon: Sun, title: 'Temiz Enerji', description: 'Çevre dostu elektrik üretimi' },
        { icon: Battery, title: 'Enerji Depolama', description: 'Akü sistemleri ile kesintisiz güç' },
        { icon: Zap, title: 'Tasarruf', description: 'Elektrik faturalarında %70\'e kadar azalma' },
        { icon: Shield, title: 'Uzun Ömür', description: '25 yıl garanti ile güvenli yatırım' }
      ],
      systems: [
        {
          name: 'On-Grid (Şebeke Bağlantılı)',
          description: 'Elektrik şebekesine bağlı sistemler',
          features: ['Fatura iptali', 'Net sayaç', 'Yüksek verim', 'Kolay kurulum', 'Hızlı geri ödeme'],
          applications: ['Evler', 'İşletmeler', 'Fabrikalar']
        },
        {
          name: 'Off-Grid (Şebekeden Bağımsız)',
          description: 'Akü sistemli bağımsız çözümler',
          features: ['Akü depolama', 'Kesintisiz güç', 'Tam bağımsızlık', 'Uzaktan izleme', 'Hibrit sistem'],
          applications: ['Dağ Evleri', 'Çiftlikler', 'Mobil Sistemler']
        }
      ],
      applications: [
        { icon: Award, title: 'Konutlar', description: 'Evler için ekonomik güneş enerjisi' },
        { icon: Award, title: 'İşletmeler', description: 'Ticari tesisler için büyük tasarruf' },
        { icon: Award, title: 'Fabrikalar', description: 'Endüstriyel üretimde enerji bağımsızlığı' },
        { icon: Award, title: 'Tarım', description: 'Sulama ve çiftlik otomasyon sistemleri' }
      ],
      mainContent: {
        title: 'Güneş Enerjisi Nedir?',
        description: [
          'Güneş enerjisi sistemleri, güneş ışığını elektriğe dönüştürerek temiz enerji üretir.',
          'Modern fotovoltaik paneller ile uzun ömürlü ve ekonomik enerji elde edilir.'
        ],
        advantages: [
          'Yüksek verimli fotovoltaik paneller',
          'Akıllı inverter sistemleri',
          'Enerji depolama çözümleri',
          'Uzaktan izleme ve kontrol',
          '25 yıl panel garantisi',
          'Hızlı kurulum ve devreye alma',
          'Profesyonel proje ve danışmanlık',
          'Bakım ve servis desteği'
        ]
      },
      ctaTitle: 'Güneş Enerjisi Çözümleri',
      ctaDescription: 'Temiz enerji ile elektrik faturalarınızı düşürün.',
      ctaButtonText: 'Hemen İletişime Geçin'
    },
    en: {
      title: 'Solar Energy Systems',
      subtitle: 'We provide environmentally friendly and economical electricity production with renewable energy.',
      features: [
        { icon: Sun, title: 'Clean Energy', description: 'Environmentally friendly electricity production' },
        { icon: Battery, title: 'Energy Storage', description: 'Uninterrupted power with battery systems' },
        { icon: Zap, title: 'Savings', description: 'Up to 70% reduction in electricity bills' },
        { icon: Shield, title: 'Long Life', description: 'Safe investment with 25 year warranty' }
      ],
      systems: [
        {
          name: 'On-Grid (Grid Connected)',
          description: 'Systems connected to the electricity grid',
          features: ['Bill cancellation', 'Net metering', 'High efficiency', 'Easy installation', 'Fast payback'],
          applications: ['Homes', 'Businesses', 'Factories']
        },
        {
          name: 'Off-Grid (Independent)',
          description: 'Independent solutions with battery system',
          features: ['Battery storage', 'Uninterrupted power', 'Full independence', 'Remote monitoring', 'Hybrid system'],
          applications: ['Mountain Houses', 'Farms', 'Mobile Systems']
        }
      ],
      applications: [
        { icon: Award, title: 'Residences', description: 'Economical solar energy for homes' },
        { icon: Award, title: 'Businesses', description: 'Great savings for commercial facilities' },
        { icon: Award, title: 'Factories', description: 'Energy independence in industrial production' },
        { icon: Award, title: 'Agriculture', description: 'Irrigation and farm automation systems' }
      ],
      mainContent: {
        title: 'What is Solar Energy?',
        description: [
          'Solar energy systems produce clean energy by converting sunlight into electricity.',
          'Long-lasting and economical energy is obtained with modern photovoltaic panels.'
        ],
        advantages: [
          'High efficiency photovoltaic panels',
          'Smart inverter systems',
          'Energy storage solutions',
          'Remote monitoring and control',
          '25 year panel warranty',
          'Fast installation and commissioning',
          'Professional project and consultancy',
          'Maintenance and service support'
        ]
      },
      ctaTitle: 'Solar Energy Solutions',
      ctaDescription: 'Reduce your electricity bills with clean energy.',
      ctaButtonText: 'Contact Us Now'
    }
  };

  const data = content[language];

  return (
    <ServicePageTemplate
      title={data.title}
      subtitle={data.subtitle}
      heroImage="images/solarHero.png"
      features={data.features}
      mainContent={data.mainContent}
      systems={data.systems}
      applications={data.applications}
      ctaTitle={data.ctaTitle}
      ctaDescription={data.ctaDescription}
      ctaButtonText={data.ctaButtonText}
      gradientColors="from-yellow-500 to-orange-500"
    />
  );
};
