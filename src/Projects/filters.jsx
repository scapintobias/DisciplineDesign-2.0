import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { projectTypes } from './index';

export const ProjectFilters = (props) => {
	const filterLabel = props.type ? projectTypes[props.type] : 'All';
	useEffect(() => {
		window.sessionStorage.setItem('currentType', props.type || '');
	});
	return (
		<>
			<div className='box-border fixed z-20 flex items-center w-full py-4 overflow-x-scroll text-2xl bg-white border-b mt-14'>
				<div className='px-4 py-2 ml-4 mr-4 border rounded-xl border-ruby w-max'>
					<b>{filterLabel}</b>
				</div>
				<div className='pr-4 space-x-4'>
					<NavLink
						exact
						to='/work'
						className='px-4 py-2 rounded-lg shadow hover:text-white hover:bg-ruby'
					>
						All
					</NavLink>

					<NavLink
						to='/work/ux'
						className='px-4 py-2 rounded-lg shadow hover:text-white hover:bg-ruby'
					>
						UX/UI
					</NavLink>
					<NavLink
						to='/work/photography'
						className='px-4 py-2 rounded-lg shadow hover:text-white hover:bg-ruby'
					>
						Photography
					</NavLink>
					<NavLink
						to='/work/wayfinding'
						className='px-4 py-2 rounded-lg shadow hover:text-white hover:bg-ruby'
					>
						Wayfinding
					</NavLink>
					<NavLink
						to='/work/corporate'
						className='px-4 py-2 rounded-lg shadow hover:text-white hover:bg-ruby'
					>
						Corporate
					</NavLink>
					<NavLink
						to='/work/poster'
						className='px-4 py-2 rounded-lg shadow hover:text-white hover:bg-ruby'
					>
						Posters
					</NavLink>
					<NavLink
						to='/work/print'
						className='px-4 py-2 rounded-lg shadow hover:text-white hover:bg-ruby'
					>
						Print
					</NavLink>
					<NavLink
						to='/work/video'
						className='px-4 py-2 rounded-lg shadow hover:text-white hover:bg-ruby'
					>
						Video
					</NavLink>
					<NavLink
						to='/work/exhibit'
						className='px-4 py-2 rounded-lg shadow hover:text-white hover:bg-ruby'
					>
						Exhibit
					</NavLink>
					<NavLink
						to='/work/event'
						className='px-4 py-2 rounded-lg shadow hover:text-white hover:bg-ruby'
					>
						Events
					</NavLink>
				</div>
			</div>
			<div className='clear-both h-36' />
		</>
	);
};
