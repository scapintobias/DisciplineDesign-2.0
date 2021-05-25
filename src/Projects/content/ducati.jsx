import React from 'react';

export function Ducati() {
	return (
		<section className='w-screen'>
			<iframe
				className='w-screen h-main'
				title='myFrame'
				src='https://www.youtube.com/embed/IhxD--LuNA0'
				allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen'
			/>

			<p>In collaboration with e-Novia.</p>
		</section>
	);
}
