import React from 'react';
import { Link } from 'react-router-dom';

import { slugify } from './utils';
import { ArrowLeft, ArrowRight } from './components';
import { projectTypes, getPrevAndNextProjects, colorTypes } from './index';

export const ProjectNavigation = (props) => {
	const { title, subtitle, type, year } = props.project;
	const { prev, next } = getPrevAndNextProjects(props.project);

	return (
		<>
			<div className='fixed z-50 w-full mt-16 bg-white'>
				<div className='flex flex-row justify-between px-4 py-2 border-b border-warmGray-300'>
					{prev && (
						<Link
							to={`/work/${slugify(prev.type)}/${prev.year}/${slugify(
								prev.title
							)}?prev`}
							className='flex items-center justify-start pr-4'
						>
							<ArrowLeft />
						</Link>
					)}

					<div className='flex items-center flex-grow space-x-3'>
						<div className='text-xl font-semibold'>{title}</div>
						<div className='text-xl'>{subtitle}</div>
						<Link to={`/work/${slugify(type)}/`}>
							<div className={colorTypes[type]}>{projectTypes[type]}</div>
						</Link>
						<div className={colorTypes[type]}>{year}</div>
					</div>

					{next && (
						<Link
							to={`/work/${slugify(next.type)}/${next.year}/${slugify(
								next.title
							)}?next`}
							className='flex items-center pl-4'
						>
							<ArrowRight />
						</Link>
					)}
				</div>
			</div>
		</>
	);
};
