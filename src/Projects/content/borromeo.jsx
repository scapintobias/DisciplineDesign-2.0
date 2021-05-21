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

export function Borromeo() {
	return (
		<Main>
			<Img oneimg='/cat/borromeo/borromeo_1.png' />

			<Iltr img='/cat/borromeo/borro_type.png'>
				<Head head='Specimens of the font involved for composing the logo and the rest of the Corporate Image.' />
				<Tit tit='Didi Didot' />
				<P>
					This showy 1970s take on Didot is credited by various sources to Herb
					Lubalin and Tom Carnase, but an{' '}
					<a
						href='https://fontsinuse.com/uses/9271/didi-typeface-ad'
						target='_blank'
						rel='noopener noreferrer'
						className='link hover-orange b'
					>
						early LSC advertisement
					</a>{' '}
					credits Carnase alone. It’s possible that it was derived directly from{' '}
					<a
						href='https://fontsinuse.com/typefaces/31809/cbs-didot'
						rel='noopener noreferrer'
						className='link hover-orange b'
					>
						CBS Didot.
					</a>
					<Br />
					<Br />
					No official digital version is available, therefore for the purpose of
					the project the entire typeface has been redesigned from scratch based
					on the original drawings, and it's not commercially available.
				</P>
			</Iltr>
			<div className='mw9 center'>
				<iframe
					title='map'
					src='https://www.google.com/maps/embed?pb=!4v1593527146194!6m8!1m7!1soRCLTqKyBGT0y6ozxy-H2Q!2m2!1d45.46314368044688!2d9.182473936322225!3f94.38994941469211!4f1.7059391248629936!5f0.7820865974627469'
					width='100%'
					height='640'
					frameborder='0'
					style={{ border: '0' }}
					allowfullscreen=''
					aria-hidden='false'
					tabindex='0'
				></iframe>
			</div>
		</Main>
	);
}
