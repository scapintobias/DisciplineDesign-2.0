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

export function Parole() {
	return (
		<Main>
			<Img oneimg='/cat/prigioniere/expo_8.png' className='mw8 center pb3' />

			<Img oneimg='/cat/prigioniere/expo_me.jpg' className='mw8 center' />

			<div className='flex pv3 flex-column-m'>
				<Pic img='/cat/prigioniere/expo_2.jpg' className='pr3 pr0-m pb3-m' />

				<Pic img='/cat/prigioniere/expo_3.jpg' className='ph2 ph0-m pb3-m' />

				<Pic img='/cat/prigioniere/expo_4.jpg' className='pl3 pl0-m' />
			</div>
			<Img oneimg='/cat/prigioniere/expo_7.jpg' className='mw8 center' />

			<div className='flex pt3 flex-column-m'>
				<Pic img='/cat/prigioniere/expo_4a.jpg' className='pr3 pr0-m pb3-m' />

				<Pic img='/cat/prigioniere/expo_5.jpg' className='ph2 ph0-m pb3-m' />

				<Pic img='/cat/prigioniere/expo_6.jpg' className='pl3 pl0-m' />
			</div>
		</Main>
	);
}
