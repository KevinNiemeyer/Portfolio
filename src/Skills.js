import React from 'react';
import styled from 'styled-components';
import './App.css';
import './skills-styles.css';

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	margin-top: 15%;
`;

const Divider = styled.div`
	width: 35px;
	margin-top: 20px;
	height: 100%;
	display: flex;
	align-items: center;
	font-family: 'Orbitron', sans-serif;
	letter-spacing: 10px;
	font-weight: bold;
	color: darkgrey;
`;

const rotated = {
	height: '10px',
	transformOrigin: 'center',
	transform: 'rotate(-90deg)'
};
function Skills(props) {
	return (
		// Render a Thumbnail component
		<Container>
			<Divider>
				<div style={rotated}>Skills:</div>
			</Divider>
			<div className='perspective-text'>
				<div className='perspective-line'>
					<p />
					<p>React</p>
				</div>
				<div className='perspective-line'>
					<p>React</p>
					<p>JavaScript</p>
				</div>
				<div className='perspective-line'>
					<p>JavaScript</p>
					<p>CSS</p>
				</div>
				<div className='perspective-line'>
					<p>CSS</p>
					<p>HTML</p>
				</div>
				<div className='perspective-line'>
					<p>HTML</p>
					<p />
				</div>
			</div>
		</Container>
	);
}

export default Skills;
