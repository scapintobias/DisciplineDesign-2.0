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
	Pic,
	Collab,
	Collapsible,
	Biblio,
	ImgRid,
} from './components';
//import Vimeo from '@u-wave/react-vimeo';

export function Craf() {
	return (
		<Main>
			<Img oneimg='/cat/craf/craf_1.png' />

			<Par>
				This logo and Corporate Image have been developed during a workshop with
				Armando Milani giving some fundamental theoric lessons, and his brother
				Maurizio focusing on the production compartment. The very limited group
				of people granted me the possibility to design it four-handedly in a
				very close collaboration with him. Funnily enough, this workshop should
				have been participated by Massimo Vignelli too, but for personal reason
				had to decline.
				<Br />
				Many people feel ashamed showing their first projects. I could dig more
				into the archives and find lots of logos from the 2006-2008 period, but
				they wouldn't be as meaningful as this. And the reason is quite clear.
				Before meeting with Armando and Maurizio, I had a very fond appreciacion
				of everything design-related, but I was skeptical about turning into the
				core business of my profession. So this, rather than the first project
				at all, is the first project I designed with DisciplineDesign in mind,
				and a remainder of a spectacular encounter, where my career started to
				shape.
			</Par>
			<Iltr img='/cat/craf/craf_fonts.png'>
				<Head head='Specimens of the font involved for composing the logo and the rest of the Corporate Image.' />
				<Tit tit='Permanent Headline' />
				<P>
					A bold, highly compressed sans-serif typeface in the neo-grotesque
					style. It was designed by Karlgeorg Hoefer for the type foundry Ludwig
					& Mayer in Frankfurt am Main. It was released from 1964 and later
					issued by a range of companies in phototypesetting and digital
					versions.
					link='http://www.klingspor-museum.de/KlingsporKuenstler/Schriftdesigner/Hoefer/KGHoefer.pdf'
					rf='1' />
				</P>
				<Tit tit='Rotis Sans' />
				<P>
					A typeface developed in 1988 by Otl Aicher, who explores an attempt at
					maximum legibility through a highly unified yet varied typeface family
					that ranges from full serif, glyphic, and sans-serif. The four basic
					Rotis variants are: Rotis Serif, Rotis Semi-Serif, Rotis Semi-Sans,
					Rotis-Sans. In this case we used Rotis semi-sans (semi-grotesque) —
					with zero serifs but with stroke width variation
				</P>
			</Iltr>
			<Img oneimg='/cat/craf/craf_2.png' />

			<TwoImg image1='/cat/craf/craf_4.png' image2='/cat/craf/craf_5.png' />
			<Img oneimg='/cat/craf/craf_7.png' className='pt3' />
		</Main>
	);
}
