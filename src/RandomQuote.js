import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './random-quote-styles.css';
import './App.css';
import axios from 'axios';

const Container = styled.div`
	width: 80%;
	font-size: 22px;
	padding: 10px;
`;

const RandomQuote = (props) => {
	const [ quote, setQuote ] = useState([]);
	const [ author, setAuthor ] = useState([]);
	const getData = () => {
		const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
		axios.get(url).then((response) => {
			console.log(response.data.quoteText);
			setQuote(response.data.quoteText);
			setAuthor(response.data.quoteAuthor);
		});
	};
	useEffect(() => {
		getData();
	}, []);
	/* 
	if (quote.length === 0) {
		return null;
	}
	if (author === '') {
		setAuthor('Anonymous');
	} */
	return (
		<Container>
			<blockquote>
				{/*{quote}*/}
				{quote}
				<footer>
					<cite>{author}</cite>
				</footer>
			</blockquote>
		</Container>
	);
};

export default RandomQuote;
