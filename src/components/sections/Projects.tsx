
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

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
    <section id="projects" className="py-20">
      <h2 className="section-heading">Projects</h2>
      
      <div className="grid gap-10 md:gap-24">
        {displayedProjects.map((project, index) => (
          <div 
            key={project.id} 
            className={`relative md:grid md:grid-cols-12 md:items-center gap-4 md:gap-10 ${
              index % 2 === 0 ? '' : 'md:text-right'
            }`}
          >
            {/* Project Image (background on mobile, right side on desktop for even indexes) */}
            <div 
              className={`hidden md:block md:col-span-7 relative rounded overflow-hidden ${
                index % 2 === 0 ? 'md:order-2' : 'md:order-1'
              }`}
            >
              <div className="aspect-video bg-navy-light relative group">
                <div className="absolute inset-0 bg-teal/20 group-hover:bg-transparent transition-all duration-300 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center text-slate">
                  Project Image
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className={`md:col-span-7 md:col-start-1 md:row-start-1 z-10 ${
              index % 2 === 0 ? 'md:order-1 md:col-span-6 md:col-start-1' : 'md:order-2 md:col-span-6 md:col-start-7'
            }`}>
              <div className="bg-navy-light p-6 md:p-0 rounded-lg md:bg-transparent">
                <p className="font-mono text-teal text-sm mb-1">Featured Project</p>
                <h3 className="text-2xl font-semibold text-slate-lightest mb-4">{project.title}</h3>
                
                <div className="bg-navy-light p-6 rounded-lg shadow-xl mb-4 md:mb-5">
                  <p className="text-slate">{project.description}</p>
                </div>
                
                <ul className={`flex flex-wrap text-xs gap-x-3 gap-y-2 font-mono text-slate mb-4 ${
                  index % 2 === 0 ? '' : 'md:justify-end'
                }`}>
                  {project.tech.map(tech => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                
                <div className={`flex gap-4 ${
                  index % 2 === 0 ? '' : 'md:justify-end'
                }`}>
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-lightest hover:text-teal transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.external && (
                    <a 
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-lightest hover:text-teal transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-16">
        <Button
          variant="outline"
          className="border-teal text-teal hover:bg-navy-light"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View More Projects"}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default Projects;
