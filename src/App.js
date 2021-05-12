import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/navbar';
//import { useRouter } from './Hooks/hooks';
import { Homepage } from './Pages/homepage';

function PageContent() {
	return (
		<Switch>
			<Route path='/' exact component={Homepage} />
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
