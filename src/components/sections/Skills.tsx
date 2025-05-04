
import React from "react";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "mobile" | "tools";
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: "React", level: 95, category: "frontend" },
    { name: "TypeScript", level: 90, category: "frontend" },
    { name: "Next.js", level: 85, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "React Native", level: 85, category: "mobile" },
    { name: "Flutter", level: 75, category: "mobile" },
    { name: "Swift", level: 70, category: "mobile" },
    { name: "Node.js", level: 88, category: "backend" },
    { name: "Express", level: 85, category: "backend" },
    { name: "MongoDB", level: 80, category: "backend" },
    { name: "PostgreSQL", level: 80, category: "backend" },
    { name: "GraphQL", level: 78, category: "backend" },
    { name: "Docker", level: 75, category: "tools" },
    { name: "Git", level: 92, category: "tools" },
    { name: "CI/CD", level: 85, category: "tools" },
  ];

  const categories = [
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "mobile", name: "Mobile" },
    { id: "tools", name: "Tools & DevOps" },
  ];

  return (
    <section id="skills" className="py-20">
      <h2 className="section-heading">Skills</h2>
      
      <div className="space-y-12">
        {categories.map((category) => (
          <div key={category.id} className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-light">{category.name}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills
                .filter((skill) => skill.category === category.id)
                .map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-mono text-slate-lightest">{skill.name}</span>
                      <span className="text-slate">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2 bg-navy-light"
                      indicatorClassName="bg-teal"
                    />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
