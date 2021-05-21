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

export function Rankin() {
	return (
		<Main>
			<Img oneimg='/cat/rankin/rankin_1.png' className='mw8 center mb4 mb0-m' />

			<Iltr img='/cat/rankin/rankin_2.png'>
				<Head head='Specimens of the font involved for composing the logo and the rest of the Corporate Image.' />
				<Tit tit='Our Bodoni' />
				<P>
					Commissioned by Bert Di Pamphilis of WTC and designed by Tom Carnase
					under the direction of Massimo Vignelli. The goal of this 1989 Bodoni
					revival was to match the proportions of Neue Haas Grotesk.
				</P>
			</Iltr>
			<Par>
				<Sec title='Color palette' />
			</Par>
			<Img oneimg='/cat/rankin/rankin_3.png' />

			<Img oneimg='/cat/rankin/rankin_4.png' className='mt6' />
		</Main>
	);
}
