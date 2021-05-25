import React from 'react';

import { Main, Par, Sec, Img, Br, Biblio } from './components';
import Vimeo from '@u-wave/react-vimeo';
export function Yape() {
	return (
		<>
			<div className='bg-blue-300 h-main'>
				<p className='absolute font-serif text-xs text-right bottom-16 left-6 text-charcoal-50'>
					To comply with my confidentiality agreement I have omitted and
					appropriated confidential information. These designs are a
					reinterpretation of the original.
				</p>
				<img
					src='https://e-novia.it/wp-content/uploads/2018/11/6_Yape_REV01.jpg'
					alt='yape'
					className='object-cover w-full h-full'
				/>
			</div>

			<Par>
				<h1>My Role</h1>
				<p>
					I led the design for the driving interface between July and November
					2018. I worked alongside the CEO of the company, a project manager, a
					senior industrial designer and a software developer.
				</p>
				<p>
					I stopped working on the project during the UI definition phase to
					focus on another app for the same company.
				</p>
				<p>The Milestone was achieved shortly after.</p>
				<h1>Structure and management</h1>
				<p>
					When I arrived, the engineering team had already solved the majority
					of the mechanical issues, and implemented an alpha version of the
					guiding software, allowing to drive the drone by sight, with a
					standard joypad. The next step was to push the development forward,
					aiming at the completely remote driving of the drone, while the driver
					was comfortably sat in a control room, receiving data transmitted from
					the vehicle's sensors as an input.
				</p>
				<p>
					It was therefore essential taking in consideration the filtered visual
					perception, and how to convey visually some digital aids we as humans
					usually perceive from the outer world with our senses.
				</p>
				<p>
					During the first step of the project, there had to be acquired some
					knowledge about ugvs (unmanned ground vehicles), both from a
					mechanical point of view: how the chassis is built, how the motors
					work, which are the physical limits of movement given by these motors;
					and an electronic point of view: the type of sensors mounted aboard,
					what kind of camera is available and what type of video is capable of
					detect, how and which data are transmitted from and to the vehicle by
					the control room, what are the features of the programming language
					used etc.
				</p>
				<p>
					This step has been very helpful in defining the limits of the
					research, and understanding how to integrate the interface design into
					this extremely complex system.
				</p>
				<h1>My contribution</h1>
				<p>
					Although the drive-by-sight was completely functional, the only
					features already implemented for the remote control were the decoding
					of the visual feed from the camera, and an horizontal white bar
					advancing as the drone accelerated, but with no indication of the
					actual speed or aids that helped you understand the indicator at a
					glance.
				</p>
				<p>
					The role of the designer has actually been, taking advantage of the
					specific knowledge of interaction and interface design, define which
					were the bare minimum requisites for a very fluid remote control, and
					which were the problems to solve for achieving this goal, outlining
					the research path, performing the research, analyse both that data,
					and the data the engineers had been gaining through their set of
					tests, and use it to deline the functionalities. Then the wireframing
					and sketching would start, followed by a working invision prototype,
					as a proof of concept. Once approved, the actual production would
					begin, with the draw up of the whole documentation in anticipation of
					the handoff. Then, while the developers were implementing the first
					mvp, test sets were customised and later performed, and after few
					months of almost daily iterations the product would be considered
					finished and the milestone achieved.
				</p>
				<h1>The research challenges</h1>
				<p>
					After some amount of time trying to deline which were the upmost
					problems to undertake, they can be divided into three groups:
				</p>

				<h2>First group</h2>
				<h3>Bound to the perception of the driver</h3>

				<ul>
					<li>Resolve the perception of depth</li>
					<li>Resolve the perception of the radius of curvature</li>
					<li>Resolve the perception of the incline</li>
					<li>Resolve the perception of acceleration</li>
				</ul>

				<h2>Second group</h2>
				<h3>Bound to the actual driving</h3>

				<ul>
					<li>Design a reference system inside the viewport</li>
					<li>Design a pointing device</li>
					<li>Calibrate the sensibility of the controller's commands</li>
				</ul>

				<h2>Third group</h2>
				<h3>Bound to the position of the drone</h3>

				<ul>
					<li>
						Define a visual representation of the data acquired by the LIDAR
					</li>
					<li>
						Design a set of maps, to help positioning the drone in the urban
						setting
					</li>
				</ul>
			</Par>
			<img src='/img/lidar.jpg' alt='lidar' className='py-7' />
			<Par>
				<h1>The research areas</h1>
				Defined the challenges, the research field became more clear and
				delimited. It started searching about general robotics, human-machine
				interaction and human-machine interface, with a focus on service robots,
				I needed a strong base of knowledge to comprehend and position the
				results of the actual research, being able to evaluate if they improved
				our specific project, or were general considerations difficult to apply.
				<h2>First group</h2>
				<p>
					The key target of this phase were the human factors, cognitive
					psychology, which are the ways humans perceive through the senses, and
					how these senses behave when they're filtered by one or multiple
					displays, by which we look through the drone's eyes, looking for
					bearings useful in driving; everything to find graphic solutions
					providing for the lack of analog signals, making the drive flawless
					and immersive.
				</p>
				<h2>Second group</h2>
				<p>
					Analised the filtered perception in a broad sense, the second group
					brings us in the centre of our project. Thus, the target of the
					research was to find similar situations where other designers had to
					solve similar issues, even in antithetical fields, to find cues for
					new thoughts. Among other examples: HUDs in combat jet fighters, the
					DaVinci system for telesurgery, parking sensors, and control rooms in
					general.
				</p>
				<h2>Third group</h2>
				<p>
					I searched into the graphic outputs of the LIDAR sensors, to
					understand whether it was possible to take advantage of something
					already available, or if it was necessary designing something new from
					the ground up.
				</p>
				<h1>Solutions</h1>
				<h2>Driving reference system</h2>
				<p>
					The main interface whom we interact with is the webcam's stream
					situated on the front side of the vehicle. It has the advantage of a
					very high compression ratio, which doesn't indeed interfere a lot with
					the bandwidth; however with notable disadvantages: the signal's
					quality is not stable, and the optical aberration is quite bothering,
					making the drive on a straight line close to impossible, using only
					the video stream as a reference. To fix these issues, it was decided
					to use solutions emerged from the research and adapt them to our
					needs.
				</p>
				<h3>Pointing and Direction</h3>
				<p>
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
				<h3>Inclination and slope</h3>
				<p>
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
				<h3>Speed and acceleration</h3>
				<p>
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
				<h2>Perception of depth and position of the vehicle</h2>
				<p>
					To solve the perception of depth, starting from the concepts found in
					the research, an integrated indicator cannot be used, as can be for
					speed, but the combination of several visual solutions is necessary,
					partly exploiting the interactivity of the direction indicators, and
					partly relying on the display of data received from the lidar sensor.
				</p>
				<h3>LIDAR sensors</h3>
				<p>
					the raw data received from the LIDAR and processed by the native
					software made a too chaotic result, going to frustrate its usefulness,
					therefore the development team generated an algorithm to obtain an
					azimuthal view, showing only simple lines defining the perimeters of
					the closeby elements.
				</p>
				<h3>Maps</h3>
				<p>
					It was therefore decided to use Mapbox, verified its great versatility
					in the customisation of styles, and its precision due to the support
					on the Openstreetmap software. Roads and pedestrian paths can have a
					really high contrast ratio with the buildings, so that visibility is
					quite high even when the map is particularly small, or a glance is
					given during driving operations, where concentration must remain to
					the camera flow and lidars, to avoid any sudden obstacles.
				</p>
				<h1>Interface</h1>
			</Par>
			<Img oneimg='/img/primaryl.jpg' />
			<Vimeo
				video='https://vimeo.com/378123669'
				width='680px'
				responsive
				className='mt-5'
			/>
			<Par>
				<h1>Outcome</h1>
				Closing this milestone helped the company secure a new set of investors,
				and collabs all over the world.
				<p>
					<a
						href='https://gigalife.vodafone.com/il-postino-5g-yape-robot-postman-delivery/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Japan Post
					</a>
				</p>
				<p>
					<a
						href='https://www.bluebiz.com/en/bluebook/bluebook/say-hi-to-yape-at-frankfurt-airport/#:~:text=YAPE%20is%20an%20artificial%20intelligence,them%20transport%20their%20small%20luggage.'
						target='_blank'
						rel='noopener noreferrer'
					>
						Frankfurt Airport
					</a>
				</p>
			</Par>
		</>
	);
}
