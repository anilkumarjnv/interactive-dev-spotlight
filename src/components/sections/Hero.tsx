
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-16">
      <div className="space-y-6">
        <p 
          className={`font-mono text-teal mb-4 transition-all duration-500 ${
            isVisible ? "opacity-100" : "opacity-0 transform translate-y-4"
          }`}
        >
          Hi, my name is
        </p>
        <h1 
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-lightest transition-all duration-500 delay-100 ${
            isVisible ? "opacity-100" : "opacity-0 transform translate-y-4"
          }`}
        >
          John Doe.
        </h1>
        <h2 
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate transition-all duration-500 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0 transform translate-y-4"
          }`}
        >
          I build exceptional digital experiences.
        </h2>
        <p 
          className={`max-w-lg text-slate text-lg md:text-xl leading-relaxed transition-all duration-500 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0 transform translate-y-4"
          }`}
        >
          I'm a full-stack developer specializing in building and designing exceptional digital experiences. 
          Currently, I'm focused on creating accessible, human-centered products.
        </p>
        <div 
          className={`pt-6 transition-all duration-500 delay-400 ${
            isVisible ? "opacity-100" : "opacity-0 transform translate-y-4"
          }`}
        >
          <Button 
            size="lg" 
            className="bg-transparent hover:bg-navy-light text-teal border border-teal group"
          >
            Check out my work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
