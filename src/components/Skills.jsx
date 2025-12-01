import React from 'react';
import {
  Monitor, Server, Database, Terminal, // Main Category Icons
  Code2, Palette, Smartphone, // Frontend Icons
  FileJson, Webhook, Cpu, // Backend Icons
  Cylinder, HardDrive, // Database Icons
  GitMerge, Container, Cloud, Trello // DevOps Icons
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      mainIcon: <Monitor size={40} />,
      skills: [
        { name: "React", icon: <Code2 size={24} /> },
        { name: "Next.js", icon: <Code2 size={24} /> },
        { name: "TypeScript", icon: <Code2 size={24} /> },
        { name: "Tailwind CSS", icon: <Code2 size={24} /> },
        { name: "UI/UX Design", icon: <Palette size={24} /> },
        { name: "Responsive Design", icon: <Smartphone size={24} /> },
      ],
    },
    {
      title: "Backend Development",
      mainIcon: <Server size={40} />,
      skills: [
        { name: "Node.js", icon: <FileJson size={24} /> },
        { name: "Express.js", icon: <FileJson size={24} /> },
        { name: "Php", icon: <Code2 size={24} /> },
        { name: "GraphQL", icon: <Database size={24} /> },
        { name: "RESTful APIs", icon: <Webhook size={24} /> },
        { name: "Microservices", icon: <Cpu size={24} /> },
      ],
    },
    {
      title: "Database Management",
      mainIcon: <Database size={40} />,
      skills: [
        { name: "MongoDB", icon: <Cylinder size={24} /> },
        { name: "MySQL", icon: <Cylinder size={24} /> },
        { name: "Redis", icon: <Cylinder size={24} /> },
        { name: "Firebase", icon: <HardDrive size={24} /> },
      ],
    },
    {
      title: "Tools & DevOps",
      mainIcon: <Terminal size={40} />,
      skills: [
        { name: "Git/GitHub", icon: <GitMerge size={24} /> },
        { name: "Docker", icon: <Container size={24} /> },
        { name: "AWS", icon: <Cloud size={24} /> },
        { name: "Netlify", icon: <Cloud size={24} /> },
        { name: "Vercel", icon: <Cloud size={24} /> },
        { name: "Jira", icon: <Trello size={24} /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
          My Skills
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            // Main Card
            <div 
              key={index}
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center group"
            >
              
              {/* Main Category Icon */}
              <div className="text-blue-600 dark:text-blue-400 mb-6 p-4 bg-blue-50 dark:bg-slate-700/50 rounded-2xl group-hover:scale-105 transition-transform">
                {category.mainIcon}
              </div>
              
              {/* Card Title */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8">
                {category.title}
              </h3>
              
              {/* Internal Skills Grid */}
              <div className="grid grid-cols-2 gap-y-8 gap-x-4 w-full">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col items-center gap-2 group/skill">
                    <div className="text-slate-500 dark:text-slate-400 group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                      {skill.name}
                    </span>
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