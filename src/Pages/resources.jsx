import React from 'react';
import { Biblio, Main } from '../Projects/content/components';

export function Resources() {
	return (
		<Main>
			<div className='w-full mt-6 border-t'>
				<p className='py-5 font-sans text-3xl font-bold tracking-tight text-charcoal-800'>
					Research Bibliography
				</p>
				<div class='flex overflow-x-scroll hide-scroll-bar'>
					<div className='flex flex-nowrap md:gap-6 sm:gap-4'>
						<Biblio
							author='Gray, H, illustrations of Carter, H'
							name='Anatomy: Descriptive and Surgical.'
							publication='London: JohnW. Parker and Son, '
							year='1858.'
							link='https://bit.ly/2TGpTtu'
						/>

						<Biblio
							author='Guyton, A Hall, E'
							name='Textbook of medical physiology.'
							publication='Elsevier Saunders, '
							year='2006.'
							link='https://bit.ly/1sp9eWA'
						/>
						<Biblio
							link='https://tinyurl.com/y52xdnqc'
							name='Human factors of visual and cognitive performance in driving.'
							author='Cándida Castro'
							publication='CRC Press—Taylor and Francis Group, '
							year='2009.'
						/>
						<Biblio
							author='A C Newberry, MJ Griffin, M Dowson'
							name='Driver perception of steering feel.'
							publication='Human Factors Research Unit, University of Southampton, '
							year='2007.'
							link='https://doi.org/10.1243/09544070JAUTO415'
						/>
						<Biblio
							author='Edmund Donges'
							name='A Two-LevelModel of Driver Steering Behavior.'
							publication='The Human Factor Society,'
							year='1978'
							link='https://tinyurl.com/y37kqxoy'
						/>
						<Biblio
							author='Cloete, S.R. &Wallis, G'
							name='Limitations of feedforward control in multiple-phase steering movements.'
							publication='Experimental Brain Research,'
							year='2009,'
							pages='195: 481.'
							link='https://doi.org/10.1007/s00221-009-1813-6'
						/>
						<Biblio
							author='Wallis G, Chatziastros A, Bülthoff H'
							name='An unexpected role for visual feedback in vehicle steering control.'
							publication='Max Planck Institute for Biological Cybernetics, '
							year='2002.'
							link='https://doi.org/10.1007/s00221-009-1813-6'
						/>
						<Biblio
							className='bb'
							link='https://doi.org/10.1016/j.ergon.2006.06.013'
							name='The Effects of Graphical Interface Design Characteristics on Human–Computer Interaction Task Efficiency.'
							author='R. Michalski, J. Grobelny and W. Karwowsk'
							year='2006.'
							publication='International Journal of Industrial Ergonomics,'
							pages='vol. 36, pp. 959–977,'
						/>
						<Biblio
							className='bb'
							link='http://ps-2.kev009.com/rs6000/redbook-cd/gg244107.pdf'
							name='The library for system solutions End User Interface reference.'
							author='International Business Machines'
						/>
						<Biblio
							className='bb'
							link='https://doi.org/10.1016/S0020-7373(81)80049-1'
							name='The ZOG Approach to Man-Machine Communication.'
							author='O. Robertson, D. McCracken and A. Newell'
							year='1996.'
							publication='International Journal of Human-Computer Studies, '
							pages='vol. 51, pp. 279-306'
						/>
						<Biblio
							className='bb'
							link='https://ieeexplore.ieee.org/document/5335992'
							name='Human-Machine Interface: Design Principles of Visual Information in Human-Machine Interface Design.'
							author='C. Gong'
							year='2009.'
							publication='International Conference on Intelligent Human-Machine Systems and Cybernetics, Hangzhou, Zhejiang,'
							pages='pp. 262-265.'
						/>
					</div>
				</div>
			</div>
		</Main>
	);
}
