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
			<div className='fixed bottom-0 z-30 flex items-center w-full h-screen bg-white border-t md:h-12 sm:h-20 '>
				<div className='flex flex-row justify-between w-full px-4 '>
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

					<div className='flex items-center flex-grow gap-4 sm:justify-between'>
						<div className='flex sm:gap-1 t:gap-4 sm:flex-col t:flex-row md:text-xl sm:text-xs'>
							<div className='font-semibold'>{title}</div>
							<div className='tracking-tight '>{subtitle}</div>
						</div>
						<div className='flex gap-1 md:flex-row sm:flex-col sm:items-end'>
							<div className={colorTypes[type]}>{projectTypes[type]}</div>

							<div className={colorTypes[type]}>{year}</div>
						</div>
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
