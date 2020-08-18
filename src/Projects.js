import React from 'react';
import Header from './Header.js';
import styled from 'styled-components';
import Project from './Project'
import './App.css';

const Container = styled.div`
	height: 80vh;
	width: 100vv;
	max-width: 100vw;
	display: flex;
	flex-direction: column;
`;

const Wrapper = styled.div`
	width: 100vw;
	&:nth-of-type(even) {
		text-align: left;
	}
	&:nth-of-type(odd) {
		text-align: right;
	}
`;
function Projects(props) {
	return (
		// Render a Thumbnail component
		<Container>
			<Header left='3' top='3' scale='3' name='Projects' />
			<Wrapper>
				<Project />
			</Wrapper>
		</Container>
	);
}

export default Projects;
