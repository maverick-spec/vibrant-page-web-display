
import React from 'react';
import { Globe, Code, Smartphone, Rocket } from 'lucide-react';
import SolutionTemplate from '@/components/templates/SolutionTemplate';

const WebsiteSolutions: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Website Development',
      description: 'Professional websites built with modern technologies for optimal performance and user experience.'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first designs that provide seamless experiences across all devices and screen sizes.'
    },
    {
      icon: Rocket,
      title: 'Performance Optimization',
      description: 'Fast-loading websites optimized for search engines and conversion rates.'
    },
    {
      icon: Globe,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms that drive sales and provide excellent shopping experiences.'
    }
  ];

  return (
    <SolutionTemplate
      category="Growth Solutions"
      title="Website Solutions"
      description="Seamless, scalable, conversion-ready. Professional websites built for performance, user experience, and business growth."
      categoryIcon={Globe}
      services={services}
      ctaTitle="Ready to Launch Your Website?"
      ctaDescription="Let's build a website that represents your brand and converts visitors into customers."
      backLink="/growth-solutions"
      backLinkText="View All Growth Solutions"
    />
  );
};

export default WebsiteSolutions;
