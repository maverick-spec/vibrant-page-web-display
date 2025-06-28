import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle, Zap, FileText, ShieldCheck, FolderOpen, ClipboardCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ThemeBreadcrumb from '@/components/ui/theme-breadcrumb';

const ComplianceGovernance: React.FC = () => {
  const improvements = [
    'Digitizing audit trails and approval workflows to ensure traceability and control',
    'Automating policy enforcement checks for consistent application across the organization',
    'Integrating documentation processes into daily operations for seamless compliance readiness',
    'Designing systems for governance alignment that reduce human error and audit risk'
  ];

  const whenToApply = [
    'When compliance processes depend on email chains, spreadsheets, or untracked approvals',
    'When the cost of audits or regulatory delays starts to climb',
    'When risk exposure increases due to inconsistent enforcement of policies',
    'When leadership needs greater visibility into compliance posture and controls'
  ];

  const useCases = [
    { icon: FileText, text: 'Control tracking and evidence capture' },
    { icon: ShieldCheck, text: 'Automated policy enforcement checks' },
    { icon: FolderOpen, text: 'Sample gathering and packaging for audits' },
    { icon: ClipboardCheck, text: 'Compliance workflows with digital traceability' },
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
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Shield className="w-4 h-4 mr-2" />
              Compliance & Governance
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Compliance & Governance
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Reducing regulatory burden and risk exposure with streamlined, traceable processes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Compliance-heavy environments demand precision, documentation, and control—yet many still rely on scattered tools and manual oversight. We help businesses implement systems that simplify regulatory workflows, improve accountability, and reduce the risk of non-compliance.
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
              <h3 className="text-3xl font-bold mb-8 text-foreground">How We Improve Compliance & Governance Functions</h3>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            Ready to Strengthen Your Compliance?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's reduce regulatory burden and improve your compliance posture.
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

export default ComplianceGovernance;
