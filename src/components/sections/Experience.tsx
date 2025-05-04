
import React, { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, ExternalLink } from "lucide-react";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  range: string;
  url?: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState("");
  const sectionRef = useRef<HTMLElement>(null);
  
  const jobs: Job[] = [
    {
      id: "techcorp",
      title: "Senior Full Stack Developer",
      company: "TechCorp",
      location: "San Francisco, CA",
      range: "January 2022 - Present",
      url: "https://example.com",
      responsibilities: [
        "Led the development of a cross-platform mobile app that increased user engagement by 45%",
        "Architected and implemented RESTful APIs and microservices using Node.js and Express",
        "Mentored junior developers and conducted code reviews to ensure high code quality",
        "Implemented CI/CD pipelines that reduced deployment time by 60%",
      ],
    },
    {
      id: "innovateapps",
      title: "Mobile App Developer",
      company: "Innovate Apps",
      location: "Austin, TX",
      range: "June 2020 - December 2021",
      url: "https://example.com",
      responsibilities: [
        "Developed and maintained multiple iOS and Android apps using React Native",
        "Collaborated with UX designers to implement responsive and intuitive user interfaces",
        "Integrated third-party APIs and services including payment gateways and social media",
        "Improved app performance by optimizing render cycles and reducing bundle size",
      ],
    },
    {
      id: "webfusion",
      title: "Frontend Developer",
      company: "WebFusion",
      location: "Remote",
      range: "March 2019 - May 2020",
      url: "https://example.com",
      responsibilities: [
        "Built responsive web applications using React, Redux, and TypeScript",
        "Implemented advanced UI components and animations that improved user experience",
        "Collaborated with backend developers to integrate frontend with APIs",
        "Conducted A/B testing and implemented data-driven UI improvements",
      ],
    },
    {
      id: "techinterns",
      title: "Web Developer Intern",
      company: "Tech Interns",
      location: "Chicago, IL",
      range: "May 2018 - February 2019",
      responsibilities: [
        "Developed and maintained client websites using JavaScript, HTML, and CSS",
        "Assisted in migrating legacy codebase to modern frameworks",
        "Participated in daily stand-ups and sprint planning meetings",
        "Built internal tools to improve team productivity",
      ],
    },
  ];
  
  useEffect(() => {
    setActiveTab(jobs[0].id);
    
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="experience" className="py-24 md:py-32 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-heading text-center mb-16">Work Experience</h2>
        
        <div className="max-w-4xl mx-auto fade-in-up">
          <Tabs 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="flex w-full overflow-x-auto mb-8 justify-center bg-transparent space-x-2">
              {jobs.map((job) => (
                <TabsTrigger
                  key={job.id}
                  value={job.id}
                  className="px-6 py-3 data-[state=active]:bg-white data-[state=active]:text-primary 
                            data-[state=active]:shadow-md rounded-full text-slate-600 text-center"
                >
                  {job.company}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <div className="w-full glass-card p-8 md:p-10">
              {jobs.map((job) => (
                <TabsContent key={job.id} value={job.id} className="focus-visible:outline-none focus-visible:ring-0">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-medium text-slate-900 mb-1">
                        {job.title}{" "}
                        <span className="text-primary">@ {job.company}</span>
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-600">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={16} />
                          <span>{job.range}</span>
                        </div>
                        <div>{job.location}</div>
                        {job.url && (
                          <a 
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm gap-1.5 text-primary hover:underline"
                          >
                            <ExternalLink size={16} />
                            <span>Company Website</span>
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <ul className="space-y-3 ml-5 list-disc marker:text-primary">
                      {job.responsibilities.map((item, i) => (
                        <li key={i} className="pl-2 text-slate-600">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Experience;
