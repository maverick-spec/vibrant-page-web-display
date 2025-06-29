
import React from 'react';
import { Code2, Cog, Lightbulb, Rocket } from 'lucide-react';
import SolutionTemplate from '@/components/templates/SolutionTemplate';

const CustomSolutionEngineering: React.FC = () => {
  const services = [
    {
      icon: Lightbulb,
      title: 'Solution Architecture',
      description: 'Custom solution design tailored to your unique business requirements and technical constraints.'
    },
    {
      icon: Code2,
      title: 'Custom Development',
      description: 'Bespoke software development using modern technologies and best practices for scalability.'
    },
    {
      icon: Cog,
      title: 'API & Integration Development',
      description: 'Custom APIs and integrations that connect your systems and enable seamless data flow.'
    },
    {
      icon: Rocket,
      title: 'Deployment & Support',
      description: 'Professional deployment, testing, and ongoing support to ensure your solution performs optimally.'
    }
  ];

  return (
    <SolutionTemplate
      category="Strategic Solutions"
      title="Custom Solution Engineering"
      description="Tailored technology solutions engineered specifically for your business needs, challenges, and growth objectives."
      categoryIcon={Code2}
      services={services}
      ctaTitle="Ready for a Custom Solution?"
      ctaDescription="Let's engineer the perfect solution for your unique business requirements."
      backLink="/strategic-solutions"
      backLinkText="View All Strategic Solutions"
    />
  );
};

export default CustomSolutionEngineering;
