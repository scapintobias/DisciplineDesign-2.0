import React from 'react';
import { NavLink } from 'react-router-dom';
import { CaseStudies } from '../Components/components';
import { ProjectList } from '../Projects/list';

export function Work() {
	return (
		<>
			<Video />
			{/*	<Collection /> */}
			<CaseStudies />

			<div className='flex flex-col pb-32 mx-auto max-w-7xl sm:px-6 lg:px-8'>
				<div className='flex justify-between pb-8'>
					<p className='text-3xl font-light'>Archive</p>
				</div>
				<div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-4'>
					<ProjectList />
				</div>
			</div>
		</>
	);
}

function Video() {
	return (
		<NavLink
			to='/redesign'
			className='flex flex-col justify-between mb-12 text-white sm:p-4 md:p-8 from-blue-800 via-indigo-500 to-purple-500 bg-gradient-to-r '
		>
			<div className='font-semibold tracking-tighter mb-96 l:text-9xl sm:text-5xl'>
				<p>We design things</p>
				<p>since 2008</p>
			</div>
			<div className='tracking-tighter  l:text-6xl sm:text-3xl'>
				in 2021 <span className='px-4 font-black '>DisciplineDesign</span>{' '}
				needed a redesign too<span className='pl-6 animate-pulse'>•</span>
			</div>
		</NavLink>
	);
}

// function Collection() {
// 	return (
// 		<div className='py-32 mx-auto max-w-7xl sm:px-6 lg:px-8'>
// 			<div className='flex m-6 font-light sm:flex-col md:flex-row'>
// 				<div className='pb-12 md:w-6/12'>
// 					<p className='text-3xl '>Collections</p>
// 					<p className='text-par font-extralight'>
// 						An overview of our wide fields of action
// 					</p>
// 				</div>
// 				<div className='flex-col space-y-16'>
// 					<div>
// 						<p className='text-3xl'>Logos & Trademarks</p>
// 						<p className='text-par font-extralight'>
// 							What makes a brand memorable and unique
// 						</p>
// 					</div>
// 					<div>
// 						<p className='text-3xl'>Logos & Trademarks</p>
// 						<p className='text-par font-extralight'>
// 							What makes a brand memorable and unique
// 						</p>
// 					</div>
// 					<div>
// 						<p className='text-3xl'>Logos & Trademarks</p>
// 						<p className='text-par font-extralight'>
// 							What makes a brand memorable and unique
// 						</p>
// 					</div>
// 					<div>
// 						<p className='text-3xl'>Logos & Trademarks</p>
// 						<p className='text-par font-extralight'>
// 							What makes a brand memorable and unique
// 						</p>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
