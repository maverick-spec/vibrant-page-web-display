
import React from 'react';
import { Settings, Database, Cloud, Shield } from 'lucide-react';
import SolutionTemplate from '@/components/templates/SolutionTemplate';

const DigitalSystemsEnablement: React.FC = () => {
  const services = [
    {
      icon: Database,
      title: 'System Integration',
      description: 'Seamless integration of business systems to eliminate data silos and improve workflow efficiency.'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration & Optimization',
      description: 'Strategic cloud adoption and optimization for scalability, security, and cost-effectiveness.'
    },
    {
      icon: Settings,
      title: 'Process Digitization',
      description: 'Transform manual processes into efficient digital workflows that scale with your business.'
    },
    {
      icon: Shield,
      title: 'Data Security & Compliance',
      description: 'Robust security frameworks and compliance solutions to protect your business and customer data.'
    }
  ];

  return (
    <SolutionTemplate
      category="Strategic Solutions"
      title="Digital Systems Enablement"
      description="Transform your business operations with integrated digital systems that enhance efficiency, security, and scalability."
      categoryIcon={Settings}
      services={services}
      ctaTitle="Ready to Digitize Your Operations?"
      ctaDescription="Let's modernize your systems to drive efficiency and competitive advantage."
      backLink="/strategic-solutions"
      backLinkText="View All Strategic Solutions"
    />
  );
};

export default DigitalSystemsEnablement;
