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

export function Manin() {
	return (
		<Main>
			<Img oneimg='/cat/manin/manin_1.png' />

			<Iltr img='/cat/manin/manin_2.png'>
				<Head head='Specimens of the font involved for composing the logo and the rest of the Corporate Image.' />
				<Tit tit='Neue Haas Grotesk' />
				<P>
					The first weights of Neue Haas Grotesk were designed in 1957-1958 by
					Max Miedinger for the Haas’sche Schriftgiesserei in Switzerland, with
					art direction by the company’s principal, Eduard Hoffmann. Neue Haas
					Grotesk was to be the answer to the British and German grotesques that
					had become hugely popular thanks to the success of functionalist Swiss
					typography. The typeface was soon revised and released as Helvetica by
					Linotype AG.
				</P>
				<Tit tit='Our Bodoni' />
				<P>
					Commissioned by Bert Di Pamphilis of WTC and designed by Tom Carnase
					under the direction of Massimo Vignelli. The goal of this 1989 Bodoni
					revival was to match the proportions of Neue Haas Grotesk.
				</P>
			</Iltr>
			<Img oneimg='/cat/manin/manin_3.png' />

			<Img oneimg='/cat/manin/manin_5.png' />
		</Main>
	);
}
