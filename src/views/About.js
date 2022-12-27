import React from 'react';
import DropdownAbout from '../components/DropdownAbout';
import Navbar from '../components/Navbar';

const About = () => {
	return (
		<div>
			<div className="lg:flex hidden">
				<Navbar />
			</div>
			<div className="lg:hidden flex">
				<DropdownAbout />
			</div>
			About
		</div>
	);
};

export default About;
