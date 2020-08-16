import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactTinyLink } from 'react-tiny-link';
import './App.css';

const Container = styled.div`
	position: relative;
	display: flex;
	justify-content: left;
	align-items: center;
	width: 100%;
	height: auto;
`;

function Project(props) {
	return (
		<Container>
			<ReactTinyLink
				style='width: 100%'
				cardSize='large'
				showGraphic={true}
				description={true}
				maxLine={2}
				minLine={1}
				url='https://kevinniemeyer.github.io/portfolio/'
			/>
		</Container>
	);
}

export default Project;
