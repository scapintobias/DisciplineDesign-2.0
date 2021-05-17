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
} from './components.jsx';
//import Vimeo from '@u-wave/react-vimeo';

export function Lima() {
	return (
		<>
			<Collab href='http://www.aetherotopies.com/' collab='Samuel Iuri' />
			<Main>
				<Img oneimg='/cat/lima/4.png' />

				<Pic img='/cat/lima/limalogo.png' className='self-center w-2/4 py-5' />

				<Par>
					The first stage of the process consisted in a vast analysis of all the
					available material of both the existing and the future lines, in order
					to comprehend the vastness and complexity of the system, and its
					actual wayfinding.
					<Br />
					<Br />
					The outcome of this research has shown vast possibilities of
					improvement, from both a design and infrastructural integration
					perspective, to solve the lack of scalability, legibility, and
					consistency.
					<Br />
					<Br />
					The second stage consisted in the evaluation of the available channels
					to convey information through, which consist in: map, station signage,
					train signage, etc.
					<Br />
					<Br />
					The third stage consisted in the developement of a coherent system,
					which takes advantage of the stations’ architecture, has a inner
					modularity (hence using the pillars), and provides in a clear way the
					few but essential informations (station name, train direction, entries
					and exits)
				</Par>
				<Iltr img='/cat/lima/simplon.png'>
					<Head head='Specimens of the font involved for composing the logo and the rest of the Corporate Image.' />
					<Tit tit='Simplon Norm' />
					<P>
						Simplon is a sans-serif typeface that is widely used for traffic,
						administrative and technical applications. It’s based on the German
						standards body DIN - Deutsches Institut für Normung (German
						Institute for Standardization), in the standard typefaces sheet
						published in 1931. Originally designed for industrial uses, the
						first DIN-type fonts were a simplified design that could be applied
						with limited technical difficulty. Due to the design’s legibility
						and uncomplicated, unadorned design, it has become popular for
						general purpose use in signage and display adaptations.
					</P>
				</Iltr>
				<Img oneimg='/cat/lima/section.png' />
				<div className='self-center w-9/12 m-4 space-y-4'>
					<Pic img='/cat/lima/aeropuerto.png' imgClass='border border-black' />

					<Img oneimg='/cat/lima/salida.png' />
				</div>
				<Img oneimg='/cat/lima/map.png' className='self-center w-9/12' />

				<Par>
					<Sec title='Map' />
					This kind of representation shows a fictional geography by moving away
					from the concept that transportation maps had to position the
					underground geography directly to the aboveground geography. Such
					design moves away from the idea that the representation has to follow
					the actual geographical route of the lines. By replacing the strict
					geographically imposed rules, that requires that entities represented
					be placed exactly where they are located in the physical world, with a
					regular pattern of horizontal, vertical or diagonal lines the proposed
					map depicts much more clearly the relative locations of the different
					lines and the sequence of stations. In this way, the map turns out to
					be an useful support in gaining an understanding of the complexities
					of the underground lines, and an aid in travel planning. For these
					reasons it can act as a navigation tool to assist in working one’s way
					through the underground maze of lines and stations and as a reference
					once a journey is underway.
				</Par>
				<Img oneimg='/cat/lima/5.png' />
			</Main>
		</>
	);
}

export function Yape() {
	return (
		<Main>
			<Img oneimg='https://e-novia.it/wp-content/uploads/2018/11/6_Yape_REV01.jpg' />
			<p className='mr3 mb2 ml3 ma0-m minion gray tr tl-t tl-m f5'>
				To comply with my confidentiality agreement I have omitted and
				appropriated confidential information. These designs are a
				reinterpretation of the original.
			</p>

			<Par>
				<Sec title='My Role' />I led the design for the driving interface
				between July and November 2018. I worked alongside the CEO of the
				company, a project manager, a senior industrial designer and a software
				developer.
				<Br></Br>I stopped working on the project during the UI definition phase
				to focus on another app for the same company.
				<Br></Br>
				The Milestone was achieved shortly after.
				<Sec title='Structure and management' />
				When I arrived, the engineering team had already solved the majority of
				the mechanical issues, and implemented an alpha version of the guiding
				software, allowing to drive the drone by sight, with a standard joypad.
				The next step was to push the development forward, aiming at the
				completely remote driving of the drone, while the driver was comfortably
				sat in a control room, receiving data transmitted from the vehicle's
				sensors as an input.
				<Br />
				It was therefore essential taking in consideration the filtered visual
				perception, and how to convey visually some digital aids we as humans
				usually perceive from the outer world with our senses.
				<Br />
				During the first step of the project, there had to be acquired some
				knowledge about ugvs (unmanned ground vehicles), both from a mechanical
				point of view: how the chassis is built, how the motors work, which are
				the physical limits of movement given by these motors; and an electronic
				point of view: the type of sensors mounted aboard, what kind of camera
				is available and what type of video is capable of detect, how and which
				data are transmitted from and to the vehicle by the control room, what
				are the features of the programming language used etc.
				<Br />
				This step has been very helpful in defining the limits of the research,
				and understanding how to integrate the interface design into this
				extremely complex system.
				<Sec title='My contribution' />
				Although the drive-by-sight was completely functional, the only features
				already implemented for the remote control were the decoding of the
				visual feed from the camera, and an horizontal white bar advancing as
				the drone accelerated, but with no indication of the actual speed or
				aids that helped you understand the indicator at a glance.
				<Br />
				The role of the designer has actually been, taking advantage of the
				specific knowledge of interaction and interface design, define which
				were the bare minimum requisites for a very fluid remote control, and
				which were the problems to solve for achieving this goal, outlining the
				research path, performing the research, analyse both that data, and the
				data the engineers had been gaining through their set of tests, and use
				it to deline the functionalities. Then the wireframing and sketching
				would start, followed by a working invision prototype, as a proof of
				concept. Once approved, the actual production would begin, with the draw
				up of the whole documentation in anticipation of the handoff. Then,
				while the developers were implementing the first mvp, test sets were
				customised and later performed, and after few months of almost daily
				iterations the product would be considered finished and the milestone
				achieved.
				<Sec title='The research challenges' />
				After some amount of time trying to deline which were the upmost
				problems to undertake, they can be divided into three groups:
				<div className='orange f2 i'>
					First group
					<p className='f3 navy i'>Bound to the perception of the driver</p>
				</div>
				<ul className='list indent'>
					<li>Resolve the perception of depth</li>
					<li>Resolve the perception of the radius of curvature</li>
					<li>Resolve the perception of the incline</li>
					<li>Resolve the perception of acceleration</li>
				</ul>
				<div className='orange f2 i pt3'>
					Second group
					<p className='f3 navy i'>Bound to the actual driving</p>
				</div>
				<ul className='list indent'>
					<li>Design a reference system inside the viewport</li>
					<li>
						Design a pointing device, to ease the direction of the vehicle
					</li>
					<li>Calibrate the sensibility of the controller's commands</li>
				</ul>
				<div className='orange f2 i pt3'>
					Third group
					<p className='f3 navy i'>
						Bound to the position of the drone in the environment
					</p>
				</div>
				<ul className='list indent'>
					<li>
						Define a visual representation of the data acquired by the LIDAR
						sensor
					</li>
					<li>
						Design a set of maps, to help positioning the drone in the urban
						setting
					</li>
				</ul>
				<ParImg oneimg='/img/lidar.jpg' />
				<Sec title='The research areas' />
				Defined the challenges, the research field became more clear and
				delimited. It started searching about general robotics, human-machine
				interaction and human-machine interface, with a focus on service robots,
				I needed a strong base of knowledge to comprehend and position the
				results of the actual research, being able to evaluate if they improved
				our specific project, or were general considerations difficult to apply.
				<p className='orange f2 i pt3'>First group</p>
				<p className='pl4'>
					The key target of this phase were the human factors, cognitive
					psychology, which are the ways humans perceive through the senses, and
					how these senses behave when they're filtered by one or multiple
					displays, by which we look through the drone's eyes, looking for
					bearings useful in driving; everything to find graphic solutions
					providing for the lack of analog signals, making the drive flawless
					and immersive.
				</p>
				<p className='orange f2 i pt3'>Second group</p>
				<p className='pl4'>
					Analised the filtered perception in a broad sense, the second group
					brings us in the centre of our project. Thus, the target of the
					research was to find similar situations where other designers had to
					solve similar issues, even in antithetical fields, to find cues for
					new thoughts. Among other examples: HUDs in combat jet fighters, the
					DaVinci system for telesurgery, parking sensors, and control rooms in
					general.
				</p>
				<p className='orange f2 i pt3'>Third group</p>
				<p className='pl4 mb4'>
					I searched into the graphic outputs of the LIDAR sensors, to
					understand whether it was possible to take advantage of something
					already available, or if it was necessary designing something new from
					the ground up.
				</p>
				<Collapsible button='Research bibliography'>
					<Biblio
						className='bb bt'
						author='Gray, H, illustrations of Carter, H'
						name='Anatomy: Descriptive and Surgical.'
						publication='London: JohnW. Parker and Son, '
						year='1858.'
						link='https://bit.ly/2TGpTtu'
					/>

					<Biblio
						className='bb'
						author='Guyton, A Hall, E'
						name='Textbook of medical physiology.'
						publication='Elsevier Saunders, '
						year='2006.'
						link='https://bit.ly/1sp9eWA'
					/>
					<Biblio
						className='bb'
						link='https://tinyurl.com/y52xdnqc'
						name='Human factors of visual and cognitive performance in driving.'
						author='Cándida Castro'
						publication='CRC Press—Taylor and Francis Group, '
						year='2009.'
					/>
					<Biblio
						className='bb'
						author='A C Newberry, MJ Griffin, M Dowson'
						name='Driver perception of steering feel.'
						publication='Human Factors Research Unit, University of Southampton, '
						year='2007.'
						link='https://doi.org/10.1243/09544070JAUTO415'
					/>
					<Biblio
						className='bb'
						author='Edmund Donges'
						name='A Two-LevelModel of Driver Steering Behavior.'
						publication='The Human Factor Society,'
						year='1978'
						link='https://tinyurl.com/y37kqxoy'
					/>
					<Biblio
						className='bb'
						author='Cloete, S.R. &Wallis, G'
						name='Limitations of feedforward control in multiple-phase steering movements.'
						publication='Experimental Brain Research,'
						year='2009,'
						pages='195: 481.'
						link='https://doi.org/10.1007/s00221-009-1813-6'
					/>
					<Biblio
						className='bb'
						author='Wallis G, Chatziastros A, Bülthoff H'
						name='An unexpected role for visual feedback in vehicle steering control.'
						publication='Max Planck Institute for Biological Cybernetics, '
						year='2002.'
						link='https://doi.org/10.1007/s00221-009-1813-6'
					/>
					<Biblio
						className='bb'
						link='https://doi.org/10.1016/j.ergon.2006.06.013'
						name='The Effects of Graphical Interface Design Characteristics on Human–Computer Interaction Task Efficiency.'
						author='R. Michalski, J. Grobelny and W. Karwowsk'
						year='2006.'
						publication='International Journal of Industrial Ergonomics,'
						pages='vol. 36, pp. 959–977,'
					/>
					<Biblio
						className='bb'
						link='http://ps-2.kev009.com/rs6000/redbook-cd/gg244107.pdf'
						name='The library for system solutions End User Interface reference.'
						author='International Business Machines'
					/>
					<Biblio
						className='bb'
						link='https://doi.org/10.1016/S0020-7373(81)80049-1'
						name='The ZOG Approach to Man-Machine Communication.'
						author='O. Robertson, D. McCracken and A. Newell'
						year='1996.'
						publication='International Journal of Human-Computer Studies, '
						pages='vol. 51, pp. 279-306'
					/>
					<Biblio
						className='bb'
						link='https://ieeexplore.ieee.org/document/5335992'
						name='Human-Machine Interface: Design Principles of Visual Information in Human-Machine Interface Design.'
						author='C. Gong'
						year='2009.'
						publication='International Conference on Intelligent Human-Machine Systems and Cybernetics, Hangzhou, Zhejiang,'
						pages='pp. 262-265.'
					/>
				</Collapsible>
				<Sec title='Solutions' subtitle='Driving reference system' />
				The main interface whom we interact with is the webcam's stream situated
				on the front side of the vehicle. It has the advantage of a very high
				compression ratio, which doesn't indeed interfere a lot with the
				bandwidth; however with notable disadvantages: the signal's quality is
				not stable, and the optical aberration is quite bothering, making the
				drive on a straight line close to impossible, using only the video
				stream as a reference. To fix these issues, it was decided to use
				solutions emerged from the research and adapt them to our needs.
				<p className='f25 navy pt3 i pb3'>Pointing and direction</p>
				<p className='pl4'>
					The first thing to be taken into consideration was a central
					viewfinder, in order to have a pointing module, and to have a brief
					indication of the direction of the drone. Which since the first tests
					proved to be useful, but not sufficient. To solve the problem, the
					solution used is resembling the functionality that in cars allows us
					to park comfortably in reverse; using the same mechanism, simply with
					a front webcam and not with a rear one. For straight-line driving,
					this gives us a precise indication of the width of the vehicle's
					track, and when you intend to turn, the onboard computer sends the
					speed differential between the two wheels to the control room and
					through an algorithm, we are able to have in the viewport the
					indication of the curvature of the trajectory too, through two simple
					beziér curves.
				</p>
				<p className='f25 navy pt3 i pb3'>Inclination and slope</p>
				<p className='pl4'>
					To overcome the tilting of the vehicle when accelerating and stopping,
					we took inspiration from the artificial horizon present in the
					aeronautical cockpits — originally born as an analogue instrument, and
					then rendered digitally in the HUDs, inserting in the viewport two
					fixed vertical lines, calibrated counting the distortion of the camera
					, so as to have a fixed point of reference when the drone tilts
					forwards or backwards. The lines are white in a vertical position, red
					when toggling forward and yellow when tilting back. This helps us even
					when the vehicle has to face a climb or a descent, enabling the driver
					to stop when the ascent or descent is too steep for the vehicle's
					internal capabilities.
				</p>
				<p className='f25 navy pt3 i pb3'>Speed and acceleration</p>
				<p className='pl4'>
					Taking into account the strong distortion given by the wide-angle lens
					of the main camera, and the low power response capability of the two
					controller's joysticks, making acceleration perceptible and having a
					clear speed feedback is fundamental. The joysticks have a discrete
					motion, but zero resistance: I can floor the accelerator, without
					knowing how much it equates in terms of physical acceleration of the
					vehicle. Resuming the research, it was decided to include two separate
					indicators. One responsible for showing the speed of the vehicle,
					divided over three levels (comparable to the gears in cars with an
					automatic transmission), and the other in charge of indicating the
					level of pressure the driver places on the joystick. However, an
					indication in km/h on the second screen is always present.
				</p>
				<Sec subtitle='Perception of depth and position of the vehicle' />
				To solve the perception of depth, starting from the concepts found in
				the research, an integrated indicator cannot be used, as can be for
				speed, but the combination of several visual solutions is necessary,
				partly exploiting the interactivity of the direction indicators, and
				partly relying on the display of data received from the lidar sensor.
				<p className='f25 navy pt3 i pb3'>LIDAR sensors</p>
				<p className='pl4'>
					the raw data received from the LIDAR and processed by the native
					software made a too chaotic result, going to frustrate its usefulness,
					therefore the development team generated an algorithm to obtain an
					azimuthal view, showing only simple lines defining the perimeters of
					the closeby elements.
				</p>
				<p className='f25 navy pt3 i pb3'>Maps</p>
				<p className='pl4'>
					It was therefore decided to use Mapbox, verified its great versatility
					in the customisation of styles, and its precision due to the support
					on the Openstreetmap software. Roads and pedestrian paths can have a
					really high contrast ratio with the buildings, so that visibility is
					quite high even when the map is particularly small, or a glance is
					given during driving operations, where concentration must remain to
					the camera flow and lidars, to avoid any sudden obstacles.
				</p>
				<Sec title='Interface' />
			</Par>
			<Img oneimg='/img/primaryl.jpg' />
			{/* <Vimeo
				video='https://vimeo.com/378123669'
				width='680px'
				responsive
				className='mt2'
			/>*/}
			<Par>
				<Sec title='Outcome' />
				Closing this milestone helped the company secure a new set of investors,
				and collabs all over the world.
				<Biblio
					className='mt3 link hover-red'
					link='https://gigalife.vodafone.com/il-postino-5g-yape-robot-postman-delivery/'
					author='Japan Post'
				/>
				<Biblio
					className='w-50 mb4'
					link='https://www.bluebiz.com/en/bluebook/bluebook/say-hi-to-yape-at-frankfurt-airport/#:~:text=YAPE%20is%20an%20artificial%20intelligence,them%20transport%20their%20small%20luggage.'
					author='Frankfurt Airport'
				/>
			</Par>
		</Main>
	);
}

export function YapeSrl() {
	return (
		<Main>
			{/* <Vimeo
				video='https://vimeo.com/387650908'
				width='680px'
				responsive
				className='pb3'
			/> */}

			<Iltr img='/img/yapetype.png'>
				<Head head='Specimens of the font involved for composing the design system.' />
				<Tit tit='Franklin Gothic' />
				<P>
					The ITC Franklin Gothic is a reimagining of Franklin Gothic, a design
					that dates back to 1902. It retains the personality and character of
					the original typeface, with only a slight increase in x-height and
					character width to distinguish it from the first version. Although
					newer typeface families such as Helvetica, Univers and Frutiger have
					the same basic proportions and attributes as Franklin Gothic, the
					similarity ends there. ITC Franklin Gothic retains all the strength
					and vitality typical of early American sans serif typefaces.
					<Br />
					Capitals are wide (typographers would call them “square”), lowercase
					letters share the proportions and letter shapes of serif typefaces –
					and character stroke weights echo the serif-styled counterparts in
					that they have an obvious contrast. For example, the left side of the
					A is lighter than the right, and the first stroke of the M is lighter
					than the other three.
				</P>
			</Iltr>
			<Img oneimg='/img/yapetype.jpg' className='mw8 center pv3' />
			<Img
				oneimg='https://www.startupitaliaopensummit.eu/wp-content/uploads/2019/11/Yape_logo.png'
				className='mw8 center pv3 mb7'
			/>

			{/* <Par className="mb5">
				My journey with Yape has been widely unique.
				<Br />
				I arrived at the company partly unaware of what all the startups were
				actually doing, but Yape, it caught my eye almost instantly. You cannot
				resist falling in love with it the first time you see this funny contraption
				running around the company.
				<Br />
				I wasn’t involved since the very beginning, and the first task I was given
				was the start-up’s corporate image, a work said to be ‘way overdue’ by both
				the Champion and the CDO, and, given I was the only one on the team with
				previous experience, they thought I had the chops to take it home.
				<Br />
				As I said in the{' '}
				<Link to="./enovia">
					<span className="helvetica fw7 f3 link hover-animate hover-green">
						e-Novia
					</span>
				</Link>{' '}
				file, soon came out I had to convince a worryingly uninterested CEO about
				what I had designed, and I took it as a personal challenge.
				<Br />
				So I followed a well defined UX process for him to discover the new
				corporate image, with the brief containing only few words:
				<Br />
				<span className="helvetica orange">
					“You have to design something visually powerful and intellectually elegant,
					and you have to design and give a presentation with the only purpose of him
					to like it at first glance”.
				</span>
				<Br />I started researching, as I would with an app or a website. And I soon
				found some key points where I could easily strike and win.
				<Br />
				I took in account his age, what was the design when he was our age, what
				were his personal interests, and what always put a sparkle in his eyes.
				<Br />
				He really liked technology and technology advancements, and revolution in
				the transport industry. I immediately thought I had two aces up my sleeves.
				So I went back and forth to reassure myself I was on the right path.
				<Br />
				What’s the biggest IT company ever existed, which was around when he was our
				age? IBM.
				<Br />
				What’s the company Steve Jobs built after leaving Apple in 1985? NeXT.
				<Br />
				What’s the biggest impact communication design had on transport? The MTA
				signage system in 1966 and The new AmericanAirlines corporate image in 1967.
				<Br />
				What this weird combination of events have in common? The designers.
				<Br />
				Paul Rand designed both the IBM and the NeXT logos, and Massimo Vignelli the
				signage system and the AA corporate image, and sometimes did some work for
				IBM too.
				<Br />
				When narrating the story to the CEO, I used these props to win him over, and
				I succeeded.
			</Par> */}
		</Main>
	);
}

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

export function Pantone() {
	return (
		<>
			<Collab href='http://www.aetherotopies.com/' collab='Samuel Iuri' />
			<Main>
				<div className='gridp mh3 mt3'>
					<img src='/cat/pantone/cocktails/A.png' alt='cocktail' />

					<img src='/cat/pantone/cocktails/B.png' alt='cocktail' />

					<img src='/cat/pantone/cocktails/C.png' alt='cocktail' />

					<img src='/cat/pantone/cocktails/D.png' alt='cocktail' />
				</div>
				<Par className='pb3'>
					Colour schemes became popular in the mid-sixties, purely among
					printing technicians and design professionals. In the last few years,
					the most renowned ink company,{' '}
					<span className='b helvetica fw7'>PANTONE</span>, decided to widen its
					audience, gaining a spot into everyday people’s lives. Plates,
					china-ware, phone covers and stationery—labelled with the iconic
					colours—made their way to the masses. We thought this was not enough.
					Why not to take a step forward? Instead of being a mere ornament, why
					shouldn’t it be given the chance to become the essence as well? During
					one of the foremost design-focused events, the Milan Design
					Week/Salone Del Mobile 2018, we offer the hundreds of thousands
					visitors who will gather in the city throughout the week the
					possibility to dive into a whole new coloured sociality. The audience
					will be able to taste six specially crafted cocktails, based on
					cherry-picked swatches in an accurately designed space, thoroughly
					immersed in the electric vibe of the Fuorisalone. For the entire week
					we will transform a completely empty space—in the heart of the
					event—into an incubator of the new{' '}
					<span className='b helvetica fw7'>PANTONE</span> experience, where the
					visitors will have the chance to enjoy the peculiar beverages immersed
					into a carefully customised environment. The brand in its decades-long
					practice managed to impose itself as the standard in the design
					community; which focus has shifted from a very technical point of view
					towards a more liquid attitude. It is essential to allow the trademark
					to propose itself under a whole new light, with new communication
					assets able to ink the way into the future of design again.
					<Sec
						title='PANTONE inks marking the nights'
						subtitle='of the brightest Design event.'
					/>
					In Milan we see every year all sort of attractions, but our team
					always feels something missing, poorly designed or with bad
					organization. Therefore we decided to take a leap forward, break all
					the issues to pieces, and transform every detail into something
					specifically designed around people, the experience, and the impact it
					has to generate. We are designers and architects, it might be
					difficult to believe, but we cannot do everything by ourselves. So,
					for the sake of best practices, we endorse collaborations with third
					party companies we trust, who will provide the necessary experience
					and skills not directly available. We have in mind an iconic space
					carefully designed by our team of architects, and furnished by our
					interior designers, with lightweight but essential interventions
					customised according to the company’s needs and identity, but keeping
					the users in the centre. The space we want to build will attract and
					welcome as many visitors as possible, allowing them to fully enjoy
					what we call the new <span className='b helvetica fw7'>PANTONE</span>{' '}
					Experience: they will have the chance to taste a selection of
					carefully prepared drinks, exclusively blended for the specific event
					by a group of inventive bartenders, inspired by a trending palette
					that <span className='b helvetica fw7'>PANTONE</span> together with
					our creatives, will select. #drinkpantone: an immersive experience, a
					bold design, a colourful, tendsetting social event – just like{' '}
					<span className='b helvetica fw7'>PANTONE</span>.
				</Par>
				<Img oneimg='/cat/pantone/pantone_2.png' className='pb3' />

				<Img oneimg='/cat/pantone/tram.png' />
			</Main>
		</>
	);
}
export function Je() {
	return (
		<Main>
			<ImgRid>
				<div>
					<img src='/cat/photo/je/je1.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je2.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je3.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je4.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je5.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je6.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je7.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je8.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je9.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je10.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je11.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je12.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je13.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je14.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je15.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je16.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je17.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je18.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je19.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je20.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je21.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je22.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je23.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je24.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je25.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je26.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je27.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je28.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je29.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je30.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je31.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je32.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je33.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je34.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je35.jpg' alt='je' />
				</div>
				<div>
					<img src='/cat/photo/je/je36.jpg' alt='je' />
				</div>
			</ImgRid>
		</Main>
	);
}
export function Mourn() {
	return (
		<Main>
			<Img oneimg='/cat/mourn.png' className='mw8 center' />
		</Main>
	);
}

export function Ideascudo() {
	return (
		<Main>
			<Img oneimg='/cat/ideascudo/ideascudo_1.png' />

			<Iltr img='/cat/ideascudo/ideascudo_2.png'>
				<Head head='Specimens of the font involved for composing the logo and the rest of the Corporate Image.' />
				<Tit tit='Permanent Headline' />
				<P>
					A bold, highly compressed sans-serif typeface in the neo-grotesque
					style. It was designed by Karlgeorg Hoefer for the type foundry Ludwig
					& Mayer in Frankfurt am Main. It was released from 1964 and later
					issued by a range of companies in phototypesetting and digital
					versions.
					<Rf
						link='http://www.klingspor-museum.de/KlingsporKuenstler/Schriftdesigner/Hoefer/KGHoefer.pdf'
						rf='1'
					/>
				</P>
			</Iltr>
		</Main>
	);
}
export function Tokyo() {
	return (
		<Main>
			<Pic
				img='/cat/tokyo/tokyo_1.png'
				className='mw8 center'
				imgClass='ba b--mid-gray'
			/>

			<Par>
				<Sec title='Univers' />
				<ParImg oneimg='/cat/tokyo/tokyo_2.png' />
				Univers was designed by Adrian Frutiger on Swiss principles for Charles
				Peignot at Deberny & Peignot.
				<Br />
				<Br />
				Frutiger imposed strict discipline across all elements of the series,
				from light to dark, extra condensed to extended, a concordance of design
				that was possible in the foundry type and photocomposition fonts. Any
				version may be mixed within a word with any other. It may be argued that
				the design of the most popular central series is limited by strict
				conformity to little used extremes. If Helvetica gives us the strongest
				central designs at some sacrifice in uniformity across the series,
				Univers gives us a uniform series by disciplining the central designs.
				<Br />
				<Br />
				Alteration of character widths required by the Monotype caster separates
				Monotype Univers from the original; the Linotype photocomposition
				version, designed by Frutiger, has a more even color across the series,
				achieved by relaxing the original rigid formula for stroke width.
				<Br />
				<Br />
				IBM Selectric Univers, designed by Frutiger, is less successful, since
				it had to be placed on widths tuned for Times Roman.
			</Par>
		</Main>
	);
}
export function Syneco() {
	return (
		<Main>
			<Img oneimg='/cat/syneco/syneco_1.png' />

			<Iltr img='/cat/syneco/syneco_2.png'>
				<Head head='Specimens of the font involved for composing the logo and the rest of the Corporate Image.' />
				<Tit tit='Neue Haas Grotesk' />
				<P>
					The first weights of Neue Haas Grotesk were designed in 1957-1958 by
					Max Miedinger for the Haas’sche Schriftgiesserei in Switzerland, with
					art direction by the company’s principal, Eduard Hoffmann. Neue Haas
					Grotesk was to be the answer to the British and German grotesques that
					had become hugely popular thanks to the success of functionalist Swiss
					typography. The typeface was soon revised and released as Helvetica by
					Linotype AG.
				</P>
				<Tit tit='Our Bodoni' />
				<P>
					Commissioned by Bert Di Pamphilis of WTC and designed by Tom Carnase
					under the direction of Massimo Vignelli. The goal of this 1989 Bodoni
					revival was to match the proportions of Neue Haas Grotesk.
				</P>
			</Iltr>
			<TwoImg
				image1='/cat/syneco/syneco_3.png'
				image2='/cat/syneco/syneco_4.png'
			/>
			<TwoImg
				image1='/cat/syneco/syneco_6.png'
				image2='/cat/syneco/syneco_5.png'
			/>
		</Main>
	);
}
export function Timeline() {
	return (
		<Main>
			<Img oneimg='/cat/Timeline.png' />
		</Main>
	);
}
export function Svolta() {
	return (
		<Main>
			<section className='grid-3'>
				<div>
					<img src='/cat/photo/st/st1.jpg' alt='svolta' />
				</div>

				<div>
					<img src='/cat/photo/st/st2.jpg' alt='svolta' />
				</div>

				<div>
					<img src='/cat/photo/st/st3.jpg' alt='svolta' />
				</div>

				<div>
					<img src='/cat/photo/st/st4.jpg' alt='svolta' />
				</div>

				<div>
					<img src='/cat/photo/st/st5.jpg' alt='svolta' />
				</div>

				<div>
					<img src='/cat/photo/st/st6.jpg' alt='svolta' />
				</div>

				<div>
					<img src='/cat/photo/st/st7.jpg' alt='svolta' />
				</div>

				<div>
					<img src='/cat/photo/st/st8.jpg' alt='svolta' />
				</div>

				<div>
					<img src='/cat/photo/st/st9.jpg' alt='svolta' />
				</div>

				<div>
					<img src='/cat/photo/st/st10.jpg' alt='svolta' />
				</div>

				<div>
					<img src='/cat/photo/st/st11.jpg' alt='svolta' />
				</div>

				<div>
					<img src='/cat/photo/st/st12.jpg' alt='svolta' />
				</div>
			</section>
		</Main>
	);
}
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
export function Arte() {
	return (
		<Main>
			<Img oneimg='/cat/corte/posters/poster.jpg' className='mw68 center pb3' />

			<Img oneimg='/cat/corte/posters/flyer.jpg' className='pb3' />

			<Img oneimg='/cat/corte/posters/banner.jpg' />
		</Main>
	);
}
export function Corte() {
	return (
		<Main>
			<Img oneimg='/cat/corte/corte_1.png' className='pb4-m' />

			<Iltr img='/cat/corte/corte_type.png'>
				<Head head='Specimens of the font involved for composing the logo and the rest of the Corporate Image.' />
				<Tit tit='Gill Sans' />
				<P>
					Gill Sans was designed by Eric Gill: a versatile, brilliant, and
					prolifically successful designer of the early part of the last
					century. One of the main reasons for the enduring success of his
					namesake design is that it is based on Roman character shapes and
					proportions, making it unlike virtually any other sans serif out
					there. Gill also worked his own warmth and humanity into his design,
					resulting in a typeface in which each weight retains a distinct
					personality of its own.
				</P>
				<Tit tit='Our Bodoni' />
				<P>
					Commissioned by Bert Di Pamphilis of WTC and designed by Tom Carnase
					under the direction of Massimo Vignelli. The goal of this 1989 Bodoni
					revival was to match the proportions of Helvetica.
				</P>
			</Iltr>
			<Img oneimg='/cat/corte/corte_3.png' className='pb3' />

			<Img oneimg='/cat/corte/corte_4.png' className='pb3' />

			<Img oneimg='/cat/corte/corte_2.png' />
		</Main>
	);
}
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
export function Migrants() {
	return (
		<Main>
			<Img oneimg='/cat/migrants/migrants_1.png' />

			<Iltr img='/cat/migrants/migrants_2.png' />

			<Img oneimg='/cat/migrants/migrants_3.png' />

			<Img oneimg='/cat/migrants/migrants_4.png' />
		</Main>
	);
}

export function Numeriprimi() {
	return (
		<Main>
			<Img
				oneimg='/cat/numeriprimi/primi_1.png'
				className='mw8 mw100-m center'
			/>

			<Iltr img='/cat/numeriprimi/primi_4.png'>
				<Head head='Specimens of the font involved for composing the Book.' />
				<Tit tit='Our Headline' />
				<P>
					Originally drawn by Walter Haettenschweiler in 1954, derived from an
					assignment by Ernst Keller at Kunstgewerbeschule Zürich, and made as
					an improvement over Commercial-Grotesk (Haas, 1940).
					<Br />
					<Br />
					No lowercase.
					<Br />
					<Br />
					<a
						href='http://www.swisstypedesign.ch/schriftfamilie/111/'
						rel='noopener noreferrer'
						target='_blank'
						className='link hover-orange b'
					>
						Swiss Type Design
					</a>{' '}
					Included in Lettera vol. 1, an alphabet source book edited by Alex
					Stocker and Armin Haab. Also known simply as Schmalfette (“Bold
					Condensed”).
					<Br />
					<Br />
					No official digital version is available, therefore for the purpose of
					the project the entire typeface has been redesigned from scratch based
					on the original drawings, and it's not commercially available.
				</P>
			</Iltr>
			<Par>
				<Sec title='Layout' />
				<ParImg
					oneimg='/cat/numeriprimi/primi_3.png'
					className='ba b--light-silver'
				/>

				<ParImg oneimg='/cat/numeriprimi/primi_cover.png' />
			</Par>
			<Img oneimg='/cat/numeriprimi/primi_6.png' />

			<Img oneimg='/cat/numeriprimi/primi_5.png' />
		</Main>
	);
}

export function Castiglioni() {
	return (
		<Main>
			<Img oneimg='/cat/castiglioni/castiglioni_1.png' className='pb3' />

			<Img oneimg='/cat/castiglioni/castiglioni_2.png' className='pb3' />

			<Img oneimg='/cat/castiglioni/castiglioni_3.png' className='pb3' />

			<Img oneimg='/cat/castiglioni/castiglioni_4.png' className='pb3' />

			<Img oneimg='/cat/castiglioni/castiglioni_5.png' />
		</Main>
	);
}

export function Rankin() {
	return (
		<Main>
			<Img oneimg='/cat/rankin/rankin_1.png' className='mw8 center mb4 mb0-m' />

			<Iltr img='/cat/rankin/rankin_2.png'>
				<Head head='Specimens of the font involved for composing the logo and the rest of the Corporate Image.' />
				<Tit tit='Our Bodoni' />
				<P>
					Commissioned by Bert Di Pamphilis of WTC and designed by Tom Carnase
					under the direction of Massimo Vignelli. The goal of this 1989 Bodoni
					revival was to match the proportions of Neue Haas Grotesk.
				</P>
			</Iltr>
			<Par>
				<Sec title='Color palette' />
			</Par>
			<Img oneimg='/cat/rankin/rankin_3.png' />

			<Img oneimg='/cat/rankin/rankin_4.png' className='mt6' />
		</Main>
	);
}

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

export function Manin() {
	return (
		<Main>
			<Img oneimg='/cat/manin/manin_1.png' />

			<Iltr img='/cat/manin/manin_2.png'>
				<Head head='Specimens of the font involved for composing the logo and the rest of the Corporate Image.' />
				<Tit tit='Neue Haas Grotesk' />
				<P>
					The first weights of Neue Haas Grotesk were designed in 1957-1958 by
					Max Miedinger for the Haas’sche Schriftgiesserei in Switzerland, with
					art direction by the company’s principal, Eduard Hoffmann. Neue Haas
					Grotesk was to be the answer to the British and German grotesques that
					had become hugely popular thanks to the success of functionalist Swiss
					typography. The typeface was soon revised and released as Helvetica by
					Linotype AG.
				</P>
				<Tit tit='Our Bodoni' />
				<P>
					Commissioned by Bert Di Pamphilis of WTC and designed by Tom Carnase
					under the direction of Massimo Vignelli. The goal of this 1989 Bodoni
					revival was to match the proportions of Neue Haas Grotesk.
				</P>
			</Iltr>
			<Img oneimg='/cat/manin/manin_3.png' />

			<Img oneimg='/cat/manin/manin_5.png' />
		</Main>
	);
}
export function Dp() {
	return (
		<Main>
			<Img oneimg='/cat/dp/dp_1.png' />

			<Iltr img='/cat/dp/dp_2.png'>
				<Head head='Specimens of the font involved for composing the logo and the rest of the Corporate Image.' />
				<Tit tit='Gill Sans' />
				<P>
					Gill Sans is a humanistic sans serif family that, while is considered
					by many to be quintessentially British in tone and concept, has been
					used in virtually every country and in nearly every application
					imaginable. Gill Sans has reached this level of near-ubiquity for one
					simple—and very good—reason: it is an exceptionally distinctive design
					with a potential range of use that is almost limitless.
					<Br />
					Gill Sans was designed by Eric Gill: a versatile, brilliant, and
					prolifically successful designer of the early part of the last
					century. One of the main reasons for the enduring success of his
					namesake design is that it is based on Roman character shapes and
					proportions, making it unlike virtually any other sans serif out
					there. Gill also worked his own warmth and humanity into his design,
					resulting in a typeface in which each weight retains a distinct
					personality of its own.
				</P>
				<Tit tit='Century Expanded' />
				<P>
					Theodore Low DeVinne, publisher of Century Magazine, commissioned Linn
					Boyd Benton to design a new typeface for the magazine. The result, in
					1894, was a roman type called Century Roman; a large x-height gave
					Century Roman the appearance of being condensed. Benton’s son, Morris
					Fuller Benton, redrew Century Roman for American Type Founders in 1900
					so it would meet the standards of the Typographical Union. Benton’s
					Century Expanded is only slightly wider, but was advertised by DeVinne
					as allowing for an expansion in the number of characters that could
					fit in a line, “the expansion is upward, enabling one to get much
					matter in a small space.” Century Expanded is useful for text settings
					of magazines, books, newsletters, and brochures.
				</P>
			</Iltr>
			<Img oneimg='/cat/dp/dp_4.png' />

			<Img oneimg='/cat/dp/dp_3.png' />
		</Main>
	);
}

export function Richmond() {
	return (
		<Main>
			<Img oneimg='/cat/richmond.png' className='w-50 w-100-m center' />
		</Main>
	);
}
export function Hospital() {
	return (
		<Main>
			<Img oneimg='/cat/stblogo/stb_1.png' />

			<Iltr img='/cat/stblogo/stb_2.png'>
				<Head head='Specimens of the font involved for composing the logo and the rest of the Corporate Image.' />
				<Tit tit='Neue Haas Grotesk' />
				<P>
					The first weights of Neue Haas Grotesk were designed in 1957-1958 by
					Max Miedinger for the Haas’sche Schriftgiesserei in Switzerland, with
					art direction by the company’s principal, Eduard Hoffmann. Neue Haas
					Grotesk was to be the answer to the British and German grotesques that
					had become hugely popular thanks to the success of functionalist Swiss
					typography. The typeface was soon revised and released as Helvetica by
					Linotype AG.
				</P>
				<Tit tit='ITC Garamond' />
				<P>
					Drawn by Tony Stan, ITC Garamond was first released in 1975 in Book
					and Ultra weights only. These were intended as display faces to
					complement existing text designs from other foundries. (In fact, many
					of ITC’s interpretations of traditional typefaces began as display
					counterparts for existing text designs.) These first weights of ITC
					Garamond became so popular, however, that ITC released the Light and
					Bold weights and a suite of condensed faces in 1977. Now, the complete
					ITC Garamond family features sixteen members: four weights of roman
					and italic in normal width and four weights of roman and italic in
					companion condensed versions. The family resemblance is there, but ITC
					Garamond’s unique provenance gives it an unmistakable, one-of-a-kind
					appeal.
				</P>
			</Iltr>
			<Img oneimg='/cat/stblogo/stb_3.png' />

			<Img oneimg='/cat/stblogo/stb_4.png' />
		</Main>
	);
}

export function A() {
	return (
		<Main>
			<Img
				oneimg='/cat/A.png'
				className='w-60 w-100-l w-100-t w-100-m center'
			/>
		</Main>
	);
}
export function Abstract() {
	return (
		<Main>
			<Img
				oneimg='/cat/minimal.png'
				className='w-60 w-100-l w-100-t w-100-m center'
			/>
		</Main>
	);
}

export function Craf() {
	return (
		<Main>
			<Img oneimg='/cat/craf/craf_1.png' />

			<Par>
				This logo and Corporate Image have been developed during a workshop with
				Armando Milani giving some fundamental theoric lessons, and his brother
				Maurizio focusing on the production compartment. The very limited group
				of people granted me the possibility to design it four-handedly in a
				very close collaboration with him. Funnily enough, this workshop should
				have been participated by Massimo Vignelli too, but for personal reason
				had to decline.
				<Br />
				Many people feel ashamed showing their first projects. I could dig more
				into the archives and find lots of logos from the 2006-2008 period, but
				they wouldn't be as meaningful as this. And the reason is quite clear.
				Before meeting with Armando and Maurizio, I had a very fond appreciacion
				of everything design-related, but I was skeptical about turning into the
				core business of my profession. So this, rather than the first project
				at all, is the first project I designed with DisciplineDesign in mind,
				and a remainder of a spectacular encounter, where my career started to
				shape.
			</Par>
			<Iltr img='/cat/craf/craf_fonts.png'>
				<Head head='Specimens of the font involved for composing the logo and the rest of the Corporate Image.' />
				<Tit tit='Permanent Headline' />
				<P>
					A bold, highly compressed sans-serif typeface in the neo-grotesque
					style. It was designed by Karlgeorg Hoefer for the type foundry Ludwig
					& Mayer in Frankfurt am Main. It was released from 1964 and later
					issued by a range of companies in phototypesetting and digital
					versions.
					<Rf
						link='http://www.klingspor-museum.de/KlingsporKuenstler/Schriftdesigner/Hoefer/KGHoefer.pdf'
						rf='1'
					/>
				</P>
				<Tit tit='Rotis Sans' />
				<P>
					A typeface developed in 1988 by Otl Aicher, who explores an attempt at
					maximum legibility through a highly unified yet varied typeface family
					that ranges from full serif, glyphic, and sans-serif. The four basic
					Rotis variants are: Rotis Serif, Rotis Semi-Serif, Rotis Semi-Sans,
					Rotis-Sans. In this case we used Rotis semi-sans (semi-grotesque) —
					with zero serifs but with stroke width variation
				</P>
			</Iltr>
			<Img oneimg='/cat/craf/craf_2.png' />

			<TwoImg image1='/cat/craf/craf_4.png' image2='/cat/craf/craf_5.png' />
			<Img oneimg='/cat/craf/craf_7.png' className='pt3' />
		</Main>
	);
}
