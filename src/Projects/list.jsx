import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from './utils';

import { getAllProjects, projectTypes, colorBubbles } from './index';

const projects = getAllProjects();

export const ProjectList = (props) => {
	let baseTwitter = 'https://twitter.com/intent/tweet?text=';
	let tweet = 'Have a look at this: ';

	return (
		<>
			{projects
				.filter((project) => (props.type ? project.type === props.type : true))
				.map((project, key) => (
					<div className='relative '>
						<div className='absolute z-0 flex items-center justify-between w-full -left-2 -top-3'>
							<div className={colorBubbles[project.type]}>
								{projectTypes[project.type]}
							</div>
							<a
								className='absolute w-12 h-12 transition-all duration-300 transform scale-100 bg-white rounded-full shadow-2xl -right-4 hover:scale-90'
								data-social-network='Twitter'
								data-social-action='tweet'
								data-social-target={`/work/${slugify(project.type)}/${
									project.year
								}/${slugify(project.title)}`}
								target='_blank'
								rel='noopener noreferrer'
								href={
									baseTwitter +
									tweet +
									`www.discipline.design/work/${slugify(project.type)}/${
										project.year
									}/${slugify(project.title)}`
								}
							>
								<svg
									version='1.1'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 64 64'
								>
									<g>
										<path
											style={{ fill: '#2985ff' }}
											d='M32,0c17.7,0,32,14.3,32,32c0,17.7-14.3,32-32,32C14.3,64,0,49.7,0,32C0,14.3,14.3,0,32,0z M49.3,21.3
		c-1.3,0.6-2.6,0.9-4.1,1.1c1.5-0.9,2.6-2.3,3.1-3.9c-1.4,0.8-2.9,1.4-4.5,1.7c-1.3-1.4-3.1-2.2-5.2-2.2c-3.9,0-7.1,3.2-7.1,7.1
		c0,0.6,0.1,1.1,0.2,1.6c-5.9-0.3-11.1-3.1-14.6-7.4c-0.6,1.1-1,2.3-1,3.6c0,2.5,1.2,4.6,3.1,5.9c-1.2,0-2.2-0.4-3.2-0.9v0.1
		c0,3.4,2.4,6.3,5.7,6.9c-0.6,0.2-1.2,0.2-1.9,0.2c-0.5,0-0.9,0-1.3-0.1c0.9,2.8,3.5,4.9,6.6,4.9c-2.4,1.9-5.5,3-8.8,3
		c-0.6,0-1.1,0-1.7-0.1c3.1,2,6.9,3.2,10.9,3.2c13,0,20.2-10.8,20.2-20.2c0-0.3,0-0.6,0-0.9C47.1,24,48.3,22.7,49.3,21.3L49.3,21.3z
		'
										/>
									</g>
								</svg>
							</a>
						</div>
						<Link
							key={project.title}
							to={`/work/${slugify(project.type)}/${project.year}/${slugify(
								project.title
							)}`}
						>
							<div className='p-3 bg-gray-900 rounded-md hover:shadow-xl'>
								<div className='w-full rounded bg-warmGray-200'>
									{project.img}
								</div>

								<div className='flex items-start justify-between w-full pt-2'>
									<div className='text-xl font-bold text-white'>
										{project.title}
										<p className='text-base font-normal text-warmGray-400'>
											{project.subtitle}
										</p>
									</div>
									<div className='px-3 py-2 text-xs font-semibold leading-none tracking-wide text-white uppercase border rounded-full max-w-min border-trueGray-700'>
										{project.year}
									</div>
								</div>
							</div>
						</Link>
					</div>
				))}
		</>
	);
};
