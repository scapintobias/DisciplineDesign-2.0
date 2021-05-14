import {
	Pantone,
	Craf,
	Richmond,
	Dp,
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
		null,
		Lima()
	),
	createProject('Yape', 'e-Novia', 'ux', 2018, null, Yape()),
	createProject('Yape', 'e-Novia', 'corporate', 2018, null, YapeSrl()),
	createProject(
		'Mental Coach',
		'Corporate',
		'photography',
		2018,
		null,
		Mental()
	),
	createProject(
		'Ducati 1260',
		'Ducati Link App',
		'video',
		2018,
		null,
		Ducati()
	),
	createProject(
		'Pantone',
		'Cocktail solutions',
		'event',
		2018,
		null,
		Pantone()
	),
	createProject('JEMP', 'Corporate', 'photography', 2017, null, Je()),
	createProject('Mourn', '9/11', 'poster', 2016, null, Mourn()),
	createProject(
		'Ideascudo',
		'Gruppo Creamoda',
		'logo',
		2016,
		null,
		Ideascudo()
	),
	createProject('Tokio 2020', 'Olympics', 'logo', 2016, null, Tokyo()),
	createProject('Syneco', 'Oil', 'corporate', 2016, null, Syneco()),
	createProject('Brockmann', 'Timeline', 'poster', 2016, null, Timeline()),
	createProject(
		'Electoral campaign',
		'Superheroes',
		'photography',
		2015,
		null,
		Svolta()
	),
	createProject(
		'Parole Prigioniere',
		'Expo 2015',
		'photography',
		2015,
		null,
		Parole()
	),
	createProject('Borromeo5', 'Restaurant', 'corporate', 2015, null, Borromeo()),
	createProject('Corte d’Arte', 'Sbacon', 'exhibit', 2015, null, Arte()),

	createProject('Corte d’Arte', 'Gallery', 'corporate', 2014, null, Corte()),
	createProject('Expo', 'Milano 2015', 'logo', 2013, null, Expo()),
	createProject('Migrants', 'Untold story', 'print', 2013, null, Migrants()),
	createProject(
		'A century in primes',
		'A handful of papers',
		'print',
		2013,
		null,
		Numeriprimi()
	),
	createProject(
		'Achille Castiglioni',
		'Archive',
		'corporate',
		2013,
		null,
		Castiglioni()
	),

	createProject(
		'Rankin Paulston',
		'Design Studio',
		'corporate',
		2011,
		null,
		Rankin()
	),

	createProject('Villa Manin', 'di Passariano', 'poster', 2011, null, ManinP()),

	createProject('SAF', 'Transport', 'corporate', 2011, null, Saf()),
	createProject(
		'Villa Manin',
		'di Passariano',
		'corporate',
		2011,
		null,
		Manin()
	),

	createProject('DP', 'Energy', 'corporate', 2010, null, Dp()),
	createProject('Richmond', 'Health Clinic', 'logo', 2010, null, Richmond()),

	createProject(
		'Craf Aldo Moro',
		'With Maurizio Milani',
		'corporate',
		2008,
		null,
		Craf()
	),
];
