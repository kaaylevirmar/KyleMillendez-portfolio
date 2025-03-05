import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import mypicture from "../assets/mypciture.jpeg"

const Home = () => {
  return (
    <div className="min-h-screen py-8 bg-hero-pattern bg-cover bg-center">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
          Welcome to My Portfolio
        </h1>
        
        <div className="p-8 rounded-lg transform hover:scale-105 transition-all duration-300">
          <div className="flex flex-col items-center gap-6">
            <img
              src={mypicture}
              alt="profile_pic"
              className="rounded-full w-40 h-40 object-cover border-4 border-indigo-500 animate-scale-in"
            />
            
            <h2 className="text-3xl font-bold text-gray-100">Kyle Virmar Millendez</h2>
            
            <p className="text-gray-300 max-w-2xl">
              I am a Software Engineer who loves to develop web-based applications to learn new skills and adapt to
              emerging technologies. My goal is to contribute meaningfully to technological advancements that shape the future.
            </p>

            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/kyle-virmar-millendez-a35716270/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-button text-gray-300 hover:text-blue-500"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://github.com/kylevirmarmillendez"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-button text-gray-300 hover:text-white"
              >
                <FaGithub size={30} />
              </a>
            </div>

            {/* Removed Get in Touch button */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
