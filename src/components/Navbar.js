import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<div className=" bg-black w-screen">
			<div className=" lg:flex  flex-row justify-between  text-white items-center p-7 px-20 font-mono drop-shadow-2x shadow-white text-lg">
				<div>
					<div
						className="px-10 hover:scale-105 cursor-pointer"
						onClick={() => {
							navigate('/');
						}}
					>
						Home
					</div>
				</div>
				<div></div>
				<div className="flex-row lg:flex">
					<div
						className="px-10 hover:scale-105 cursor-pointer"
						onClick={() => {
							navigate('/Contact');
						}}
					>
						Contact
					</div>
					<div
						className="px-10 hover:scale-105 cursor-pointer"
						onClick={() => {
							navigate('/About');
						}}
					>
						About
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
