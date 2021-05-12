import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
export default function Navbar() {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<nav className='fixed flex flex-wrap justify-between min-w-full px-2 py-3 mb-3 bg-ruby'>
				<div className='flex flex-wrap justify-between min-w-full px-4 mx-auto'>
					<div className='relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start'>
						<a
							className='inline-block py-2 mr-4 font-bold leading-relaxed text-white text-m whitespace-nowrap'
							href='#pablo'
						>
							DisciplineDesign
						</a>
						<button
							className='block px-3 py-1 text-xl leading-none text-white bg-transparent border-collapse outline-none cursor-pointer lg:hidden focus:outline-none'
							type='button'
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<FontAwesomeIcon icon={faBars} color='white' />
						</button>
					</div>
					<div
						className={
							'lg:flex flex-grow items-center' +
							(navbarOpen ? ' flex' : ' hidden')
						}
						id='example-navbar-danger'
					>
						<ul className='flex flex-col list-none lg:flex-row lg:ml-auto'>
							<li className='nav-item'>
								<a
									className='flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75'
									href='#pablo'
								>
									<i className='text-lg text-white opacity-75 fab fa-facebook-square leading-lg'></i>
									<span className='ml-2'>Share</span>
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75'
									href='#pablo'
								>
									<i className='text-lg text-white opacity-75 fab fa-twitter leading-lg'></i>
									<span className='ml-2'>Tweet</span>
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75'
									href='#pablo'
								>
									<i className='text-lg text-white opacity-75 fab fa-pinterest leading-lg'></i>
									<span className='ml-2'>Pin</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
