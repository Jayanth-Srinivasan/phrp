import React from 'react';
import Img3 from '../assets/img3.png';
import Img4 from '../assets/img4.png';
import Img5 from '../assets/img5.png';

const contents = [
	{
		title: 'Vaccine for all the people all around the globe',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
		Img: Img3,
		color: '#CFF0F9',
	},
	{
		title: 'Friendly staff and state of the art facilities',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
		Img: Img4,
		color: '#FFE8D3',
	},
	{
		title: 'Friendly staff and state of the art facilities',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
		Img: Img5,
		color: '#F6D1CC',
	},
];

const Benefits = () => {
	return (
		<div
			className='w-full mx-auto max-w-5xl flex items-center justify-center py-20 flex-wrap relative'
			id='benefits'
		>
			{contents.map((content, idx) => (
				<div
					key={idx}
					className={`w-full my-4 rounded-[40px] p-10 flex`}
					style={{ backgroundColor: content.color }}
				>
					<div className='w-full md:w-1/2 flex flex-col items-center justify-center'>
						<h3 className='text-4xl'>{content.title}</h3>
						<p className='mt-8'>{content.text}</p>
					</div>
					<div className='hidden md:flex w-full items-center justify-center max-w-xs'>
						<img
							src={content.Img}
							alt={content.title}
							className='h-auto mx-auto'
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default Benefits;
