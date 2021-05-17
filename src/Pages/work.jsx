import React from 'react';

import { ProjectList } from '../Projects/list';
import { ProjectFilters } from '../Projects/filters';

export function Work({ match }) {
	const { type } = match.params;
	return (
		<section className='bg-white'>
			<ProjectFilters type={type} />
			<div className='grid grid-cols-1 gap-6 p-4 md:gap-16 md:p-16 t:grid-cols-2 md:grid-cols-2 l:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7'>
				<ProjectList type={type} />
			</div>
		</section>
	);
}
