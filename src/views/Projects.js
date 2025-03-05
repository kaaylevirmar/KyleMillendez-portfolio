import React, { useState } from 'react';
import { FaLaptopCode, FaTools, FaList, FaCode } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const ProjectCard = ({ title, date, description, responsibilities, techStack, icon: Icon, colorClass }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-gray-800 rounded-lg p-6 shadow-xl transition-all duration-500 border border-gray-700"
      style={{
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.2)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-lg bg-opacity-20 ${colorClass.replace('text-', 'bg-')}`}>
            <Icon className={`text-2xl ${colorClass}`} />
          </div>
          <h3 className="text-xl font-bold text-gray-100">{title}</h3>
        </div>
        <span className="text-sm text-gray-400 font-medium">{date}</span>
      </div>

      <p className="text-gray-300 italic mb-6 leading-relaxed">{description}</p>

      <div className="space-y-6">
        <div className="transform transition-all duration-300 hover:translate-x-2">
          <div className="flex items-center gap-2 mb-3">
            <FaList className="text-indigo-400" />
            <h4 className="text-indigo-400 font-semibold">Responsibilities</h4>
          </div>
          <ul className="list-none space-y-2">
            {responsibilities.map((item, index) => (
              <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-indigo-400 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <FaCode className="text-indigo-400" />
            <h4 className="text-indigo-400 font-semibold">Tech Stack</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300 hover:bg-indigo-600 hover:text-white transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function Projects() {
  const projects = [
    {
      title: "Sozo",
      date: "2024 - Current",
      description: "Sozo is an integrated system for Japan's cram schools to manage services like billing, exams, and attendance tracking.",
      responsibilities: [
        "Collaborated with Japanese engineers",
        "Wrote unit test and e2e tests",
        "Adding new features requested by clients"
      ],
      techStack: [
        "HTML", "JavaScript", "Alpine.js", "CSS", "Bootstrap", 
        "Laravel", "MySQL", "PHPUnit", "Playwright"
      ],
      icon: FaLaptopCode,
      colorClass: "text-blue-500"
    },
    {
      title: "Jukuage",
      date: "2024 - Current",
      description: "Jukuage is an enrollment management system for cram schools to manage activity history from inquiry to enrollment.",
      responsibilities: [
        "API integration for Takeda system",
        "Collaborated with Japanese engineers",
        "Wrote unit test and e2e tests",
        "Adding feature requested by the users"
      ],
      techStack: [
        "Laravel", "Livewire", "PHPUnit", "HTML", "CSS", 
        "JavaScript", "Docker", "MySQL", "Cypress"
      ],
      icon: FaTools,
      colorClass: "text-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <Helmet>
        <title>Projects - Kyle Millendez</title>
      </Helmet>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Project Experience
        </h1>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
