/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header.js';
import Project from './Project.js';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
	position: relative;
	width: 100vw;
	display: flex;
	flex-direction: column;
	overflow: auto;
`;
function Projects(props) {
	const [ repos, setRepos ] = useState([]);
	const getData = () => {
		const url =
			'https://api.github.com/users/KevinNiemeyer/repos?fbclid=IwAR2stMhMjngpObVKnSVLthIUb6J4oMsix7PmYw_T3kqkWDSuyyNaYvAGWUE';
		axios
			.get(url, {
				private: 'false',
				fork: 'false'
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
				if (repo.private === false && repo.fork === false) {
					return (
						<Project key={repo.id} id={repo.id} git_url={repo.git_url} description={repo.description}>
							{''}
						</Project>
					);
				}
			})};
		</Container>
	);
}

export default Projects;
