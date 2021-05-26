import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from './utils';
import { getAllProjects } from './index';

const projects = getAllProjects();

export const ProjectList = (props) => {
	return (
		<>
			{projects
				.filter((project) => (props.type ? project.type === props.type : true))
				.map((project) => (
					<Link
						key={project.type}
						to={`/work/${slugify(project.type)}/${project.year}/${slugify(
							project.title
						)}`}
					>
						<div className='font-normal tracking-wider uppercase text-charcoal-600 hover:text-ruby'>
							<img
								src='https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
								alt='proj'
							/>
							<p className='py-1 '>{project.title}</p>
						</div>
					</Link>
				))}
		</>
	);
};
