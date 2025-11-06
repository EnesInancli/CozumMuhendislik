import React from 'react';
import { Thermometer, Leaf, Zap, Shield, Award } from 'lucide-react';
import { ServicePageTemplate } from '../components/ServicePageTemplate';
import { useLanguage } from '../contexts/LanguageContext';

export const HeatPumpPage: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    tr: {
      title: 'Isı Pompaları',
      subtitle: 'Doğayı koruyarak tasarruf edin! Çevre dostu ısı pompası sistemleri ile enerji faturalarınızı %70 azaltın.',
      features: [
        { icon: Thermometer, title: 'Verimli Isıtma', description: 'Az enerji ile yüksek ısınma performansı' },
        { icon: Leaf, title: 'Çevre Dostu', description: 'Düşük karbon emisyonu ile çevreyi korur' },
        { icon: Zap, title: 'Enerji Tasarrufu', description: 'Klasik sistemlere göre %70 daha az enerji' },
        { icon: Shield, title: 'Güvenilir', description: 'Uzun ömürlü ve dayanıklı sistemler' }
      ],
      systems: [
        {
          name: 'Havadan Suya Isı Pompası',
          description: 'Dış havadan enerji çekerek ısıtma ve soğutma yapar',
          features: [
            'Kolay kurulum ve bakım',
            'Düşük yatırım maliyeti',
            'Yüksek verimlilik (COP 4.0+)',
            'Sessiz çalışma',
            'Kompakt tasarım'
          ],
          capacity: '5-50 kW',
          applications: ['Konutlar', 'Ofisler']
        },
        {
          name: 'Sudan Suya Isı Pompası',
          description: 'Yeraltı suyu veya yüzey suyundan enerji çeker',
          features: [
            'Çok yüksek verimlilik (COP 5.0+)',
            'Dört mevsim stabil performans',
            'Uzun ömürlü sistemler',
            'Düşük işletme maliyeti',
            'Sessiz çalışma'
          ],
          capacity: '10-100 kW',
          applications: ['Oteller', 'Endüstri']
        },
        {
          name: 'Topraktan Suya Isı Pompası',
          description: 'Sabit toprak sıcaklığından faydalanır',
          features: [
            'En yüksek verimlilik (COP 5.5+)',
            'Minimum işletme maliyeti',
            'Uzun yıllarca sorunsuz çalışma',
            'Tüm mevsimlerde yüksek performans',
            'Çevre dostu sistem'
          ],
          capacity: '15-200 kW',
          applications: ['Konutlar']
        }
      ],
      applications: [
        { icon: Award, title: 'Konutlar', description: 'Villalar ve apartmanlar' },
        { icon: Award, title: 'Ofisler', description: 'İşyerleri ve ofis binaları' },
        { icon: Award, title: 'Oteller', description: 'Konaklama tesisleri' },
        { icon: Award, title: 'Endüstri', description: 'Fabrika ve üretim tesisleri' }
      ],
      mainContent: {
        title: 'Isı Pompası Teknolojisi',
        description: [
          'Isı pompaları, doğadaki ücretsiz enerjiyi kullanarak verimli ısıtma ve soğutma sağlar.',
          'Modern ısı pompası sistemleri ile %70\'e varan enerji tasarrufu elde edilir.'
        ],
        image: 'images/IsiPompalari.jpg',
        advantages: [
          'Düşük karbon emisyonu',
          '%70\'e varan enerji tasarrufu',
          'Yaz-kış kullanım (ısıtma+soğutma)',
          'Uzun ömürlü ve güvenilir',
          'Sessiz çalışma teknolojisi',
          'Kolay kurulum ve bakım',
          'Akıllı kontrol sistemleri',
          'Devlet teşviklerinden yararlanma'
        ]
      },
      ctaTitle: 'Isı Pompası ile Tasarruf Edin',
      ctaDescription: 'Çevre dostu ısı pompası sistemleri ile doğayı koruyun ve enerji faturalarınızı azaltın.',
      ctaButtonText: 'Ücretsiz Analiz İsteyin'
    },
    en: {
      title: 'Heat Pumps',
      subtitle: 'Save while protecting nature! Reduce your energy bills by 70% with eco-friendly heat pump systems.',
      features: [
        { icon: Thermometer, title: 'Efficient Heating', description: 'High heating performance with low energy' },
        { icon: Leaf, title: 'Eco-Friendly', description: 'Protects the environment with low carbon emissions' },
        { icon: Zap, title: 'Energy Saving', description: '70% less energy than traditional systems' },
        { icon: Shield, title: 'Reliable', description: 'Long-lasting and durable systems' }
      ],
      systems: [
        {
          name: 'Air to Water Heat Pump',
          description: 'Heats and cools by drawing energy from outside air',
          features: [
            'Easy installation and maintenance',
            'Low investment cost',
            'High efficiency (COP 4.0+)',
            'Silent operation',
            'Compact design'
          ],
          capacity: '5-50 kW',
          applications: ['Residences', 'Offices']
        },
        {
          name: 'Water to Water Heat Pump',
          description: 'Draws energy from groundwater or surface water',
          features: [
            'Very high efficiency (COP 5.0+)',
            'Stable performance all year round',
            'Long-lasting systems',
            'Low operating costs',
            'Silent operation'
          ],
          capacity: '10-100 kW',
          applications: ['Hotels', 'Industry']
        },
        {
          name: 'Ground to Water Heat Pump',
          description: 'Benefits from constant ground temperature',
          features: [
            'Highest efficiency (COP 5.5+)',
            'Minimum operating cost',
            'Trouble-free operation for years',
            'High performance in all seasons',
            'Eco-friendly system'
          ],
          capacity: '15-200 kW',
          applications: ['Residences']
        }
      ],
      applications: [
        { icon: Award, title: 'Residences', description: 'Villas and apartments' },
        { icon: Award, title: 'Offices', description: 'Workplaces and office buildings' },
        { icon: Award, title: 'Hotels', description: 'Accommodation facilities' },
        { icon: Award, title: 'Industry', description: 'Factory and production facilities' }
      ],
      mainContent: {
        title: 'Heat Pump Technology',
        description: [
          'Heat pumps provide efficient heating and cooling using free energy from nature.',
          'Energy savings of up to 70% are achieved with modern heat pump systems.'
        ],
        image: 'images/IsiPompalari.jpg',
        advantages: [
          'Low carbon emissions',
          'Energy savings up to 70%',
          'Summer-winter use (heating+cooling)',
          'Long-lasting and reliable',
          'Silent operation technology',
          'Easy installation and maintenance',
          'Smart control systems',
          'Benefit from government incentives'
        ]
      },
      ctaTitle: 'Save with Heat Pump',
      ctaDescription: 'Protect nature and reduce your energy bills with eco-friendly heat pump systems.',
      ctaButtonText: 'Request Free Analysis'
    }
  };

  const data = content[language];

  return (
    <ServicePageTemplate
      title={data.title}
      subtitle={data.subtitle}
      heroImage="images/IsiPompalari.jpg"
      features={data.features}
      mainContent={data.mainContent}
      systems={data.systems}
      applications={data.applications}
      ctaTitle={data.ctaTitle}
      ctaDescription={data.ctaDescription}
      ctaButtonText={data.ctaButtonText}
      gradientColors="from-green-600 to-blue-600"
    />
  );
};
