import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';

function Projects() {
  return (
    <div className="flex flex-col w-[1000px] items-center font-mono  gap-6 p-6 bg-gradient-to-r from-indigo-500 to-purple-500 min-h ">
      
      {/* Single Experience Card */}
      <div className="bg-white text-gray-800 b  p-6 w-full">
      <div className="text-3xl mb-10 sm:text-4xl font-bold text-black font-mono text-center">
        Project Experience
      </div>
        <div className="text-sm text-center text-gray-600 mb-4"> Nabepero Philippines Inc. 2024 - Current</div>
      <div className='flex flex-row gap-10 '>
        {/* Sozo Section */}
        <div className="flex flex-col space-y-4 mb-6">
          <div className="flex items-center justify-start gap-2">
            <FaLaptopCode className="text-blue-500 text-xl" />
            <p className="font-semibold text-lg">Sozo</p>
          </div>
          <p className="italic text-sm">
            Sozo is an integrated system for Japan's cram schools to manage services like billing, exams, and attendance tracking.
          </p>

          <p className="font-semibold">Responsibilities:</p>
          <ul className="list-inside list-disc text-sm space-y-2">
            <li>Collaborated with Japanese engineers .</li>
            <li>Wrote unit test and e2e tests.</li>
            <li>Adding new features requested by clients.</li>
          </ul>

          <p className="font-semibold">Tech Stack:</p>
          <p className="text-xs text-gray-500">
            HTML, JS, Alpine.js, CSS, Bootstrap, Laravel, MySQL, PHPUnit, Playwright
          </p>
        </div>

        {/* Jukuage Section */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-start gap-2">
            <FaLaptopCode className="text-yellow-500 text-xl" />
            <p className="font-semibold text-lg">Jukuage</p>
          </div>
          <p className="italic text-sm">
            Jukuage is an enrollment management system for cram schools to manage activity history from inquiry to enrollment.
          </p>

          <p className="font-semibold">Responsibilities:</p>
          <ul className="list-inside list-disc text-sm space-y-2">
            <li>API integration for Takeda system.</li>
            <li>Collaborated with Japanese engineers</li>
            <li>Wrote unit test and e2e tests</li>
            <li>Adding feature requested by the users.</li>
          </ul>

          <p className="font-semibold">Tech Stack:</p>
          <p className="text-xs text-gray-500">
            Laravel, Livewire, PHPUnit, HTML, CSS, JavaScript, Docker, MySQL, Cypress
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
