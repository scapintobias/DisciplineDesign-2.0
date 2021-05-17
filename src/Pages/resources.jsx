import React from 'react';

export function Resources() {
	return (
		/* component */
		<div className='flex items-center justify-center min-h-screen'>
			{/* 1 card */}
			<div className='relative w-64 px-6 py-6 my-4 bg-white shadow-xl rounded-3xl'>
				<div className='absolute flex items-center px-4 py-4 text-white bg-pink-500 rounded-full shadow-xl left-4 -top-6'>
					{/* svg  */}
				</div>
				<div className='mt-8'>
					<p className='my-2 text-xl font-semibold'>App Development</p>
					<div className='flex space-x-2 text-sm text-gray-400'>
						{/* svg  */}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-5 h-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
							/>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
							/>
						</svg>
						<p>Marketing Team</p>
					</div>
					<div className='flex my-3 space-x-2 text-sm text-gray-400'>
						{/* svg  */}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-5 h-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
							/>
						</svg>
						<p>1 Weeks Left</p>
					</div>
					<div className='border-t-2' />
					<div className='flex justify-between'>
						<div className='my-2'>
							<p className='mb-2 text-base font-semibold'>Team Member</p>
							<div className='flex space-x-2'>
								<img
									src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
									className='w-6 h-6 rounded-full'
									alt='alt'
								/>
								<img
									src='https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg'
									className='w-6 h-6 rounded-full'
									alt='alt'
								/>
								<img
									src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU'
									className='w-6 h-6 rounded-full'
									alt='alt'
								/>
							</div>
						</div>
						<div className='my-2'>
							<p className='mb-2 text-base font-semibold'>Progress</p>
							<div className='text-base font-semibold text-gray-400'>
								<p>34%</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
