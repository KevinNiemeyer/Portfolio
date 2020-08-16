import React from 'react';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
	position: relative;
	display: flex;
	justify-content: left;
	align-items: center;
	width: 100%;
	height: auto;
`;

//trying to get the logo to spin

function Logo(props) {
	const w = props.w;
	const h = props.h;
	const x = 5 + props.x;
	const y = 105 + props.y;
	return (
		// Render a Thumbnail component
		<Container>
			<svg width='250' height='250' version='1.1' xmlns='http://www.w3.org/2000/svg'>
				// left vertical
				<line x1={x} x2={x} y1={y} y2={y + h} stroke='cornflowerblue' strokeWidth='5' />
				// right vertical
				<line x1={x + w} x2={x + w} y1={y} y2={y + h} stroke='cornflowerblue' strokeWidth='5' />
				// top diagonal
				<line x1={x} x2={x + w} y1={y + h / 2} y2={y} stroke='cornflowerblue' strokeWidth='5' />
				// bottom diagonal
				<line x1={x} x2={x + w} y1={y + h / 2} y2={y + h} stroke='cornflowerblue' strokeWidth='5' />
				// top left
				<circle cx={x} cy={y} r='3' stroke='red' fill='transparent' strokeWidth='3' />
				// middle
				<circle cx={x} cy={y + h / 2} r='3' stroke='red' fill='transparent' strokeWidth='3' />
				// bottom left
				<circle cx={x} cy={y + h} r='3' stroke='red' fill='transparent' strokeWidth='3' />
				// top right
				<circle cx={x + w} cy={y} r='3' stroke='red' fill='transparent' strokeWidth='3' />
				// bottom right
				<circle cx={x + w} cy={y + h} r='3' stroke='red' fill='transparent' strokeWidth='3' />
			</svg>
		</Container>
	);
}

export default Logo;
