import React from 'react';

import {
	Craf,
	Manin,
	Saf,
	ManinP,
	Rankin,
	Castiglioni,
	Numeriprimi,
	Migrants,
	Expo,
	Corte,
	Arte,
	Borromeo,
	Parole,
	Svolta,
	Timeline,
	Syneco,
	Tokyo,
	Ideascudo,
	Mourn,
	Je,
	Ducati,
	Mental,
	Lima,
	Yape,
	YapeSrl,
} from './content';

const createProject = (title, subtitle, type, year, img, content) => ({
	title,
	subtitle,
	type,
	year,
	img,
	content,
});

export const projects = [
	createProject(
		'Metro de Lima',
		'Subway system',
		'wayfinding',
		2019,
		<img src='/grid/yape.png' alt='yape' />,
		Lima()
	),
	createProject(
		'Yape',
		'e-Novia',
		'ux',
		2018,
		<img src='/grid/yape.png' alt='yape' />,
		Yape()
	),
	createProject(
		'Yape',
		'e-Novia',
		'corporate',
		2018,
		<img src='/grid/yape.png' alt='yape' />,
		YapeSrl()
	),
	createProject(
		'Mental Coach',
		'Corporate',
		'photography',
		2018,
		<img src='/grid/yape.png' alt='yape' />,
		Mental()
	),
	createProject(
		'Ducati 1260',
		'Ducati Link App',
		'video',
		2018,
		<img src='/grid/yape.png' alt='yape' />,
		Ducati()
	),
	createProject(
		'JEMP',
		'Corporate',
		'photography',
		2017,
		<img src='/grid/yape.png' alt='yape' />,
		Je()
	),
	createProject(
		'Mourn',
		'9/11',
		'poster',
		2016,
		<img src='/grid/yape.png' alt='yape' />,
		Mourn()
	),
	createProject(
		'Ideascudo',
		'Gruppo Creamoda',
		'logo',
		2016,
		<img src='/grid/yape.png' alt='yape' />,
		Ideascudo()
	),
	createProject(
		'Tokio 2020',
		'Olympics',
		'logo',
		2016,
		<img src='/grid/yape.png' alt='yape' />,
		Tokyo()
	),
	createProject(
		'Syneco',
		'Oil',
		'corporate',
		2016,
		<img src='/grid/yape.png' alt='yape' />,
		Syneco()
	),
	createProject(
		'Brockmann',
		'Timeline',
		'poster',
		2016,
		<img src='/grid/yape.png' alt='yape' />,
		Timeline()
	),
	createProject(
		'Electoral campaign',
		'Superheroes',
		'photography',
		2015,
		<img src='/grid/yape.png' alt='yape' />,
		Svolta()
	),
	createProject(
		'Parole Prigioniere',
		'Expo 2015',
		'photography',
		2015,
		<img src='/grid/yape.png' alt='yape' />,
		Parole()
	),
	createProject(
		'Borromeo5',
		'Restaurant',
		'corporate',
		2015,
		<img src='/grid/yape.png' alt='yape' />,
		Borromeo()
	),
	createProject(
		'Corte d’Arte',
		'Sbacon',
		'exhibit',
		2015,
		<img src='/grid/yape.png' alt='yape' />,
		Arte()
	),

	createProject(
		'Corte d’Arte',
		'Gallery',
		'corporate',
		2014,
		<img src='/grid/yape.png' alt='yape' />,
		Corte()
	),
	createProject(
		'Expo',
		'Milano 2015',
		'logo',
		2013,
		<img src='/grid/yape.png' alt='yape' />,
		Expo()
	),
	createProject(
		'Migrants',
		'Untold story',
		'print',
		2013,
		<img src='/grid/yape.png' alt='yape' />,
		Migrants()
	),
	createProject(
		'A century in primes',
		'A handful of papers',
		'print',
		2013,
		<img src='/grid/yape.png' alt='yape' />,
		Numeriprimi()
	),
	createProject(
		'Achille Castiglioni',
		'Archive',
		'corporate',
		2013,
		<img src='/grid/yape.png' alt='yape' />,
		Castiglioni()
	),

	createProject(
		'Rankin Paulston',
		'Design Studio',
		'corporate',
		2011,
		<img src='/grid/yape.png' alt='yape' />,
		Rankin()
	),

	createProject(
		'Villa Manin',
		'di Passariano',
		'poster',
		2011,
		<img src='/grid/yape.png' alt='yape' />,
		ManinP()
	),

	createProject(
		'SAF',
		'Transport',
		'corporate',
		2011,
		<img src='/grid/yape.png' alt='yape' />,
		Saf()
	),
	createProject(
		'Villa Manin',
		'di Passariano',
		'corporate',
		2011,
		<img src='/grid/yape.png' alt='yape' />,
		Manin()
	),

	createProject(
		'Craf Aldo Moro',
		'With Maurizio Milani',
		'corporate',
		2008,
		<img src='/grid/yape.png' alt='yape' />,
		Craf()
	),
];
