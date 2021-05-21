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

export function Saf() {
	return (
		<Main>
			<Img oneimg='/cat/saf/saf_1.png' />

			<Iltr img='/cat/saf/saf_2.png'>
				<Head head='Specimens of the font involved for composing the logo and the rest of the Corporate Image.' />
				<Tit tit='Akzidenz Grotesk' />
				<P>
					First issued by Berthold in 1898 as Accidenz-Grotesk. Many loosely
					related styles from various sources were incorporated into the family.
					Further extended and homogenized by G.G. Lange from the late 1950s on.
					Lange regards{' '}
					<a
						href='https://www.bertholdtypes.com/font/royal-grotesk/proplus/'
						rel='noopener noreferrer'
						target='_blank'
						className='link hover-orange b'
					>
						Royal-Grotesk
					</a>{' '}
					the key source and credits it to Ferdinand Theinhardt, but that is
					disputed, see Eckehart Schumacher-Gebler’s article in{' '}
					<a
						href='http://www.tinograss.de/albums/schriftgestalten/'
						target='_blank'
						rel='noopener noreferrer'
						className='link hover-orange b'
					>
						Tino Graß: Schriftgestalten
					</a>{' '}
					and{' '}
					<a
						href='http://kupferschrift.de/cms/2012/04/ag/'
						target='_blank'
						rel='noopener noreferrer'
						className='link hover-orange b'
					>
						Indra Kupferschmid’s blog post
					</a>
					. Distributed in the US and UK as
					<a
						href='https://books.google.it/books?id=AHq-uK6F-PUC&pg=PA10&lpg=PA10&dq=standard+akzidenz-grotesk&source=bl&ots=bh1Bcz8Dbh&sig=QyUqvslwf-PYb_B4upWJKxOTmRk&hl=en&sa=X&ei=s67EUqCXKcP4oATmlYCoDg&redir_esc=y#v=onepage&q=standard%20akzidenz-grotesk&f=false'
						rel='noopener noreferrer'
						className='link hover-orange b'
					>
						Standard
					</a>{' '}
					and commonly used in the 1950s–60s.
				</P>
			</Iltr>
			<Img oneimg='/cat/saf/saf_5.png' className='w-50 w-100-m center' />

			<Img oneimg='/cat/saf/saf_3.png' className='pb3' />

			<Img oneimg='/cat/saf/saf_4.png' />
		</Main>
	);
}
