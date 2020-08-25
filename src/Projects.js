//trying to get this to work on netlify

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
  overflow-y: auto;
  overflow-x: hidden;
`;

function Projects(props) {
  const [repos, setRepos] = useState([]);
  const getData = () => {
    const url =
      'https://api.github.com/users/KevinNiemeyer/repos?fbclid=IwAR2stMhMjngpObVKnSVLthIUb6J4oMsix7PmYw_T3kqkWDSuyyNaYvAGWUE';
    axios
      .get(url, {
        private: 'false',
        fork: 'false',
      })
      .then((response) => {
        let result = response.data;
        setRepos([...repos, ...result]);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  if (repos.length === 0) {
    return null;
  }
  return (
    <Container>
      <Header left='3' top='3' scale='3' name='Projects' />
      {repos
        .filter((repo) => repo.private === false && repo.fork === false)
        .map((repo) => {
          return (
            <Project
              repo={repo}
              key={repo.id}
              id={repo.id}
              git_url={repo.git_url}
              description={repo.description}
              pic={''}></Project>
          );
        })}
      ;
    </Container>
  );
}

export default Projects;
