import React from 'react';
import CN from 'classnames';
// import {
// 	Accordion,
// 	AccordionItem,
// 	AccordionItemHeading,
// 	AccordionItemButton,
// 	AccordionItemPanel,
// } from 'react-accessible-accordion';

export const Main = ({ children }) => <main className='ma33'>{children}</main>;

export const Par = ({ className, children }) => (
	<section className='flex justify-center flex-column-l flex-column-t flex-column-m mv3'>
		<section
			className={CN(
				'w-50 w-100-m w-100-l w-100-t f27 f3-m minion lh-copy',
				className
			)}
		>
			{children}
		</section>
	</section>
);

export const Sec = ({ title, subtitle }) => (
	<div className='silver helvetica f1 fw7 tracked pt4 pb3 lh-title'>
		{title}
		<br></br>
		{subtitle}
	</div>
);

export const Sub = ({ title }) => (
	<div className='silver helvetica f25 fw6 pt4 pb3 lh-title'>{title}</div>
);

export const ParImg = ({ oneimg, className }) => (
	<div className={CN('mv3', className)}>
		<img src={oneimg} alt='img' className='w-100' />
	</div>
);

export const Img = ({ oneimg, className }) => (
	<div className={CN('db', className)}>
		<img src={oneimg} alt='img' className='w-100' />
	</div>
);

export const Pic = ({ img, className, imgClass }) => (
	<div className={CN(className)}>
		<img src={img} alt='img' className={CN('w-100', imgClass)}></img>
	</div>
);

export const TwoImg = ({ image1, image2, className, classNamee }) => (
	<div className='flex flex-row justify-center overflow-visible flex-column-m'>
		<div className='pr0-m pb3-m w-100-m pr3 w-50'>
			<img src={image1} alt='img' className='w-100'></img>
		</div>
		<div className='pl2 pl0-m w-100-m w-50'>
			<img src={image2} alt='img' className='w-100'></img>
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
		<img src={image1} alt='img' className='pr0-m pb3-m w-100-m pr1 w-25'></img>
		<img src={image2} alt='img' className='ph1 ph0-m pb3-m w-100-m w-25'></img>
		<img src={image3} alt='img' className='ph0-m pb3-m w-100-m ph1 w-25'></img>
		<img src={image4} alt='img' className='pl1 pl0-m w-100-m w-25'></img>
	</div>
);

export const ImgRid = ({ children }) => (
	<div className='grid-3'>{children}</div>
);

export const Head = ({ head }) => (
	<p className='f5 ph3 ph0-m pt3 minion silver lh-copy'>{head}</p>
);
export const Tit = ({ tit }) => (
	<p className='f2 fw5 pa3 ph0-m helvetica silver lh-title'>{tit}</p>
);
export const P = ({ children }) => (
	<p className='f3 ph3 ph0-m pb3 minion silver lh-copy'>{children}</p>
);
export const Rf = ({ link, rf }) => (
	<a href={link}>
		<sup>{rf}</sup>
	</a>
);
export const Iltr = ({ img, children }) => (
	<section className='flex items-start justify-around flex-column-m flex-column-t'>
		<div className='w-40 w-100-m w-100-t pa3 pa0-m pa0-l pa0-t'>
			<img src={img} alt='alt' className='w-100' />
		</div>
		<div className='sticky w-40 w-100-t w-100-m'>
			<div>{children}</div>
		</div>
	</section>
);

export const Br = () => <br></br>;

export const Collab = ({ href, collab }) => (
	<div className='f4 fw5 ph3 pv2 helvetica bg-orange white lh-copy'>
		This project was developed in close collaboration with:{' '}
		<a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			className='link fw7 hover-navy'
		>
			{collab}
		</a>
	</div>
);

export const Title = ({
	place,
	time,
	position,
	title,
	subtitle,
	description,
	line2,
}) => (
	<section className='flex pb2 bb flex-column-m'>
		<section className='flex justify-between flex-column helvetica lh-copy ph3 w-50 w-100-m br bn-m'>
			<div className='pb2 fw6 helvetica f4'>
				<p className='navy'>{place}</p>
				<p className='silver'>{time}</p>
				<p className='orange'>{position}</p>
			</div>
			<div className='pv4 f-6 f-5-t f-5-m fw9 tracked-tight navy lh-title'>
				{title}
			</div>
			<div className='fw6 f1 silver pb2-m bb-m f15-l f2-t f2-m tracked'>
				{subtitle}
			</div>
		</section>
		<section className='flex lh-copy w-50 w-100-m pl3 pr3 pt2-m flex-column-reverse '>
			<div className='f2 minion fw5 f25-m navy'>{line2}</div>
			<div className='pb2 f2 minion i fw5 f25-m orange'>{description}</div>
		</section>
	</section>
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
				<p className='pt2 fw6 helvetica'>{author}</p>
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
		// <Accordion allowZeroExpanded={true}>
		// 	<AccordionItem>
		// 		<AccordionItemHeading className='helvetica f4 navy'>
		// 			<AccordionItemButton>{props.button}</AccordionItemButton>
		// 		</AccordionItemHeading>
		// 		<AccordionItemPanel>
		<div>{props.children}</div>
		// 		</AccordionItemPanel>
		// 	</AccordionItem>
		// </Accordion>
	);
}

export const ProJ = ({ children }) => (
	<section className='flex flex-wrap justify-center mv4'>{children}</section>
);

export const ArrowRight = (props) => (
	<svg width={36} height={36} viewBox='0 0 24 24' {...props}>
		<path
			style={{
				textIndent: 0,
				textAlign: 'start',
				lineHeight: 'normal',
				textTransform: 'none',
				blockProgression: 'tb',
				InkscapeFontSpecification: 'Sans',
			}}
			d='M12 2C6.489 2 2 6.489 2 12s4.489 10 10 10 10-4.489 10-10S17.511 2 12 2zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8zm.719 2.281L11.28 7.72 14.562 11H6v2h8.563l-3.282 3.281 1.438 1.438 5-5 .687-.719-.687-.719-5-5z'
			overflow='visible'
			fontFamily='Sans'
		/>
	</svg>
);

export const ArrowLeft = (props) => (
	<ArrowRight style={{ transform: 'rotate(180deg)' }} {...props} />
);
