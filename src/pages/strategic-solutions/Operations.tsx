import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, CheckCircle, Zap, Shuffle, Timer, Users, BarChart3, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ThemeBreadcrumb from '@/components/ui/theme-breadcrumb';

const Operations: React.FC = () => {
  const improvements = [
    'Mapping multi-step operational workflows to identify friction, escalation points, and failure risks',
    'Orchestrating cross-functional processes to unify execution across sales, delivery, finance, and support',
    'Automating task handoffs and SLA tracking to ensure accountability and transparency',
    'Implementing performance dashboards for real-time visibility and data-driven adjustments'
  ];

  const whenToApply = [
    'When processes drag on for weeks due to manual steps and slow escalations',
    'When lack of transparency leads to missed deadlines or misaligned teams',
    'When operations rely on email, spreadsheets, or ad hoc tools to coordinate',
    'When growing teams outpace current operational systems'
  ];

  const useCases = [
    { icon: Shuffle, text: 'Multi-step task routing with escalations' },
    { icon: Timer, text: 'Operational SLA tracking' },
    { icon: Users, text: 'Automated handoffs between teams' },
    { icon: BarChart3, text: 'Real-time dashboards' },
    { icon: FileCheck, text: 'Audit-ready activity logs' },
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
              <Settings className="w-4 h-4 mr-2" />
              Operations
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Operations
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Eliminating delays, inefficiencies, and handoff gaps in operational execution.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Operations teams often face challenges tied to fragmented systems, manual workflows, and bottlenecks that reduce throughput and increase costs. We streamline critical processes across departments to create smoother execution, faster response times, and more predictable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact" className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/strategic-solutions" className="flex items-center">
                  View All Strategic Solutions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.section>

        {/* Side-by-side Improvements & When to Apply, matching structure */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* How We Improve */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-muted/30 rounded-2xl p-8 flex flex-col justify-center"
            >
              <h3 className="text-3xl font-bold mb-8 text-foreground">How We Improve Operational Functions</h3>
              <div className="space-y-4">
                {improvements.map((improvement, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <p className="text-foreground">{improvement}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            {/* When to Apply */}
            <div className="bg-muted/30 rounded-2xl p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-8 text-foreground">When to Apply This Solution</h3>
              <div className="space-y-4">
                {whenToApply.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Zap className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section with icons */}
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-foreground mb-8">Use Cases</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {useCases.map((useCase, index) => (
                <Card key={index} className="p-4 flex items-center gap-4">
                  <useCase.icon className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-foreground font-medium mb-0">{useCase.text}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Streamline Your Operations?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's eliminate delays and optimize your operational execution.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.section>
      </div>
    </div>
  );
};

export default Operations;
