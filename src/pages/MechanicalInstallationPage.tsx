import React from 'react';
import { Wrench, Settings, Cog, Shield, Award } from 'lucide-react';
import { ServicePageTemplate } from '../components/ServicePageTemplate';

const features = [
  {
    icon: Wrench,
    title: 'Proje Tasarımı',
    description: 'Binanızın ihtiyaçlarına özel mekanik tesisat projeleri hazırlıyoruz'
  },
  {
    icon: Settings,
    title: 'Sistem Kurulumu',
    description: 'Profesyonel ekibimizle kaliteli kurulum hizmeti sunuyoruz'
  },
  {
    icon: Cog,
    title: 'Bakım ve Onarım',
    description: 'Düzenli bakım ve acil onarım hizmetleri ile sistem sürekliliği'
  },
  {
    icon: Shield,
    title: 'Kalite Güvencesi',
    description: 'Tüm işlerimizde kalite standartları ve garanti güvencesi'
  }
];

const systems = [
  {
    name: 'Isıtma Sistemleri',
    description: 'Kombi, kazan, radyatör ve yerden ısıtma sistemleri',
    features: [
      'Kombi kurulumu ve bakımı',
      'Kazan sistemleri',
      'Radyatör montajı',
      'Yerden ısıtma',
      'Sistem optimizasyonu'
    ],
    applications: ['Konutlar', 'Ofisler', 'Oteller']
  },
  {
    name: 'Soğutma Sistemleri',
    description: 'Klima, chiller ve soğutma kulesi sistemleri',
    features: [
      'Merkezi klima sistemleri',
      'Chiller kurulumu',
      'Soğutma kuleleri',
      'Fan coil sistemleri',
      'Otomasyon sistemleri'
    ],
    applications: ['Büyük Binalar', 'AVM\'ler', 'Endüstri']
  },
  {
    name: 'Havalandırma Sistemleri',
    description: 'Temiz hava sirkülasyonu ve hava kalitesi sistemleri',
    features: [
      'Mekanik havalandırma',
      'Hava kanalları',
      'Filtre sistemleri',
      'Aspirasyon sistemleri',
      'Basınç kontrolü'
    ],
    applications: ['Fabrikalar', 'Hastaneler', 'Laboratuvarlar']
  }
];

const applications = [
  {
    icon: Award,
    title: 'Oteller',
    description: 'Konaklama tesisleri için komple mekanik tesisat'
  },
  {
    icon: Award,
    title: 'Ofis Binaları',
    description: 'İş merkezleri için profesyonel tesisat çözümleri'
  },
  {
    icon: Award,
    title: 'AVM\'ler',
    description: 'Alışveriş merkezleri için büyük kapasiteli sistemler'
  },
  {
    icon: Award,
    title: 'Endüstri',
    description: 'Fabrika ve üretim tesisleri için özel çözümler'
  }
];

const mainContent = {
  title: 'Mekanik Tesisat Nedir?',
  description: [
    'Mekanik tesisat, binaların ısıtma, soğutma, havalandırma ve sıhhi tesisat sistemlerinin tasarımı, kurulumu ve bakımını kapsayan mühendislik dalıdır.',
    'Modern binalar için vazgeçilmez olan bu sistemler, yaşam konforunu artırır ve enerji verimliliği sağlar.'
  ],
  image: 'images/Header_Background.jpeg',
  advantages: [
    'Komple proje yönetimi',
    'Profesyonel tasarım',
    'Kaliteli malzeme kullanımı',
    'Deneyimli montaj ekibi',
    'Garanti ve servis desteği',
    'Enerji verimli çözümler',
    'Zamanında teslim',
    'Rekabetçi fiyatlar'
  ]
};

export const MechanicalInstallationPage: React.FC = () => {
  return (
    <ServicePageTemplate
      title="Mekanik Tesisat"
      subtitle="Profesyonel mekanik tesisat hizmetleri ile binaların ısıtma, soğutma ve havalandırma ihtiyaçlarını eksiksiz karşılıyoruz."
      heroImage="images/Header_Background.jpeg"
      features={features}
      mainContent={mainContent}
      systems={systems}
      applications={applications}
      ctaTitle="Mekanik Tesisat Projeniz İçin"
      ctaDescription="15 yıllık deneyimimiz ile projenizi baştan sona profesyonelce yönetiyoruz."
      ctaButtonText="Proje Danışmanlığı Al"
      gradientColors="from-orange-600 to-red-600"
    />
  );
};