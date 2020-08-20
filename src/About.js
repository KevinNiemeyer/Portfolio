import React from 'react';
import Header from './Header.js';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
	position: relative;
	width: 100vw;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	overflow-x: hidden;
`;
function About(props) {
	return (
		// Render a Thumbnail component
		<Container>
			<Header left='3' top='3' scale='3' name='About Me' />
			<p>Hello</p>
			<br />
			<p>Hello</p>
			<br /> <p>Hello</p>
			<br /> <p>Hello</p>
			<br /> <p>Hello</p>
			<br />
			<p>Hello</p>
			<br /> <p>Hello</p>
			<br /> <p>Hello</p>
			<br /> <p>Hello</p>
			<br />
			<p>Hello</p>
			<br /> <p>Hello</p>
			<br />
		</Container>
	);
}

export default About;
