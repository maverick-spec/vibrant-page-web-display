
import React from 'react';
import { Target, TestTube, BarChart3, Zap } from 'lucide-react';
import SolutionTemplate from '@/components/templates/SolutionTemplate';

const ConversionOptimization: React.FC = () => {
  const services = [
    {
      icon: TestTube,
      title: 'A/B Testing & Experimentation',
      description: 'Systematic testing of page elements to identify what drives the highest conversion rates.'
    },
    {
      icon: Target,
      title: 'Landing Page Optimization',
      description: 'Strategic optimization of landing pages to maximize conversion rates and user experience.'
    },
    {
      icon: BarChart3,
      title: 'Conversion Analytics',
      description: 'Deep analysis of user behavior and conversion funnels to identify optimization opportunities.'
    },
    {
      icon: Zap,
      title: 'User Experience Enhancement',
      description: 'UX improvements that remove friction and guide users toward desired actions.'
    }
  ];

  return (
    <SolutionTemplate
      category="Growth Solutions"
      title="Conversion Rate Optimization (CRO)"
      description="Test. Refine. Convert more. Data-driven optimization strategies that turn more visitors into customers through systematic testing and improvement."
      categoryIcon={Target}
      services={services}
      ctaTitle="Ready to Convert More Visitors?"
      ctaDescription="Let's optimize your conversion funnel to turn more traffic into revenue."
      backLink="/growth-solutions"
      backLinkText="View All Growth Solutions"
    />
  );
};

export default ConversionOptimization;
