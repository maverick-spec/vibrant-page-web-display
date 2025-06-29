
import React from 'react';
import { Palette, Image, Video, Sparkles } from 'lucide-react';
import SolutionTemplate from '@/components/templates/SolutionTemplate';

const CreativeSolutions: React.FC = () => {
  const services = [
    {
      icon: Palette,
      title: 'Brand Visual Identity',
      description: 'Cohesive visual branding that captures your brand essence and resonates with your target audience.'
    },
    {
      icon: Image,
      title: 'Ad Creative Design',
      description: 'High-converting ad creatives for social media, display advertising, and marketing campaigns.'
    },
    {
      icon: Video,
      title: 'Video & Motion Graphics',
      description: 'Engaging video content and motion graphics that tell your story and drive engagement.'
    },
    {
      icon: Sparkles,
      title: 'Creative Strategy',
      description: 'Strategic creative direction that aligns with your marketing goals and brand positioning.'
    }
  ];

  return (
    <SolutionTemplate
      category="Growth Solutions"
      title="Creative Solutions"
      description="Visuals that get results. Eye-catching designs and compelling creative assets that capture attention and drive conversions."
      categoryIcon={Palette}
      services={services}
      ctaTitle="Ready to Make an Impact?"
      ctaDescription="Let's create visuals that capture attention and convert viewers into customers."
      backLink="/growth-solutions"
      backLinkText="View All Growth Solutions"
    />
  );
};

export default CreativeSolutions;
