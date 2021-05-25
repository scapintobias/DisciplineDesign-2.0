import React from 'react';

import { Par } from './components';
import Vimeo from '@u-wave/react-vimeo';

export function YapeSrl() {
	return (
		<section className='mb-18'>
			<div className='flex items-center justify-center w-screen h-main'>
				<p className='absolute prose prose-2xl text-charcoal-300 bottom-20'>
					New identity for a very smart robot
				</p>
				<img src='/cat/yape/yape_1.webp' alt='yape' className='w-2/3' />
			</div>

			<Par>
				YAPE is a self-driving droid for last-mile delivery. It is a
				revolutionary solution for delivery services, concerning food and small
				goods, that can be applied indoor as well as outdoor, providing
				low-contact services. YAPE can easily interact with the environment and
				it can stroll autonomously within private and smart spaces. Moreover,
				its reconfigurable glove compartment can fit with different delivery
				services, from parcel to food.
			</Par>

			<Vimeo video='387650908' responsive muted />

			<Par>lorem ipsum</Par>
			<img src='/cat/yape/yape_5.png' alt='brand book' />
			<img src='/cat/yape/yape_6.png' alt='buttons' className='w-2/4 ' />
		</section>
	);
}
