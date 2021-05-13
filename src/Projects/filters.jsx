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
			<div className='box-border fixed z-20 flex items-center w-full py-4 overflow-x-scroll bg-white border-b mt-14'>
				<div className='px-4 py-2 ml-4 mr-4 text-xs uppercase border rounded shadow outline-none border-ruby w-max'>
					<b>{filterLabel}</b>
				</div>
				<div className='pr-4 space-x-4'>
					<NavLink
						exact
						to='/work'
						className='px-4 py-2 mb-1 mr-1 text-xs uppercase transition-all duration-150 ease-in-out bg-white rounded shadow outline-none hover:shadow-md hover:bg-ruby hover:text-white focus:outline-none'
					>
						All
					</NavLink>

					<NavLink
						to='/work/ux'
						className='px-4 py-2 mb-1 mr-1 text-xs uppercase transition-all duration-150 ease-in-out bg-white rounded shadow outline-none hover:shadow-md hover:bg-ruby hover:text-white focus:outline-none'
					>
						UX/UI
					</NavLink>
					<NavLink
						to='/work/photography'
						className='px-4 py-2 mb-1 mr-1 text-xs uppercase transition-all duration-150 ease-in-out bg-white rounded shadow outline-none hover:shadow-md hover:bg-ruby hover:text-white focus:outline-none'
					>
						Photography
					</NavLink>
					<NavLink
						to='/work/wayfinding'
						className='px-4 py-2 mb-1 mr-1 text-xs uppercase transition-all duration-150 ease-in-out bg-white rounded shadow outline-none hover:shadow-md hover:bg-ruby hover:text-white focus:outline-none'
					>
						Wayfinding
					</NavLink>
					<NavLink
						to='/work/corporate'
						className='px-4 py-2 mb-1 mr-1 text-xs uppercase transition-all duration-150 ease-in-out bg-white rounded shadow outline-none hover:shadow-md hover:bg-ruby hover:text-white focus:outline-none'
					>
						Branding
					</NavLink>
					<NavLink
						to='/work/poster'
						className='px-4 py-2 mb-1 mr-1 text-xs uppercase transition-all duration-150 ease-in-out bg-white rounded shadow outline-none hover:shadow-md hover:bg-ruby hover:text-white focus:outline-none'
					>
						Posters
					</NavLink>
					<NavLink
						to='/work/print'
						className='px-4 py-2 mb-1 mr-1 text-xs uppercase transition-all duration-150 ease-in-out bg-white rounded shadow outline-none hover:shadow-md hover:bg-ruby hover:text-white focus:outline-none'
					>
						Print
					</NavLink>
					<NavLink
						to='/work/video'
						className='px-4 py-2 mb-1 mr-1 text-xs uppercase transition-all duration-150 ease-in-out bg-white rounded shadow outline-none hover:shadow-md hover:bg-ruby hover:text-white focus:outline-none'
					>
						Video
					</NavLink>
					<NavLink
						to='/work/exhibit'
						className='px-4 py-2 mb-1 mr-1 text-xs uppercase transition-all duration-150 ease-in-out bg-white rounded shadow outline-none hover:shadow-md hover:bg-ruby hover:text-white focus:outline-none'
					>
						Exhibit
					</NavLink>
					<NavLink
						to='/work/event'
						className='px-4 py-2 mb-1 mr-1 text-xs uppercase transition-all duration-150 ease-in-out bg-white rounded shadow outline-none hover:shadow-md hover:bg-ruby hover:text-white focus:outline-none'
					>
						Events
					</NavLink>
				</div>
			</div>
			<div className='clear-both h-32' />
		</>
	);
};
