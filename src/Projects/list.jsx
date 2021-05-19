import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { getAllProjects, projectTypes, colorBubbles } from './index';

const projects = getAllProjects();

export function ProjectList() {
	return (
		<div className='grid grid-cols-1 gap-6 p-4 md:gap-16 md:p-16 t:grid-cols-2 md:grid-cols-2 l:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7'>
			{projects.map((project) => (
				<Item key={project.title} />
			))}
		</div>
	);
}

export function Item() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => setIsOpen(!isOpen);

	return (
		<>
			{projects.map((project) => (
				<motion.div onClick={toggleOpen}>
					<div className='relative font-sans'>
						<div className='absolute z-0 flex items-center justify-between w-full -left-2 -top-3'>
							<div className={colorBubbles[project.type]}>
								{projectTypes[project.type]}
							</div>
						</div>

						<div className='p-3 bg-gray-900 rounded-md hover:shadow-xl'>
							<div className='w-full rounded bg-warmGray-200'>
								{project.img}
							</div>

							<div className='flex items-start justify-between w-full pt-2'>
								<div className='text-xl font-bold text-white'>
									{project.title}
									<p className='text-base font-normal text-warmGray-400'>
										{project.subtitle}
									</p>
								</div>
								<div className='px-3 py-2 text-xs font-semibold leading-none tracking-wide text-white uppercase border rounded-full max-w-min border-trueGray-700'>
									{project.year}
								</div>
							</div>
						</div>
					</div>
					<AnimatePresence className='m-8 overflow-scroll '>
						{isOpen && <Content />}
					</AnimatePresence>
				</motion.div>
			))}
		</>
	);
}

function Content() {
	return (
		<>
			{projects.map((project) => (
				<motion.div
					layout
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className='w-screen p-4 mt-3 bg-white'
				>
					{project.content}
				</motion.div>
			))}
		</>
	);
}
