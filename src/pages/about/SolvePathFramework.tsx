
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Search, Users, Zap, CheckCircle, Lightbulb, BarChart3, Eye, Repeat, Layers, Flag, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SolvePathFramework: React.FC = () => {
  const stages = [
    {
      stage: "Stage 1: Identify Problems & Opportunities",
      purpose: "Identify pain points, inefficiencies, and areas of untapped value",
      questions: "What's slowing us down? Where are we wasting time or resources? Where could we be doing more with what we already have?",
      output: "Clear list of business-relevant problems and opportunities",
      icon: Search
    },
    {
      stage: "Stage 2: Investigate Root Causes & Dependencies",
      purpose: "Surface the true drivers and systemic factors behind what's happening",
      questions: "What's underneath this issue? Who or what is involved in making change possible? Where are the real points of failure?",
      output: "Root cause map with relevant people, tools, and processes",
      icon: Eye
    },
    {
      stage: "Stage 3: Group & Prioritize",
      purpose: "Organize insights into focus areas and determine what matters most",
      questions: "What's related? What rises to the top in terms of value, urgency, and feasibility? Are we aligned on what to solve first?",
      output: "Grouped themes, impact/effort map, or scored list",
      icon: BarChart3
    },
    {
      stage: "Stage 4: Translate Into Challenges",
      purpose: "Frame the right problems to solve in a way that guides thinking and action",
      questions: "Is this challenge framed around outcomes? Does it reflect real constraints? Is it broad enough for innovation, but focused enough to act on?",
      output: "Well-formed challenge statements",
      icon: Flag
    },
    {
      stage: "Stage 5: Develop Approaches", 
      purpose: "Generate viable, creative paths to address the challenge",
      questions: "What are the possible ways forward? Which ones fit the context, capabilities, and goals?",
      output: "Prioritized list of strategic approaches",
      icon: Lightbulb
    },
    {
      stage: "Stage 6: Define Solutions",
      purpose: "Build implementable, validated solutions designed for near-term and long-term ROI",
      questions: "What does success look like? How do we validate early and scale later? Are we designing for flexibility, speed, and sustainability?",
      output: "De-risked, staged solution plans with clear criteria",
      icon: Wrench
    }
  ];

  const useCases = [
    "Diagnose and untangle complex, interdependent issues",
    "Identify meaningful opportunities hidden within operations, systems, or customer journeys",
    "Convert loosely defined pain points into structured, high-value solution spaces",
    "Develop and deliver scalable solutions through concept design, validation, and execution"
  ];

  const problemExamples = [
    {
      type: "Problem",
      example: "Manual invoice processing is delaying payments by 10–15 days, causing friction with vendors.",
      impact: "Clear financial impact and operational drag"
    },
    {
      type: "Problem",
      example: "Internal ticketing takes 4+ touchpoints before resolution, frustrating both users and IT.",
      impact: "Reveals a need for better routing and workflow logic"
    },
    {
      type: "Opportunity",
      example: "We have clean access to historical performance data that hasn't been centralized for analysis.",
      impact: "Unused asset that could support better decisions"
    },
    {
      type: "Opportunity",
      example: "Customers have shown interest in live onboarding, but we haven't explored real-time support.",
      impact: "Direct customer signal tied to conversion potential"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl pt-20">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-8"
        >
          <Link 
            to="/about" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to About
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
            The Solution Design Framework
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8">
            Clarity, Structure, and Momentum for Solving What Matters Most
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
              The Solution Design Framework is a structured thinking and execution framework for translating complex business problems and opportunities into actionable, scalable solutions. It's designed for situations where the path forward isn't obvious, where surface-level fixes fall short, and where deeper insight, structured alignment, and rigorous execution are required.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              This framework brings a consistent methodology to uncovering root causes, defining strategic challenges, and engineering high-ROI solutions. It gives teams a shared language and mental model to move from ambiguity to action—fast, clearly, and effectively.
            </p>
          </div>
        </motion.section>

        {/* Framework Purpose Section */}
        <section className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-muted/50 rounded-2xl p-6 md:p-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6">The Solution Design Framework is used to:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {useCases.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary mr-2 md:mr-3 flex-shrink-0 mt-0.5 md:mt-1" />
                  <p className="text-sm md:text-base text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-background rounded-lg">
              <p className="text-sm md:text-base text-muted-foreground font-medium">
                The Solution Design Framework is not a theory or abstraction—it's a practical sequence built to help decision-makers and operators move forward with confidence and clarity. It adapts to cross-functional use cases, supports both strategic and tactical problem solving, and allows for modular implementation depending on context and stage.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Framework Overview */}
        <section className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6 text-primary">
              Solution Design Framework Overview
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              At its core, the Solution Design Framework answers a simple but essential question: "What's the smartest, clearest way to move from challenge to solution—without wasting time, resources, or momentum?"
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:gap-6">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 bg-card custom-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <stage.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg md:text-xl font-bold mb-2">{stage.stage}</CardTitle>
                        <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">{stage.purpose}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Questions:</h4>
                        <p className="text-muted-foreground text-sm">{stage.questions}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Output:</h4>
                        <p className="text-muted-foreground text-sm">{stage.output}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Problems and Opportunities Examples */}
        <section className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-primary text-center">
              Problems and Opportunities Examples
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {problemExamples.map((example, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        example.type === 'Problem' 
                          ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300' 
                          : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                      }`}>
                        {example.type}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm md:text-base text-foreground mb-3 font-medium">
                      "{example.example}"
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      <strong>Why It Matters:</strong> {example.impact}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Framework Summary */}
        <section className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 md:p-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
              The Solution Design Framework Summary
            </h2>
            <p className="text-lg text-primary font-semibold text-center mb-6">
              A clear path from insight to impact.
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                The Solution Design Framework provides a clear, repeatable path from complexity to clarity—transforming scattered problems and untapped opportunities into strategic, high-impact solutions. This framework is designed to be applied flexibly across industries and use cases, while providing shared clarity around what each stage means, why it matters, and how to execute it well.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="bg-background/50">
                  <CardHeader>
                    <CardTitle className="text-lg">How This Framework Helps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Clarity:</strong> Everyone speaks the same language about where we are and what's next</li>
                      <li><strong>Speed:</strong> Cut through confusion and opinion with a clear process</li>
                      <li><strong>Impact:</strong> Build smarter solutions that solve for both ROI and risk</li>
                      <li><strong>Scalability:</strong> Apply this process from quick wins to enterprise-wide transformations</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-background/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Apply It Across the Business</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      This framework is designed to work across growth, strategic, operational, and creative projects. Whether you're designing a new marketing engine, automating internal processes, or tackling a large-scale transformation, this gives you a common structure to align teams, move faster, and deliver better outcomes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-12 md:py-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Ready to Apply the Solution Design Framework?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto">
            Let's work together to solve your most complex business challenges with clarity and precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">
                Get Started Today
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link to="/about">
                Back to About
              </Link>
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default SolvePathFramework;
