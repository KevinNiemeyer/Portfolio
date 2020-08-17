import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Skills from './Skills';
import RandomQuote from './RandomQuote';
import './App.css';

const axios = require('axios');

const Container = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 5%;
	align-items: flex-start;

	height: 80vh;
	width: 100%;
`;
const Wrapper = styled.div`
	display: flex;
	width: 50%;
`;

const Home = (props) => {
	const [ quote, setQuote ] = useState([]);
	const [ author, setAuthor ] = useState([]);
	const getData = () => {
		axios({
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			url: 'http://quotes.stormconsultancy.co.uk/random.json'
		}).then(function(response) {
			setQuote(response.data.quote);
			setAuthor(response.data.author);
		});
	};

	useEffect(() => {
		getData();
	}, []);
	if (quote.length === 0) {
		return null;
	}
	if (author === '') {
		console.log('yes');
	}
	console.log(quote, ' ', author);
	return (
		<Container>
			<Wrapper>
				<Header name='Kevin Niemeyer' subheading='Developer / Musician / Human' top='-3' left='5' scale='7' />
			</Wrapper>
			<Wrapper>
				<Skills />
			</Wrapper>
			<Wrapper>
				<RandomQuote />
			</Wrapper>
		</Container>
	);
};

export default Home;
