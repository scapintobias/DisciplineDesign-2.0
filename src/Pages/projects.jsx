import React from 'react';

import { ProjectList } from '../Projects/list';
import { ProjectFilters } from '../Projects/filters';

export function Projects({ match }) {
	const { type } = match.params;
	return (
		<section>
			<ProjectFilters type={type} />
			<div className='grid grid-cols-1 gap-4 m-4 t:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7'>
				<ProjectList type={type} />
			</div>
		</section>
	);
}
