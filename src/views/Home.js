	import React from 'react';
	import { FaLinkedin } from "react-icons/fa";
	import { FaGithub } from "react-icons/fa";
	import mypicture from "../assets/mypciture.jpeg"

	const Home = () => {
		return (
			<div className="flex flex-col items-center font-mono text-center gap-5 p-5">
			  <div>
			    <img
			      src={mypicture}
			      alt="profile_pic"
			      className="rounded-full"
			      style={{
			        width: '150px',
			        height: '150px',
			        objectFit: 'cover',
			      }}
			    />
			  </div>
			  <div className="text-xl sm:text-2xl sm:w-[1000px] font-semibold">Kyle Virmar Millendez</div>
			  <p className="text-sm sm:w-[450px]  ">
			    I am a Software Engineer who loves to develop web-based applications to learn new skills and adapt to
			    emerging technologies. My goal is to contribute meaningfully to technological advancements that shape the future.
			  </p>
			  <div className="flex gap-4">
			    <div
			      onClick={() => window.open("https://www.linkedin.com/in/kyle-virmar-millendez-a35716270/", "_blank")}
			      className="cursor-pointer hover:text-blue-500"
			    >
			      <FaLinkedin size={30} />
			    </div>
			    <div
			      onClick={() => window.open("https://github.com/kylevirmarmillendez", "_blank")}
			      className="cursor-pointer hover:text-gray-700"
			    >
			      <FaGithub size={30} />
			    </div>
			  </div>
			</div>
		);
	};

	export default Home;
