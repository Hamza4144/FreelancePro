import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "TechStart E-commerce",
      description: "Converted 400% more visitors into customers with strategic UX design and conversion optimization.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "webapp",
      technologies: ["Laravel", "MySQL", "Bootstrap", "Stripe API"],
      results: "400% increase in conversions",
      timeline: "6 weeks",
      revenue: "$2.3M+ generated"
    },
    {
      id: 2,
      title: "LawFirm Pro Website",
      description: "Ranked #1 on Google for 15+ keywords, generating 300% more qualified leads monthly.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "wordpress",
      technologies: ["WordPress", "PHP", "Custom Theme", "SEO"],
      results: "#1 Google rankings",
      timeline: "4 weeks",
      revenue: "300% more leads"
    },
    {
      id: 3,
      title: "ProjectFlow SaaS",
      description: "Automated workflow reduced manual tasks by 80%, saving 40+ hours per week for the team.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "webapp",
      technologies: ["React.js", "Node.js", "Firebase", "Real-time"],
      results: "80% time savings",
      timeline: "8 weeks",
      revenue: "$50K+ monthly savings"
    },
    {
      id: 4,
      title: "NewsHub CMS",
      description: "Custom CMS increased content publishing speed by 500% with automated SEO optimization.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "cms",
      technologies: ["CodeIgniter", "MySQL", "TinyMCE", "Admin Panel"],
      results: "500% faster publishing",
      timeline: "5 weeks",
      revenue: "2M+ page views"
    },
    {
      id: 5,
      title: "Bella Vista Restaurant",
      description: "Online ordering system increased revenue by 250% during first 3 months of launch.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "wordpress",
      technologies: ["WordPress", "WooCommerce", "Google API", "Reservations"],
      results: "250% revenue boost",
      timeline: "3 weeks",
      revenue: "$180K+ in 3 months"
    },
    {
      id: 6,
      title: "PropertyPro Platform",
      description: "Real estate platform generated $5M+ in property sales within first 6 months of launch.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "webapp",
      technologies: ["Laravel", "Vue.js", "Google Maps", "Twilio SMS"],
      results: "$5M+ in sales",
      timeline: "10 weeks",
      revenue: "ROI: 1,200%"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'webapp', label: 'Web Apps' },
    { id: 'wordpress', label: 'WordPress' },
    { id: 'cms', label: 'CMS' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our recent projects showcasing professional web solutions for various industries.
          </p>
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-full font-bold text-lg">
            Quality Projects & Satisfied Clients
          </div>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 ${
                activeFilter === filter.id
                  ? 'gradient-bg text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="card-hover border border-gray-200 shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="text-xs bg-blue-100 text-blue-800"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 hover:text-teal-600 font-medium cursor-pointer">
                    View Details
                  </span>
                  <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-blue-600 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Github className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={scrollToContact}
            className="gradient-bg text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4" style={{ display: "inline" }} />
          </button>
        </div>
      </div>
    </section>
  );
}
