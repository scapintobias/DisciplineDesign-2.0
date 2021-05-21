import React from 'react';
import CN from 'classnames';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';

export const Main = ({ children }) => (
	<main className='flex flex-col mx-6 mt-48 mb-6'>{children}</main>
);

export const Pic = ({ img, className, imgClass }) => (
	<div className={CN(className)}>
		<img src={img} alt='img' className={CN('w-full', imgClass)}></img>
	</div>
);

export const Img = ({ oneimg, className }) => (
	<div className={CN(' block', className)}>
		<img src={oneimg} alt='img' className='w-full' />
	</div>
);

export const Par = ({ className, children }) => (
	<section className='flex justify-center my-3 font-serif text-2xl tracking-wide flex-column md:flex-row'>
		<section className={CN(' w-full md:w-2/4', className)}>{children}</section>
	</section>
);

export const Sec = ({ title, subtitle }) => (
	<div className='py-4 text-4xl font-bold text-warmGray-500'>
		{title}
		<br></br>
		{subtitle}
	</div>
);

export const Sub = ({ title }) => (
	<div className='text-blueGray-200'>{title}</div>
);

export const ParImg = ({ oneimg, className }) => (
	<div className={CN('my-3', className)}>
		<img src={oneimg} alt='img' className='w-full' />
	</div>
);

export const TwoImg = ({ image1, image2, className, classNamee }) => (
	<div className='flex flex-row justify-center overflow-visible flex-column-m'>
		<div className='pr0-m pb3-m sm:w-full pr3 w-50'>
			<img src={image1} alt='img' className='w-full'></img>
		</div>
		<div className='pl2 pl0-m sm:w-full w-50'>
			<img src={image2} alt='img' className='w-full'></img>
		</div>
	</div>
);

export const GridImg = ({ image1, image2, className, classNamee }) => (
	<div className='flex flex-row justify-center overflow-hidden flex-column-m mb3'>
		<img src={image1} alt='img' className={CN('mr3 mr0-m', className)}></img>
		<img src={image2} alt='img' className={CN(classNamee)}></img>
	</div>
);

export const FourImg = ({ image1, image2, image3, image4 }) => (
	<div className='flex flex-row justify-center flex-column-m ph35 pt3 ph3-m'>
		<img
			src={image1}
			alt='img'
			className='pr0-m pb3-m sm:w-full pr1 w-25'
		></img>
		<img
			src={image2}
			alt='img'
			className='ph1 ph0-m pb3-m sm:w-full w-25'
		></img>
		<img
			src={image3}
			alt='img'
			className='ph0-m pb3-m sm:w-full ph1 w-25'
		></img>
		<img src={image4} alt='img' className='pl1 pl0-m sm:w-full w-25'></img>
	</div>
);

export const ImgRid = ({ children }) => (
	<div className='grid-3'>{children}</div>
);

export const Head = ({ head }) => (
	<p className='text-sm text-warmGray-400'>{head}</p>
);
export const Tit = ({ tit }) => (
	<p className='py-3 text-2xl font-medium text-warmGray-500'>{tit}</p>
);
export const P = ({ children }) => <p className='pb-3'>{children}</p>;
export const Rf = ({ link, rf }) => (
	<a href={link}>
		<sup>{rf}</sup>
	</a>
);
export const Iltr = ({ img, children }) => (
	<section className='flex flex-col space-x-4 t:flex-row'>
		<div className='w-7/12'>
			<img src={img} alt='alt' className='w-full' />
		</div>
		<div className='sticky t:w-5/12 sm:w-full'>
			<div>{children}</div>
		</div>
	</section>
);

export const Br = () => <br></br>;

export const Collab = ({ href, collab }) => (
	<div className='fixed z-40 flex items-end w-full h-12 px-3 pb-2 text-white mt-28 bg-ruby'>
		This project was developed in close collaboration with:{' '}
		<span className='w-2'></span>
		<a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			className='hover:font-black'
		>
			{collab}
		</a>
	</div>
);

export const Biblio = ({
	link,
	name,
	author,
	year,
	publication,
	pages,
	className,
}) => (
	<a href={link} target='_blank' className='link' rel='noopener noreferrer'>
		<div className={CN(className)}>
			<div className='hover-orange pb2'>
				<p className='pt2 fw6 '>{author}</p>
				<p className='i f27'>{name}</p>
				<p>
					{publication}
					<span>{pages}</span>
					{year}
				</p>
			</div>
		</div>
	</a>
);

export function Collapsible(props) {
	return (
		<Accordion allowZeroExpanded={true}>
			<AccordionItem>
				<AccordionItemHeading className=' f4 navy'>
					<AccordionItemButton>{props.button}</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<div>{props.children}</div>
				</AccordionItemPanel>
			</AccordionItem>
		</Accordion>
	);
}
