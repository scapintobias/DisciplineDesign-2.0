// import React, { useEffect } from 'react';
import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/navbar';

// import { useRouter } from './Hooks/hooks';
import { Homepage, Project, Resources, Study, Work } from './Pages';
import { Yape, YapeSrl } from './Projects/content';

function PageContent() {
	return (
		<Switch>
			<Route path='/' exact component={Homepage} />

			<Route path='/work' exact component={Work} />
			<Route path='/work/:type' exact component={Work} />
			<Route path='/work/:type/:year/:slug' component={Project} />
			<Route path='/work/study/yape' component={Yape} />
			<Route path='/work/study/yape-srl' component={YapeSrl} />
			<Route path='/resources' exact component={Resources} />
		</Switch>
	);
}

export default function App() {
	return (
		<div className='font-sans'>
			<Router>
				<Navbar />
				<div style={{ overflow: 'hidden' }}>
					<PageContent />
				</div>
			</Router>
		</div>
	);
}
