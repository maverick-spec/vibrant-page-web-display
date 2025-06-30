
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TimelineItem {
  title: string;
  description: string;
  details: string[];
}

interface SolutionTab {
  id: string;
  title: string;
  icon: React.ElementType;
  items: TimelineItem[];
}

const TimelineSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('growth');

  const solutionTabs: SolutionTab[] = [
    {
      id: 'growth',
      title: 'Growth Solutions',
      icon: Zap,
      items: [
        {
          title: 'Performance Marketing & Paid Media',
          description: 'Drive qualified traffic and maximize ROI through strategic paid advertising campaigns across multiple platforms.',
          details: [
            'Multi-platform campaign management',
            'Advanced audience targeting and segmentation',
            'Real-time performance optimization',
            'Comprehensive ROI tracking and reporting'
          ]
        },
        {
          title: 'Social Media Marketing & Brand Engagement',
          description: 'Build meaningful connections with your audience through strategic social media presence and community engagement.',
          details: [
            'Platform-specific content strategies',
            'Community management and engagement',
            'Influencer partnership coordination',
            'Social media analytics and insights'
          ]
        },
        {
          title: 'Email Marketing & Marketing Automation',
          description: 'Nurture leads and retain customers through personalized, automated email marketing campaigns.',
          details: [
            'Automated drip campaigns',
            'Personalization and segmentation',
            'A/B testing and optimization',
            'Customer lifecycle automation'
          ]
        },
        {
          title: 'Conversion Rate Optimization',
          description: 'Optimize your website and landing pages to convert more visitors into customers.',
          details: [
            'User experience analysis',
            'A/B testing implementation',
            'Landing page optimization',
            'Conversion funnel analysis'
          ]
        }
      ]
    },
    {
      id: 'strategic',
      title: 'Strategic Solutions',
      icon: Target,
      items: [
        {
          title: 'Process & Workflow Automation',
          description: 'Streamline operations and eliminate manual work through intelligent automation solutions.',
          details: [
            'Workflow mapping and optimization',
            'Automated task routing',
            'Integration between systems',
            'Performance monitoring and reporting'
          ]
        },
        {
          title: 'Digital Systems Enablement',
          description: 'Empower your team with the right tools and systems to scale efficiently.',
          details: [
            'System architecture planning',
            'Technology stack optimization',
            'Data integration solutions',
            'User training and adoption'
          ]
        },
        {
          title: 'Custom Solution Engineering',
          description: 'Build tailored solutions that address your unique business challenges and requirements.',
          details: [
            'Custom application development',
            'API integrations',
            'Database design and optimization',
            'Scalable architecture planning'
          ]
        },
        {
          title: 'Enterprise Evolution & Strategic Transformation',
          description: 'Guide your organization through large-scale transformation initiatives.',
          details: [
            'Strategic planning and roadmapping',
            'Change management support',
            'Technology migration planning',
            'Performance measurement frameworks'
          ]
        }
      ]
    }
  ];

  const activeTabData = solutionTabs.find(tab => tab.id === activeTab);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Our Solutions Timeline
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive approach to driving growth and operational excellence
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab Navigation - Left Side */}
          <div className="lg:w-1/4 flex lg:flex-col gap-2">
            {solutionTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 p-4 rounded-lg text-left transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-card hover:bg-muted/50 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium text-sm sm:text-base">{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* Content Area - Right Side */}
          <div className="lg:w-3/4">
            <AnimatePresence mode="wait">
              {activeTabData && (
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {activeTabData.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-foreground mb-3">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {item.description}
                          </p>
                          <ul className="space-y-2">
                            {item.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-foreground">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// Need to import AnimatePresence
import { AnimatePresence } from 'framer-motion';

export default TimelineSection;
