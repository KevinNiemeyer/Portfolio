// App.jsx

import React from 'react';
import { HashRouter, Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';
import Home from './Home.js';
import Projects from './Projects.js';
import About from './About.js';
import Contact from './Contact';
import Footer from './Footer';

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
	max-height: 100vh;
`;
function App() {
	return (
		<HashRouter>
			<Container>
				<Nav />
				<Route exact path='/' component={Home} />
				<Route path='/about' component={About} />
				<Route path='/projects' component={Projects} />
				<Route path='/contact' component={Contact} />
				<Footer />
			</Container>
		</HashRouter>
	);
}

export default App;
