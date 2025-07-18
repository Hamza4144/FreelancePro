import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Portfolio from "@/components/sections/portfolio";
import About from "@/components/sections/about";
import Technologies from "@/components/sections/technologies";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}
