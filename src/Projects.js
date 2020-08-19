import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header.js';
import Project from './Project.js';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
	height: 80vh;
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
`;
function Projects(props) {
	const [ repos, setRepos ] = useState([]);
	const getData = () => {
		const url =
			'https://api.github.com/users/KevinNiemeyer/repos?fbclid=IwAR2stMhMjngpObVKnSVLthIUb6J4oMsix7PmYw_T3kqkWDSuyyNaYvAGWUE';
		axios
			.get(url, {
				headers: {
					'Access-Control-Allow-Origin': '*'
				}
			})
			.then((response) => {
				let result = response.data;
				setRepos([ ...repos, ...result ]);
			});
	};
	useEffect(() => {
		getData();
	}, []);
	console.log(repos);
	return (
		// Render a Thumbnail component
		<Container>
			<Header left='3' top='3' scale='3' name='Projects' />
			{repos.map((repo) => {
				return <Project key={repo.id} id={repo.id} url={repo.url} description={repo.description} />;
			})};
		</Container>
	);
}

export default Projects;
