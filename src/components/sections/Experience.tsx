
import React, { useState } from "react";
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

  const [activeTab, setActiveTab] = useState(jobs[0].id);

  return (
    <section id="experience" className="py-20">
      <h2 className="section-heading">Work Experience</h2>
      
      <div className="mt-10">
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <TabsList className="md:flex-col h-auto bg-transparent space-x-2 md:space-x-0 md:space-y-1 overflow-x-auto md:overflow-visible md:w-max">
              {jobs.map((job) => (
                <TabsTrigger
                  key={job.id}
                  value={job.id}
                  className="px-4 py-2 md:py-3 md:px-5 data-[state=active]:bg-navy-light data-[state=active]:text-teal border-b-2 border-transparent data-[state=active]:border-teal md:border-l-2 md:border-b-0 text-left font-mono whitespace-nowrap"
                >
                  {job.company}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <div className="w-full bg-navy-light rounded-lg">
              {jobs.map((job) => (
                <TabsContent key={job.id} value={job.id} className="px-6 py-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-lightest">
                        {job.title}{" "}
                        <span className="text-teal">@ {job.company}</span>
                      </h3>
                      <div className="flex items-center gap-4 mt-1 text-sm text-slate">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          <span>{job.range}</span>
                        </div>
                        <div>{job.location}</div>
                      </div>
                      {job.url && (
                        <a 
                          href={job.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm gap-1.5 text-slate hover:text-teal mt-2"
                        >
                          <ExternalLink size={14} />
                          <span>Company Website</span>
                        </a>
                      )}
                    </div>
                    
                    <ul className="space-y-3">
                      {job.responsibilities.map((item, i) => (
                        <li key={i} className="flex gap-2 text-slate">
                          <span className="text-teal flex-shrink-0">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
