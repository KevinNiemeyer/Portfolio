import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import './App.css';

const Container = styled.div`
	position: relative;
	display: flex;
	justify-content: left;
	align-items: center;
	width: 100%;
	border: solid darkgrey 1px;
`;

const UL = styled.ul`list-style-type: none;`;
const LI = styled.li`text-decoration: none;`;
function Project(props) {
	console.log(props.id);
	return (
		<Container>
			<UL>
				<LI>Project: {props.description}</LI>
				<LI>
					{/* can't get the url to work right*/}
					<Link to={props.git_url.git}>URL: {props.git_url.git}</Link>
				</LI>
			</UL>
		</Container>
	);
}

export default Project;
