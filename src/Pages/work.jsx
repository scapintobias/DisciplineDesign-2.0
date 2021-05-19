import React from 'react';

import { ProjectList } from '../Projects/list';
import { ProjectFilters } from '../Projects/filters';

export function Work({ match }) {
	const { type } = match.params;
	return (
		<section className='bg-white'>
			<ProjectFilters type={type} />

			<ProjectList type={type} />
		</section>
	);
}
