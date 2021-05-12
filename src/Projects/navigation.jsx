import React from 'react';
import { Link } from 'react-router-dom';

import { slugify } from './utils';
import { ArrowLeft, ArrowRight } from './components';
import { projectTypes, getPrevAndNextProjects } from './index';

export const ProjectNavigation = (props) => {
	const { title, subtitle, type, year } = props.project;
	const { prev, next } = getPrevAndNextProjects(props.project);

	return (
		<>
			<div className='project-navigation-wrapper'>
				<div className='project-navigation'>
					{prev && (
						<Link
							to={`/work/${slugify(prev.type)}/${prev.year}/${slugify(
								prev.title
							)}?prev`}
							className='arrow left'
						>
							<ArrowLeft />
						</Link>
					)}

					<div id='titproj'>
						<b style={{ color: '#ef5419' }}>{title}</b>
						<i style={{ color: '#ef5419' }}>{subtitle}</i>
						<b>{projectTypes[type]}</b>
						{year}
					</div>

					{next && (
						<Link
							to={`/work/${slugify(next.type)}/${next.year}/${slugify(
								next.title
							)}?next`}
							className='arrow right'
						>
							<ArrowRight />
						</Link>
					)}
				</div>
			</div>
			<div className='project-navigation-clearfix' />
		</>
	);
};
