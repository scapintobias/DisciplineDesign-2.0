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

export function Ducati() {
	return (
		<Main>
			<section className=' ma0-m'>
				<div className='resp-container'>
					<iframe
						className='resp-iframe'
						title='myFrame'
						src='https://www.youtube.com/embed/IhxD--LuNA0'
						allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen'
					/>
				</div>
				<p className=' mt2 minion gray tr tl-t tl-m f6'>
					In collaboration with e-Novia.
				</p>
			</section>
		</Main>
	);
}
