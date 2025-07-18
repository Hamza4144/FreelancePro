import { ArrowRight } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Projects Completed", value: "150+" },
    { label: "Happy Clients", value: "100+" },
    { label: "Years Experience", value: "5+" }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">5 Years</span> of Excellence in Web Development
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Sharp Sol, we're passionate about creating exceptional web experiences. 
              With half a decade of expertise in modern web technologies, we've helped 
              businesses transform their digital presence and achieve their goals.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team specializes in cutting-edge technologies and follows industry 
              best practices to deliver scalable, secure, and user-friendly solutions. 
              From concept to deployment, we're your trusted development partner.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={scrollToContact}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[hsl(219,82%,61%)] to-[hsl(173,85%,40%)] text-white font-semibold rounded-full hover:shadow-lg transition-all"
            >
              Let's Work Together
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional development team" 
              className="rounded-2xl shadow-2xl w-full"
            />
            
            {/* Floating Tech Cards */}
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <i className="fab fa-react text-blue-500 text-xl"></i>
                <span className="font-semibold text-gray-900">React.js</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <i className="fab fa-laravel text-red-500 text-xl"></i>
                <span className="font-semibold text-gray-900">Laravel</span>
              </div>
            </div>
            
            <div className="absolute top-1/2 -right-8 bg-white p-4 rounded-xl shadow-lg transform -translate-y-1/2">
              <div className="flex items-center space-x-2">
                <i className="fab fa-wordpress text-blue-600 text-xl"></i>
                <span className="font-semibold text-gray-900">WordPress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
