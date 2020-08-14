import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Motto from './Motto';
import './App.css';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	height: 80vh;
	width: 100%;
`;
const Wrapper = styled.div`
	display: flex;
	width: 50%;
`;

function Home(props) {
	return (
		<Container>
			<Wrapper>
				<Header name='Kevin Niemeyer' subheading='Developer / Musician / Human' top='15' left='5' scale='7' />
			</Wrapper>
			<Wrapper>
				<Motto />
			</Wrapper>
		</Container>
	);
}

export default Home;
