import React, { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { slugify } from './utils';

import { getAllProjects, projectTypes, colorBubbles } from './index';

const projects = getAllProjects();

export function ProjectList(props) {
	return (
		<>
			<Item key={projects.title} />
		</>
	);
}

export function Item(props) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => setIsOpen(!isOpen);

	return (
		<>
			{projects
				.filter((project) => (props.type ? project.type === props.type : true))
				.map((project) => (
					<motion.li layout onClick={toggleOpen}>
						<motion.div className='p-4' layout>
							<div className='relative '>
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
						</motion.div>
						<AnimatePresence className='w-full m-8 overflow-scroll'>
							{isOpen && <Content />}
						</AnimatePresence>
					</motion.li>
				))}
		</>
	);
}

function Content(props) {
	return (
		<>
			{projects
				.filter((project) => (props.type ? project.type === props.type : true))
				.map((project) => (
					<motion.div
						layout
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='p-4 mt-3 bg-white'
					>
						{project.content}
					</motion.div>
				))}
		</>
	);
}
