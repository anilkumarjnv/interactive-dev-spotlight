
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <h2 className="section-heading">About Me</h2>
      
      <div className="grid md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-2 space-y-4 text-slate">
          <p>
            Hello! I'm John, a passionate full-stack and mobile app developer who loves 
            creating exceptional digital experiences. My journey in software development 
            began during my college years when I built a simple mobile app for my campus 
            organization.
          </p>
          
          <p>
            Since then, I've had the privilege of working at <span className="text-teal">a fast-paced startup</span>,
            <span className="text-teal"> a large tech corporation</span>, and as
            <span className="text-teal"> an independent consultant</span>. My focus these days
            is building accessible, inclusive products and digital experiences for a variety of clients.
          </p>
          
          <p>
            I also spend time sharing what I've learned through open-source contributions,
            writing technical articles, and mentoring emerging developers. My approach combines
            clean code principles with thoughtful user experience design.
          </p>
          
          <p>Here are some technologies I've been working with recently:</p>
          
          <div className="grid grid-cols-2 gap-2 mt-6 font-mono text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-teal">▹</span>
              <span>JavaScript (ES6+)</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-teal">▹</span>
              <span>TypeScript</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-teal">▹</span>
              <span>React Native</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-teal">▹</span>
              <span>React</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-teal">▹</span>
              <span>Node.js</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-teal">▹</span>
              <span>GraphQL</span>
            </div>
          </div>
        </div>
        
        <div className="relative group">
          <div className="relative rounded-md overflow-hidden transition-all">
            <div className="absolute inset-0 bg-teal/20 rounded-md z-10 transition-all group-hover:bg-transparent"></div>
            <div className="w-full h-full bg-navy-light rounded-md relative z-0">
              {/* Placeholder for profile image */}
              <div className="aspect-square w-full bg-navy-light flex items-center justify-center text-slate-light">
                <div className="border-2 border-teal p-4 rounded-md">
                  Profile Image
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -inset-1 rounded-md border-2 border-teal -z-10 transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
