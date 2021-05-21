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

export function Numeriprimi() {
	return (
		<Main>
			<Img
				oneimg='/cat/numeriprimi/primi_1.png'
				className='mw8 mw100-m center'
			/>

			<Iltr img='/cat/numeriprimi/primi_4.png'>
				<Head head='Specimens of the font involved for composing the Book.' />
				<Tit tit='Our Headline' />
				<P>
					Originally drawn by Walter Haettenschweiler in 1954, derived from an
					assignment by Ernst Keller at Kunstgewerbeschule Zürich, and made as
					an improvement over Commercial-Grotesk (Haas, 1940).
					<Br />
					<Br />
					No lowercase.
					<Br />
					<Br />
					<a
						href='http://www.swisstypedesign.ch/schriftfamilie/111/'
						rel='noopener noreferrer'
						target='_blank'
						className='link hover-orange b'
					>
						Swiss Type Design
					</a>{' '}
					Included in Lettera vol. 1, an alphabet source book edited by Alex
					Stocker and Armin Haab. Also known simply as Schmalfette (“Bold
					Condensed”).
					<Br />
					<Br />
					No official digital version is available, therefore for the purpose of
					the project the entire typeface has been redesigned from scratch based
					on the original drawings, and it's not commercially available.
				</P>
			</Iltr>
			<Par>
				<Sec title='Layout' />
				<ParImg
					oneimg='/cat/numeriprimi/primi_3.png'
					className='ba b--light-silver'
				/>

				<ParImg oneimg='/cat/numeriprimi/primi_cover.png' />
			</Par>
			<Img oneimg='/cat/numeriprimi/primi_6.png' />

			<Img oneimg='/cat/numeriprimi/primi_5.png' />
		</Main>
	);
}
