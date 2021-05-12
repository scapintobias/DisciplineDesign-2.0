import {
	Pantone,
	Craf,
	Abstract,
	A,
	Hospital,
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

const createProject = (title, subtitle, type, year, content) => ({
	title,
	subtitle,
	type,
	year,
	content,
});

export const projects = [
	createProject('Metro de Lima', 'Subway system', 'wayfinding', 2019, Lima()),
	createProject('Yape', 'e-Novia', 'ux', 2018, Yape()),
	createProject('Yape', 'e-Novia', 'corporate', 2018, YapeSrl()),
	createProject('Mental Coach', 'Corporate', 'photography', 2018, Mental()),
	createProject(
		'Ducati 1260 Multistrada',
		'Ducati Link App',
		'video',
		2018,
		Ducati()
	),
	createProject('Pantone', 'Cocktail solutions', 'event', 2018, Pantone()),
	createProject('Junior Enterprise', 'Corporate', 'photography', 2017, Je()),
	createProject('Mourn', '9/11', 'poster', 2016, Mourn()),
	createProject('Ideascudo', 'Gruppo Creamoda', 'logo', 2016, Ideascudo()),
	createProject('Tokio 2020', 'Olympics', 'logo', 2016, Tokyo()),
	createProject('Syneco', 'Oil', 'corporate', 2016, Syneco()),
	createProject(
		'Joseph Müller-Brockmann',
		'Timeline',
		'poster',
		2016,
		Timeline()
	),
	createProject(
		'Electoral campaign',
		'Superheroes',
		'photography',
		2015,
		Svolta()
	),
	createProject(
		'Parole Prigioniere',
		'Expo 2015',
		'photography',
		2015,
		Parole()
	),
	createProject('Borromeo5', 'Restaurant', 'corporate', 2015, Borromeo()),
	createProject('Corte d’Arte', 'Sbacon', 'exhibit', 2015, Arte()),

	createProject('Corte d’Arte', 'Gallery', 'corporate', 2014, Corte()),
	createProject('Expo', 'Milano 2015', 'logo', 2013, Expo()),
	createProject('Migrants', 'Untold story', 'print', 2013, Migrants()),
	createProject(
		'A century in primes',
		'A handful of papers',
		'print',
		2013,
		Numeriprimi()
	),
	createProject(
		'Achille Castiglioni',
		'Archive',
		'corporate',
		2013,
		Castiglioni()
	),

	createProject(
		'Rankin Paulston',
		'Design Studio',
		'corporate',
		2011,
		Rankin()
	),

	createProject('Villa Manin', 'di Passariano', 'poster', 2011, ManinP()),

	createProject('SAF', 'Transport', 'corporate', 2011, Saf()),
	createProject('Villa Manin', 'di Passariano', 'corporate', 2011, Manin()),

	createProject('DP', 'Energy', 'corporate', 2010, Dp()),
	createProject('Richmond', 'Helath Clinic', 'logo', 2010, Richmond()),
	createProject(
		'Hospital',
		'San Tommaso dei Battuti',
		'corporate',
		2009,
		Hospital()
	),
	createProject('A', 'Single letter / Font', 'print', 2009, A()),
	createProject('Abstract', 'Just a few lines', 'poster', 2009, Abstract()),

	createProject(
		'Craf Aldo Moro',
		'With Maurizio Milani',
		'corporate',
		2008,
		Craf()
	),
];
