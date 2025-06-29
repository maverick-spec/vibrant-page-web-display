
import React from 'react';
import { TrendingUp, Target, BarChart, Zap } from 'lucide-react';
import SolutionTemplate from '@/components/templates/SolutionTemplate';

const PerformanceMarketing: React.FC = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Paid Media Strategy',
      description: 'Strategic campaign planning and execution across Google Ads, Facebook, LinkedIn, and other high-converting platforms.'
    },
    {
      icon: Target,
      title: 'Audience Targeting & Optimization',
      description: 'Precision audience targeting and continuous optimization to maximize ROI and minimize cost per acquisition.'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive tracking and reporting with actionable insights to improve campaign performance continuously.'
    },
    {
      icon: Zap,
      title: 'Conversion Optimization',
      description: 'Landing page optimization and conversion funnel analysis to turn more clicks into customers.'
    }
  ];

  return (
    <SolutionTemplate
      category="Growth Solutions"
      title="Performance Marketing & Paid Media"
      description="High-ROI advertising campaigns that convert. Strategic paid media management across platforms to maximize your advertising spend and drive measurable results."
      categoryIcon={TrendingUp}
      services={services}
      ctaTitle="Ready to Scale Your Advertising?"
      ctaDescription="Let's create high-performance campaigns that deliver measurable ROI for your business."
      backLink="/growth-solutions"
      backLinkText="View All Growth Solutions"
    />
  );
};

export default PerformanceMarketing;
