
import React, { useEffect, useRef } from "react";
import { Progress } from "@/components/ui/progress";

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number;
}

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll(".skill-progress");
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.classList.add("appear");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ]
    },
    {
      name: "Mobile",
      skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 75 },
        { name: "Swift", level: 70 },
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "GraphQL", level: 78 },
      ]
    },
    {
      name: "Tools & DevOps",
      skills: [
        { name: "Git", level: 92 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 85 },
      ]
    }
  ];
  
  return (
    <section id="skills" className="py-24 md:py-32 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-heading text-center mb-16">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {skillCategories.map((category, index) => (
            <div 
              key={category.name} 
              className="fade-in-up stagger-item glass-card p-8"
              style={{ "--stagger-delay": `${index * 0.15}s` } as any}
            >
              <h3 className="title-text mb-8 text-center">{category.name}</h3>
              
              <div className="space-y-8">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-900">{skill.name}</span>
                      <span className="text-slate-600 font-medium">{skill.level}%</span>
                    </div>
                    
                    <div className="relative h-1 overflow-hidden rounded-full bg-gray-200">
                      <div 
                        className="skill-progress absolute h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: "0%" }}
                        data-width={`${skill.level}%`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
