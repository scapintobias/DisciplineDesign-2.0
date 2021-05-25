import React from 'react';
import { Main } from './components';

export function Mental() {
	return (
		<Main>
			<section className='grid grid-flow-row sm:gap-4 md:gap-6 sm:grid-cols-1 t:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
				<img src='/cat/photo/mc/mc4.jpg' alt='mental' />
				<img src='/cat/photo/mc/mc1.jpg' alt='mental' />
				<img src='/cat/photo/mc/mc2.jpg' alt='mental' />
				<img src='/cat/photo/mc/mc3.jpg' alt='mental' />
				<img src='/cat/photo/mc/mc5.jpg' alt='mental' />
				<img src='/cat/photo/mc/mc6.jpg' alt='mental' />
			</section>
		</Main>
	);
}
