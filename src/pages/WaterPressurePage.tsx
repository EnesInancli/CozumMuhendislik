import React from 'react';
import { Gauge, Zap, Shield, Settings, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ServicePageTemplate } from '../components/ServicePageTemplate';

export const WaterPressurePage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: 'Su Basınçlandırma Sistemleri',
      subtitle: 'Apartman, site ve endüstriyel tesisler için güvenilir su basınçlandırma çözümleri sunuyoruz.',
      features: [
        { icon: Gauge, title: 'Sabit Basınç', description: 'Tüm katlarda eşit su basıncı garantisi' },
        { icon: Zap, title: 'Enerji Tasarrufu', description: 'İnverter teknolojisi ile %40 enerji tasarrufu' },
        { icon: Shield, title: 'Güvenilir Sistem', description: 'Otomatik kontrol ve koruma sistemleri' },
        { icon: Settings, title: 'Kolay Bakım', description: 'Minimal bakım gereksinimleri' }
      ],
      systems: [
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
      ],
      applications: [
        { icon: Award, title: 'Apartmanlar', description: 'Çok katlı konut binaları için su basınçlandırma' },
        { icon: Award, title: 'Siteler', description: 'Büyük konut kompleksleri için merkezi sistem' },
        { icon: Award, title: 'Oteller', description: 'Otel ve tatil köyleri için kesintisiz su temini' },
        { icon: Award, title: 'Endüstri', description: 'Fabrika ve üretim tesisleri için güçlü sistemler' }
      ],
      mainContent: {
        title: 'Su Basınçlandırma Nedir?',
        description: [
          'Su basınçlandırma sistemleri, binaların her katında yeterli su basıncının sağlanması için kullanılır.',
          'Modern inverter teknolojisi ile enerji tasarrufu ve sabit basınç garantisi sağlar.'
        ],
        advantages: [
          'Tüm katlarda sabit su basıncı',
          'İnverter teknolojisi ile enerji tasarrufu',
          'Otomatik çalışma ve kontrol',
          'Sessiz ve titreşimsiz çalışma',
          'Uzun ömürlü ve dayanıklı',
          'Kolay bakım ve servis',
          'Yedekli pompa seçeneği',
          'Uzaktan izleme imkanı'
        ]
      },
      ctaTitle: 'Su Basınçlandırma Çözümleri',
      ctaDescription: 'Binanız için en uygun su basınçlandırma sistemini birlikte belirleyelim.',
      ctaButtonText: 'Ücretsiz Keşif İsteyin'
    },
    en: {
      title: 'Water Pressurization Systems',
      subtitle: 'We offer reliable water pressurization solutions for apartments, complexes and industrial facilities.',
      features: [
        { icon: Gauge, title: 'Constant Pressure', description: 'Equal water pressure guarantee on all floors' },
        { icon: Zap, title: 'Energy Saving', description: '40% energy savings with inverter technology' },
        { icon: Shield, title: 'Reliable System', description: 'Automatic control and protection systems' },
        { icon: Settings, title: 'Easy Maintenance', description: 'Minimal maintenance requirements' }
      ],
      systems: [
        {
          name: 'Hydrophore Systems',
          description: 'Traditional water pressurization solution',
          features: [
            'Operation with pressure tank',
            'Automatic on/off',
            'Economical solution',
            'Easy installation'
          ],
          capacity: '1-50 units',
          applications: ['Apartments', 'Small Complexes', 'Villas']
        },
        {
          name: 'Inverter Systems',
          description: 'Modern variable speed pump systems',
          features: [
            'Constant pressure control',
            'Energy saving',
            'Silent operation',
            'Long life'
          ],
          capacity: '10-200 units',
          applications: ['Large Apartments', 'Complexes', 'Business Centers']
        },
        {
          name: 'Booster Systems',
          description: 'Powerful solution for high-rise buildings',
          features: [
            'Multi-pump system',
            'Redundant operation',
            'High capacity',
            'Automatic control'
          ],
          capacity: '50+ units',
          applications: ['Skyscrapers', 'Large Complexes', 'Industry']
        }
      ],
      applications: [
        { icon: Award, title: 'Apartments', description: 'Water pressurization for multi-story residential buildings' },
        { icon: Award, title: 'Complexes', description: 'Central system for large residential complexes' },
        { icon: Award, title: 'Hotels', description: 'Uninterrupted water supply for hotels and resorts' },
        { icon: Award, title: 'Industry', description: 'Powerful systems for factories and production facilities' }
      ],
      mainContent: {
        title: 'What is Water Pressurization?',
        description: [
          'Water pressurization systems are used to ensure adequate water pressure on every floor of buildings.',
          'With modern inverter technology, it provides energy savings and constant pressure guarantee.'
        ],
        advantages: [
          'Constant water pressure on all floors',
          'Energy savings with inverter technology',
          'Automatic operation and control',
          'Silent and vibration-free operation',
          'Long-lasting and durable',
          'Easy maintenance and service',
          'Redundant pump option',
          'Remote monitoring capability'
        ]
      },
      ctaTitle: 'Water Pressurization Solutions',
      ctaDescription: 'Let\'s determine the most suitable water pressurization system for your building together.',
      ctaButtonText: 'Request Free Survey'
    }
  };

  const data = content[language];

  return (
    <ServicePageTemplate
      title={data.title}
      subtitle={data.subtitle}
      heroImage="images/subasinclandirma.png"
      features={data.features}
      mainContent={data.mainContent}
      systems={data.systems}
      applications={data.applications}
      ctaTitle={data.ctaTitle}
      ctaDescription={data.ctaDescription}
      ctaButtonText={data.ctaButtonText}
      gradientColors="from-blue-600 to-cyan-600"
    />
  );
};
