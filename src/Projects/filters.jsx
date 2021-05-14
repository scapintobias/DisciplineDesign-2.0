import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { colorTypes } from './index';

export const ProjectFilters = (props) => {
	return (
		<>
			<div className='box-border fixed z-20 flex items-center w-full p-4 mt-16 space-x-4 overflow-x-scroll bg-white border-b'>
				<NavLink
					exact
					to='/work'
					className='px-3 py-2 text-xs leading-none tracking-wide text-white uppercase rounded-full bg-coolGray-500'
				>
					All
				</NavLink>

				<NavLink to='/work/ux' className={colorTypes.ux}>
					UX/UI
				</NavLink>
				<NavLink to='/work/photography' className={colorTypes.photography}>
					Photography
				</NavLink>
				<NavLink to='/work/wayfinding' className={colorTypes.wayfinding}>
					Wayfinding
				</NavLink>
				<NavLink to='/work/corporate' className={colorTypes.corporate}>
					Branding
				</NavLink>
				<NavLink to='/work/poster' className={colorTypes.poster}>
					Posters
				</NavLink>
				<NavLink to='/work/print' className={colorTypes.print}>
					Print
				</NavLink>
				<NavLink to='/work/video' className={colorTypes.video}>
					Video
				</NavLink>
				<NavLink to='/work/exhibit' className={colorTypes.exhibit}>
					Exhibit
				</NavLink>
				<NavLink to='/work/event' className={colorTypes.event}>
					Events
				</NavLink>
				<div className='px-1 py-2 text-xs leading-none tracking-wide text-white uppercase rounded-full '>
					{' '}
				</div>
			</div>

			<div className='clear-both h-32' />
		</>
	);
};
