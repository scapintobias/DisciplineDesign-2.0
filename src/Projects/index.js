import { slugify } from './utils';
import { projects } from './projects';

export function getAllProjects() {
	return projects;
}

export function getProjectByUrlParams(type, year, slug) {
	return projects.find(
		(project) =>
			slugify(project.title) === slug &&
			project.year === Number(year) &&
			slugify(project.type) === type
	);
}

export function getPrevAndNextProjects({ title, year, type }) {
	if (!title)
		return {
			prev: null,
			next: null,
		};

	const index = projects.findIndex(
		(project) =>
			project.title === title && project.year === year && project.type === type
	);
	let prev = index - 1,
		next = index + 1;
	const currentType = window.sessionStorage.getItem('currentType') || '';

	if (currentType) {
		prev = -1;
		next = projects.length;
		// Find the previous of given type
		for (let i = index - 1; i >= 0; i--) {
			if (projects[i].type === currentType) {
				prev = i;
				break;
			}
		}
		// Find the next of given type
		for (let i = index + 1; i < projects.length; i++) {
			if (projects[i].type === currentType) {
				next = i;
				break;
			}
		}
	}

	return {
		prev: prev >= 0 ? projects[prev] : null,
		next: next < projects.length ? projects[next] : null,
	};
}

export const projectTypes = {
	ux: 'UX/UI',
	wayfinding: 'Wayfinding',
	event: 'Events',
	corporate: 'Corporate Image',
	logo: 'Logo',
	poster: 'Posters',
	video: 'Video',
	exhibit: 'Exhibit',
	photography: 'Photography',
	print: 'Print',
};
