import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
	const navigate = useNavigate();
	return (
		<div className=" bg-black">
			<div className=" lg:flex hidden flex-row justify-between  text-white items-center p-7 px-20 font-mono drop-shadow-2x shadow-white text-lg">
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
				<div className="flex flex-row">
					<div
						className="px-10 hover:scale-105 cursor-pointer"
						onClick={() => {
							navigate('/About');
						}}
					>
						About
					</div>
					<div
						className="px-10 hover:scale-105 cursor-pointer"
						onClick={() => {
							navigate('/Contact');
						}}
					>
						Contact
					</div>
				</div>
			</div>
			<div className=" text-white text-lg bg-black w-screen flex py-5 justify-end pr-10 lg:hidden">
				<AiOutlineMenu
					size="40px"
					className="lg:hidden"
				/>
			</div>
		</div>
	);
};

export default Navbar;
