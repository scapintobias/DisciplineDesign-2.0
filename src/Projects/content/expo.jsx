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

export function Expo() {
	return (
		<Main>
			<Img oneimg='/cat/expo/expo_1.png' />

			<Img oneimg='/cat/expo/expo_2.jpg' className='pb3' />

			<Img oneimg='/cat/expo/expo_3.jpg' className='pb3' />

			<Img oneimg='/cat/expo/expo_4.jpg' />
		</Main>
	);
}
