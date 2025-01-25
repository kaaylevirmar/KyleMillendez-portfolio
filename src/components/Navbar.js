import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<div className=" bg-black h-screen hidden lg:flex">
			<div className=" flex flex-col justify-center bg-slate-500 h-screen  text-white items-center p-7 px-20 font-mono drop-shadow-2x shadow-white text-lg">
					<div
						className="px-10 hover:scale-105 cursor-pointer"
						onClick={() => {
							navigate('/');
						}}
					>
						Home
					</div>
					<div
						className="px-10 hover:scale-105 cursor-pointer"
						onClick={() => {
							navigate('/about');
						}}
					>
						About
					</div>
					<div
						className="px-10 hover:scale-105 cursor-pointer"
						onClick={() => {
							navigate('/projects');
						}}
					>
						Projects
					</div>
					<div
						className="px-10 hover:scale-105 cursor-pointer"
						onClick={() => {
							navigate('/skills');
						}}
					>
						Skills
					</div>
			</div>
		</div>
	);
};

export default Navbar;
