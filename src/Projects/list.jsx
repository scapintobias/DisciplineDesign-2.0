import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from './utils';
import { getAllProjects, projectTypes, colorTypes } from './index';

const projects = getAllProjects();

export const ProjectLista = (props) => {
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
									<div className='relative pb-56 overflow-hidden'>
										<img
											className='absolute inset-0 object-cover w-full h-full'
											src='https://source.unsplash.com/1600x900/?nature,water&auto=format&fit=crop&w=750&q=80'
											alt=''
										/>
									</div>
									<div className='inline-block p-4'>
										<div className={colorTypes[project.type]}>
											{projectTypes[project.type]}
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
						<div className='p-3 bg-gray-900 rounded shadow-lg'>
							<div className='relative group'>
								<img
									className='w-full rounded'
									src='https://upload.wikimedia.org/wikipedia/en/f/f1/Tycho_-_Epoch.jpg'
									alt=''
								/>

								<div className='flex items-center justify-between w-full py-2'>
									<div className={colorTypes[project.type]}>
										<div className=''>{projectTypes[project.type]}</div>
									</div>

									<div className='px-3 py-2 text-xs font-semibold leading-none tracking-wide uppercase rounded-full bg-warmGray-200 max-w-min'>
										{project.year}
									</div>
								</div>
								<p className='text-xl font-bold text-white'>{project.title}</p>
								<p className='text-warmGray-300'>{project.subtitle}</p>
							</div>
						</div>
					</Link>
				))}
		</>
	);
};
