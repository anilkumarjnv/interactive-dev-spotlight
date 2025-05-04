
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  external?: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projects = entry.target.querySelectorAll(".project-item");
            projects.forEach((project, index) => {
              setTimeout(() => {
                project.classList.add("appear");
              }, index * 200);
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

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Mobile App",
      description:
        "A fully functional e-commerce mobile application built with React Native. Features include product browsing, cart management, user authentication, and payment processing.",
      image: "placeholder.svg",
      tech: ["React Native", "Redux", "Node.js", "MongoDB", "Stripe API"],
      github: "https://github.com",
      external: "https://example.com",
      featured: true,
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with React and Tailwind CSS. The site features smooth animations, dark mode, and a contact form.",
      image: "placeholder.svg",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com",
      external: "https://example.com",
      featured: true,
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A full-stack task management application with features like task creation, assignment, deadline tracking, and team collaboration.",
      image: "placeholder.svg",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "GraphQL"],
      github: "https://github.com",
      featured: true,
    },
    {
      id: 4,
      title: "Health Tracking App",
      description:
        "A mobile app for tracking health metrics like steps, water intake, and sleep. Includes data visualization and goal setting.",
      image: "placeholder.svg",
      tech: ["Flutter", "Firebase", "Chart.js", "Google Fit API"],
      external: "https://example.com",
      featured: false,
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description:
        "A weather dashboard that shows current conditions and forecasts for multiple locations. Includes interactive maps and alerts.",
      image: "placeholder.svg",
      tech: ["JavaScript", "OpenWeather API", "Leaflet.js", "CSS"],
      github: "https://github.com",
      featured: false,
    },
    {
      id: 6,
      title: "Recipe Finder",
      description:
        "A web application that helps users find recipes based on ingredients they have at home. Includes filtering by dietary restrictions.",
      image: "placeholder.svg",
      tech: ["React", "Node.js", "Express", "MongoDB", "Spoonacular API"],
      github: "https://github.com",
      external: "https://example.com",
      featured: false,
    },
  ];

  const displayedProjects = showAll ? projects : projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-24 md:py-32" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-heading text-center mb-16">Featured Projects</h2>
      
        <div className="space-y-32">
          {displayedProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-item fade-in-up relative overflow-hidden ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              style={{ "--stagger-delay": `${index * 0.2}s` } as any}
            >
              {/* Large project card with hover effect */}
              <div className="flex flex-col md:flex-row items-center">
                {/* Image side */}
                <div className={`w-full md:w-7/12 ${index % 2 === 0 ? 'md:pr-6' : 'md:order-2 md:pl-6'}`}>
                  <div className="relative group hover-scale overflow-hidden rounded-xl">
                    <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center">
                        <p className="text-gray-400">Project Screenshot</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                {/* Content side */}
                <div className={`w-full md:w-5/12 mt-6 md:mt-0 ${index % 2 === 0 ? 'md:order-2 md:pl-6' : 'md:pr-6'}`}>
                  <div className="space-y-4">
                    <h3 className="title-text text-slate-900">{project.title}</h3>
                    <p className="body-text">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map(tech => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-700 hover:text-primary transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <Github size={22} />
                        </a>
                      )}
                      {project.external && (
                        <a 
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-700 hover:text-primary transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={22} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-20">
          <Button
            onClick={() => setShowAll(!showAll)}
            className="apple-button-secondary group"
          >
            {showAll ? "View Less" : "View More Projects"}
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
