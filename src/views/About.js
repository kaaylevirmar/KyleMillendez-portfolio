import React from 'react';
import { FaBasketballBall, FaMusic, FaGamepad, FaLaptopCode, FaBook } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const AboutCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 border border-gray-700">
    <div className="flex items-center mb-4">
      <Icon className="text-indigo-500 text-2xl mr-3" />
      <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
    </div>
    <p className="text-gray-300">{description}</p>
  </div>
);

const About = () => {
  const interests = [
    {
      icon: FaBasketballBall,
      title: "Basketball",
      description: "I enjoy playing basketball as a way to stay active and build team spirit."
    },
    {
      icon: FaMusic,
      title: "Music",
      description: "Music is my constant companion, helping me focus while coding and relax after work."
    },
    {
      icon: FaGamepad,
      title: "Gaming",
      description: "Gaming helps me unwind and keeps my problem-solving skills sharp."
    },
    {
      icon: FaLaptopCode,
      title: "Software Engineering",
      description: "As a software engineer, I'm passionate about creating innovative solutions and learning new technologies."
    },
    {
      icon: FaBook,
      title: "Continuous Learning",
      description: "I'm dedicated to expanding my knowledge in programming and staying current with industry trends."
    }
  ];

  return (
    <div className="min-h-screen text-gray-100 py-8">
      <Helmet>
        <title>About - Kyle Millendez</title>
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interests.map((interest, index) => (
            <AboutCard key={index} {...interest} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
