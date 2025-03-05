import React from 'react';
import { FaCode, FaDatabase, FaTools, FaCheckCircle } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: FaCode,
      skills: ['HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'JavaScript', 'ReactJs', 'AlpineJs'],
      colorClass: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      icon: FaDatabase,
      skills: ['Laravel Framework', 'ExpressJs', 'NodeJs', 'PHP'],
      colorClass: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Databases',
      icon: FaDatabase,
      skills: ['MongoDB', 'MySQL'],
      colorClass: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Testing & Tools',
      icon: FaTools,
      skills: ['PHP Unit', 'Cypress', 'Playwright', 'Git'],
      colorClass: 'from-orange-500 to-yellow-500'
    }
  ];

  const SkillCard = ({ title, icon: Icon, skills, colorClass }) => (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <Icon className={`text-2xl bg-gradient-to-r ${colorClass} bg-clip-text text-transparent`} />
        <h3 className="text-xl font-bold text-gray-100">{title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
          >
            <FaCheckCircle className="text-indigo-500 text-sm" />
            <span className="text-sm">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-8">
      <Helmet>
        <title>Skills - Kyle Millendez</title>
      </Helmet>
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
        Technical Skills
      </h1>
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCard key={index} {...category} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
