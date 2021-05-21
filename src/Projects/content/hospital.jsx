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

export function Hospital() {
	return (
		<Main>
			<Img oneimg='/cat/stblogo/stb_1.png' />

			<Iltr img='/cat/stblogo/stb_2.png'>
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
				<Tit tit='ITC Garamond' />
				<P>
					Drawn by Tony Stan, ITC Garamond was first released in 1975 in Book
					and Ultra weights only. These were intended as display faces to
					complement existing text designs from other foundries. (In fact, many
					of ITC’s interpretations of traditional typefaces began as display
					counterparts for existing text designs.) These first weights of ITC
					Garamond became so popular, however, that ITC released the Light and
					Bold weights and a suite of condensed faces in 1977. Now, the complete
					ITC Garamond family features sixteen members: four weights of roman
					and italic in normal width and four weights of roman and italic in
					companion condensed versions. The family resemblance is there, but ITC
					Garamond’s unique provenance gives it an unmistakable, one-of-a-kind
					appeal.
				</P>
			</Iltr>
			<Img oneimg='/cat/stblogo/stb_3.png' />

			<Img oneimg='/cat/stblogo/stb_4.png' />
		</Main>
	);
}
