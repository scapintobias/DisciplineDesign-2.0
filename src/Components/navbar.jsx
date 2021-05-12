import React from 'react';
import { NavLink } from 'react-router-dom';

import CN from 'classnames';
import { useExpanded } from '../Hooks/hooks';

import './index.scss';

export default function Header() {
	const [expanded, toggleExpanded] = useExpanded('.header .menu-icon');
	return (
		<>
			{' '}
			<header className={CN('header', { expanded })}>
				{' '}
				<NavLink
					to='/'
					className='block float-left p-3 text-2xl font-black text-white'
				>
					DisciplineDesign
				</NavLink>
				<div
					className='float-right font-light menu-icon'
					onClick={toggleExpanded}
				>
					<span className='navicon' />
				</div>
				<ul className='text-xl menu'>
					<li className=' hover:opacity-50'>
						<NavLink exact to='/work'>
							Work
						</NavLink>
					</li>
					<li className=' hover:opacity-50'>
						<NavLink exact to='/resources'>
							Resources
						</NavLink>
					</li>
					<li className=' hover:opacity-50'>
						<NavLink exact to='/about'>
							About
						</NavLink>
					</li>
					<li className='pb-4 hover:opacity-50'>
						<NavLink exact to='/contacts'>
							Contacts
						</NavLink>
					</li>
				</ul>
			</header>
		</>
	);
}
