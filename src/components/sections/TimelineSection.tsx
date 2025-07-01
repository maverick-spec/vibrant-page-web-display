
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Users, Zap, ArrowRight, CheckCircle, Lightbulb, Search, Eye, Layers, Flag, Wrench, Cog, BarChart3, Repeat, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const TimelineSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('growth');

  const growthContent = {
    icon: TrendingUp,
    title: 'Growth Solutions',
    subtitle: 'High-Performance Marketing',
    description: 'You need more customers, more engagement, and more momentum. If your priority is to attract the right audience, convert consistently, and expand your market reach, our Growth Solutions are built for you. We deliver high-performance marketing strategy and execution that engineers demand, amplifies brand value, and accelerates customer acquisition.',
    solutions: [
      {
        icon: Users,
        title: 'Performance Marketing & Paid Media',
        description: 'Data-driven campaigns that maximize ROI and drive qualified leads.'
      },
      {
        icon: Sparkles,
        title: 'Social Media Marketing & Brand Engagement',
        description: 'Strategic social presence that builds community and drives conversions.'
      },
      {
        icon: Repeat,
        title: 'Email Marketing & Marketing Automation',
        description: 'Nurture sequences that convert prospects into loyal customers.'
      },
      {
        icon: Lightbulb,
        title: 'Creative Solutions',
        description: 'Compelling creative assets that capture attention and drive action.'
      },
      {
        icon: BarChart3,
        title: 'Conversion Rate Optimization',
        description: 'Systematic testing and optimization to maximize your conversion rates.'
      },
      {
        icon: Search,
        title: 'SEO & Website Growth',
        description: 'Organic visibility strategies that drive sustainable traffic growth.'
      }
    ]
  };

  const strategicContent = {
    icon: Target,
    title: 'Strategic Solutions',
    subtitle: 'Technology-Enhanced Operational Scaling',
    description: 'High-ROI business process enhancement that streamlines operations, automates intelligently, and scales with precision. We help you improve efficiency and ensure operations scale without chaos.',
    solutions: [
      {
        icon: Cog,
        title: 'Process & Workflow Automation',
        description: 'Intelligent automation that eliminates bottlenecks and reduces manual work.'
      },
      {
        icon: Layers,
        title: 'Digital Systems Enablement',
        description: 'Technology integration that connects your tools and data seamlessly.'
      },
      {
        icon: Wrench,
        title: 'Custom Solution Engineering',
        description: 'Tailored solutions designed specifically for your business needs.'
      },
      {
        icon: Flag,
        title: 'Enterprise Evolution & Strategic Transformation',
        description: 'Large-scale transformations that position your business for future growth.'
      }
    ]
  };

  const currentContent = activeTab === 'growth' ? growthContent : strategicContent;

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
            Our Solutions
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
            Whether you're launching something new or optimizing what's already working, we deliver what your business needs to grow, adapt, and move faster.
          </p>
        </div>

        {/* Solutions Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Sidebar - Solution Tabs */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-24 space-y-4">
              <button
                onClick={() => setActiveTab('growth')}
                className={`w-full text-left p-4 sm:p-6 rounded-xl border-2 transition-all duration-300 ${
                  activeTab === 'growth' 
                    ? 'border-primary bg-primary/10 text-primary' 
                    : 'border-muted bg-muted/30 text-muted-foreground hover:border-primary/50 hover:bg-primary/5'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-semibold text-lg">Growth Solutions</span>
                </div>
                <p className="text-sm opacity-80">High-Performance Marketing</p>
              </button>

              <button
                onClick={() => setActiveTab('strategic')}
                className={`w-full text-left p-4 sm:p-6 rounded-xl border-2 transition-all duration-300 ${
                  activeTab === 'strategic' 
                    ? 'border-primary bg-primary/10 text-primary' 
                    : 'border-muted bg-muted/30 text-muted-foreground hover:border-primary/50 hover:bg-primary/5'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-5 h-5" />
                  <span className="font-semibold text-lg">Strategic Solutions</span>
                </div>
                <p className="text-sm opacity-80">Technology-Enhanced Operational Scaling</p>
              </button>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-9">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Content Header */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <currentContent.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{currentContent.title}</h3>
                    <p className="text-primary font-medium">{currentContent.subtitle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  {currentContent.description}
                </p>
              </div>

              {/* Solutions Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {currentContent.solutions.map((solution, index) => (
                  <motion.div
                    key={solution.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300">
                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <solution.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg font-bold text-foreground leading-tight">
                              {solution.title}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground text-sm">
                          {solution.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center lg:text-left pt-8">
                <Button size="lg" className="group">
                  Learn More About {currentContent.title}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
