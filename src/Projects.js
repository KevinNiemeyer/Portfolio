import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import Header from './Header.js';
import Project from './Project.js';
import projectThumb from './assets/thumbnails/projectThumb.png';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
	height: 80vh;
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
`;
function Projects(props) {
	return (
		// Render a Thumbnail component
		<Container>
			<Header left='3' top='3' scale='3' name='Projects' />
			<Project />
		</Container>
	);
}

export default Projects;
