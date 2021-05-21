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

export function Tokyo() {
	return (
		<Main>
			<Pic
				img='/cat/tokyo/tokyo_1.png'
				className='mw8 center'
				imgClass='ba b--mid-gray'
			/>

			<Par>
				<Sec title='Univers' />
				<ParImg oneimg='/cat/tokyo/tokyo_2.png' />
				Univers was designed by Adrian Frutiger on Swiss principles for Charles
				Peignot at Deberny & Peignot.
				<Br />
				<Br />
				Frutiger imposed strict discipline across all elements of the series,
				from light to dark, extra condensed to extended, a concordance of design
				that was possible in the foundry type and photocomposition fonts. Any
				version may be mixed within a word with any other. It may be argued that
				the design of the most popular central series is limited by strict
				conformity to little used extremes. If Helvetica gives us the strongest
				central designs at some sacrifice in uniformity across the series,
				Univers gives us a uniform series by disciplining the central designs.
				<Br />
				<Br />
				Alteration of character widths required by the Monotype caster separates
				Monotype Univers from the original; the Linotype photocomposition
				version, designed by Frutiger, has a more even color across the series,
				achieved by relaxing the original rigid formula for stroke width.
				<Br />
				<Br />
				IBM Selectric Univers, designed by Frutiger, is less successful, since
				it had to be placed on widths tuned for Times Roman.
			</Par>
		</Main>
	);
}
