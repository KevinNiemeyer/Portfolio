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
		const url = 'http://tools.buzzstream.com/metaDataService?url=https://www.google.com';
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

		axios.get(url, { crossdomain: true });
	};

	useEffect(() => {
		handleClick();
	}, []);

	return <Container />;
}

export default Project;
