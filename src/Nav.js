import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
	position: relative;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 10vh;
	display: flex;
	background-color: #252525;
`;

const Logo = styled.div`
	display: flex;
	width: 100%;
	justify-content: left;
	margin: 0;
	padding: 0 10px;
	color: white;
	color: palevioletred;
`;

const NavLinks = styled.ul`
	display: flex;
	justify-content: space-around;
	list-style-type: none;
	width: 100%;
	margin: 0;
	overflow: hidden;
	padding: 5px;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: cornflowerblue;
	font-weight: bold;
	display: inline;
	margin: 0.5em 0;
	font-family: Helvetica, Arial, sans-serif;
	font-size: 1.25vw;
	&:hover {
		color: white;
	}
	padding: 0 10px;
	transition: all .3s;
`;

function Nav(props) {
	return (
		// Render a Thumbnail component
		<Container>
			<Logo>Logo Goes Here</Logo>
			<NavLinks className='navigation-sub'>
				<StyledLink to='/'>Home</StyledLink>
				<StyledLink to='/projects'>Projects</StyledLink>
				<StyledLink to='/about'>About Me</StyledLink>
				<StyledLink to='/contact'>Contact</StyledLink>
			</NavLinks>
		</Container>
	);
}

export default Nav;
