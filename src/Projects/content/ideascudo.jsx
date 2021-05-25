import React from 'react';

import { Main, Img, Specimen } from './components';
//import Vimeo from '@u-wave/react-vimeo';

export function Ideascudo() {
	return (
		<Main>
			<Img oneimg='/cat/ideascudo/ideascudo_1.png' />
			<Specimen
				image='/cat/ideascudo/ideascudo_2.png'
				description='A bold, highly compressed sans-serif typeface in the neo-grotesque
					style. It was designed by Karlgeorg Hoefer for the type foundry Ludwig
					& Mayer in Frankfurt am Main. It was released from 1964 and later
					issued by a range of companies in phototypesetting and digital
					versions.'
				link='http://www.klingspor-museum.de/KlingsporKuenstler/Schriftdesigner/Hoefer/KGHoefer.pdf'
				number='1'
			/>
		</Main>
	);
}
