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
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img src={sharpSolLogo} alt="Sharp Sol Logo" className="h-8 w-8" />
            <span className="text-xl font-bold gradient-text">SHARP SOL</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-700 hover:text-[hsl(219,82%,61%)] transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-700 hover:text-[hsl(219,82%,61%)] transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="text-gray-700 hover:text-[hsl(219,82%,61%)] transition-colors font-medium"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 hover:text-[hsl(219,82%,61%)] transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-gradient-to-r from-[hsl(219,82%,61%)] to-[hsl(173,85%,40%)] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="text-gray-700 h-6 w-6" />
            ) : (
              <Menu className="text-gray-700 h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block w-full text-left text-gray-700 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="block w-full text-left text-gray-700 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="block w-full text-left text-gray-700 font-medium"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left text-gray-700 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-gradient-to-r from-[hsl(219,82%,61%)] to-[hsl(173,85%,40%)] text-white px-6 py-2 rounded-full text-center w-full"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
