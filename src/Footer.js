import React from 'react';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
	position: relative;
	bottom: 0;
	left: 0;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 10vh;
	display: flex;
	background-color: #252525;
	font-size: 12px;
	color: lightgrey;
`;

function Footer(props) {
	return <Container>@Kevin Niemeyer 2020</Container>;
}

export default Footer;
