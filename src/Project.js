import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactTinyLink } from 'react-tiny-link';
import axios from 'axios';
import './App.css';

const Container = styled.div`
	position: relative;
	display: flex;
	justify-content: left;
	align-items: center;
	width: 100%;
	height: auto;
`;

function Project(props) {
	const handleClick = () => {
		const url =
			'https://api.github.com/users/yoloonthebattlefield?fbclid=IwAR2stMhMjngpObVKnSVLthIUb6J4oMsix7PmYw_T3kqkWDSuyyNaYvAGWUE';
		axios
			.get(url, {
				headers: {
					'Access-Control-Allow-Origin': '*'
				}
			})
			.then((resp) => {
				let result = resp.data;
				console.log(result);
			});
	};

	useEffect(() => {
		handleClick();
	}, []);

	return <Container>Projects</Container>;
}

export default Project;
