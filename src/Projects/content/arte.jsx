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

export function Arte() {
	return (
		<Main>
			<Img oneimg='/cat/corte/posters/poster.jpg' className='mw68 center pb3' />

			<Img oneimg='/cat/corte/posters/flyer.jpg' className='pb3' />

			<Img oneimg='/cat/corte/posters/banner.jpg' />
		</Main>
	);
}
