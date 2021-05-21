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

export function Mental() {
	return (
		<Main>
			<section className='grid-3'>
				<div>
					<img src='/cat/photo/mc/mc4.jpg' alt='mental' />
				</div>

				<div>
					<img src='/cat/photo/mc/mc1.jpg' alt='mental' />
				</div>

				<div>
					<img src='/cat/photo/mc/mc2.jpg' alt='mental' />
				</div>

				<div>
					<img src='/cat/photo/mc/mc3.jpg' alt='mental' />
				</div>

				<div>
					<img src='/cat/photo/mc/mc5.jpg' alt='mental' />
				</div>

				<div>
					<img src='/cat/photo/mc/mc6.jpg' alt='mental' />
				</div>
			</section>
		</Main>
	);
}
