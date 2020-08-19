// App.jsx

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import styled from 'styled-components';
import Nav from './Nav';
import Home from './Home.js';
import Projects from './Projects.js';
import About from './About.js';
import Contact from './Contact';
import Footer from './Footer';
import NotFound from './NotFound';

const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin: 0;
	padding: 0;
	transition: all .3s;
	max-height: auto;
`;

function App() {
	return (
		<Router>
			<Container>
				<Nav />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/home' component={Home} />
					<Route exact path='/portfolio' component={Home} />
					<Route exact path='/about' component={About} />
					<Route exact path='/projects' component={Projects} />
					<Route exact path='/contact' component={Contact} />
					<Route path='/' component={NotFound} />
				</Switch>
				<Footer />
			</Container>
		</Router>
	);
}

export default App;