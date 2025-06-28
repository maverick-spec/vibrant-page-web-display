
import React from 'react';
import { Users, MessageCircle, Target, BarChart } from 'lucide-react';
import SolutionTemplate from '@/components/templates/SolutionTemplate';

const SocialMedia: React.FC = () => {
  const services = [
    {
      icon: Users,
      title: 'Social Media Strategy',
      description: 'Comprehensive social media strategies tailored to your brand voice, audience, and business objectives across all platforms.'
    },
    {
      icon: MessageCircle,
      title: 'Content Creation & Curation',
      description: 'Engaging, on-brand content creation including graphics, videos, and copy that resonates with your target audience.'
    },
    {
      icon: Target,
      title: 'Community Management',
      description: 'Active community engagement, customer support, and relationship building to foster brand loyalty and trust.'
    },
    {
      icon: BarChart,
      title: 'Social Media Analytics',
      description: 'Detailed performance tracking, audience insights, and data-driven optimization to maximize social media ROI.'
    }
  ];

  return (
    <SolutionTemplate
      category="Growth Solutions"
      title="Social Media Management"
      description="Build meaningful connections, engage your audience, and drive business growth through strategic social media management and content creation."
      categoryIcon={Users}
      services={services}
      ctaTitle="Ready to Build Your Social Community?"
      ctaDescription="Let's create a social media strategy that builds meaningful connections and drives business growth."
      backLink="/growth-solutions"
      backLinkText="View All Growth Solutions"
    />
  );
};

export default SocialMedia;
