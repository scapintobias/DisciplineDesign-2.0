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

export function ManinP() {
	return (
		<Main>
			<div className='gridp mb3'>
				<img src='/cat/manin/capa.png' alt='poster' />

				<img src='/cat/manin/ciuha.png' alt='poster' />

				<img src='/cat/manin/tiepolo.png' alt='poster' />

				<img src='/cat/manin/munch.png' alt='poster' />
			</div>

			<Img oneimg='/cat/manin/manin_7.png' className='pb3' />
			<TwoImg image1='/cat/manin/manin_8.png' image2='/cat/manin/manin_9.png' />
		</Main>
	);
}
