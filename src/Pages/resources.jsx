import React, { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { YapeSrl } from '../Projects/content';
export function Resources() {
	return (
		<div className='flex items-center justify-center w-full h-full mt-28'>
			<AnimateSharedLayout>
				<motion.ul layout initial={{ borderRadius: 25 }}>
					{items.map((item) => (
						<Item key={item} />
					))}
				</motion.ul>
			</AnimateSharedLayout>
		</div>
	);
}

function Item() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => setIsOpen(!isOpen);

	return (
		<motion.li
			layout
			onClick={toggleOpen}
			className='p-4 m-4 overflow-scroll bg-teal-200 rounded-md cursor-pointer '
		>
			<motion.div
				className='w-10 h-10 bg-yellow-500 rounded-full'
				layout
			></motion.div>
			<AnimatePresence className='w-full m-8 overflow-scroll'>
				{isOpen && <Content />}
			</AnimatePresence>
		</motion.li>
	);
}

function Content() {
	return (
		<motion.div
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='p-4 mt-3 bg-white'
		>
			<YapeSrl />
		</motion.div>
	);
}

const items = [0];
