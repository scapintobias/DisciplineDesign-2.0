import React from 'react';

import {
	Main,
	Par,
	Sec,
	ParImg,
	Iltr,
	Img,
	Br,
	TwoImg,
	Head,
	Tit,
	P,
	Rf,
	Pic,
	Collab,
	Collapsible,
	Biblio,
	ImgRid,
} from './components';
//import Vimeo from '@u-wave/react-vimeo';

export function Ideascudo() {
	return (
		<Main>
			<Img oneimg='/cat/ideascudo/ideascudo_1.png' />

			<Iltr img='/cat/ideascudo/ideascudo_2.png'>
				<Head head='Specimens of the font involved for composing the logo and the rest of the Corporate Image.' />
				<Tit tit='Permanent Headline' />
				<P>
					A bold, highly compressed sans-serif typeface in the neo-grotesque
					style. It was designed by Karlgeorg Hoefer for the type foundry Ludwig
					& Mayer in Frankfurt am Main. It was released from 1964 and later
					issued by a range of companies in phototypesetting and digital
					versions.
					<Rf
						link='http://www.klingspor-museum.de/KlingsporKuenstler/Schriftdesigner/Hoefer/KGHoefer.pdf'
						rf='1'
					/>
				</P>
			</Iltr>
		</Main>
	);
}
