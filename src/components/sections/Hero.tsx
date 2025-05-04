
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
      
      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        <div className="space-y-8 md:space-y-10">
          <p 
            className={`text-primary font-medium text-lg md:text-xl transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0 transform translate-y-4"
            }`}
          >
            Hello, I'm
          </p>
          
          <h1 
            className={`display-text text-slate-900 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100" : "opacity-0 transform translate-y-4"
            }`}
          >
            John Doe
          </h1>
          
          <h2 
            className={`headline-text text-slate-700 transition-all duration-700 delay-700 ${
              isVisible ? "opacity-100" : "opacity-0 transform translate-y-4"
            }`}
          >
            I create exceptional<br className="hidden md:inline" /> digital experiences.
          </h2>
          
          <p 
            className={`body-text max-w-2xl transition-all duration-700 delay-900 ${
              isVisible ? "opacity-100" : "opacity-0 transform translate-y-4"
            }`}
          >
            I'm a full-stack developer specializing in building and designing 
            exceptional digital experiences. Currently, I'm focused on creating 
            accessible, human-centered products.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 pt-6 transition-all duration-700 delay-1000 ${
              isVisible ? "opacity-100" : "opacity-0 transform translate-y-4"
            }`}
          >
            <Button 
              className="apple-button group"
              onClick={scrollToProjects}
            >
              View my work
            </Button>
            <a href="#contact">
              <Button variant="outline" className="apple-button-secondary">
                Get in touch
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <p className="text-slate-600 mb-2 text-sm animate-pulse">Scroll to explore</p>
        <ArrowDown className="h-5 w-5 text-slate-600 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
