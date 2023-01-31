import React from 'react';
import Img1 from '../assets/img1.png';
import Img2 from '../assets/img2.png';

const Landing = () => {
	return (
		<div className='w-full mx-auto max-w-5xl flex items-center justify-center py-20 flex-wrap'>
			<div className='w-full md:w-1/2 p-4'>
				<h1 className='text-7xl font-thin'>
					Meet the best doctors today
				</h1>
				<p className='mt-8'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam.
				</p>
				<div className='mt-8 flex gap-8'>
					<button className='rounded-[40px] py-4 px-8 border-2 bg-[#F1B5AC] opacity-80 hover:opacity-100 transition-all'>
						Our Doctors
					</button>
					<button className='rounded-[40px] py-4 px-8 border-2 border-[#F1B5AC] hover:bg-blue-50 transition-all'>
						Read more
					</button>
				</div>
			</div>
			<div className='flex w-full md:w-1/2 p-4 gap-8'>
				<img src={Img1} alt='image' className='h-80' />
				<img src={Img2} alt='image' className='h-80 mt-16' />
			</div>
		</div>
	);
};

export default Landing;
