import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 p-8">
      {/* About Section Header */}
      <div className="text-3xl sm:text-4xl font-bold text-black mb-4 font-mono">
        About Me
      </div>

      <div>
      {/* Personal Info Card */}
      <div className="bg-white text-gray-800 p-6 max-w-lg w-full font-mono">
        <div className="mb-4">
          <p className="text-lg font-medium mb-2">🏀 <span className="font-semibold">I like to play basketball</span></p>
          <p className="text-lg font-medium mb-2">🎶 <span className="font-semibold">I love music</span></p>
          <p className="text-lg font-medium mb-2">🎮 <span className="font-semibold">I'm into gaming</span></p>
        </div>

        {/* Additional Info */}
        <div className="mt-6">
          <p className="text-lg font-medium">💻 <span className="font-semibold">I’m a software engineer</span>, working on exciting tech projects every day.</p>
          <p className="text-lg font-medium mt-2">📚 <span className="font-semibold">I love learning</span>, constantly exploring new programming languages and frameworks.</p>
        </div>
      </div>


	  </div>



    </div>
  );
};

export default About;
