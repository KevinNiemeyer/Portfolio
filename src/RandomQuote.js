import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './random-quote-styles.css';
import './App.css';

const axios = require('axios');

const Container = styled.div`
	width: 80%;
	font-size: 22px;
	padding: 10px;
`;

const RandomQuote = (props) => {
	const [ quote, setQuote ] = useState([]);
	const [ author, setAuthor ] = useState([]);
	const getData = () => {
		axios({
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			url: 'https://quotes.stormconsultancy.co.uk/random.json'
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
		setAuthor('Anonymous');
	}
	return (
		<Container>
			<blockquote>
				{quote}
				<footer>
					<cite>{author}</cite>
				</footer>
			</blockquote>
		</Container>
	);
};

export default RandomQuote;
