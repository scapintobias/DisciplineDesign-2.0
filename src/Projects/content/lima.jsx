import React from 'react';

import {
	Main,
	Par,
	Sec,
	Iltr,
	Img,
	Br,
	Head,
	Tit,
	P,
	Pic,
	Collab,
} from './components';

export function Lima() {
	return (
		<>
			<Collab href='http://www.aetherotopies.com/' collab='Samuel Iuri' />

			<Main>
				<div className='flex items-center justify-center w-screen h-screen'>
					<img src='/cat/lima/limalogo.png' alt='limalogo' className='w-4/6' />
				</div>
				<p className='pb-40 font-serif text-2xl tracking-wide max-w-prose md:pl-24'>
					The first stage of the process consisted in a vast analysis of all the
					available material of both the existing and the future lines, in order
					to comprehend the vastness and complexity of the system, and its
					actual wayfinding.
					<Br />
					<Br />
					The outcome of this research has shown vast possibilities of
					improvement, from both a design and infrastructural integration
					perspective, to solve the lack of scalability, legibility, and
					consistency.
					<Br />
					<Br />
					The second stage consisted in the evaluation of the available channels
					to convey information through, which consist in: map, station signage,
					train signage, etc.
					<Br />
					<Br />
					The third stage consisted in the developement of a coherent system,
					which takes advantage of the stations’ architecture, has a inner
					modularity (hence using the pillars), and provides in a clear way the
					few but essential informations (station name, train direction, entries
					and exits)
				</p>
				<div className='w-full'>
					<img src='/cat/lima/4.png' alt='mezzanine' className='w-full' />
				</div>

				<Iltr img='/cat/lima/simplon.png'>
					<Head head='Specimens of the font involved for composing the logo and the rest of the Corporate Image.' />
					<Tit tit='Simplon Norm' />
					<P>
						Simplon is a sans-serif typeface that is widely used for traffic,
						administrative and technical applications. It’s based on the German
						standards body DIN - Deutsches Institut für Normung (German
						Institute for Standardization), in the standard typefaces sheet
						published in 1931. Originally designed for industrial uses, the
						first DIN-type fonts were a simplified design that could be applied
						with limited technical difficulty. Due to the design’s legibility
						and uncomplicated, unadorned design, it has become popular for
						general purpose use in signage and display adaptations.
					</P>
				</Iltr>
				<Img oneimg='/cat/lima/section.png' />
				<div className='self-center w-9/12 m-4 space-y-4'>
					<Pic img='/cat/lima/aeropuerto.png' imgClass='border border-black' />

					<Img oneimg='/cat/lima/salida.png' />
				</div>
				<Img oneimg='/cat/lima/map.png' className='self-center w-9/12' />

				<Par>
					<Sec title='Map' />
					This kind of representation shows a fictional geography by moving away
					from the concept that transportation maps had to position the
					underground geography directly to the aboveground geography. Such
					design moves away from the idea that the representation has to follow
					the actual geographical route of the lines. By replacing the strict
					geographically imposed rules, that requires that entities represented
					be placed exactly where they are located in the physical world, with a
					regular pattern of horizontal, vertical or diagonal lines the proposed
					map depicts much more clearly the relative locations of the different
					lines and the sequence of stations. In this way, the map turns out to
					be an useful support in gaining an understanding of the complexities
					of the underground lines, and an aid in travel planning. For these
					reasons it can act as a navigation tool to assist in working one’s way
					through the underground maze of lines and stations and as a reference
					once a journey is underway.
				</Par>
				<Img oneimg='/cat/lima/5.png' />
			</Main>
		</>
	);
}
