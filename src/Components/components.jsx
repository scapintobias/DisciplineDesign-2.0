import React from 'react';
import { NavLink } from 'react-router-dom';

const Study = (props) => {
	return (
		<>
			<NavLink key={props.type} to={'/work/study/' + props.to}>
				<div className=' hover:text-ruby-400'>
					<div className='relative h-96'>
						<img
							src={props.img}
							alt='proj'
							className='object-cover w-full h-full'
						/>
					</div>
					<p className='pt-3 text-sm font-normal uppercase'>{props.type}</p>
					<p className='py-1 text-4xl font-light'>{props.title}</p>
					<p className='text-base font-extralight '>{props.subtitle}</p>
				</div>
			</NavLink>
		</>
	);
};

export const CaseStudies = () => {
	return (
		<div className='flex flex-col pb-32 mx-auto max-w-7xl sm:px-6 lg:px-8'>
			<div className='pb-8'>
				<p className='text-3xl font-light'>Case Studies</p>
				<p className='text-lg font-extralight'>selected projects</p>
			</div>
			<div className='grid pb-32 md:grid-cols-2 sm:grid-cols-1 gap-y-16'>
				<Study
					img='/img/lidar.jpg'
					to='yape'
					type='User experience'
					title='Yape'
					subtitle='e-Novia'
				/>
				<Study
					img='/cat/lima/4.png'
					to='lima'
					type='Waifinding'
					title='Metro de Lima'
					subtitle='subway'
				/>
				<Study
					img='/cat/borromeo/borromeo.jpg'
					to='borromeo5'
					type='Branding'
					title='Borromeo5'
					subtitle='A new flavour'
				/>
				<Study
					img='/cat/yape/yape_4.png'
					to='yape-srl'
					type='Branding'
					title='Yape'
					subtitle='e-Novia'
				/>
			</div>
		</div>
	);
};

export const StudiesGrid = () => {
	return <></>;
};
