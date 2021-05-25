import React from 'react';

import { Main, Par, Sec, Img, Specimen, DescriptionImage } from './components';

export function Lima() {
	return (
		<>
			<div className='w-screen h-main'>
				<div className='absolute w-full origin-left transform rotate-90 translate-x-full right-4'>
					This project was developed in close collaboration with:{' '}
					<a
						href='http://www.aetherotopies.com/'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-ruby'
					>
						Samuel Iuri
					</a>
				</div>
				<div className='flex items-center justify-center w-full h-full'>
					<img
						src='/cat/lima/limalogo.png'
						alt='limalogo'
						className='object-cover w-4/6'
					/>
					<p className='absolute prose prose-2xl text-charcoal-300 bottom-20'>
						New identity and wayfinding for the Lima subway
					</p>
				</div>
			</div>

			<Main>
				<Par>
					<p className='pb-5'>
						The first stage of the process consisted in a vast analysis of all
						the available material of both the existing and the future lines, in
						order to comprehend the vastness and complexity of the system, and
						its actual wayfinding.
					</p>
					<p className='pb-5'>
						The outcome of this research has shown vast possibilities of
						improvement, from both a design and infrastructural integration
						perspective, to solve the lack of scalability, legibility, and
						consistency.
					</p>
					<p className='pb-5'>
						The second stage consisted in the evaluation of the available
						channels to convey information through, which consist in: map,
						station signage, train signage, etc.
					</p>
					<p>
						The third stage consisted in the developement of a coherent system,
						which takes advantage of the stations’ architecture, has a inner
						modularity (hence using the pillars), and provides in a clear way
						the few but essential informations (station name, train direction,
						entries and exits)
					</p>
				</Par>

				<DescriptionImage src='/cat/lima/4.png' description='Mezzanine' />

				<div className='flex w-full mb-40 sm:flex-col md:flex-row md:space-x-6 md:space-y-0 sm:space-y-4 sm:items-center md:items-stretch'>
					<div className='gap-6 border sm:w-8/12 md:w-3/12 border-charcoal-300 sm:py-40 md:py-60 '>
						<img src='/cat/lima/aeropuerto.png' alt='aropuerto' />
					</div>
					<div className='gap-6 border sm:w-8/12 md:w-3/12 border-charcoal-300 sm:py-40 md:py-60'>
						<img src='/cat/lima/salida.png' alt='salida' />
					</div>
				</div>

				{/* //*Section of the platform  */}
				{/* //TODO change the description*/}

				<div className='inline-block whitespace-nowrap'>
					<img
						src='/cat/lima/ortorenderstazione.jpg'
						alt='section'
						className='object-cover object-left h-96'
					/>
				</div>

				<Img
					oneimg='/cat/lima/map.png'
					className='mt-12 md:self-center sm:w-full md:w-9/12'
				/>
				<Par>
					<h1>Map</h1>
					<p>
						This kind of representation shows a fictional geography by moving
						away from the concept that transportation maps had to position the
						underground geography directly to the aboveground geography. Such
						design moves away from the idea that the representation has to
						follow the actual geographical route of the lines. By replacing the
						strict geographically imposed rules, that requires that entities
						represented be placed exactly where they are located in the physical
						world, with a regular pattern of horizontal, vertical or diagonal
						lines the proposed map depicts much more clearly the relative
						locations of the different lines and the sequence of stations. In
						this way, the map turns out to be an useful support in gaining an
						understanding of the complexities of the underground lines, and an
						aid in travel planning. For these reasons it can act as a navigation
						tool to assist in working one’s way through the underground maze of
						lines and stations and as a reference once a journey is underway.
					</p>
				</Par>
				<DescriptionImage src='/cat/lima/5.png' description='Map' />
			</Main>
		</>
	);
}
