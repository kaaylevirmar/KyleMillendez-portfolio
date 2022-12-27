import React from 'react';
import DropdownAbout from '../components/DropdownAbout';
import Navbar from '../components/Navbar';

const Contact = () => {
	return (
		<div>
			<div className="lg:flex hidden">
				<Navbar />
			</div>
			<div className="lg:hidden flex">
				<DropdownAbout />
			</div>
			Contact
		</div>
	);
};

export default Contact;
