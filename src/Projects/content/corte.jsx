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

export function Corte() {
	return (
		<Main>
			<Img oneimg='/cat/corte/corte_1.png' className='pb4-m' />

			<Iltr img='/cat/corte/corte_type.png'>
				<Head head='Specimens of the font involved for composing the logo and the rest of the Corporate Image.' />
				<Tit tit='Gill Sans' />
				<P>
					Gill Sans was designed by Eric Gill: a versatile, brilliant, and
					prolifically successful designer of the early part of the last
					century. One of the main reasons for the enduring success of his
					namesake design is that it is based on Roman character shapes and
					proportions, making it unlike virtually any other sans serif out
					there. Gill also worked his own warmth and humanity into his design,
					resulting in a typeface in which each weight retains a distinct
					personality of its own.
				</P>
				<Tit tit='Our Bodoni' />
				<P>
					Commissioned by Bert Di Pamphilis of WTC and designed by Tom Carnase
					under the direction of Massimo Vignelli. The goal of this 1989 Bodoni
					revival was to match the proportions of Helvetica.
				</P>
			</Iltr>
			<Img oneimg='/cat/corte/corte_3.png' className='pb3' />

			<Img oneimg='/cat/corte/corte_4.png' className='pb3' />

			<Img oneimg='/cat/corte/corte_2.png' />
		</Main>
	);
}
