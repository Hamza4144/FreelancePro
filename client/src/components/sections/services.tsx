import { Rocket, TrendingUp, Shield, Clock, DollarSign, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Rocket,
      title: "High-Converting Websites",
      description: "Websites that turn visitors into customers with proven conversion strategies.",
      result: "3x More Sales",
      price: "From $2,999",
      features: ["Mobile-First Design", "Speed Optimized", "SEO Ready", "Conversion Focused"],
      popular: true
    },
    {
      icon: "fab fa-wordpress",
      title: "WordPress Powerhouse",
      description: "Custom WordPress solutions that dominate search rankings and drive traffic.",
      result: "Top Google Rankings",
      price: "From $1,999",
      features: ["Custom Themes", "Plugin Development", "E-commerce Ready", "Content Strategy"]
    },
    {
      icon: Target,
      title: "Web Applications",
      description: "Custom web apps that automate your business and scale with your growth.",
      result: "50% Time Saved",
      price: "From $4,999",
      features: ["React.js & Laravel", "Database Design", "API Integration", "Cloud Hosting"]
    },
    {
      icon: TrendingUp,
      title: "E-commerce Solutions",
      description: "Online stores that sell 24/7 with automated marketing and payment systems.",
      result: "24/7 Sales Machine",
      price: "From $3,999",
      features: ["Payment Gateway", "Inventory System", "Marketing Tools", "Analytics Dashboard"]
    },
    {
      icon: Shield,
      title: "API & Integrations",
      description: "Connect your systems with powerful APIs for seamless business operations.",
      result: "100% Automation",
      price: "From $1,499",
      features: ["Google APIs", "Twilio SMS", "Firebase", "Third-party Tools"]
    },
    {
      icon: Clock,
      title: "Support & Maintenance",
      description: "Keep your website running fast, secure, and updated 24/7.",
      result: "99.9% Uptime",
      price: "From $299/mo",
      features: ["Security Updates", "Performance Monitoring", "Backup System", "Priority Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
            Stop Losing Money to <span className="gradient-text">Bad Websites</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Every day your website doesn't convert is money down the drain. 
            Here's how we fix that and turn your website into a profit machine.
          </p>
          <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full font-bold text-lg">
            🎯 Guaranteed Results or Money Back
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`card-hover border-2 shadow-xl relative overflow-hidden ${service.popular ? 'border-[hsl(219,82%,61%)] bg-gradient-to-br from-blue-50 to-white' : 'border-gray-200'}`}>
              {service.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-[hsl(219,82%,61%)] to-[hsl(173,85%,40%)] text-white px-4 py-2 text-sm font-bold">
                  🔥 MOST POPULAR
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(219,82%,61%)] to-[hsl(173,85%,40%)] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  {typeof service.icon === 'string' ? (
                    <i className={`${service.icon} text-white text-2xl`}></i>
                  ) : (
                    <service.icon className="text-white h-8 w-8" />
                  )}
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <div className="text-right">
                    <div className="text-sm font-bold text-green-600">{service.result}</div>
                    <div className="text-lg font-black gradient-text">{service.price}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="text-sm space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <i className="fas fa-check text-white text-xs"></i>
                      </div>
                      <span className="font-medium text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={scrollToContact}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${
                    service.popular 
                      ? 'gradient-bg text-white shadow-lg hover:shadow-xl' 
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Get Started Now
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[hsl(219,82%,61%)] to-[hsl(173,85%,40%)] p-1 rounded-2xl max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">⚡ Ready to 10x Your Business?</h3>
              <p className="text-xl text-gray-600 mb-6">
                Don't let another day pass losing customers to competitors. 
                Let's build something that actually makes you money.
              </p>
              <button 
                onClick={scrollToContact}
                className="gradient-bg text-white px-12 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all transform hover:scale-105 magnetic-hover"
              >
                🚀 Start My Project Today
              </button>
              <p className="text-sm text-gray-500 mt-4">Free consultation • No commitments • 24h response time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
