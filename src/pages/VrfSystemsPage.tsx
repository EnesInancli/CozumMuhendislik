import React from 'react';
import { Zap, Settings, Shield, TrendingUp, Award } from 'lucide-react';
import { ServicePageTemplate } from '../components/ServicePageTemplate';
import { useLanguage } from '../contexts/LanguageContext';

export const VrfSystemsPage: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Zap,
      title: t('pages.vrf.energyEfficiency'),
      description: t('pages.vrf.energyEfficiencyDesc')
    },
    {
      icon: Settings,
      title: t('pages.vrf.individualControl'),
      description: t('pages.vrf.individualControlDesc')
    },
    {
      icon: Shield,
      title: t('pages.vrf.reliability'),
      description: t('pages.vrf.reliabilityDesc')
    },
    {
      icon: TrendingUp,
      title: t('pages.vrf.performance'),
      description: t('pages.vrf.performanceDesc')
    }
  ];

  const applications = [
    {
      icon: Award,
      title: t('pages.vrf.officeBuildings'),
      description: t('pages.vrf.officeBuildingsDesc')
    },
    {
      icon: Award,
      title: t('pages.vrf.hotelsRestaurants'),
      description: t('pages.vrf.hotelsRestaurantsDesc')
    },
    {
      icon: Award,
      title: t('pages.vrf.shoppingCenters'),
      description: t('pages.vrf.shoppingCentersDesc')
    },
    {
      icon: Award,
      title: t('pages.vrf.hospitals'),
      description: t('pages.vrf.hospitalsDesc')
    }
  ];

  const mainContent = {
    title: t('pages.vrf.techTitle'),
    description: [
      t('pages.vrf.techDesc1'),
      t('pages.vrf.techDesc2')
    ],
    image: 'images/VrfSistemToshiba.png',
    advantages: [
      t('pages.vrf.advantages.advantage1'),
      t('pages.vrf.advantages.advantage2'),
      t('pages.vrf.advantages.advantage3'),
      t('pages.vrf.advantages.advantage4'),
      t('pages.vrf.advantages.advantage5'),
      t('pages.vrf.advantages.advantage6'),
      t('pages.vrf.advantages.advantage7'),
      t('pages.vrf.advantages.advantage8')
    ]
  };

  return (
    <ServicePageTemplate
      title={t('pages.vrf.title')}
      subtitle={t('pages.vrf.subtitle')}
      heroImage="images/vrfsistem.png"
      features={features}
      mainContent={mainContent}
      applications={applications}
      ctaTitle={t('pages.vrf.ctaTitle')}
      ctaDescription={t('pages.vrf.ctaDesc')}
      ctaButtonText={t('pages.vrf.ctaButton')}
      gradientColors="from-blue-600 to-blue-600"
    />
  );
};
