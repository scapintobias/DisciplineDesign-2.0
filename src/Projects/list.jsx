import React from 'react';
import { Link } from 'react-router-dom';

import { slugify } from './utils';
import { getAllProjects, projectTypes } from './index';

const projects = getAllProjects();

const colorTypes = {
	ux: 'bg-orange-400 rounded-full max-w-min',
	wayfinding: 'bg-red-200 rounded-full max-w-min',
	event: 'bg-emerald-700 text-white rounded-full max-w-min',
	corporate: 'bg-ruby text-white rounded-full max-w-min',
	logo: 'bg-yellow-300 rounded-full max-w-min',
	poster: 'bg-blueGray-600 text-white rounded-full max-w-min',
	video: 'bg-gray-400 rounded-full max-w-min',
	exhibit: 'bg-red-800 text-white rounded-full max-w-min',
	photography: 'bg-black text-white rounded-full max-w-min',
	print: 'bg-green-600 text-white rounded-full max-w-min',
};

export const ProjectList = (props) => {
	return (
		<>
			{projects
				.filter((project) => (props.type ? project.type === props.type : true))
				.map((project, key) => (
					<Link
						className=''
						key={key}
						to={`/work/${slugify(project.type)}/${project.year}/${slugify(
							project.title
						)}`}
					>
						<div className='flex flex-wrap'>
							<div className='w-full'>
								<div className='block overflow-hidden bg-white rounded-lg shadow-md c-card hover:shadow-xl'>
									<div className='relative pb-48 overflow-hidden'>
										<img
											className='absolute inset-0 object-cover w-full h-full'
											src='https://source.unsplash.com/1600x900/?nature,water&auto=format&fit=crop&w=750&q=80'
											alt=''
										/>
									</div>
									<div className='inline-block p-4'>
										<div className={colorTypes[project.type]}>
											<div className='px-2 py-1 text-xs font-semibold leading-none tracking-wide uppercase '>
												{projectTypes[project.type]}
											</div>
										</div>
										<h2 className='mt-2 text-2xl font-bold'>{project.title}</h2>
										<p className='mb-2 text-xl'>{project.subtitle}</p>
										<p className='px-2 py-1 bg-gray-100 rounded-full text-md max-w-min'>
											{project.year}
										</p>
									</div>
								</div>
							</div>
						</div>
					</Link>
				))}
		</>
	);
};
