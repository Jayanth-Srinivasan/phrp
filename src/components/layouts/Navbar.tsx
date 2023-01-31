import React from 'react';
import Logo from '../../assets/syringe.png';

const navOptions = [
	{
		name: 'Benefits',
		url: '#benefits',
	},
	{
		name: 'Vaccine',
		url: '#vaccine',
	},
];

const Navbar = () => {
	return (
		<nav className='w-full px-3 py-6 fixed text-sm md:text-base'>
			<div className='mx-auto max-w-5xl w-full flex items-center justify-between'>
				<a href='/' className='w-10 h-10'>
					<img
						src={Logo}
						alt='PHRP'
						className='w-full h-full object-cover'
					/>
				</a>
				<ul className='flex gap-8 font-semibold text-[18px]'>
					{navOptions.map((option, idx) => (
						<li
							key={idx}
							className='hover:text-theme_hover transition-all'
						>
							<a href={option.url}>{option.name}</a>
						</li>
					))}
				</ul>
				<button className='py-4 px-8 rounded-[40px] transition-all hover:bg-blue-100 border-2 border-orange-500 font-semibold'>
					Login
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
