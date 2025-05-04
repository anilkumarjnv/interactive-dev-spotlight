
import React, { useEffect, useRef } from "react";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".fade-in-up");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="about" className="py-24 md:py-32" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-heading text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center" ref={contentRef}>
          <div className="space-y-6 fade-in-up">
            <p className="body-text">
              Hello! I'm John, a passionate full-stack and mobile app developer with a love for 
              creating elegant, intuitive digital experiences that solve real problems.
            </p>
            
            <p className="body-text">
              My journey in software development began during my university years, where I discovered 
              my passion for building products that seamlessly blend form and function. Today, I specialize 
              in crafting high-performance web and mobile applications with a focus on clean code, thoughtful 
              user experience, and cutting-edge technologies.
            </p>
            
            <p className="body-text">
              Outside of building digital products, I enjoy sharing my knowledge through writing, 
              mentoring emerging developers, and contributing to open-source projects. I'm driven by a 
              constant desire to learn and improve my craft.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-medium mb-3">Technologies I've been working with recently:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4">
                <div className="flex items-center">
                  <span className="text-primary mr-2">◆</span>
                  <span>JavaScript (ES6+)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-2">◆</span>
                  <span>TypeScript</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-2">◆</span>
                  <span>React Native</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-2">◆</span>
                  <span>React</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-2">◆</span>
                  <span>Node.js</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary mr-2">◆</span>
                  <span>GraphQL</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative fade-in-up" style={{ "--stagger-delay": "0.3s" } as any}>
            <div className="aspect-square max-w-md mx-auto">
              <div className="relative rounded-2xl overflow-hidden h-full">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100 z-0"></div>
                
                {/* Photo placeholder - replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 p-8 shadow-lg">
                    <div className="text-center">
                      <div className="w-48 h-48 mx-auto rounded-full bg-white mb-4 overflow-hidden flex items-center justify-center">
                        <span className="text-gray-400">Profile Image</span>
                      </div>
                      <p className="text-gray-600">John Doe</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-primary/10 animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-8 h-8 rounded-full bg-primary/20 animate-float" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
