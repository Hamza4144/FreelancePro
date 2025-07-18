import { Card, CardContent } from "@/components/ui/card";

export default function Technologies() {
  const techCategories = [
    {
      title: "Backend",
      technologies: [
        { name: "PHP", icon: "fab fa-php", color: "text-blue-600" },
        { name: "Laravel", icon: "fab fa-laravel", color: "text-red-500" },
        { name: "CodeIgniter", icon: "fas fa-fire", color: "text-orange-500" }
      ]
    },
    {
      title: "Frontend",
      technologies: [
        { name: "React.js", icon: "fab fa-react", color: "text-blue-400" },
        { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-500" },
        { name: "Bootstrap", icon: "fab fa-bootstrap", color: "text-purple-600" }
      ]
    },
    {
      title: "CMS & Platforms",
      technologies: [
        { name: "WordPress", icon: "fab fa-wordpress", color: "text-blue-600" },
        { name: "Custom CMS", icon: "fas fa-cogs", color: "text-gray-600" },
        { name: "E-commerce", icon: "fas fa-shopping-cart", color: "text-green-600" }
      ]
    },
    {
      title: "APIs & Services",
      technologies: [
        { name: "Google APIs", icon: "fab fa-google", color: "text-red-500" },
        { name: "Twilio", icon: "fas fa-sms", color: "text-blue-500" },
        { name: "Firebase", icon: "fas fa-fire", color: "text-orange-400" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We use cutting-edge technologies to build robust and scalable solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <Card key={techIndex} className="hover:shadow-md transition-shadow border border-gray-100">
                    <CardContent className="p-4">
                      <i className={`${tech.icon} text-4xl ${tech.color} mb-2`}></i>
                      <div className="font-semibold text-gray-900">{tech.name}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
