
import React from 'react';
import { Search, Target, BarChart, TrendingUp } from 'lucide-react';
import SolutionTemplate from '@/components/templates/SolutionTemplate';

const SEO: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: 'Technical SEO Optimization',
      description: 'Complete technical audit and optimization including site speed, mobile optimization, and search engine crawlability.'
    },
    {
      icon: Target,
      title: 'Keyword Strategy & Research',
      description: 'In-depth keyword research and strategic targeting to capture high-intent traffic and improve search rankings.'
    },
    {
      icon: BarChart,
      title: 'Content Optimization',
      description: 'SEO-optimized content creation and existing content enhancement to improve search visibility and user engagement.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Comprehensive SEO analytics, ranking tracking, and performance reporting to measure and improve results.'
    }
  ];

  return (
    <SolutionTemplate
      category="Growth Solutions"
      title="SEO Services"
      description="Strategic search engine optimization that drives organic traffic, improves rankings, and delivers sustainable long-term growth."
      categoryIcon={Search}
      services={services}
      ctaTitle="Ready to Dominate Search Results?"
      ctaDescription="Let's create an SEO strategy that drives sustainable organic growth for your business."
      backLink="/growth-solutions"
      backLinkText="View All Growth Solutions"
    />
  );
};

export default SEO;
