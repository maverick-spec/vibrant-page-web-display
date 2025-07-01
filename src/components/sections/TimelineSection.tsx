
"use client"
import { useEffect, useState, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DollarSign, Settings, Shield, Target, ChevronRight } from "lucide-react"

export default function TimelineSection() {
  const [activeSection, setActiveSection] = useState("growth-solutions")
  const [isNavFixed, setIsNavFixed] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target)

        if (visibleSections.length > 0) {
          visibleSections.sort(
            (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top
          )
          setActiveSection(visibleSections[0].id)
        }
      },
      {
        rootMargin: "0px 0px -40% 0px",
        threshold: 0.2,
      }
    )

    const sectionsToObserve = document.querySelectorAll("section[id]")
    sectionsToObserve.forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      setIsNavFixed(rect.top <= 80 && rect.bottom > 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 140
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  const sections = [
    { id: "growth-solutions", title: "Growth Solutions" },
    { id: "strategic-solutions", title: "Strategic Solutions" },
  ]

  const location = useLocation()
  const showNav = location.pathname === "/"

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="bg-background py-8 md:py-12 lg:py-16">
        <div className="container">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 lg:mb-6 text-left text-primary px-2">Our Solutions</h1>
          <p className="text-sm md:text-base lg:text-lg xl:text-2xl text-left max-w-4xl px-2 leading-relaxed">
            Whether you're launching something new or optimizing what's already working, we deliver what your business
            needs to grow, adapt, and move faster.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div ref={sectionRef} className="container py-4 md:py-8 relative">
        <div className="flex flex-col lg:flex-row items-start">
          {/* Desktop Sticky Left Nav */}
          {showNav && (
            <div 
              ref={navRef}
              className={cn(
                "hidden lg:flex flex-col w-72 space-y-6 transition-all duration-300",
                isNavFixed 
                  ? "fixed top-24 left-8 z-40" 
                  : "sticky top-24 z-40"
              )}
            >
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "text-xl font-bold text-left whitespace-nowrap transition-all duration-300 px-4 py-3 rounded-lg",
                    activeSection === section.id
                      ? "text-primary bg-primary/10 border-l-4 border-primary"
                      : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                  )}
                >
                  {section.title}
                </button>
              ))}
            </div>
          )}
          
          {/* Main Content */}
          <div className={cn(
            "flex-1 w-full",
            showNav ? "lg:ml-80" : ""
          )}>
            <main className="max-w-none">
              {/* Growth Solutions Section */}
              <section id="growth-solutions" className="mb-12 md:mb-16 lg:mb-20">
                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 md:mb-3 text-primary px-2">Growth Solutions</h2>
                <p className="mb-4 md:mb-6 text-sm md:text-base text-muted-foreground leading-relaxed px-2">
                  You need more customers, more engagement, and more momentum. If your priority is to attract the right
                  audience, convert consistently, and expand your market reach, our Growth Solutions are built for you. We
                  deliver high-performance marketing strategy and execution that engineers demand, amplifies brand value,
                  and accelerates customer acquisition.
                </p>

                <h4 className="text-base md:text-lg lg:text-xl font-semibold mb-3 md:mb-4 text-primary px-2">Core Growth Solutions</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6 mb-4 md:mb-6 px-2">
                  {[
                    {
                      link: "/growth-solutions/performance-marketing",
                      icon: "/Growth Solutions Icons/PerformanceMarketing&PaidMedia.png",
                      title: "Performance Marketing & Paid Media",
                      desc: "High-ROI ads that convert."
                    },
                    {
                      link: "/growth-solutions/social-media-marketing",
                      icon: "/Growth Solutions Icons/Social Media Marketing & Brand Engagement.png",
                      title: "Social Media Marketing & Brand Engagement",
                      desc: "Build audience, spark action."
                    },
                    {
                      link: "/growth-solutions/email-marketing",
                      icon: "/Growth Solutions Icons/Email Marketing & Marketing Automation.png",
                      title: "Email Marketing & Marketing Automation",
                      desc: "Automate nurture, drive loyalty."
                    },
                    {
                      link: "/growth-solutions/creative-solutions",
                      icon: "/Growth Solutions Icons/Creative Solutions.png",
                      title: "Creative Solutions",
                      desc: "Visuals that get results."
                    },
                    {
                      link: "/growth-solutions/conversion-optimization",
                      icon: "/Growth Solutions Icons/Conversion Rate Optimization.png",
                      title: "Conversion Rate Optimization (CRO)",
                      desc: "Test. Refine. Convert more."
                    },
                    {
                      link: "/growth-solutions/seo-website-growth",
                      icon: "/Growth Solutions Icons/Search Engine Optimization (SEO) & Website Growth.png",
                      title: "Search Engine Optimization (SEO) & Website Growth",
                      desc: "Rank higher. Grow faster."
                    },
                    {
                      link: "/growth-solutions/website-solutions",
                      icon: "/Growth Solutions Icons/Website Solutions.png",
                      title: "Website Solutions",
                      desc: "Seamless, scalable, conversion-ready."
                    }
                  ].map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg border bg-primary/10 dark:bg-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-lg">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-8 h-8 md:w-10 md:h-10 object-contain dark:invert"
                        />
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <h5 className="font-semibold text-foreground text-xs md:text-sm mb-1 leading-tight line-clamp-2">{item.title}</h5>
                        <p className="text-xs text-muted-foreground leading-tight line-clamp-2">{item.desc}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-2 flex-shrink-0 text-muted-foreground" />
                    </Link>
                  ))}
                </div>

                <h4 className="text-base md:text-lg lg:text-xl font-semibold mb-3 md:mb-4 text-primary px-2">Specialized Growth Solutions</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-8 px-2">
                  {[
                    {
                      link: "/specialized-growth-solutions/audit-insights",
                      icon: "/Specialized Growth Solutions Icons/Deep Dive Audit & Strategic Insights.png",
                      title: "Deep Dive Audit & Strategic Insights",
                      desc: "Clarity through expert analysis."
                    },
                    {
                      link: "/specialized-growth-solutions/analytics-tracking",
                      icon: "/Specialized Growth Solutions Icons/Analytics and Event Tracking Setup.png",
                      title: "Analytics and Event Tracking Setup",
                      desc: "Track what matters, measure what works."
                    },
                    {
                      link: "/specialized-growth-solutions/lead-generation",
                      icon: "/Specialized Growth Solutions Icons/Lead Generation & Funnel Strategy.png",
                      title: "Lead Generation & Funnel Strategy",
                      desc: "Build funnels that convert."
                    },
                    {
                      link: "/specialized-growth-solutions/brand-architecture",
                      icon: "/Specialized Growth Solutions Icons/Brand Architecture & Strategy.png",
                      title: "Brand Architecture & Strategy",
                      desc: "Define, differentiate, scale."
                    },
                    {
                      link: "/specialized-growth-solutions/content-strategy",
                      icon: "/Specialized Growth Solutions Icons/Content Strategy & Planning.png",
                      title: "Content Strategy & Marketing",
                      desc: "Create content that drives action."
                    },
                    {
                      link: "/specialized-growth-solutions/ai-content",
                      icon: "/Specialized Growth Solutions Icons/AI-Accelerated Content Production Pipelines.png",
                      title: "AI-Accelerated Content Production Pipelines",
                      desc: "Scale content with AI precision."
                    },
                    {
                      link: "/specialized-growth-solutions/executive-branding",
                      icon: "/Specialized Growth Solutions Icons/Executive Personal Branding & LinkedIn Marketing.png",
                      title: "Executive Personal Branding & LinkedIn Marketing",
                      desc: "Elevate presence, grow influence."
                    }
                  ].map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg border bg-primary/10 dark:bg-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-lg">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-8 h-8 md:w-10 md:h-10 object-contain dark:invert"
                        />
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <h5 className="font-semibold text-foreground text-xs md:text-sm mb-1 leading-tight line-clamp-2">{item.title}</h5>
                        <p className="text-xs text-muted-foreground leading-tight line-clamp-2">{item.desc}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-2 flex-shrink-0 text-muted-foreground" />
                    </Link>
                  ))}
                </div>

                <div className="text-center px-2">
                  <Button className="font-semibold text-sm md:text-base lg:text-lg mb-4" size="lg" asChild>
                    <a href="/contact">Ready to move faster? Let's talk.</a>
                  </Button>
                </div>
              </section>

              {/* Strategic Solutions Section */}
              <section id="strategic-solutions" className="mb-12 md:mb-16 lg:mb-20">
                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 md:mb-3 text-primary px-2">Strategic Solutions</h2>
                <p className="mb-4 md:mb-6 text-sm md:text-base text-muted-foreground leading-relaxed px-2">
                  You need to improve efficiency, automate intelligently, and ensure operations scale without chaos. If
                  you're navigating operational bottlenecks, automation gaps, or complex scaling challenges, our Strategic
                  Solutions offer high-ROI tailored strategy and implementations that are built for precision,
                  scalability, and efficiency. From workflow orchestration to platform optimization, we help you execute
                  at the next level with minimal disruption.
                </p>

                <h4 className="text-base md:text-lg lg:text-xl font-semibold mb-3 md:mb-4 text-primary px-2">Core Strategic Solutions</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6 mb-4 md:mb-6 px-2">
                  {[
                    {
                      link: "/strategic-solutions/process-automation",
                      icon: "/Strategic Solutions Icons/Process & Workflow Automation.png",
                      title: "Process & Workflow Automation",
                      desc: "Automate execution. Eliminate friction."
                    },
                    {
                      link: "/strategic-solutions/digital-systems-enablement",
                      icon: "/Strategic Solutions Icons/Digital Systems Enablement.png",
                      title: "Digital Systems Enablement",
                      desc: "Optimize platforms. Empower teams."
                    },
                    {
                      link: "/strategic-solutions/custom-solution-engineering",
                      icon: "/Strategic Solutions Icons/Custom Solution Engineering.png",
                      title: "Custom Solution Engineering",
                      desc: "Solve complex. Deliver fast."
                    },
                    {
                      link: "/strategic-solutions/enterprise-evolution-strategic-transformation",
                      icon: "/Strategic Solutions Icons/Enterprise Evolution & Strategic Transformation.png",
                      title: "Enterprise Evolution & Strategic Transformation",
                      desc: "Reshape. Scale. Future-proof."
                    }
                  ].map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg border bg-primary/10 dark:bg-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-lg">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-8 h-8 md:w-10 md:h-10 object-contain dark:invert"
                        />
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <h5 className="font-semibold text-foreground text-xs md:text-sm mb-1 leading-tight line-clamp-2">{item.title}</h5>
                        <p className="text-xs text-muted-foreground leading-tight line-clamp-2">{item.desc}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-2 flex-shrink-0 text-muted-foreground" />
                    </Link>
                  ))}
                </div>

                <h4 className="text-base md:text-lg lg:text-xl font-semibold mb-3 md:mb-4 text-primary px-2">Solutions By Function</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-8 px-2">
                  {[
                    {
                      title: "Finance",
                      desc: "Automate reporting. Accelerate reconciliation.",
                      icon: DollarSign,
                      link: "/strategic-solutions/finance-operations"
                    },
                    {
                      title: "Operations",
                      desc: "Unblock execution. Speed up critical workflows.",
                      icon: Settings,
                      link: "/strategic-solutions/operations"
                    },
                    {
                      title: "Compliance & Governance",
                      desc: "Reduce risk. Ensure audit-ready control.",
                      icon: Shield,
                      link: "/strategic-solutions/compliance-governance"
                    },
                    {
                      title: "Cross-Functional Leadership",
                      desc: "Align departments. Orchestrate complex delivery.",
                      icon: Target,
                      link: "/strategic-solutions/cross-functional-leadership"
                    }
                  ].map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg border bg-primary/10 dark:bg-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-lg">
                        <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <h5 className="font-semibold text-foreground text-xs md:text-sm mb-1 leading-tight line-clamp-2">{item.title}</h5>
                        <p className="text-xs text-muted-foreground leading-tight line-clamp-2">{item.desc}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-2 flex-shrink-0 text-muted-foreground" />
                    </Link>
                  ))}
                </div>

                <div className="text-center px-2">
                  <Button className="font-semibold text-sm md:text-base lg:text-lg mb-4" size="lg" asChild>
                    <a href="/contact">Ready to move faster? Let's talk.</a>
                  </Button>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
