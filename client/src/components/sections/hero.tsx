import { ArrowRight, Code2, Zap, Trophy, Users } from "lucide-react";
import sharpSolLogo from "@assets/SharpSol_logo_1752821833915.png";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroTexts = [
    "Turn Your Ideas Into Reality",
    "Boost Your Business Online", 
    "Get Results That Matter",
    "Build Something Amazing"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const achievements = [
    { icon: Code2, value: "150+", label: "Projects Delivered" },
    { icon: Users, value: "100+", label: "Happy Clients" },
    { icon: Trophy, value: "5+", label: "Years Experience" },
    { icon: Zap, value: "24h", label: "Response Time" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(219,82%,61%)]/20 via-transparent to-[hsl(173,85%,40%)]/20 animate-gradient"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-20 w-2 h-2 bg-[hsl(219,82%,61%)] rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-[hsl(173,85%,40%)] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-[hsl(271,81%,56%)] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-[hsl(25,95%,53%)] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
      </div>

      {/* Floating Logo Elements */}
      <div className="absolute top-32 left-16 opacity-10 animate-float">
        <img src={sharpSolLogo} alt="" className="h-16 w-16" />
      </div>
      <div className="absolute bottom-32 right-16 opacity-10 animate-float" style={{animationDelay: '-2s'}}>
        <img src={sharpSolLogo} alt="" className="h-20 w-20" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Logo and Title */}
          <div className="mb-12 animate-scaleIn">
            <img src={sharpSolLogo} alt="Sharp Sol Logo" className="h-32 w-32 mx-auto mb-6 drop-shadow-2xl" />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black gradient-text mb-4 text-shadow">SHARP SOL</h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-bold mb-8 tracking-[0.2em] uppercase">LET'S PLAY WITH THE CODE</p>
          </div>
          
          {/* Dynamic Headline */}
          <div className="mb-12 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight h-16 flex items-center justify-center">
              <span className="typewriter">{heroTexts[currentText]}</span>
            </div>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
              🚀 Ready to dominate your market? We build <span className="gradient-text font-bold">high-converting websites</span> that turn visitors into customers in just 5 seconds.
            </p>
          </div>

          {/* Compelling CTA Section */}
          <div className="mb-16 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <div className="bg-gradient-to-r from-[hsl(219,82%,61%)] to-[hsl(173,85%,40%)] p-1 rounded-2xl mb-8 max-w-2xl mx-auto">
              <div className="bg-black rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">🎯 What If Your Website Could...</h3>
                <ul className="text-left text-gray-300 space-y-2 max-w-md mx-auto">
                  <li>✅ Convert 3x more visitors into customers</li>
                  <li>✅ Load in under 2 seconds (Google loves this)</li>
                  <li>✅ Work perfectly on any device</li>
                  <li>✅ Rank #1 on Google searches</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
              <button 
                onClick={() => scrollToSection('contact')}
                className="gradient-bg text-white px-12 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all transform hover:scale-105 magnetic-hover w-full sm:w-auto text-shadow pulse-slow"
              >
                🔥 Get My Website Now
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="glass-effect text-white border-2 border-white/30 px-12 py-5 rounded-full font-bold text-xl hover:bg-white/20 transition-all w-full sm:w-auto magnetic-hover"
              >
                See Success Stories
              </button>
            </div>
            
            <p className="text-yellow-400 font-bold mt-4 animate-pulse">⚡ Free consultation • 24h response guaranteed</p>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-slideInLeft" style={{animationDelay: '0.9s'}}>
            {achievements.map((achievement, index) => (
              <div key={index} className="glass-effect p-6 rounded-2xl text-center magnetic-hover">
                <achievement.icon className="h-8 w-8 text-[hsl(173,85%,40%)] mx-auto mb-3" />
                <div className="text-3xl font-black gradient-text mb-1">{achievement.value}</div>
                <div className="text-gray-300 text-sm font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
