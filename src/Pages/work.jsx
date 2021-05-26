import React from 'react';
import { NavLink } from 'react-router-dom';

import { ProjectList } from '../Projects/list';

const placeholder =
	'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80';

export function Work() {
	return (
		<>
			<Video />
			<Collection />

			<div className='flex flex-col pb-32 mx-auto font-light max-w-7xl sm:px-6 lg:px-8'>
				<div className='pb-8'>
					<p className='text-3xl font-normal'>Case Studies</p>
					<p className='text-lg '>selected projects</p>
				</div>
				<div className='grid pb-32 md:grid-cols-2 sm:grid-cols-1 gap-y-16'>
					<Study to='yape' type='UX/UI' title='Yape' subtitle='e-Novia' />
					<Study
						to='yape-srl'
						type='Corporate'
						title='Yape'
						subtitle='e-Novia'
					/>
					<Study
						to='yape-srl'
						type='Corporate'
						title='Yape'
						subtitle='e-Novia'
					/>
					<Study
						to='yape-srl'
						type='Corporate'
						title='Yape'
						subtitle='e-Novia'
					/>
				</div>
				<div className='flex justify-between pb-8'>
					<p className='text-3xl font-normal'>Archive</p>
				</div>
				<div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-16'>
					<ProjectList />
				</div>
			</div>
		</>
	);
}

function Video() {
	return (
		<div>
			<div className='relative mx-6 '>
				<div className='absolute flex flex-col justify-between w-full h-full p-5'>
					<div className='text-white l:text-9xl sm:text-5xl'>
						<p>Selected</p>
						<p>Design</p>
						<p>Since 2008</p>
					</div>
					<div className='self-end text-white l:text-6xl sm:text-3xl'>
						a DisciplineDesign anthology
					</div>
				</div>
				<img
					src='https://images.unsplash.com/photo-1568738361956-fe05e4e91020?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3150&q=80'
					alt='wallpaper'
					className='object-cover object-left-top w-full max-h-work'
				/>
			</div>
		</div>
	);
}

function Collection() {
	return (
		<div className='py-32 mx-auto max-w-7xl sm:px-6 lg:px-8'>
			<div className='flex m-6 font-light sm:flex-col md:flex-row'>
				<div className='pb-12 md:w-6/12'>
					<p className='text-3xl '>Collections</p>
					<p className='text-par'>An overview of our wide fields of action</p>
				</div>
				<div className='flex-col space-y-16'>
					<div>
						<p className='text-3xl'>Logos & Trademarks</p>
						<p className='text-par'>What makes a brand memorable and unique</p>
					</div>
					<div>
						<p className='text-3xl'>Logos & Trademarks</p>
						<p className='text-par'>What makes a brand memorable and unique</p>
					</div>
					<div>
						<p className='text-3xl'>Logos & Trademarks</p>
						<p className='text-par'>What makes a brand memorable and unique</p>
					</div>
					<div>
						<p className='text-3xl'>Logos & Trademarks</p>
						<p className='text-par'>What makes a brand memorable and unique</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export const Study = (props) => {
	return (
		<>
			<NavLink key={props.type} to={'/work/study/' + props.to}>
				<div className=' hover:text-ruby'>
					<img src={placeholder} alt='proj' />
					<p className='pt-3 text-sm font-normal uppercase'>{props.type}</p>
					<p className='py-1 text-3xl'>{props.title}</p>
					<p className='text-base '>{props.subtitle}</p>
				</div>
			</NavLink>
		</>
	);
};
