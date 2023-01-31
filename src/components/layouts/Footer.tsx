import React from 'react';

const Footer = () => {
	return (
		<footer className='mt-auto w-full'>
			<div className='max-w-5xl mx-auto flex justify-between py-5 px-[100px] items-center mt-auto flex-wrap'>
				<div className='text-base font-semibold tracking-wide w-full md:w-1/2 text-center'>
					Design & Developed by{' '}
					<a
						href='https://codelancedevs.com/'
						target={'_blank'}
						className='text-[#00e07b] cursor-pointer hover:underline transition-all'
					>
						&lt;CodelanceDevs /&gt;
					</a>
				</div>
				<div className='text-base font-semibold tracking-wide w-full md:w-1/2 text-center'>
					2023 &copy; PHRP.in All Rights Reserved
				</div>
			</div>
		</footer>
	);
};

export default Footer;
