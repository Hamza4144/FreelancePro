import { useState } from "react";
import { Menu, X } from "lucide-react";
import sharpSolLogo from "@assets/SharpSol_logo_1752821833915.png";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img src={sharpSolLogo} alt="Sharp Sol Logo" className="h-10 w-10" />
            <span className="text-xl font-black gradient-text">SHARP SOL</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-300 hover:text-white transition-colors font-medium relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-bg transition-all group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-300 hover:text-white transition-colors font-medium relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-bg transition-all group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="text-gray-300 hover:text-white transition-colors font-medium relative group"
            >
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-bg transition-all group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-300 hover:text-white transition-colors font-medium relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-bg transition-all group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="gradient-bg text-white px-6 py-2 rounded-full hover:shadow-xl transition-all transform hover:scale-105 font-bold"
            >
              Contact Us
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="text-white h-6 w-6" />
            ) : (
              <Menu className="text-white h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800">
          <div className="px-4 py-6 space-y-4">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block w-full text-left text-gray-300 font-medium py-2 hover:text-white transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="block w-full text-left text-gray-300 font-medium py-2 hover:text-white transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="block w-full text-left text-gray-300 font-medium py-2 hover:text-white transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left text-gray-300 font-medium py-2 hover:text-white transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="gradient-bg text-white px-6 py-3 rounded-full text-center w-full font-bold hover:shadow-lg transition-all transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
