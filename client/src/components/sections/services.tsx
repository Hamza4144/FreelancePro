import { Globe, Settings, Paintbrush, Plug, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web Applications",
      description: "Custom web applications built with modern frameworks and best practices for scalability and performance.",
      features: ["React.js & JavaScript", "Laravel & PHP", "Database Integration"]
    },
    {
      icon: "fab fa-wordpress",
      title: "WordPress Solutions",
      description: "Custom WordPress themes, plugins, and complete website solutions for businesses of all sizes.",
      features: ["Custom Themes", "Plugin Development", "E-commerce Integration"]
    },
    {
      icon: Settings,
      title: "CMS Development",
      description: "Content management systems built with CodeIgniter and other modern frameworks for easy content control.",
      features: ["CodeIgniter Framework", "Admin Panels", "User Management"]
    },
    {
      icon: Paintbrush,
      title: "Frontend Development",
      description: "Responsive and interactive user interfaces using modern frontend technologies and frameworks.",
      features: ["HTML5, CSS3, JavaScript", "jQuery & Bootstrap", "Responsive Design"]
    },
    {
      icon: Plug,
      title: "API Integration",
      description: "Seamless integration with third-party services to extend your application's functionality.",
      features: ["Google APIs", "Twilio Integration", "Firebase Services"]
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Ongoing website maintenance, updates, and technical support to keep your site running smoothly.",
      features: ["Regular Updates", "Security Monitoring", "Performance Optimization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border border-gray-100 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(219,82%,61%)] to-[hsl(173,85%,40%)] rounded-xl flex items-center justify-center mb-6">
                  {typeof service.icon === 'string' ? (
                    <i className={`${service.icon} text-white text-2xl`}></i>
                  ) : (
                    <service.icon className="text-white h-8 w-8" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <i className="fas fa-check text-[hsl(158,84%,39%)] mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
