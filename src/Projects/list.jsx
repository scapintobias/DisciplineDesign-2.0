import React from 'react';
import { Link } from 'react-router-dom';

import { slugify } from './utils';
import { getAllProjects, projectTypes } from './index';

const projects = getAllProjects();

export const ProjectLista = (props) => (
	<ul className='w-screen px-4 py-4 text-xl list-none '>
		{projects
			.filter((project) => (props.type ? project.type === props.type : true))
			.map((project, key) => (
				<Link
					key={key}
					to={`/work/${slugify(project.type)}/${project.year}/${slugify(
						project.title
					)}`}
					className='block w-full cursor-pointer hover:text-ruby'
				>
					<li className='flex items-start justify-between py-2 font-light border-b border-gray-300'>
						<span className='w-2/4'>
							<span className='font-semibold helvetica f5-m f4'>
								{project.title}
							</span>
							<br />
							<span>{project.subtitle}</span>
						</span>
						<span className='w-4/12 '>{projectTypes[project.type]}</span>
						<span className='w-2/12 text-right'>{project.year}</span>
					</li>
				</Link>
			))}
	</ul>
);

export const ProjectList = (props) => (
	<>
		{projects
			.filter((project) => (props.type ? project.type === props.type : true))
			.map((project, key) => (
				<Link
					key={key}
					to={`/work/${slugify(project.type)}/${project.year}/${slugify(
						project.title
					)}`}
					className='cursor-pointer hover:text-ruby'
				>
					<div className='p-3 border border-t-8 border-gray-300 border-solid'>
						<p className=''>
							<span className='font-bold'>{project.title}</span>
							<br />
							<span>{project.subtitle}</span>
						</p>
						<p className=''>{projectTypes[project.type]}</p>
						<p className=''>{project.year}</p>
					</div>
				</Link>
			))}
	</>
);
