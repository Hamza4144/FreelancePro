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
      title: "Custom Websites",
      description: "Professional websites built with modern technologies and best practices.",
      result: "Professional Results",
      price: "Starting at $2,500",
      features: ["Mobile-Responsive", "Fast Loading", "SEO Optimized", "User-Friendly"],
      popular: true
    },
    {
      icon: "fab fa-wordpress",
      title: "WordPress Development",
      description: "Custom WordPress solutions for businesses of all sizes.",
      result: "Easy Management",
      price: "Starting at $1,800",
      features: ["Custom Themes", "Plugin Development", "Content Management", "SEO Ready"]
    },
    {
      icon: Target,
      title: "Web Applications",
      description: "Custom web applications to streamline your business processes.",
      result: "Business Efficiency",
      price: "Starting at $4,500",
      features: ["React.js & Laravel", "Database Integration", "API Development", "Scalable Design"]
    },
    {
      icon: TrendingUp,
      title: "E-commerce Solutions",
      description: "Online stores with secure payment processing and inventory management.",
      result: "Online Sales",
      price: "Starting at $3,500",
      features: ["Payment Integration", "Product Management", "Order Processing", "Mobile Commerce"]
    },
    {
      icon: Shield,
      title: "API Integration",
      description: "Connect your website with third-party services and platforms.",
      result: "Seamless Integration",
      price: "Starting at $1,200",
      features: ["Google Services", "Payment APIs", "Social Media", "Custom Solutions"]
    },
    {
      icon: Clock,
      title: "Maintenance & Support",
      description: "Ongoing website maintenance and technical support services.",
      result: "Peace of Mind",
      price: "From $250/month",
      features: ["Regular Updates", "Security Monitoring", "Backup Services", "Technical Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional web development solutions designed to help your business succeed online.
          </p>
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-full font-bold text-lg">
            Quality Results & Professional Support
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
                  Learn More
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
