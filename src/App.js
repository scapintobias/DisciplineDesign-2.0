// import React, { useEffect } from 'react';
import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/navbar';

// import { useRouter } from './Hooks/hooks';
import { Homepage, Project, Projects } from './Pages';

function PageContent() {
	return (
		<Switch>
			<Route path='/' exact component={Homepage} />

			<Route path='/work' exact component={Projects} />
			<Route path='/work/:type' exact component={Projects} />
			<Route path='/work/:type/:year/:slug' component={Project} />
		</Switch>
	);
}

export default function App() {
	return (
		<Router>
			<Navbar />
			<div style={{ overflow: 'hidden' }}>
				<PageContent />
			</div>
		</Router>
	);
}
