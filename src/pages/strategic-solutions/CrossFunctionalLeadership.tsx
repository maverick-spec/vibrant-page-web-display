import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, CheckCircle, Zap, Workflow, Users, Repeat, BarChart3, Link2, ListChecks } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ThemeBreadcrumb from '@/components/ui/theme-breadcrumb';

const CrossFunctionalLeadership: React.FC = () => {
  const improvements = [
    'Reengineering org-wide workflows to align teams, systems, and goals',
    'Building centralized visibility for multi-department initiatives and shared KPIs',
    'Harmonizing handoffs and responsibilities to remove duplication and missed steps',
    'Developing scalable execution models that enable agility across evolving business priorities'
  ];

  const whenToApply = [
    'When growth initiatives span multiple departments or business units',
    'When process ownership is unclear and execution slows down',
    'When reporting, approvals, and coordination break down across silos',
    'When leadership wants visibility and accountability across strategic programs'
  ];

  const useCases = [
    { icon: Workflow, text: 'Org-wide initiative execution' },
    { icon: Users, text: 'Post-merger integration' },
    { icon: Repeat, text: 'Process reengineering across silos' },
    { icon: BarChart3, text: 'Unified reporting across departments' },
    { icon: Link2, text: 'Centralized workflow orchestration' },
  ];

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
            className="text-center max-w-4xl mx-auto px-4"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Target className="w-4 h-4 mr-2" />
              Cross-Functional Leadership
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Cross-Functional Leadership
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Enabling alignment and execution across departments, systems, and strategic initiatives.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Complex initiatives often stall when processes cross functional boundaries. Gaps emerge, handoffs break, and accountability diffuses. Perssonify works with organizations to design and implement solutions that bridge silos, synchronize operations, and drive execution across teams.
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
              <h3 className="text-3xl font-bold mb-8 text-foreground">How We Empower Cross-Functional Leadership</h3>
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
            Ready to Align Your Organization?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's bridge silos and drive cross-functional execution.
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

export default CrossFunctionalLeadership;