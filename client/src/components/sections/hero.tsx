import { ArrowRight } from "lucide-react";
import sharpSolLogo from "@assets/SharpSol_logo_1752821833915.png";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(219,82%,61%)]/5 to-[hsl(173,85%,40%)]/5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[hsl(219,82%,61%)]/20 to-[hsl(173,85%,40%)]/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-[hsl(173,85%,40%)]/20 to-[hsl(219,82%,61%)]/20 rounded-full animate-float" style={{animationDelay: '-1s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Company Logo */}
          <div className="mb-8 animate-fadeInUp">
            <img src={sharpSolLogo} alt="Sharp Sol Logo" className="h-24 w-24 mx-auto mb-4" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-4">SHARP SOL</h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-medium mb-8 tracking-wide">LET'S PLAY WITH THE CODE</p>
          </div>
          
          <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Professional Web Development 
              <span className="gradient-text"> Solutions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              With 5 years of expertise in modern web technologies, we craft exceptional digital experiences. 
              From custom web applications to WordPress solutions, we bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-gradient-to-r from-[hsl(219,82%,61%)] to-[hsl(173,85%,40%)] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105 w-full sm:w-auto"
              >
                View Our Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-[hsl(219,82%,61%)] text-[hsl(219,82%,61%)] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[hsl(219,82%,61%)] hover:text-white transition-all w-full sm:w-auto"
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          {/* Tech Stack Preview */}
          <div className="mt-16 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-6">Technologies We Master</p>
            <div className="flex flex-wrap justify-center gap-6 text-3xl text-gray-400">
              <i className="fab fa-php tech-icon" title="PHP"></i>
              <i className="fab fa-laravel tech-icon" title="Laravel"></i>
              <i className="fab fa-wordpress tech-icon" title="WordPress"></i>
              <i className="fab fa-js-square tech-icon" title="JavaScript"></i>
              <i className="fab fa-react tech-icon" title="React"></i>
              <i className="fab fa-html5 tech-icon" title="HTML5"></i>
              <i className="fab fa-css3-alt tech-icon" title="CSS3"></i>
              <i className="fab fa-bootstrap tech-icon" title="Bootstrap"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
