import React from 'react';
import styled from 'styled-components';

import './App.css';

const Container = styled.div`
	margin-left: 20px;
	width: 100%;
`;

const Heading = styled.h1`
	margin-left: ${(props) => props.left}%;
	padding: 0;
	margin: 0;
	text-align: left;
	font-family: 'Orbitron', sans-serif;
	font-size: ${(props) => props.scale}vw;
	text-shadow: 1px 1px 3px #3f7fbf;
	mix-blend-mode: screen;
	animation: fadeIn 2.5s linear forwards;
	animation: color-change 30s infinite;
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}
	@keyframes color-change {
		15% {
			color: red;
		}
		30% {
			color: orange;
		}
		45% {
			color: yellow;
		}
		60% {
			color: green;
		}
		75% {
			color: blue;
		}
		75% {
			color: indigo;
		}
		75% {
			color: purple;
		}
	}
`;

const Subheading = styled.h3`
	width: 100%;
	text-align: right;
	font-size: ${(props) => props.scale / 4}vw;
	margin-left: ${(props) => props.left * 6}%;
	color: #555555;
	padding: 0;
	margin: 10px 0 0 0;
`;

function Header(props) {
	return (
		<Container>
			<Heading left={props.left} top={props.top} scale={props.scale}>
				{props.name}
			</Heading>
			<Subheading left={props.left} scale={props.scale}>
				{props.subheading}
			</Subheading>
		</Container>
	);
}

export default Header;
