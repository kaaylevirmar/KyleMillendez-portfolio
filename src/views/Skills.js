import React from 'react';

function Skills() {
  const skills = [
    'HTML',
    'CSS',
    'Tailwind CSS',
    'Bootstrap',
    'JavaScript',
    'AlpineJs',
    'Laravel Framework',
    'ReactJs',
    'ExpressJs',
    'NodeJs',
    'MongoDB',
    'MySQL',
    'PHP Unit',
    'Cypress',
    'Playwright',
    'Git',
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 font-mono text-center ">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">Tech Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4text-center text-xl text-gray-700 hover:bg-gray-200 transition-all duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
