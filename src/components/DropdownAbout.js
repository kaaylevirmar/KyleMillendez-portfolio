import React from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const classNames = (...classes) => {
	return classes.filter(Boolean).join(' ');
};

const DropdownAbout = () => {
	const navigate = useNavigate();
	return (
		<div className="w-screen bg-black justify-end flex text-white font-mono ">
			<Menu
				as="div"
				className="relative inline-block text-left z-10 p-3 "
			>
				<div>
					<Menu.Button className="inline-flex w-full justify-center rounded-md    px-4 py-2 text-sm font-medium   text-white shadow-sm   focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
						<AiOutlineMenu size="35px" />
					</Menu.Button>
				</div>

				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="absolute right-0 z-10 mt-2 w-screen text-center justify-center flex origin-top-right rounded-sm bg-white  shadow-lg   ring-opacity-5  ">
						<div className="py-1 font-bold ">
							<Menu.Item>
								{({ active }) => (
									<a
										href="/"
										className={classNames(
											active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
											'block px-4 py-2 text-sm'
										)}
									>
										Home
									</a>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<a
										onClick={() => {
											navigate('/Contact');
										}}
										href="/Contact"
										className={classNames(
											active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
											'block px-4 py-2 text-sm'
										)}
									>
										Contact
									</a>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<a
										href="/About"
										className={classNames(
											active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
											'block px-4 py-2 text-sm'
										)}
									>
										About
									</a>
								)}
							</Menu.Item>

							<form
								method="POST"
								action="#"
							></form>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
};

export default DropdownAbout;
