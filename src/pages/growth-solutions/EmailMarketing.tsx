import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Target, Users, BarChart, Zap, Settings, ArrowUpRight, SquareArrowOutUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ThemeBreadcrumb from '@/components/ui/theme-breadcrumb';

const EmailMarketing: React.FC = () => {
  const services = [
    {
      icon: Mail,
      title: 'Automated Email Sequences',
      description: 'Behavior-triggered email workflows for onboarding, promotions, abandoned carts, re-engagement, and retention.'
    },
    {
      icon: Target,
      title: 'Lead Nurturing Campaigns',
      description: 'Targeted email sequences that move leads through the funnel and drive higher conversion rates.'
    },
    {
      icon: Settings,
      title: 'CRM & Marketing Automation Integration',
      description: 'Connecting email campaigns with HubSpot, Salesforce, Klaviyo, or other platforms to enhance data-driven engagement.'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics & Optimization',
      description: 'A/B testing, deliverability monitoring, and engagement tracking to continuously improve email effectiveness.'
    },
    {
      icon: Users,
      title: 'Segmentation & Personalization',
      description: 'Tailoring email content based on customer behavior, demographics, and intent signals for higher engagement and conversion rates.'
    }
  ];

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (hero) {
      hero.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <ThemeBreadcrumb />

        {/* Hero Section */}
        <motion.section 
          id="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="pt-8 pb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Mail className="w-4 h-4 mr-2" />
              Growth Solutions
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-primary">
              Email Marketing & Marketing Automation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Turning Prospects into Customers with Automated, Data-Driven Nurturing
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Email marketing and marketing automation are critical for sustained engagement, lead nurturing, and customer conversion. By automating workflows, integrating CRM systems, and delivering high-impact email sequences, we help businesses streamline customer journeys, improve retention, and maximize ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact" className="flex items-center">
                  Start Email Marketing
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/growth-solutions" className="flex items-center">
                  View All Growth Solutions
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.section>

        {/* Key Deliverables Section */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Key Deliverables
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive email marketing solutions that build relationships, drive engagement, and generate consistent revenue.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 bg-card custom-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                      <SquareArrowOutUpRight className="w-5 h-5 text-muted-foreground ml-2" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Outcome Section */}
        <section className="py-16 bg-muted/30 rounded-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto px-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Expected Outcome
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              A fully optimized email marketing and automation strategy that turns passive leads into active customers and increases retention.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Get Started with Email Marketing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default EmailMarketing;
