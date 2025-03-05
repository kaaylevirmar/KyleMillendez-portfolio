import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaCode, FaCogs, FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const menuItems = [
		{ path: '/', label: 'Home', icon: FaHome },
		{ path: '/about', label: 'About', icon: FaUser },
		{ path: '/projects', label: 'Projects', icon: FaCode },
		{ path: '/skills', label: 'Skills', icon: FaCogs },
	];

	const isActive = (path) => location.pathname === path;

	return (
		<>
			{/* Desktop and Tablet Sidebar */}
			<div className="hidden md:flex fixed bg-gray-800 h-screen transform transition-all duration-300 ease-in-out md:w-20 lg:w-64 border-r border-gray-700">
				<div className="flex flex-col justify-center w-full">
					{menuItems.map((item) => {
						const Icon = item.icon;
						return (
							<div
								key={item.path}
								className={`px-4 md:px-6 lg:px-8 py-4 flex items-center gap-3 cursor-pointer transition-all duration-300 ${
									isActive(item.path)
										? 'bg-indigo-600 text-white'
										: 'text-gray-300 hover:bg-gray-700 hover:text-white'
								}`}
								onClick={() => navigate(item.path)}
							>
								<Icon className="text-xl" />
								<span className="hidden lg:inline font-medium">{item.label}</span>
							</div>
						);
					})}
				</div>
			</div>

			{/* Mobile Menu Button */}
			<div className="md:hidden fixed top-4 right-4 z-50">
				<button
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					className="p-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors duration-300"
					aria-label="Toggle menu"
				>
					{isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
				</button>
			</div>

			{/* Mobile Menu */}
			<div
				className={`md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 z-40 transform transition-transform duration-300 ease-in-out ${
					isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<div className="flex flex-col items-center justify-center h-full space-y-8">
					{menuItems.map((item) => {
						const Icon = item.icon;
						return (
							<div
								key={item.path}
								className={`px-8 py-4 flex items-center gap-3 cursor-pointer transition-all duration-300 ${
									isActive(item.path)
										? 'text-indigo-400'
										: 'text-gray-300 hover:text-white'
								}`}
								onClick={() => {
									navigate(item.path);
									setIsMobileMenuOpen(false);
								}}
							>
								<Icon className="text-xl" />
								<span className="font-medium">{item.label}</span>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Sidebar;