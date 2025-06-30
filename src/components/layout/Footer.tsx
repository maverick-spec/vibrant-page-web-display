import * as React from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import LogoTeal from '/Logo-Teal.png';

const Footer: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [isSubscribing, setIsSubscribing] = React.useState(false);
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleLogoClick = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert("Thanks for subscribing! We'll be in touch soon.");
      setEmail("");
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubscribing(false);
    }
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Insights', href: '/insights' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const solutions = {
    coreGrowth: [
      { name: 'Performance Marketing & Paid Media', href: '/growth-solutions/performance-marketing' },
      { name: 'Social Media Marketing & Brand Engagement', href: '/growth-solutions/social-media-marketing' },
      { name: 'Email Marketing & Marketing Automation', href: '/growth-solutions/email-marketing' },
      { name: 'Creative Solutions', href: '/growth-solutions/creative-solutions' },
      { name: 'Conversion Rate Optimization (CRO)', href: '/growth-solutions/conversion-optimization' },
      { name: 'SEO & Website Growth', href: '/growth-solutions/seo-website-growth' },
      { name: 'Website Solutions', href: '/growth-solutions/website-solutions' },
    ],
    specializedGrowth: [
      { name: 'Deep Dive Audit & Strategic Insights', href: '/specialized-growth-solutions/audit-insights' },
      { name: 'Analytics and Event Tracking Setup', href: '/specialized-growth-solutions/analytics-tracking' },
      { name: 'Lead Generation & Funnel Strategy', href: '/specialized-growth-solutions/lead-generation' },
      { name: 'Brand Architecture & Strategy', href: '/specialized-growth-solutions/brand-strategy' },
      { name: 'Content Strategy & Planning', href: '/specialized-growth-solutions/content-strategy' },
      { name: 'AI-Accelerated Content Production', href: '/specialized-growth-solutions/ai-content' },
      { name: 'Executive Personal Branding', href: '/specialized-growth-solutions/executive-branding' },
    ],
    coreStrategic: [
      { name: 'Process & Workflow Automation', href: '/strategic-solutions/process-automation' },
      { name: 'Digital Systems Enablement', href: '/strategic-solutions/digital-systems-enablement' },
      { name: 'Custom Solution Engineering', href: '/strategic-solutions/custom-solution-engineering' },
      { name: 'Enterprise Evolution & Strategic Transformation', href: '/strategic-solutions/enterprise-evolution' },
    ],
    strategicByFunction: [
      { name: 'Finance Operations', href: '/strategic-solutions/finance-operations' },
      { name: 'Operations', href: '/strategic-solutions/operations' },
      { name: 'Human Resources', href: '/strategic-solutions/human-resources' },
      { name: 'Compliance & Governance', href: '/strategic-solutions/compliance-governance' },
      { name: 'Cross-Functional Leadership', href: '/strategic-solutions/cross-functional-leadership' },
      { name: 'Market Research', href: '/strategic-solutions/market-research' },
      { name: 'Process Optimization', href: '/strategic-solutions/process-optimization' },
    ],
  };

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12">
        <div className="grid gap-8 sm:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-12">
          {/* Newsletter Section with Clickable Logo */}
          <div className="relative lg:col-span-2">
            <button 
              onClick={handleLogoClick}
              className="mb-4 cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="Go to homepage"
            >
              <img
                src={LogoTeal}
                alt="Perssonify Logo"
                className="object-contain h-10 w-auto sm:h-12"
              />
            </button>
            <p className="mb-3 text-xs text-muted-foreground">Empowering businesses with growth and strategic solutions worldwide.</p>
            <p className="mb-4 sm:mb-6 text-sm text-muted-foreground">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="relative space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-background pr-12 placeholder:text-muted-foreground/50"
                  required
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-1 top-1 h-8 w-8 p-0"
                  disabled={isSubscribing}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold text-foreground">Company</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Growth Solutions */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold text-foreground">Core Growth Solutions</h3>
            <ul className="space-y-2">
              {solutions.coreGrowth.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialized Growth Solutions */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold text-foreground">Specialized Growth Solutions</h3>
            <ul className="space-y-2">
              {solutions.specializedGrowth.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Strategic Solutions */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold text-foreground">Core Strategic Solutions</h3>
            <ul className="space-y-2">
              {solutions.coreStrategic.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Strategic Solutions by Function */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold text-foreground">Strategic Solutions by Function</h3>
            <ul className="space-y-2">
              {solutions.strategicByFunction.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 sm:mt-12 border-t pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2">Contact Information</h3>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p>Email: contact@perssonify.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Business Ave, Suite 100, City, State 12345</p>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              <p>&copy; {currentYear} Perssonify. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
