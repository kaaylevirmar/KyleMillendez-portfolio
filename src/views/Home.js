import React from 'react';
import Navbar from '../components/Navbar';
import mypicture from '../assets/mypicture.png';
import DropdownAbout from '../components/DropdownAbout';

const Home = () => {
	return (
		<div className="bg-slate-300  lg:h-screen lg:w-screen h-auto ">
			<div className="lg:flex hidden">
				<Navbar />
			</div>
			<div className="lg:hidden flex">
				<DropdownAbout />
			</div>
			<div className="flex lg:flex-row flex-col  ">
				<div className="w-1/2 pt-10 lg:pt-60 lg:pl-44 pl-10 text-justify">
					<h1 className=" lg:text-5xl text-2xl font-mono">
						Hi, I'm Kyle Virmar
					</h1>
					<h1 className="font-extrabold lg:text-6xl text-2xl	 font-Oswald">
						I love to develop websites.
					</h1>
					<h1 className="font-bold lg:text-4xl text-2xl	py-2 font-Oswald">
						I am a Filipino who loves to explore.
					</h1>
				</div>
				<div className=" pl-24">
					<img
						className="w-[500px] drop-shadow-8xl lg:absolute flex bottom-0 pt-16 justify-center items-center"
						src={mypicture}
						alt="mypicture"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
